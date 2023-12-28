/** @jsxImportSource hono/jsx */
import { Hono } from "hono";
import { Fragment, useContext } from "hono/jsx";
import { getCookie, setCookie } from "./cookies.ts";
import { recipes } from "./recipes.ts";
import { getMaterialIds, getMaterials } from "./data.ts";
import { glasses } from "./glasses.ts";
import { Fmt, Glass, Ingredient, Recipe } from "./types.ts";
import { materials } from "./materials.ts";
import { RequestContext } from "./context.ts";
import { MaterialsList } from "./components/MaterialsList.tsx";
import { RecipesList } from "./components/RecipesList.tsx";
import { getGlassSvg } from "./getGlassSvg.ts";

// TODO: Deno doesn't have a pattern for this?
const app = new Hono();

// app.get("/style", styleRoute);

const units = {
  Ml: null,
  CL: null,
  Oz: null,
} as const;

function Units() {
  const requestContext = useContext(RequestContext);
  let unit = getCookie(requestContext!, "units") || "";
  if (!(unit in units)) unit = "Ml";

  return (
    <plank id="units" hx-swap-oob="true">
      <select name="unit" hx-post="/units" hx-boost="true">
        <option selected={unit === "Ml"} value="Ml">
          Units: Ml
        </option>
        <option selected={unit === "CL"} value="CL">
          Units: CL
        </option>
        <option selected={unit === "Oz"} value="Oz">
          Units: Oz
        </option>
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
      </Fragment>
      ,
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
      <article>
        <strong>Hi.</strong>
        <p>
          This is a website that I made about cocktails. I'm not a huge cocktail
          nerd (drinking is bad, probably), but think that they're cool. And the
          world's pretty bad right now and making this has been calming.
        </p>
        <p>
          So some of it might seem funky. By default, the list is sorted by
          'feasibility': as you add ingredients that you have, it'll put recipes
          that you can make (or barely make) closer to the top. Also, click on
          'Grid' for a wacky adjacency grid of cocktails and their ingredients.
        </p>
        <p>Also, for vim fans, there’s j & k support.</p>
      </article>
    </plank>
  );
}

function RecipeDetail({ swap = false }: { swap?: boolean }) {
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

  const caffeineMaterials = recipe.materialsCaffeine();
  const dairyMaterials = recipe.materialsDairy();

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
      <article>
        {swap && <title>{getTitle(recipe)}</title>}
        <h1 itemprop="name">{recipe.name}</h1>
        <glass>
          <img
            width="16"
            height="16"
            alt={recipe.glass.name}
            src={getGlassSvg(recipe.glass)}
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
        {recipe.recipeOptions?.description
          ? <p itemprop="description">{recipe.recipeOptions?.description}</p>
          : null}
        <p itemprop="recipeInstructions">{recipe.instructions}</p>

        <h2>ABV</h2>
        <p>
          Alcohol by volume totals and numbers are based on typical numbers -
          your brands may vary.
        </p>
        <ul class="abv-list">
          {recipe.materialsAlcohol().map((mat) => {
            return (
              <li>
                {mat.name}: {mat.formattedAbv()}
              </li>
            );
          })}
        </ul>

        {caffeineMaterials.length
          ? (
            <>
              <p>
                Note: this recipe contains caffeine in its ingredients (
                {caffeineMaterials.map((i) => i.name)})
              </p>
            </>
          )
          : null}

        {dairyMaterials.length
          ? (
            <>
              <p>
                Note: this recipe contains dairy in its ingredients (
                {dairyMaterials.map((i) => i.name)})
              </p>
            </>
          )
          : null}

        {recipe.recipeOptions?.wiki
          ? (
            <>
              <p>
                <a href={recipe.recipeOptions?.wiki}>View on Wikipedia</a>
              </p>
            </>
          )
          : null}

        {recipe.recipeOptions?.tags?.length
          ? (
            <>
              <h2>Tags</h2>
              <p>
                {recipe.recipeOptions?.tags.map((tag) => {
                  return <span>{tag}</span>;
                })}
              </p>
            </>
          )
          : null}

        <meta itemprop="recipeCategory" content="cocktail" />
        <meta itemprop="recipeYield" content="1 drink" />
      </article>
    </plank>
  );
}

function IngredientDisplay({
  ingredient,
  unit,
}: {
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
      <span class={has ? "" : "missing"}>
        {ingredient.unit.format(unit)} {name}
      </span>

      {has ? null : (
        <form class="missing-trigger" hx-post="/material">
          <input type="hidden" name="name" value={mat.id} />
          <button checked={true} name="included" value="true">
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
    <html lang="en">
      <head>
        <title>{getTitle(recipe)}</title>
        <script src="/static/htmx.min.js">
        </script>
        <script src="/static/script.js" type="module"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,500;1,500&display=swap"
          rel="stylesheet"
        />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1"
        />

        <meta property="og:title" content={recipe?.name ?? "Home page"} />
        {recipe?.recipeOptions?.description
          ? (
            <>
              <meta
                property="og:description"
                content={recipe?.recipeOptions?.description}
              />
              <meta
                name="og:description"
                content={recipe?.recipeOptions?.description}
              />
            </>
          )
          : null}
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Old Fashioned" />
        <meta property="og:locale" content="en_US" />
        <link href="/static/style.css" rel="stylesheet" type="text/css" />
      </head>
      <body>
        <RecipeDetail />
        <RecipesList />
        <Units />
      </body>
    </html>
  );
}

let reloaded = false;
app.get("/", async (c) => {
  reloaded = true;
  const resp = await c.html(
    <RequestContext.Provider value={c}>
      <Index />
    </RequestContext.Provider>,
  );

  const txt = await resp.text();

  return new Response(`<!DOCTYPE html>${txt}`, resp);
});

app.get("/recipe/:slug", (c) => {
  if (c.req.header("HX-Request")) {
    c.header("HX-Reswap", "none");
    return c.html(
      <RequestContext.Provider value={c}>
        <RecipeDetail swap={true} />
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

app.post("/material", async (c) => {
  if (c.req.header("HX-Request")) {
    const body = await c.req.parseBody();

    if (body.all === "true") {
      setCookie(
        c,
        "mat",
        Object.values(materials)
          .map((m) => m.id)
          .join("_"),
      );
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
        </Fragment>
        ,
      </RequestContext.Provider>,
    );
  } else {
    return c.redirect("/");
  }
});

app.get("/robots.txt", (c) => {
  return c.text(`Sitemap: https://oldfashioned.tech/sitemap.xml
User-agent: *
Allow: /

User-agent: GPTBot
Disallow: /`);
});

app.get("/sitemap.xml", (c) => {
  return c.html(
    <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
    >
      {[...recipes.keys()].map((slug) => {
        return (
          <url>
            <loc>https://oldfashioned.tech/recipe/{slug}</loc>
            <lastmod>2023-11-14T15:55:00+00:00</lastmod>
            <changefreq>weekly</changefreq>
            <priority>1.0</priority>
          </url>
        );
      })}
    </urlset>,
  );
});

export default app;
