import { Context } from "hono";
import { getCookie } from "./cookies.ts";
import { Material, Recipe } from "./types.ts";
import { materials } from "./materials.ts";

export function getMaterials(c: Context | null) {
  const ids = getMaterialIds(c);
  return Object.values(materials).filter((mat) => ids.has(mat.id));
}

export function getMaterialIds(c: Context | null) {
  if (!c) return new Set();
  try {
    return new Set(
      (getCookie(c, "mat") || "").split("_").filter((s) => s),
    );
  } catch (_e) {
    return new Set();
  }
}

export function sort(
  recipes: Map<string, Recipe>,
  materials: Material[],
  sortAlgorithm: "alphabetic" | "ingredients",
): [string, Recipe][] {
  if (sortAlgorithm == "alphabetic") {
    return Array.from(recipes.entries()).sort((a, b) => {
      return a[1].name.localeCompare(b[1].name);
    });
  }

  const have = new Set(materials.map((m) => m.name));

  return Array.from(recipes.entries()).map(([slug, recipe]) => {
    return [slug, {
      recipe,
      weight: recipe.ingredients.filter((ingredient) => {
        return have.has(ingredient.material.name);
      }).length,
    }] as const;
  }).sort((a, b) => {
    return b[1].weight - a[1].weight;
  }).map((a) => [a[0], a[1].recipe]);
}
