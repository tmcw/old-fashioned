/** @jsxImportSource hono/jsx */
import { Fragment, useContext } from "hono/jsx";
import { RequestContext } from "../context";
import { getMaterials, sort } from "../data";
import { getGlassSvg } from "../getGlassSvg";
import { recipes } from "../recipes.ts";
import { getCookie } from "../cookies.ts";
import { zSort } from "../types.ts";

export function RecipesList() {
  const c = useContext(RequestContext);
  const s = c?.req.param("slug");
  const mats = getMaterials(c);
  const sortAlgorithm = zSort.parse(getCookie(c!, "sort"));
  const names = new Set(mats.map((m) => m.name));

  return (
    <plank id="recipes-list" hx-swap-oob="true" role="navigation">
      <div id="recipes-list-header">
        <h3>Recipes</h3>
        <label htmlFor="sortAlgorithm">
          Sort
        </label>
        <select name="sortAlgorithm" hx-post="/sort">
          <option selected={sortAlgorithm === "alphabetic"} value="alphabetic">
            A-Z
          </option>
          <option
            selected={sortAlgorithm === "ingredients"}
            value="ingredients"
          >
            Ingredients
          </option>
        </select>
      </div>
      <dialog>
      </dialog>
      <list>
        {sort(recipes, mats, sortAlgorithm).map(([slug, recipe]) => {
          // Possibly wait until loaded to toggle fully?
          return (
            <a
              class={`recipe ${s === slug ? "active" : ""}`}
              href={`/recipe/${slug}`}
              hx-boost="true"
            >
              <name>
                <img
                  width="16"
                  height="16"
                  alt={recipe.glass.name}
                  src={getGlassSvg(recipe.glass)}
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
      </list>
    </plank>
  );
}
