import { MaterialType } from "./types.ts";

const spirit = new MaterialType("Spirit");
const whiskey = new MaterialType("Whiskey", spirit);
const gin = new MaterialType("Gin", spirit);
const brandy = new MaterialType("Brandy", spirit);
const rum = new MaterialType("Rum", spirit);
const liqueur = new MaterialType("Liqueur");
const tripleSec = new MaterialType("Triple sec", liqueur);
const base = new MaterialType("Base");
const wine = new MaterialType("Wine", base);
const seasoning = new MaterialType("Seasoning");
const sugar = new MaterialType("Sugar", seasoning);

export const materialType = {
  spirit,
  whiskey,
  gin,
  rum,
  brandy,
  liqueur,
  tripleSec,
  bitters: new MaterialType("Bitters"),
  fruit: new MaterialType("Fruit"),
  fortified: new MaterialType("Fortified"),
  juice: new MaterialType("Juice"),
  soda: new MaterialType("Soda"),
  syrup: new MaterialType("Syrup"),
  other: new MaterialType("Other"),
  base,
  wine,
  seasoning,
  sugar,
};
