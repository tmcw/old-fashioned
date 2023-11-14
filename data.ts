import { Context } from "npm:hono@3.8.1";
import { getCookie } from "./cookies.ts";
import { Material, materials, Recipe } from "./recipes.ts";

export function getMaterials(c: Context | null) {
  const ids = getMaterialIds(c);
  return materials.filter((mat) => ids.has(mat.id));
}

export function getMaterialIds(c: Context | null) {
  if (!c) return new Set();
  return new Set(
    (getCookie(c, "mat") || "").split(",").map((n) => parseInt(n, 10)).filter(
      (n) => !isNaN(n),
    ),
  );
}

export function sort(recipes: Recipe[], materials: Material[]) {
  const have = new Set(materials.map((m) => m.name));

  return recipes.map((recipe) => {
    return {
      recipe,
      weight: recipe.ingredients.filter((ingredient) => {
        return have.has(ingredient.name);
      }).length,
    };
  }).sort((a, b) => {
    return b.weight - a.weight;
  }).map((r) => r.recipe);
}
