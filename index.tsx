/** @jsxImportSource npm:hono/jsx */
import { Hono, HonoRequest } from "npm:hono@3.8.1";
import { createContext, Fragment, useContext } from "npm:hono@3.8.1/jsx";
import recipes from "./recipes.json" with { type: "json" };
import { slug } from "https://deno.land/x/slug@v1.1.0/mod.ts";

const app = new Hono();

const styleWatch = Deno.watchFs("./style.css");
let styleVersionOld = 0;
let styleVersionNew = 0;
(async () => {
  for await (let evt of styleWatch) styleVersionNew++;
})();

function RecipesList() {
  return (
    <plank id="recipes-list">
      {recipes.recipes.map((recipe) => {
        return (
          <a
            class="recipe"
            href={`/recipe/${slug(recipe.name)}`}
            hx-boost="true"
          >
            {recipe.name}
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
  const s = requestContext?.param("slug");

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
    </plank>
  );
}

function Index() {
  return (
    <html>
      <head>
        <title>Old Fashioned</title>
        <script src="https://unpkg.com/htmx.org@1.9.6"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,500;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <StyleTag />
        <columns>
          <RecipesList />
          <RecipeDetail />
        </columns>
        <div hx-get="/reload" hx-trigger="every 2s"></div>
      </body>
    </html>
  );
}

const RequestContext = createContext<HonoRequest | null>(null);

let reloaded = false;
app.get("/", (c) => {
  reloaded = true;
  return c.html(
    <RequestContext.Provider value={c.req}>
      <Index />
    </RequestContext.Provider>,
  );
});

app.get("/recipe/:slug", (c) => {
  if (c.req.header("HX-Request")) {
    c.header("HX-Reswap", "none");
    return c.html(
      <RequestContext.Provider value={c.req}>
        <RecipeDetail />
      </RequestContext.Provider>,
    );
  }
  reloaded = true;
  return c.html(
    <RequestContext.Provider value={c.req}>
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

// app.post("/increment", (c) => {
//   count++;
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
