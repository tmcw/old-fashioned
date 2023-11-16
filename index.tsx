/** @jsxImportSource npm:hono/jsx */
import { Context, Hono } from "npm:hono@3.8.1";
import { createContext, Fragment, useContext } from "npm:hono@3.8.1/jsx";
import { camelCase } from "https://deno.land/x/case@2.2.0/mod.ts";
import { slug } from "https://deno.land/x/slug@v1.1.0/mod.ts";
import { getCookie, setCookie } from "./cookies.ts";
import { recipes } from "./recipes.ts";
import { getMaterialIds, getMaterials, sort } from "./data.ts";
import { styleSystem } from "./style.tsx";
import { glasses } from "./glasses.ts";
import { materialType } from "./material_type.ts";
import { Fmt, Ingredient, Recipe } from "./types.ts";
import { materials } from "./materials.ts";

// TODO: Deno doesn't have a pattern for this?
const app = new Hono();

const { styleRoute, StyleTag } = styleSystem();

function MaterialsList() {
  const c = useContext(RequestContext);
  const mats = getMaterialIds(c);

  return (
    <plank id="materials-list" hx-swap-oob="true">
      <details open>
        <summary>Materials</summary>

        <div>
          Select{" "}
          <button hx-post="/material" hx-swap="none" name="all" value="true">
            All
          </button>{" "}
          <button hx-post="/material" hx-swap="none" name="all" value="false">
            None
          </button>
        </div>

        {Object.values(materialType).map((group) => {
          return (
            <material-group>
              <material-group-name>{group.name}</material-group-name>
              {group.links.map(
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
        {sort(recipes, mats).map((recipe) => {
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
                  src={`/icon/${camelCase(recipe.glass.name || "")}.svg`}
                />
                {recipe.name}
              </name>
              {recipe.ingredients.map((ing, i, list) => {
                return (
                  <Fragment>
                    <ingredient
                      class={names.has(ing.material.name) ? "" : "missing"}
                    >
                      {ing.material.name}
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

const units = {
  "Ml": null,
  "CL": null,
  "Oz": null,
} as const;

function Units() {
  const requestContext = useContext(RequestContext);
  let unit = getCookie(requestContext!, "units") || "";
  if (!(unit in units)) unit = "Ml";

  return (
    <plank id="units" hx-swap-oob="true">
      <select name="unit" hx-post="/units" hx-boost="true">
        <option selected={unit === "Ml"} value="Ml">Ml</option>
        <option selected={unit === "CL"} value="CL">CL</option>
        <option selected={unit === "Oz"} value="Oz">Oz</option>
      </select>
    </plank>
  );
}

app.post("/units", async (c) => {
  const body = await c.req.parseBody();
  setCookie(c, "units", String(body.unit));
  c.header("HX-Push-URL", "false");
  c.header("HX-Trigger", "refresh-recipe");

  return c.html(
    <RequestContext.Provider value={c}>
      <Fragment>
        <Units />
      </Fragment>,
    </RequestContext.Provider>,
  );
});

function getTitle(recipe: Recipe | undefined): string {
  if (!recipe) {
    return "Old Fashioned";
  }
  return `${recipe.name} | Recipe on Old Fashioned`;
}

function parseUnit(unit: string | undefined): Fmt {
  if (unit === "CL" || unit === "Ml" || unit === "Oz") {
    return unit;
  }
  return "Ml";
}

function WelcomeMessage() {
  return (
    <plank id="recipe-detail" hx-swap-oob="true">
      <strong>
        Hi.
      </strong>
      <p>
        This is a website that I made about cocktails. I'm not a huge cocktail
        nerd (drinking is bad, probably), but think that they're cool. And the
        world's pretty bad right now and making this has been calming.
      </p>
      <p>
        It gave me a chance to both tinker with technology I usually don't use
        (Elm), and explore some of the cool properties of cocktails: notably
        that they're pretty similar and have standardized ingredients, so they
        can be described in relationship to each other.
      </p>
      <p>
        So some of it might seem funky. By default, the list is sorted by
        'feasibility': as you add ingredients that you have, it'll put recipes
        that you can make (or barely make) closer to the top. Also, click on
        'Grid' for a wacky adjacency grid of cocktails and their ingredients.
      </p>
      <p>
        Also, for vim fans, there’s j & k support.
      </p>
    </plank>
  );
}

function RecipeDetail() {
  const c = useContext(RequestContext);
  const s = c?.req.param("slug") || "";
  const recipe = recipes.get(s);

  const unit = parseUnit(getCookie(c!, "units"));

  if (!recipe) {
    if (s) {
      return (
        <plank id="recipe-detail" hx-swap-oob="true">
          That recipe couldn’t be found.
        </plank>
      );
    }
    return <WelcomeMessage />;
  }

  // https://schema.org/Recipe
  return (
    <plank
      id="recipe-detail"
      hx-swap-oob="true"
      hx-get={`/recipe/${s}`}
      hx-trigger="refresh-recipe from:body"
      itemscope
      itemtype="https://schema.org/Recipe"
    >
      <title>{getTitle(recipe)}</title>
      <h1 itemprop="name">{recipe.name}</h1>
      <glass>
        <img
          width="16"
          height="16"
          src={`/icon/${camelCase(recipe.glass.name!)}.svg`}
        />
        Served in a {recipe.glass.name}
      </glass>
      <ul class="ingredients">
        {recipe.ingredients.map((ing) => {
          return (
            <li>
              <IngredientDisplay ingredient={ing} unit={unit} />
            </li>
          );
        })}
      </ul>
      <p itemprop="recipeInstructions">{recipe.description}</p>
      <meta itemprop="recipeCategory" content="cocktail" />
      <meta itemprop="recipeYield" content="1 drink" />
    </plank>
  );
}

function IngredientDisplay({ ingredient, unit }: {
  ingredient: Ingredient;
  unit: keyof typeof units;
}) {
  const c = useContext(RequestContext);
  const mats = getMaterials(c);
  const mat = ingredient.material;
  const name = mat.name;

  const has = mats.includes(mat);

  return (
    <span itemprop="recipeIngredient">
      <span
        class={has ? "" : "missing"}
      >
        {ingredient.unit.format(unit)} {name}
      </span>

      {has ? null : (
        <form class="missing-trigger" hx-post="/material">
          <input type="hidden" name="name" value={mat.id} />
          <button
            checked={true}
            name="included"
            value="true"
          >
            Add to cabinet
          </button>
        </form>
      )}
    </span>
  );
}

function Index() {
  const requestContext = useContext(RequestContext);
  const s = requestContext?.req.param("slug") || "";
  const recipe = recipes.get(s);
  return (
    <html>
      <head>
        <title>{getTitle(recipe)}</title>
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
          <RecipeDetail />
          <RecipesList />
          <MaterialsList />
          <Units />
        </columns>
        {
          /*
        <div hx-get="/reload" hx-trigger="every 2s"></div>
        */
        }
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

app.get("/icon/:slug", (c) => {
  const p = c.req.param("slug").replace(".svg", "");
  const icon = glasses[p];

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
        <path stroke="#333" fill="none" d={icon.path} />
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

    if (body.all === "true") {
      setCookie(c, "mat", Object.values(materials).map((m) => m.id).join("_"));
    } else if (body.all === "false") {
      setCookie(c, "mat", "");
    } else {
      const mats = getMaterialIds(c);

      if (body.included) {
        mats.add(body.name);
      } else {
        mats.delete(body.name);
      }

      setCookie(c, "mat", [...mats].filter((s) => s).join("_"));
    }

    c.header("HX-Push-URL", "false");
    c.header("HX-Trigger", "refresh-recipe");

    return c.html(
      <RequestContext.Provider value={c}>
        <Fragment>
          <MaterialsList />
          <RecipesList />
        </Fragment>,
      </RequestContext.Provider>,
    );
  } else {
    return c.redirect("/");
  }
});

Deno.serve(app.fetch);
