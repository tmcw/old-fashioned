import { MaterialType } from "./material_type.ts";
import { BaseUnit } from "./unit.ts";

export class Material {
  name: string;
  type: MaterialType;
  parent?: Material;
  constructor(name: string, type: MaterialType, parent?: Material) {
    this.name = name;
    this.type = type;
    if (parent) {
      this.parent = parent;
    }
  }

  ingredient(unit: BaseUnit) {
    return new Ingredient(this, unit);
  }

  optionalIngredient(unit: BaseUnit) {
    return new Ingredient(this, unit, true);
  }
}

export class Ingredient {
  material: Material;
  unit: BaseUnit;
  optional: boolean;
  constructor(material: Material, unit: BaseUnit, optional: boolean = false) {
    this.material = material;
    this.unit = unit;
    this.optional = optional;
  }
}

export class Recipe {
  name: string;
  description: string;
  glass: Glass;
  ingredients: Ingredient[];
  constructor(
    name: string,
    description: string,
    glass: Glass,
    ingredients: Ingredient[],
  ) {
    this.name = name;
    this.description = description;
    this.glass = glass;
    this.ingredients = ingredients;
  }
}

export class Glass {
  name: string;
  path: string;
  constructor(name: string, path: string) {
    this.name = name;
    this.path = path;
  }
}
