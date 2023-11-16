export class MaterialType {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

export const spirit = new MaterialType("Spirit");
export const liqueur = new MaterialType("Liqueur");
export const bitters = new MaterialType("Bitters");
export const fruit = new MaterialType("Fruit");
export const fortified = new MaterialType("Fortified");
export const juice = new MaterialType("Juice");
export const soda = new MaterialType("Soda");
export const syrup = new MaterialType("Syrup");
export const other = new MaterialType("Other");
export const base = new MaterialType("Base");
export const seasoning = new MaterialType("Seasoning");
