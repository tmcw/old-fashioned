import { MaterialType } from "./material_type.ts";

export enum Unit {
  CL,
  Tsp,
  Dash,
  Slice,
  Whole,
  Sprig,
  Wedge,
  Twist,
  Cube,
  Drop,
  Peel,
  Zest,
  // TODO: why do I have "None"?
  None,
  Spear,
  Leaves,
  Splash,
}

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
}

export class Ingredient {
  material: Material;
  amount: number;
  unit: Unit;
  constructor(material: Material, amount: number, unit: Unit) {
    this.material = material;
    this.amount = amount;
    this.unit = unit;
  }
}

export class Recipe {
  name: string;
  description: string;
  glass: string;
  ingredients: Ingredient[];
  constructor(
    name: string,
    description: string,
    glass: string,
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
