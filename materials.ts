import { Material } from "./types.ts";
import {
  base,
  bitters,
  fortified,
  fruit,
  juice,
  liqueur,
  other,
  seasoning,
  soda,
  spirit,
  syrup,
} from "./material_type.ts";
export const whiskey = new Material("Whiskey", spirit);
export const scotchWhiskey = new Material("Scotch whiskey", spirit, whiskey);
export const bourbonWhiskey = new Material("Bourbon whiskey", spirit, whiskey);
export const canadianWhiskey = new Material(
  "Canadian whiskey",
  spirit,
  whiskey,
);
export const ryeWhiskey = new Material("Rye whiskey", spirit, whiskey);
export const irishWhiskey = new Material("Irish whiskey", spirit, whiskey);
export const drambuie = new Material("Drambuie", liqueur);
export const water = new Material("Water", other);
export const sodaWater = new Material("Soda water", soda);
export const gin = new Material("Gin", spirit);
export const oldTomGin = new Material("Old Tom Gin", spirit, gin);
export const londonDryGin = new Material("London dry gin", spirit, gin);
export const whiteCrèmeDeMenthe = new Material(
  "White crème de menthe",
  liqueur,
);
export const crèmeDeMure = new Material("Crème de mure", liqueur);
export const maraschino = new Material("Maraschino", liqueur);
export const brandy = new Material("Brandy", spirit);
export const apricotBrandy = new Material("Apricot brandy", liqueur);
export const port = new Material("Port", fortified);
export const calvados = new Material("Calvados", spirit);
export const anyBitters = new Material("Any bitters", bitters);
export const peachBitters = new Material("Peach bitters", bitters, anyBitters);
export const orangeBitters = new Material(
  "Orange bitters",
  bitters,
  anyBitters,
);
export const angosturaBitters = new Material(
  "Angostura bitters",
  bitters,
  anyBitters,
);
export const peychaudSBitters = new Material(
  "Peychaud’s bitters",
  bitters,
  anyBitters,
);
export const aromaticBitters = new Material(
  "Aromatic bitters",
  bitters,
  anyBitters,
);
export const lemon = new Material("Lemon", fruit);
export const blackberry = new Material("Blackberry", fruit);
export const raspberry = new Material("Raspberry", fruit);
export const cherry = new Material("Cherry", fruit);
export const pineapple = new Material("Pineapple", fruit);
export const sweetRedVermouth = new Material("Sweet red vermouth", fortified);
export const dryVermouth = new Material("Dry vermouth", fortified);
export const cognac = new Material("Cognac", spirit, brandy);
export const tripleSec = new Material("Triple sec", liqueur);
export const grandMarnier = new Material("Grand Marnier", liqueur, tripleSec);
export const cointreau = new Material("Cointreau", liqueur, tripleSec);
export const curaçao = new Material("Curaçao", liqueur, tripleSec);
export const grenadine = new Material("Grenadine", syrup);
export const orangeJuice = new Material("Orange juice", juice);
export const pineappleJuice = new Material("Pineapple juice", juice);
export const lime = new Material("Lime", fruit);
export const rum = new Material("Rum", spirit);
export const cachaça = new Material("Cachaça", spirit, rum);
export const absinthe = new Material("Absinthe", liqueur);
export const campari = new Material("Campari", liqueur);
export const fernetBranca = new Material("Fernet Branca", liqueur);
export const raspberrySyrup = new Material("Raspberry syrup", syrup);
export const raspberryLiqueur = new Material("Raspberry liqueur", liqueur);
export const orange = new Material("Orange", fruit);
export const eggYolk = new Material("Egg yolk", other);
export const eggWhite = new Material("Egg white", other);
export const sparklingWine = new Material("Sparkling wine", base);
export const champagne = new Material("Champagne", base, sparklingWine);
export const tequila = new Material("Tequila", spirit);
export const whiteRum = new Material("White rum", spirit, rum);
export const goldRum = new Material("Gold rum", spirit, rum);
export const demeraraRum = new Material("Demerara rum", spirit, rum);
export const darkRum = new Material("Dark rum", spirit, rum);
export const limeJuice = new Material("Lime juice", juice);
export const cream = new Material("Cream", other);
export const brownCrèmeDeCacao = new Material("Brown crème de cacao", liqueur);
export const whiteCrèmeDeCacao = new Material("White crème de cacao", liqueur);
export const lightCream = new Material("Light cream", other);
export const orangeFlowerWater = new Material("Orange flower water", other);
export const vanillaExtract = new Material("Vanilla extract", bitters);
export const cola = new Material("Cola", soda);
export const nutmeg = new Material("Nutmeg", seasoning);
export const lemonJuice = new Material("Lemon juice", juice);
export const vodka = new Material("Vodka", spirit);
export const gingerBeer = new Material("Ginger beer", soda);
export const gingerAle = new Material("Ginger ale", soda);
export const prosecco = new Material("Prosecco", base, sparklingWine);
export const mint = new Material("Mint", seasoning);
export const peachPurée = new Material("Peach purée", other);
export const coffeeLiqueur = new Material("Coffee liqueur", liqueur);
export const lilletBlanc = new Material("Lillet blanc", fortified);
export const kinaLillet = new Material("Kina lillet", fortified);
export const greenCrèmeDeMenthe = new Material(
  "Green crème de menthe",
  liqueur,
);
export const crèmeDeCassis = new Material("Crème de cassis", liqueur);
export const amaretto = new Material("Amaretto", liqueur);
export const olive = new Material("Olive", fruit);
export const wine = new Material("Wine", base);
export const dryWhiteWine = new Material("Dry white wine", base, wine);
export const peachSchnapps = new Material("Peach schnapps", liqueur);
export const cherryLiqueur = new Material("Cherry liqueur", liqueur);
export const domBénédictine = new Material("DOM Bénédictine", liqueur);
export const oliveJuice = new Material("Olive juice", juice);
export const cranberryJuice = new Material("Cranberry juice", juice);
export const grapefruitJuice = new Material("Grapefruit juice", juice);
export const tomatoJuice = new Material("Tomato juice", juice);
export const pepper = new Material("Pepper", seasoning);
export const salt = new Material("Salt", seasoning);
export const celerySalt = new Material("Celery salt", seasoning);
export const sugar = new Material("Sugar", seasoning);
export const simpleSyrup = new Material("Simple syrup", syrup);
export const caneSugar = new Material("Cane sugar", seasoning, sugar);
export const powderedSugar = new Material("Powdered sugar", seasoning, sugar);
export const aperol = new Material("Aperol", liqueur);
export const galliano = new Material("Galliano", liqueur);
export const pisco = new Material("Pisco", spirit, brandy);
export const orgeatSyrup = new Material("Orgeat syrup", syrup);
export const cinnamonSyrup = new Material("Cinnamon syrup", syrup);
export const agaveNectar = new Material("Agave nectar", syrup);
export const coconutCream = new Material("Coconut cream", other);
export const espresso = new Material("Espresso", other);
export const coffee = new Material("Coffee", other);
export const worcestershireSauce = new Material("Worcestershire sauce", other);
export const irishCream = new Material("Irish cream", liqueur);
export const falernum = new Material("Falernum", liqueur);
export const tabasco = new Material("Tabasco", other);
export const celery = new Material("Celery", other);
export const greenChartreuse = new Material("Green Chartreuse", liqueur);
export const crèmeDeViolette = new Material("Crème de violette", liqueur);
export const cubanAguardiente = new Material("Cuban aguardiente", spirit, rum);
export const honeySyrup = new Material("Honey syrup", syrup);
export const honey = new Material("Honey", other);
export const grapefruitSoda = new Material("Grapefruit soda", soda);
export const amaroNonino = new Material("Amaro Nonino", liqueur);
export const blendedScotchWhiskey = new Material(
  "Blended Scotch whiskey",
  spirit,
  whiskey,
);
export const islaySingleMaltScotch = new Material(
  "Islay single malt scotch",
  spirit,
  whiskey,
);
export const ginger = new Material("Ginger", other);
export const candiedGinger = new Material("Candied ginger", other);
export const elderflowerSyrup = new Material("Elderflower syrup", syrup);
export const grappa = new Material("Grappa", spirit, brandy);
export const whiteGrape = new Material("White grape", fruit);
export const mezcal = new Material("Mezcal", spirit);
export const overproofWhiteRum = new Material(
  "Overproof white rum",
  spirit,
  rum,
);
export const yellowChartreuse = new Material("Yellow chartreuse", liqueur);
export const redWine = new Material("Red wine", base, wine);
export const redChiliPepper = new Material("Red chili pepper", fruit);
export const chamomileSyrup = new Material("Chamomile syrup", syrup);
