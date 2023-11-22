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

interface MaterialOptions {
  abv?: number;
  caffeine?: boolean;
  dairy?: boolean;
}

export class Material {
  name: string;
  id: string;
  type: MaterialType;
  options: MaterialOptions | undefined;

  constructor(
    name: string,
    id: string,
    type: MaterialType,
    options?: MaterialOptions
  ) {
    this.name = name;
    this.type = type;
    this.id = id;
    this.options = options;
    this.type.link(this);
  }

  ingredient(unit: BaseUnit) {
    return new Ingredient(this, unit);
  }

  formattedAbv() {
    if (this.options?.abv !== undefined) {
      return `${this.options.abv}%`;
    }
    return "(N/A)";
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

interface RecipeOptions {
  wiki?: string;
  description?: string;
  tags?: string[];
}

export class Recipe {
  name: string;
  description: string;
  glass: Glass;
  ingredients: Ingredient[];
  recipeOptions: RecipeOptions | undefined;
  constructor(
    name: string,
    description: string,
    glass: Glass,
    ingredients: Ingredient[],
    recipeOptions?: RecipeOptions
  ) {
    this.name = name;
    this.description = description;
    this.glass = glass;
    this.ingredients = ingredients;
    this.recipeOptions = recipeOptions;
    this.glass.link(this);
  }

  materialsAlcohol(): Material[] {
    return this.ingredients
      .filter((ingredient) => {
        return ingredient.material.options?.abv;
      })
      .map((ingredient) => ingredient.material);
  }

  materialsCaffeine(): Material[] {
    return this.ingredients
      .filter((ingredient) => {
        return ingredient.material.options?.caffeine;
      })
      .map((ingredient) => ingredient.material);
  }

  materialsDairy(): Material[] {
    return this.ingredients
      .filter((ingredient) => {
        return ingredient.material.options?.dairy;
      })
      .map((ingredient) => ingredient.material);
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
  parent: MaterialType | undefined;
  links: Material[];

  constructor(name: string, parent?: MaterialType | undefined) {
    this.name = name;
    this.parent = parent;
    this.links = [];
  }

  link(material: Material) {
    this.links.push(material);
  }
}
