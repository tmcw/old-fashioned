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
                <img
                  width="16"
                  height="16"
                  src={`/icon/${slug(recipe.glass || "")}.svg`}
                />
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
      <glass>
        <img
          width="16"
          height="16"
          src={`/icon/${slug(recipe.glass!)}.svg`}
        />
        Served in a {recipe.glass}
      </glass>
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

export const glasses = [
  {
    name: "Collins glass",
    icon: "M13 4H7v12.5c.5.25 1.5.5 3 .5s2.712-.24 3-.5V4zm-6 6.554l6-.054",
  },
  {
    name: "Highball glass",
    icon: "M13 4H6v11c.512.239 1.792.5 3.5.5s3.158-.261 3.5-.5V4zm-7 6h7",
  },
  {
    name: "Old fashioned glass",
    icon: "M14 5H6v10c.582.209 2.06.5 4 .5s3.612-.291 4-.5V5zm-8 5h8",
  },
  {
    name: "Champagne coupe",
    icon:
      "M9.25 16.5v-8L8 7 6 6 4.5 4.5V3h11v1.5l-1.5 2-2 .5-1.25 1.5v8h1.582v.5H7.196v-.5H9.25z",
  },
  {
    name: "Champagne flute",
    icon:
      "M9.25 17v-5.616L8 7.5 8.5 3h3l.5 4.5-1.25 3.884V17H12v.63H8V17h1.25zM8 4.856h3.616",
  },
  {
    name: "Cocktail glass",
    icon:
      "M9 9.5L5.5 4h9l-3.501 5.5v4.75H13v1.25H7v-1.25h2.056L9 9.5zm-2.5-4h7",
  },
  {
    name: "Hurricane",
    icon:
      "M9.25 17.5V14L7.5 12.5 7 10l.5-1.75.25-1.75-.25-1.75L7 3h6l-.5 1.75-.25 1.75.25 1.75L13 10l-.5 2.5-1.75 1.5v3.5h2.05v.5H7.196v-.5H9.25z",
  },
  {
    name: "Margarita glass",
    icon:
      "M9.25 16.5V9L7.8 8l-.3-1.5L5 5.25 4.5 3h11L15 5.25 12.5 6.5 12.2 8l-1.45 1v7.5h1.582v.5H7.196v-.5H9.25z",
  },
  {
    name: "Wine glass",
    icon:
      "M9.25 16.5v-6L7.8 9 7 7l1-4h4l1 4-.8 2-1.45 1.5v6h1.582v.5H7.196v-.5H9.25z",
  },
  {
    name: "Copper mug",
    icon:
      "M13 5H5v9.973c.593.213 2.024.527 4 .527s3.605-.314 4-.527V5zm0 2.5h3V12h-3",
  },
  {
    name: "Irish coffee mug",
    icon:
      "M9 15v-2l-1-1-1-.5V4h6v7.5l-1 .5-1 1v2l1.332.5v.5H7.196v-.5L9 15zm4-9.5h2.5V9L13 10M7 6.5h6",
  },
  {
    name: "Steel cup",
    icon:
      "M14.5 4h-9L7 14.5c.5.25.75.5 3 .5 1.75 0 2.75-.25 3-.5L14.5 4zM6 6h8",
  },
  {
    name: "Zombie glass",
    icon: "M13 4H6v11c.512.239 1.792.5 3.5.5s3.158-.261 3.5-.5V4zm-7 6h7",
  },
];

app.get("/icon/:slug", (c) => {
  const p = c.req.param("slug").replace(".svg", "");
  const icon = glasses.find((g) => slug(g.name) === p);

  if (icon) {
    c.header("Content-Type", "image/svg+xml");
    return c.body(
      <svg
        version="1.1"
        width="16"
        height="16"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path stroke="#333" fill="none" d={icon.icon} />
      </svg>,
    );
  }
  c.status(404);
  return c.text("Not found");
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
