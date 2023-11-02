/** @jsxImportSource npm:hono/jsx */
import { Context, Hono, HonoRequest } from "npm:hono@3.8.1";
import { getCookie, setCookie } from "npm:hono@3.8.1/cookie";
import { createContext, Fragment, useContext } from "npm:hono@3.8.1/jsx";
import recipes from "./recipes.json" with { type: "json" };
import materials from "./materials.json" with { type: "json" };
import { slug } from "https://deno.land/x/slug@v1.1.0/mod.ts";

const app = new Hono();

const styleWatch = Deno.watchFs("./style.css");
let styleVersionOld = 0;
let styleVersionNew = 0;
(async () => {
  for await (let evt of styleWatch) styleVersionNew++;
})();

function MaterialsList() {
  const c = useContext(RequestContext);
  const mats = getMaterialIds(c);
  return (
    <plank id="materials-list">
      {materials.materials.map((mat) => {
        // Possibly wait until loaded to toggle fully?
        return (
          <form
            type="checkbox"
            hx-post="/material"
            hx-trigger="change"
            hx-swap="none"
          >
            <label>
              <input type="hidden" name="name" value={mat.id} />
              <input
                type="checkbox"
                checked={mats.has(mat.id)}
                name="included"
              />
              {mat.name}
            </label>
          </form>
        );
      })}
    </plank>
  );
}

function getMaterials(c: Context | null) {
  const ids = getMaterialIds(c);
  return materials.materials.filter((mat) => ids.has(mat.id));
}

function RecipesList() {
  const c = useContext(RequestContext);
  const s = c?.req.param("slug");
  const mats = getMaterials(c);

  return (
    <plank id="recipes-list">
      {recipes.recipes.map((recipe) => {
        const thisSlug = slug(recipe.name);
        // Possibly wait until loaded to toggle fully?
        return (
          <a
            class={`recipe ${s === thisSlug ? "active" : ""}`}
            href={`/recipe/${thisSlug}`}
            hx-boost="true"
          >
            <div>
              <strong>
                {recipe.name}
              </strong>
            </div>
            {recipe.ingredients.map((ing) => {
              return <span>{ing.name},{" "}</span>;
            })}
          </a>
        );
      })}
    </plank>
  );
}

function StyleTag() {
  const style = Deno.readTextFileSync("./style.css");
  return (
    <style
      hx-get="/style"
      hx-trigger="every 2s"
      dangerouslySetInnerHTML={{ __html: style }}
    />
  );
}

app.get("/style", (c) => {
  if (!c.req.header("HX-Request")) {
    c.status(400);
    return c.text("Only HTMX-accessible");
  }
  if (styleVersionNew !== styleVersionOld) {
    styleVersionOld = styleVersionNew;
    c.header("HX-Reswap", "outerHTML");
    return c.html(<StyleTag />);
  }
  c.header("HX-Reswap", "none");
  c.status(204);
  return c.body(null);
});

function RecipeDetail() {
  const requestContext = useContext(RequestContext);
  const s = requestContext?.req.param("slug");

  const recipe = recipes.recipes.find((r) => {
    return slug(r.name) == s;
  });

  if (!recipe) {
    return (
      <plank id="recipe-detail" hx-swap-oob="true">
      </plank>
    );
  }

  return (
    <plank id="recipe-detail" hx-swap-oob="true">
      <h1>{recipe.name}</h1>
      <ul class="ingredients">
        {recipe.ingredients.map((ing) => {
          return (
            <li>
              <strong>
                {ing.name}
              </strong>,
              {ing.unit || ""},
              {ing.amount || ""}
            </li>
          );
        })}
      </ul>
      <p>{recipe.description}</p>
    </plank>
  );
}

function Index() {
  return (
    <html>
      <head>
        <title>Old Fashioned</title>
        <script src="https://unpkg.com/htmx.org@1.9.6"></script>
        <script src="https://unpkg.com/hyperscript.org@0.9.12"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,500;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body _="on every htmx:pushedIntoHistory(path) remove .active from .active then add .active to <a/> when its href contains path">
        <StyleTag />
        <columns>
          <MaterialsList />
          <RecipesList />
          <RecipeDetail />
        </columns>
        <div hx-get="/reload" hx-trigger="every 2s"></div>
      </body>
    </html>
  );
}

const RequestContext = createContext<Context | null>(null);

let reloaded = false;
app.get("/", (c) => {
  reloaded = true;
  return c.html(
    <RequestContext.Provider value={c}>
      <Index />
    </RequestContext.Provider>,
  );
});

app.get("/recipe/:slug", (c) => {
  if (c.req.header("HX-Request")) {
    c.header("HX-Reswap", "none");
    return c.html(
      <RequestContext.Provider value={c}>
        <RecipeDetail />
      </RequestContext.Provider>,
    );
  }
  reloaded = true;
  return c.html(
    <RequestContext.Provider value={c}>
      <Index />
    </RequestContext.Provider>,
  );
});

/**
 * "LiveReload" lol!
 */
app.get("/reload", (c) => {
  if (!reloaded) {
    reloaded = true;
    c.header("HX-Refresh", "true");
  }
  c.status(204);
  return c.body(null);
});

function getMaterialIds(c: Context | null) {
  if (!c) return new Set();
  return new Set(
    (getCookie(c, "mat") || "").split(",").map((n) => parseInt(n, 10)).filter(
      (n) => !isNaN(n),
    ),
  );
}

app.post("/material", async (c) => {
  if (c.req.header("HX-Request")) {
    const body = await c.req.parseBody();

    const mats = getMaterialIds(c);

    if (body.included) {
      mats.add(+body.name);
    } else {
      mats.delete(+body.name);
    }

    setCookie(c, "mat", [...mats].join(","));

    c.header("HX-Push-URL", "false");
    return c.html(
      <Fragment>
        <RecipesList />
      </Fragment>,
    );
  } else {
    return c.redirect("/");
  }
});
//
// app.post("/reset", (c) => {
//   count = 0;
//   if (c.req.header("HX-Request")) {
//     c.header("HX-Push-URL", "false");
//     return c.html(
//       <Fragment>
//         <Counter />
//         <TooHigh />
//       </Fragment>,
//     );
//   } else {
//     return c.redirect("/");
//   }
// });

Deno.serve(app.fetch);
