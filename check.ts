import recipes from "./recipes.json" with { type: "json" };
import materials from "./materials.json" with { type: "json" };

let matNames = new Set(materials.materials.map((m) => m.name));

// for (let r of recipes.recipes) {
//   for (let ing of r.ingredients) {
//     ing.name = humanizeString(ing.name);
//   }
// }
//
// Deno.writeTextFileSync("./recipes.json", JSON.stringify(recipes, null));

let issues = 0;
for (let r of recipes.recipes) {
  for (let ing of r.ingredients) {
    if (!matNames.has(ing.name)) {
      console.log("Missing name", ing.name, r.name);
      issues++;
    }
  }
}

console.log("Total issues", issues);
