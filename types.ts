export type Fmt = "CL" | "Oz" | "Ml";

export class BaseUnit {
  amount: number;
  name: string;
  plural?: string;
  constructor(amount: number) {
    this.amount = amount;
    this.name = "BaseUnit";
  }

  format(_unit: Fmt) {
    throw new Error("unimplemented");
  }
}

export class Material {
  name: string;
  id: string;
  type: MaterialType;
  parent?: Material;
  constructor(name: string, id: string, type: MaterialType, parent?: Material) {
    this.name = name;
    this.type = type;
    this.id = id;
    this.type.link(this);
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
  links: Recipe[];
  constructor(material: Material, unit: BaseUnit, optional: boolean = false) {
    this.material = material;
    this.unit = unit;
    this.optional = optional;
    this.links = [];
  }

  link(recipe: Recipe) {
    this.links.push(recipe);
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
    this.glass.link(this);
  }
}

export class Glass {
  name: string;
  path: string;

  links: Recipe[];

  constructor(name: string, path: string) {
    this.name = name;
    this.path = path;
    this.links = [];
  }

  link(recipe: Recipe) {
    this.links.push(recipe);
  }
}

export class MaterialType {
  name: string;
  links: Material[];

  constructor(name: string) {
    this.name = name;
    this.links = [];
  }

  link(material: Material) {
    this.links.push(material);
  }
}
