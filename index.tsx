/** @jsxImportSource npm:hono/jsx */
import { Context, Hono } from "npm:hono@3.8.1";
import { createContext, Fragment, useContext } from "npm:hono@3.8.1/jsx";
import { slug } from "https://deno.land/x/slug@v1.1.0/mod.ts";
import { setCookie } from "./cookies.ts";
import {
  getMaterialIds,
  getMaterials,
  materials,
  recipes,
  sort,
} from "./data.ts";
import { styleSytem } from "./style.tsx";

// TODO: Deno doesn't have a pattern for this?
const app = new Hono();

const { styleRoute, StyleTag } = styleSytem();

function MaterialsList() {
  const c = useContext(RequestContext);
  const mats = getMaterialIds(c);

  const groups = [...new Set(materials.materials.map((m) => m.type))];

  return (
    <plank id="materials-list">
      <details open>
        <summary>Materials</summary>

        {groups.map((group) => {
          return (
            <material-group>
              <material-group-name>{group}</material-group-name>
              {materials.materials.filter((mat) => mat.type == group).map(
                (mat) => {
                  // Possibly wait until loaded to toggle fully?
                  return (
                    <form
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
                },
              )}
            </material-group>
          );
        })}
      </details>
    </plank>
  );
}

function RecipesList() {
  const c = useContext(RequestContext);
  const s = c?.req.param("slug");
  const mats = getMaterials(c);
  const names = new Set(mats.map((m) => m.name));

  return (
    <plank id="recipes-list" hx-swap-oob="true">
      <details open>
        <summary>Recipes</summary>
        {sort(recipes.recipes, mats).map((recipe) => {
          const thisSlug = slug(recipe.name);
          // Possibly wait until loaded to toggle fully?
          return (
            <a
              class={`recipe ${s === thisSlug ? "active" : ""}`}
              href={`/recipe/${thisSlug}`}
              hx-boost="true"
            >
              <name>
                {recipe.name}
              </name>
              {recipe.ingredients.map((ing, i, list) => {
                return (
                  <Fragment>
                    <ingredient
                      class={names.has(ing.name) ? "" : "missing"}
                    >
                      {ing.name}
                    </ingredient>
                    {i === list.length - 1 ? "" : ", "}
                  </Fragment>
                );
              })}
            </a>
          );
        })}
      </details>
    </plank>
  );
}

app.get("/style", styleRoute);

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
      <glass>Served in a {recipe.glass}</glass>
      <ul class="ingredients">
        {recipe.ingredients.map((ing) => {
          return (
            <li>
              {ing.amount || ""} {ing.unit || ""} {ing.name}
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
        <script src="https://unpkg.com/htmx.org@1.9.6/dist/htmx.min.js">
        </script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,500;1,500&display=swap"
          rel="stylesheet"
        />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1"
        />
      </head>
      <body>
        <StyleTag />
        <columns>
          <MaterialsList />
          <RecipesList />
          <RecipeDetail />
        </columns>
        <div hx-get="/reload" hx-trigger="every 2s"></div>
        <script src="/script.js"></script>
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

app.get("/script.js", (c) => {
  const script = Deno.readTextFileSync("./script.js");
  c.header("Content-Type", "application/javascript; charset=UTF-8");
  return c.text(script);
});

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
      <RequestContext.Provider value={c}>
        <Fragment>
          <RecipesList />
        </Fragment>,
      </RequestContext.Provider>,
    );
  } else {
    return c.redirect("/");
  }
});

Deno.serve(app.fetch);
