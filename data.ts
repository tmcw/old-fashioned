import { Context } from "npm:hono@3.8.1";
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

export function sort(recipes: Recipe[], materials: Material[]) {
  const have = new Set(materials.map((m) => m.name));

  return Array.from(recipes.values()).map((recipe) => {
    return {
      recipe,
      weight: recipe.ingredients.filter((ingredient) => {
        return have.has(ingredient.material.name);
      }).length,
    };
  }).sort((a, b) => {
    return b.weight - a.weight;
  }).map((r) => r.recipe);
}
