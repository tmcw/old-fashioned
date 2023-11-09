/** @jsxImportSource npm:hono/jsx */
import { Context, Hono } from "npm:hono@3.8.1";
import { createContext, Fragment, useContext } from "npm:hono@3.8.1/jsx";
import { slug } from "https://deno.land/x/slug@v1.1.0/mod.ts";
import { getCookie, setCookie } from "./cookies.ts";
import {
  getMaterialIds,
  getMaterials,
  materials,
  Recipe,
  recipes,
  sort,
} from "./data.ts";
import { styleSytem } from "./style.tsx";
import { glasses } from "./glasses.ts";

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

function RecipeDetail() {
  const requestContext = useContext(RequestContext);
  const s = requestContext?.req.param("slug");

  const recipe = recipes.recipes.find((r) => {
    return slug(r.name) == s;
  });
  const unit = getCookie(requestContext!, "units") || "";

  if (!recipe) {
    return (
      <plank id="recipe-detail" hx-swap-oob="true">
      </plank>
    );
  }

  return (
    <plank
      id="recipe-detail"
      hx-swap-oob="true"
      hx-get={`/recipe/${s}`}
      hx-trigger="refresh-recipe from:body"
    >
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
              <Ingredient ingredient={ing} unit={unit} />
            </li>
          );
        })}
      </ul>
      <p>{recipe.description}</p>
    </plank>
  );
}

type TIngredient = Recipe["ingredients"][number];

const NICE_FRACTIONS = {
  0: "",
  10: "⅒",
  11: "⅑",
  12: "⅛",
  14: "⅐",
  16: "⅙",
  20: "⅕",
  25: "¼",
  33: "⅓",
  37: "⅜",
  40: "⅖",
  50: "½",
  60: "⅗",
  62: "⅝",
  66: "⅔",
  75: "¾",
  80: "⅘",
  83: "⅚",
  87: "⅞",
};

// TODO: refactor
function formatFloat(a: number) {
  const intPart = Math.floor(a);
  const remainder = Math.floor((a - intPart) * 100);

  if (remainder in NICE_FRACTIONS) {
    return `${intPart === 0 ? "" : intPart}${NICE_FRACTIONS[remainder]}`;
  }

  return a.toFixed(2);
}

function Ingredient({ ingredient, unit }: {
  ingredient: TIngredient;
  unit: keyof typeof units;
}) {
  if (ingredient.unit === "CL") {
    const a = ingredient.amount;
    switch (unit) {
      case "CL":
        return <>{formatFloat(a)} Cl {ingredient.name}</>;

      case "Ml":
        return <>{formatFloat(a * 10)} Ml {ingredient.name}</>;

      case "Oz":
        return <>{formatFloat(a * 1 / 3)} Oz {ingredient.name}</>;
    }
    return <></>;
  }
  return (
    <>
      {ingredient.name}
    </>
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
          <Units />
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
