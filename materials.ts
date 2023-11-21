import { Material } from "./types.ts";
import { materialType } from "./material_type.ts";

const whiskey = new Material("Whiskey", "m-0", materialType.whiskey, {
  abv: 40,
});
const scotchWhiskey = new Material(
  "Scotch whiskey",
  "m-1",
  materialType.whiskey,
  { abv: 40 },
);
const bourbonWhiskey = new Material(
  "Bourbon whiskey",
  "m-2",
  materialType.whiskey,
  { abv: 40 },
);
const canadianWhiskey = new Material(
  "Canadian whiskey",
  "m-3",
  materialType.whiskey,
  { abv: 40 },
);
const ryeWhiskey = new Material(
  "Rye whiskey",
  "m-4",
  materialType.whiskey,
  { abv: 40 },
);
const irishWhiskey = new Material(
  "Irish whiskey",
  "m-5",
  materialType.whiskey,
  { abv: 40 },
);

const drambuie = new Material("Drambuie", "m-6", materialType.liqueur);
const water = new Material("Water", "m-7", materialType.other);
const sodaWater = new Material("Soda water", "m-8", materialType.soda);
const gin = new Material("Gin", "m-9", materialType.gin, { abv: 40 });
const oldTomGin = new Material("Old Tom Gin", "m-a", materialType.gin, {
  abv: 40,
});
const londonDryGin = new Material(
  "London dry gin",
  "m-b",
  materialType.gin,
  { abv: 40 },
);
const whiteCrèmeDeMenthe = new Material(
  "White crème de menthe",
  "m-c",
  materialType.liqueur,
);
const crèmeDeMure = new Material("Crème de mure", "m-d", materialType.liqueur);
const maraschino = new Material("Maraschino", "m-e", materialType.liqueur);
const brandy = new Material("Brandy", "m-f", materialType.spirit);
const apricotBrandy = new Material(
  "Apricot brandy",
  "m-10",
  materialType.liqueur,
);
const port = new Material("Port", "m-11", materialType.fortified);
const calvados = new Material("Calvados", "m-12", materialType.spirit);
const anyBitters = new Material("Any bitters", "m-13", materialType.bitters);
const peachBitters = new Material(
  "Peach bitters",
  "m-14",
  materialType.bitters,
);
const orangeBitters = new Material(
  "Orange bitters",
  "m-15",
  materialType.bitters,
);
const angosturaBitters = new Material(
  "Angostura bitters",
  "m-16",
  materialType.bitters,
);
const peychaudSBitters = new Material(
  "Peychaud’s bitters",
  "m-17",
  materialType.bitters,
);
const aromaticBitters = new Material(
  "Aromatic bitters",
  "m-18",
  materialType.bitters,
);
const lemon = new Material("Lemon", "m-19", materialType.fruit, { abv: 0 });
const blackberry = new Material("Blackberry", "m-1a", materialType.fruit, {
  abv: 0,
});
const raspberry = new Material("Raspberry", "m-1b", materialType.fruit, {
  abv: 0,
});
const cherry = new Material("Cherry", "m-1c", materialType.fruit, { abv: 0 });
const pineapple = new Material("Pineapple", "m-1d", materialType.fruit, {
  abv: 0,
});
const sweetRedVermouth = new Material(
  "Sweet red vermouth",
  "m-1e",
  materialType.fortified,
);
const dryVermouth = new Material(
  "Dry vermouth",
  "m-1f",
  materialType.fortified,
);
const cognac = new Material("Cognac", "m-20", materialType.brandy);
const tripleSec = new Material("Triple sec", "m-21", materialType.tripleSec);
const grandMarnier = new Material(
  "Grand Marnier",
  "m-22",
  materialType.tripleSec,
);
const cointreau = new Material(
  "Cointreau",
  "m-23",
  materialType.tripleSec,
);
const curaçao = new Material(
  "Curaçao",
  "m-24",
  materialType.tripleSec,
);
const grenadine = new Material("Grenadine", "m-25", materialType.syrup);
const orangeJuice = new Material("Orange juice", "m-26", materialType.juice, {
  abv: 0,
});
const pineappleJuice = new Material(
  "Pineapple juice",
  "m-27",
  materialType.juice,
);
const lime = new Material("Lime", "m-28", materialType.fruit, { abv: 0 });
const rum = new Material("Rum", "m-29", materialType.spirit, { abv: 40 });
const cachaça = new Material("Cachaça", "m-2a", materialType.rum);
const absinthe = new Material("Absinthe", "m-2b", materialType.liqueur);
const campari = new Material("Campari", "m-2c", materialType.liqueur);
const fernetBranca = new Material(
  "Fernet Branca",
  "m-2d",
  materialType.liqueur,
);
const raspberrySyrup = new Material(
  "Raspberry syrup",
  "m-2e",
  materialType.syrup,
);
const raspberryLiqueur = new Material(
  "Raspberry liqueur",
  "m-2f",
  materialType.liqueur,
);
const orange = new Material("Orange", "m-30", materialType.fruit, { abv: 0 });
const eggYolk = new Material("Egg yolk", "m-31", materialType.other, {
  abv: 0,
});
const eggWhite = new Material("Egg white", "m-32", materialType.other, {
  abv: 0,
});
const sparklingWine = new Material("Sparkling wine", "m-33", materialType.base);
const champagne = new Material(
  "Champagne",
  "m-34",
  materialType.wine,
);
const tequila = new Material("Tequila", "m-35", materialType.spirit);
const whiteRum = new Material("White rum", "m-36", materialType.rum);
const goldRum = new Material("Gold rum", "m-37", materialType.rum);
const demeraraRum = new Material(
  "Demerara rum",
  "m-38",
  materialType.rum,
);
const darkRum = new Material("Dark rum", "m-39", materialType.rum);
const limeJuice = new Material("Lime juice", "m-3a", materialType.juice);
const cream = new Material("Cream", "m-3b", materialType.other);
const brownCrèmeDeCacao = new Material(
  "Brown crème de cacao",
  "m-3c",
  materialType.liqueur,
);
const whiteCrèmeDeCacao = new Material(
  "White crème de cacao",
  "m-3d",
  materialType.liqueur,
);
const lightCream = new Material("Light cream", "m-3e", materialType.other, {
  abv: 0,
});
const orangeFlowerWater = new Material(
  "Orange flower water",
  "m-3f",
  materialType.other,
  { abv: 0 },
);
const vanillaExtract = new Material(
  "Vanilla extract",
  "m-40",
  materialType.bitters,
  { abv: 0 },
);
const cola = new Material("Cola", "m-41", materialType.soda, { abv: 0 });
const nutmeg = new Material("Nutmeg", "m-42", materialType.seasoning, {
  abv: 0,
});
const lemonJuice = new Material("Lemon juice", "m-43", materialType.juice, {
  abv: 0,
});
const vodka = new Material("Vodka", "m-44", materialType.spirit);
const gingerBeer = new Material("Ginger beer", "m-45", materialType.soda, {
  abv: 0,
});
const gingerAle = new Material("Ginger ale", "m-46", materialType.soda, {
  abv: 0,
});
const prosecco = new Material(
  "Prosecco",
  "m-47",
  materialType.wine,
);
const mint = new Material("Mint", "m-48", materialType.seasoning, { abv: 0 });
const peachPurée = new Material("Peach purée", "m-49", materialType.other);
const coffeeLiqueur = new Material(
  "Coffee liqueur",
  "m-4a",
  materialType.liqueur,
);
const lilletBlanc = new Material(
  "Lillet blanc",
  "m-4b",
  materialType.fortified,
);
const kinaLillet = new Material("Kina lillet", "m-4c", materialType.fortified);
const greenCrèmeDeMenthe = new Material(
  "Green crème de menthe",
  "m-4d",
  materialType.liqueur,
);
const crèmeDeCassis = new Material(
  "Crème de cassis",
  "m-4e",
  materialType.liqueur,
);
const amaretto = new Material("Amaretto", "m-4f", materialType.liqueur);
const olive = new Material("Olive", "m-50", materialType.fruit, {
  abv: 0,
});
const wine = new Material("Wine", "m-51", materialType.base);
const dryWhiteWine = new Material(
  "Dry white wine",
  "m-52",
  materialType.wine,
);
const peachSchnapps = new Material(
  "Peach schnapps",
  "m-53",
  materialType.liqueur,
);
const cherryLiqueur = new Material(
  "Cherry liqueur",
  "m-54",
  materialType.liqueur,
);
const domBénédictine = new Material(
  "DOM Bénédictine",
  "m-55",
  materialType.liqueur,
  {
    abv: 40,
  },
);
const oliveJuice = new Material("Olive juice", "m-56", materialType.juice, {
  abv: 0,
});
const cranberryJuice = new Material(
  "Cranberry juice",
  "m-57",
  materialType.juice,
  {
    abv: 0,
  },
);
const grapefruitJuice = new Material(
  "Grapefruit juice",
  "m-58",
  materialType.juice,
  {
    abv: 0,
  },
);
const tomatoJuice = new Material("Tomato juice", "m-59", materialType.juice, {
  abv: 0,
});
const pepper = new Material("Pepper", "m-5a", materialType.seasoning, {
  abv: 0,
});
const salt = new Material("Salt", "m-5b", materialType.seasoning, {
  abv: 0,
});
const celerySalt = new Material("Celery salt", "m-5c", materialType.seasoning, {
  abv: 0,
});
const sugar = new Material("Sugar", "m-5d", materialType.seasoning, {
  abv: 0,
});
const simpleSyrup = new Material("Simple syrup", "m-5e", materialType.syrup, {
  abv: 0,
});
const caneSugar = new Material(
  "Cane sugar",
  "m-5f",
  materialType
    .sugar,
  {
    abv: 0,
  },
);
const powderedSugar = new Material(
  "Powdered sugar",
  "m-60",
  materialType
    .sugar,
  {
    abv: 0,
  },
);
const aperol = new Material("Aperol", "m-61", materialType.liqueur);
const galliano = new Material("Galliano", "m-62", materialType.liqueur);
const pisco = new Material("Pisco", "m-63", materialType.brandy);
const orgeatSyrup = new Material("Orgeat syrup", "m-64", materialType.syrup, {
  abv: 0,
});
const cinnamonSyrup = new Material(
  "Cinnamon syrup",
  "m-65",
  materialType.syrup,
  { abv: 0 },
);
const agaveNectar = new Material("Agave nectar", "m-66", materialType.syrup, {
  abv: 0,
});
const coconutCream = new Material("Coconut cream", "m-67", materialType.other);
const espresso = new Material("Espresso", "m-68", materialType.other, {
  abv: 0,
  caffeine: true,
});
const coffee = new Material("Coffee", "m-69", materialType.other, {
  abv: 0,
  caffeine: true,
});
const worcestershireSauce = new Material(
  "Worcestershire sauce",
  "m-6a",
  materialType.other,
  {
    abv: 0,
  },
);
const irishCream = new Material("Irish cream", "m-6b", materialType.liqueur);
const falernum = new Material("Falernum", "m-6c", materialType.liqueur);
const tabasco = new Material("Tabasco", "m-6d", materialType.other, {
  abv: 0,
});
const celery = new Material("Celery", "m-6e", materialType.other, {
  abv: 0,
});
const greenChartreuse = new Material(
  "Green Chartreuse",
  "m-6f",
  materialType.liqueur,
);
const crèmeDeViolette = new Material(
  "Crème de violette",
  "m-70",
  materialType.liqueur,
);
const cubanAguardiente = new Material(
  "Cuban aguardiente",
  "m-71",
  materialType
    .rum,
);
const honeySyrup = new Material("Honey syrup", "m-72", materialType.syrup, {
  abv: 0,
});
const honey = new Material("Honey", "m-73", materialType.other, {
  abv: 0,
});
const grapefruitSoda = new Material(
  "Grapefruit soda",
  "m-74",
  materialType.soda,
);
const amaroNonino = new Material("Amaro Nonino", "m-75", materialType.liqueur, {
  abv: 35,
});
const blendedScotchWhiskey = new Material(
  "Blended Scotch whiskey",
  "m-76",
  materialType
    .whiskey,
  { abv: 40 },
);
const islaySingleMaltScotch = new Material(
  "Islay single malt scotch",
  "m-77",
  materialType
    .whiskey,
  { abv: 40 },
);
const ginger = new Material("Ginger", "m-78", materialType.other, { abv: 0 });
const candiedGinger = new Material(
  "Candied ginger",
  "m-79",
  materialType.other,
  { abv: 0 },
);
const elderflowerSyrup = new Material(
  "Elderflower syrup",
  "m-7a",
  materialType.syrup,
);
const grappa = new Material("Grappa", "m-7b", materialType.brandy);
const whiteGrape = new Material("White grape", "m-7c", materialType.fruit);
const mezcal = new Material("Mezcal", "m-7d", materialType.spirit);
const overproofWhiteRum = new Material(
  "Overproof white rum",
  "m-7e",
  materialType
    .rum,
);
const yellowChartreuse = new Material(
  "Yellow chartreuse",
  "m-7f",
  materialType.liqueur,
);
const redWine = new Material("Red wine", "m-80", materialType.wine);
const redChiliPepper = new Material(
  "Red chili pepper",
  "m-81",
  materialType.fruit,
);
const chamomileSyrup = new Material(
  "Chamomile syrup",
  "m-82",
  materialType.syrup,
);
export const materials = {
  whiskey,
  scotchWhiskey,
  bourbonWhiskey,
  canadianWhiskey,
  ryeWhiskey,
  irishWhiskey,
  drambuie,
  water,
  sodaWater,
  gin,
  oldTomGin,
  londonDryGin,
  whiteCrèmeDeMenthe,
  crèmeDeMure,
  maraschino,
  brandy,
  apricotBrandy,
  port,
  calvados,
  anyBitters,
  peachBitters,
  orangeBitters,
  angosturaBitters,
  peychaudSBitters,
  aromaticBitters,
  lemon,
  blackberry,
  raspberry,
  cherry,
  pineapple,
  sweetRedVermouth,
  dryVermouth,
  cognac,
  tripleSec,
  grandMarnier,
  cointreau,
  curaçao,
  grenadine,
  orangeJuice,
  pineappleJuice,
  lime,
  rum,
  cachaça,
  absinthe,
  campari,
  fernetBranca,
  raspberrySyrup,
  raspberryLiqueur,
  orange,
  eggYolk,
  eggWhite,
  sparklingWine,
  champagne,
  tequila,
  whiteRum,
  goldRum,
  demeraraRum,
  darkRum,
  limeJuice,
  cream,
  brownCrèmeDeCacao,
  whiteCrèmeDeCacao,
  lightCream,
  orangeFlowerWater,
  vanillaExtract,
  cola,
  nutmeg,
  lemonJuice,
  vodka,
  gingerBeer,
  gingerAle,
  prosecco,
  mint,
  peachPurée,
  coffeeLiqueur,
  lilletBlanc,
  kinaLillet,
  greenCrèmeDeMenthe,
  crèmeDeCassis,
  amaretto,
  olive,
  wine,
  dryWhiteWine,
  peachSchnapps,
  cherryLiqueur,
  domBénédictine,
  oliveJuice,
  cranberryJuice,
  grapefruitJuice,
  tomatoJuice,
  pepper,
  salt,
  celerySalt,
  sugar,
  simpleSyrup,
  caneSugar,
  powderedSugar,
  aperol,
  galliano,
  pisco,
  orgeatSyrup,
  cinnamonSyrup,
  agaveNectar,
  coconutCream,
  espresso,
  coffee,
  worcestershireSauce,
  irishCream,
  falernum,
  tabasco,
  celery,
  greenChartreuse,
  crèmeDeViolette,
  cubanAguardiente,
  honeySyrup,
  honey,
  grapefruitSoda,
  amaroNonino,
  blendedScotchWhiskey,
  islaySingleMaltScotch,
  ginger,
  candiedGinger,
  elderflowerSyrup,
  grappa,
  whiteGrape,
  mezcal,
  overproofWhiteRum,
  yellowChartreuse,
  redWine,
  redChiliPepper,
  chamomileSyrup,
};
