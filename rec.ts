import { Ingredient, Recipe, Unit } from "./types.ts";
import {
  absinthe,
  agaveNectar,
  amaretto,
  amaroNonino,
  angosturaBitters,
  aperol,
  apricotBrandy,
  aromaticBitters,
  bitters,
  blackberry,
  blendedScotchWhiskey,
  bourbonWhiskey,
  brandy,
  brownCrèmeDeCacao,
  cachaça,
  calvados,
  campari,
  canadianWhiskey,
  candiedGinger,
  caneSugar,
  celery,
  celerySalt,
  chamomileSyrup,
  champagne,
  cherry,
  cherryLiqueur,
  cinnamonSyrup,
  coconutCream,
  coffee,
  coffeeLiqueur,
  cognac,
  cointreau,
  cola,
  cranberryJuice,
  cream,
  crèmeDeCassis,
  crèmeDeMure,
  crèmeDeViolette,
  cubanAguardiente,
  curaçao,
  darkRum,
  demeraraRum,
  domBénédictine,
  drambuie,
  dryVermouth,
  dryWhiteWine,
  eggWhite,
  eggYolk,
  elderflowerSyrup,
  espresso,
  falernum,
  fernetBranca,
  galliano,
  gin,
  ginger,
  gingerAle,
  gingerBeer,
  goldRum,
  grandMarnier,
  grapefruitJuice,
  grapefruitSoda,
  grappa,
  greenChartreuse,
  greenCrèmeDeMenthe,
  grenadine,
  honey,
  honeySyrup,
  irishCream,
  irishWhiskey,
  islaySingleMaltScotch,
  kinaLillet,
  lemon,
  lemonJuice,
  lightCream,
  lilletBlanc,
  lime,
  limeJuice,
  londonDryGin,
  maraschino,
  mezcal,
  mint,
  nutmeg,
  oldTomGin,
  olive,
  oliveJuice,
  orange,
  orangeBitters,
  orangeFlowerWater,
  orangeJuice,
  orgeatSyrup,
  overproofWhiteRum,
  peachBitters,
  peachPurée,
  peachSchnapps,
  pepper,
  peychaudSBitters,
  pineapple,
  pineappleJuice,
  pisco,
  port,
  powderedSugar,
  prosecco,
  raspberry,
  raspberryLiqueur,
  raspberrySyrup,
  redChiliPepper,
  redWine,
  rum,
  ryeWhiskey,
  salt,
  scotchWhiskey,
  simpleSyrup,
  sodaWater,
  sparklingWine,
  sugar,
  sweetRedVermouth,
  tabasco,
  tequila,
  tomatoJuice,
  tripleSec,
  vanillaExtract,
  vodka,
  water,
  whiskey,
  whiteCrèmeDeCacao,
  whiteCrèmeDeMenthe,
  whiteGrape,
  whiteRum,
  wine,
  worcestershireSauce,
  yellowChartreuse,
} from "./materials.ts";
import {
  champagneCoupe,
  champagneFlute,
  cocktailGlass,
  collinsGlass,
  copperMug,
  highballGlass,
  hurricane,
  irishCoffeeMug,
  margaritaGlass,
  oldFashionedGlass,
  steelCup,
  wineGlass,
  zombieGlass,
} from "./glas.ts";
export const toronto = new Recipe(
  "Toronto",
  "Stir in mixing glass with ice & strain. Garnish with Orange slice.",
  cocktailGlass,
  [
    new Ingredient(canadianWhiskey, 5.5, Unit.CL),
    new Ingredient(fernetBranca, 0.75, Unit.CL),
    new Ingredient(sugar, 0.25, Unit.Tsp),
    new Ingredient(angosturaBitters, 1, Unit.Dash),
    new Ingredient(orange, 1, Unit.Slice),
  ],
);
export const french_75 = new Recipe(
  "French 75",
  "Pour all the ingredients, except Champagne, into a shaker. Shake well and strain into a Champagne flute. Top up with Champagne. Stir gently.",
  champagneFlute,
  [
    new Ingredient(gin, 3, Unit.CL),
    new Ingredient(simpleSyrup, 1.5, Unit.CL),
    new Ingredient(lemonJuice, 1.5, Unit.CL),
    new Ingredient(champagne, 6, Unit.CL),
  ],
);
export const cubaLibre = new Recipe(
  "Cuba Libre",
  "Build all ingredients in a highball glass filled with ice. Garnish with lime wedge.",
  highballGlass,
  [
    new Ingredient(cola, 12, Unit.CL),
    new Ingredient(whiteRum, 5, Unit.CL),
    new Ingredient(limeJuice, 1, Unit.CL),
    new Ingredient(lime, 1, Unit.Wedge),
  ],
);
export const moscowMule = new Recipe(
  "Moscow mule",
  "Combine vodka and ginger beer in a highball glass filled with ice. Add lime juice. Stir gently. Garnish with a lime slice.",
  copperMug,
  [
    new Ingredient(vodka, 4.5, Unit.CL),
    new Ingredient(gingerBeer, 12, Unit.CL),
    new Ingredient(limeJuice, 1, Unit.CL),
    new Ingredient(lime, 1, Unit.Slice),
  ],
);
export const mimosa = new Recipe(
  "Mimosa",
  "Ensure both ingredients are well chilled, then mix into the glass. Garnish with Orange twist (optional).",
  champagneFlute,
  [
    new Ingredient(champagne, 7.5, Unit.CL),
    new Ingredient(orangeJuice, 7.5, Unit.CL),
  ],
);
export const bellini = new Recipe(
  "Bellini",
  "Pour peach purée into chilled glass, add sparkling wine. Stir gently.",
  champagneFlute,
  [
    new Ingredient(prosecco, 10, Unit.CL),
    new Ingredient(peachPurée, 5, Unit.CL),
  ],
);
export const blackRussian = new Recipe(
  "Black russian",
  "Pour the ingredients into an old fashioned glass filled with ice cubes. Stir gently.",
  oldFashionedGlass,
  [
    new Ingredient(vodka, 5, Unit.CL),
    new Ingredient(coffeeLiqueur, 2, Unit.CL),
  ],
);
export const caipirinha = new Recipe(
  "Caipirinha",
  "Place small lime wedges from one lime and sugar into old fashioned glass and muddle (mash the two ingredients together using a muddler or a wooden spoon). Fill the glass with ice and add the Cachaça. Use vodka instead of cachaça for a caipiroska; rum instead of cachaça for a caipirissima;",
  oldFashionedGlass,
  [
    new Ingredient(cachaça, 6, Unit.CL),
    new Ingredient(lime, 1, Unit.Whole),
    new Ingredient(caneSugar, 4, Unit.Tsp),
  ],
);
export const mojito = new Recipe(
  "Mojito",
  "Muddle mint springs with sugar and lime juice. Add splash of soda water and fill glass with cracked ice. Pour rum and top with soda water. Garnish with sprig of mint leaves and Lemon slice. Serve with straw.",
  collinsGlass,
  [
    new Ingredient(whiteRum, 4.5, Unit.CL),
    new Ingredient(limeJuice, 2, Unit.CL),
    new Ingredient(mint, 6, Unit.Sprig),
    new Ingredient(caneSugar, 2, Unit.Tsp),
    new Ingredient(lemon, 1, Unit.Slice),
    new Ingredient(sodaWater, 1, Unit.Splash),
  ],
);
export const darkNStormy = new Recipe(
  "Dark ’n’ Stormy",
  "Fill glass with ice, add rum and top with ginger beer. Garnish with lime wedge.",
  highballGlass,
  [
    new Ingredient(darkRum, 6, Unit.CL),
    new Ingredient(gingerBeer, 10, Unit.CL),
    new Ingredient(lime, 1, Unit.Wedge),
  ],
);
export const bramble = new Recipe(
  "Bramble",
  "Fill glass with crushed ice. Build gin, Lemon juice and simple syrup over. Stir, and then pour blackberry liqueur over in a circular fashion to create marbling effect. Garnish with two blackberries and Lemon slice.",
  oldFashionedGlass,
  [
    new Ingredient(gin, 4, Unit.CL),
    new Ingredient(lemonJuice, 1.5, Unit.CL),
    new Ingredient(simpleSyrup, 1, Unit.CL),
    new Ingredient(crèmeDeMure, 1.5, Unit.CL),
    new Ingredient(lemon, 1, Unit.Slice),
    new Ingredient(blackberry, 2, Unit.Whole),
  ],
);
export const frenchMartini = new Recipe(
  "French martini",
  "Pour all ingredients into shaker with ice cubes. Shake well and strain into a chilled cocktail glass. Squeeze oil from Lemon peel onto the drink.",
  cocktailGlass,
  [
    new Ingredient(vodka, 4, Unit.CL),
    new Ingredient(raspberryLiqueur, 1.5, Unit.CL),
    new Ingredient(pineappleJuice, 1, Unit.CL),
  ],
);
export const kamikaze = new Recipe(
  "Kamikaze",
  "Shake all ingredients together with ice. Strain into glass. Garnish with lime slice.",
  cocktailGlass,
  [
    new Ingredient(vodka, 3, Unit.CL),
    new Ingredient(tripleSec, 3, Unit.CL),
    new Ingredient(limeJuice, 3, Unit.CL),
    new Ingredient(lime, 1, Unit.Slice),
  ],
);
export const lemonDropMartini = new Recipe(
  "Lemon drop martini",
  "Shake and strain into a chilled cocktail glass rimmed with sugar, garnish with a slice of Lemon.",
  cocktailGlass,
  [
    new Ingredient(vodka, 2.5, Unit.CL),
    new Ingredient(tripleSec, 2, Unit.CL),
    new Ingredient(lemonJuice, 1.5, Unit.CL),
    new Ingredient(sugar, 1, Unit.None),
    new Ingredient(lime, 1, Unit.Slice),
  ],
);
export const vesper = new Recipe(
  "Vesper",
  "Shake and strain into a chilled cocktail glass. Add the garnish.",
  cocktailGlass,
  [
    new Ingredient(gin, 4.5, Unit.CL),
    new Ingredient(vodka, 1.5, Unit.CL),
    new Ingredient(lilletBlanc, 0.75, Unit.CL),
    new Ingredient(lemon, 1, Unit.Zest),
  ],
);
export const boulevardier = new Recipe(
  "Boulevardier",
  "Pour all ingredients into mixing glass with ice cubes. Stir well. Strain into chilled cocktail glass. Garnish with a Orange zest, optionally a Lemon zest.",
  oldFashionedGlass,
  [
    new Ingredient(bourbonWhiskey, 4.5, Unit.CL),
    new Ingredient(sweetRedVermouth, 3, Unit.CL),
    new Ingredient(campari, 3, Unit.CL),
    new Ingredient(orange, 1, Unit.Peel),
  ],
);
export const alexander = new Recipe(
  "Alexander",
  "Shake all ingredients with ice and strain contents into a cocktail glass. Sprinkle ground nutmeg on top and serve.",
  cocktailGlass,
  [
    new Ingredient(cognac, 3, Unit.CL),
    new Ingredient(brownCrèmeDeCacao, 3, Unit.CL),
    new Ingredient(lightCream, 3, Unit.CL),
    new Ingredient(nutmeg, 1, Unit.None),
  ],
);
export const americano = new Recipe(
  "Americano",
  "Pour the Campari and vermouth over ice into a highball glass, add a splash of soda water and garnish with half Orange slice and a Lemon twist.",
  highballGlass,
  [
    new Ingredient(campari, 3, Unit.CL),
    new Ingredient(sweetRedVermouth, 3, Unit.CL),
    new Ingredient(sodaWater, 1, Unit.Splash),
    new Ingredient(orange, 0.5, Unit.Slice),
    new Ingredient(lemon, 1, Unit.Twist),
  ],
);
export const angelFace = new Recipe(
  "Angel face",
  "Shake all ingredients with ice and strain contents into a cocktail glass.",
  cocktailGlass,
  [
    new Ingredient(gin, 3, Unit.CL),
    new Ingredient(apricotBrandy, 3, Unit.CL),
    new Ingredient(calvados, 3, Unit.CL),
  ],
);
export const aviation = new Recipe(
  "Aviation",
  "Add all ingredients into cocktail shaker filled with ice. Shake well and strain into cocktail glass. Garnish with a cherry.",
  cocktailGlass,
  [
    new Ingredient(gin, 4.5, Unit.CL),
    new Ingredient(lemonJuice, 1.5, Unit.CL),
    new Ingredient(maraschino, 1.5, Unit.CL),
    new Ingredient(crèmeDeViolette, 1, Unit.Tsp),
    new Ingredient(cherry, 1, Unit.Whole),
  ],
);
export const bacardiCocktail = new Recipe(
  "Bacardi cocktail",
  "Shake together with ice. Strain into glass and serve.",
  cocktailGlass,
  [
    new Ingredient(whiteRum, 4.5, Unit.CL),
    new Ingredient(limeJuice, 2, Unit.CL),
    new Ingredient(grenadine, 1, Unit.CL),
  ],
);
export const betweenTheSheets = new Recipe(
  "Between the sheets",
  "Pour all ingredients into shaker with ice cubes, shake, strain into chilled cocktail glass.",
  cocktailGlass,
  [
    new Ingredient(whiteRum, 3, Unit.CL),
    new Ingredient(cognac, 3, Unit.CL),
    new Ingredient(tripleSec, 3, Unit.CL),
    new Ingredient(lemonJuice, 2, Unit.CL),
  ],
);
export const casino = new Recipe(
  "Casino",
  "Pour all ingredients into shaker with ice cubes, shake well. Strain into chilled cocktail glass and garnish with a Lemon twist and a marachino cherry.",
  cocktailGlass,
  [
    new Ingredient(oldTomGin, 4, Unit.CL),
    new Ingredient(maraschino, 1, Unit.CL),
    new Ingredient(orangeBitters, 1, Unit.CL),
    new Ingredient(lemonJuice, 1, Unit.CL),
    new Ingredient(lemon, 1, Unit.Twist),
    new Ingredient(cherry, 1, Unit.Whole),
  ],
);
export const cloverClub = new Recipe(
  "Clover club",
  "Pour all ingredients into cocktail shaker filled with ice. Shake well. Strain into cocktail glass. Garnish with fresh raspberries.",
  cocktailGlass,
  [
    new Ingredient(gin, 4.5, Unit.CL),
    new Ingredient(lemonJuice, 1.5, Unit.CL),
    new Ingredient(raspberrySyrup, 1.5, Unit.CL),
    new Ingredient(eggWhite, 3, Unit.Drop),
    new Ingredient(raspberry, 2, Unit.Whole),
  ],
);
export const daiquiri = new Recipe(
  "Daiquiri",
  "Pour all ingredients into shaker with ice cubes. Shake well. Double Strain in chilled cocktail glass.",
  cocktailGlass,
  [
    new Ingredient(whiteRum, 4.5, Unit.CL),
    new Ingredient(limeJuice, 2.5, Unit.CL),
    new Ingredient(simpleSyrup, 1.5, Unit.CL),
  ],
);
export const derby = new Recipe(
  "Derby",
  "Pour all ingredients into a mixing glass with ice. Stir. Strain into a cocktail glass. Garnish with fresh mint leaves in the drink.",
  cocktailGlass,
  [
    new Ingredient(gin, 6, Unit.CL),
    new Ingredient(peachBitters, 2, Unit.Drop),
    new Ingredient(mint, 1, Unit.Leaves),
  ],
);
export const dryMartini = new Recipe(
  "Dry martini",
  "Straight: Pour all ingredients into mixing glass with ice cubes. Stir well. Strain into chilled martini cocktail glass. Squeeze oil from Lemon peel onto the drink, or garnish with olive.",
  cocktailGlass,
  [
    new Ingredient(gin, 6, Unit.CL),
    new Ingredient(dryVermouth, 1, Unit.CL),
    new Ingredient(lemon, 1, Unit.Peel),
    new Ingredient(olive, 1, Unit.Whole),
  ],
);
export const ginFizz = new Recipe(
  "Gin fizz",
  "Shake all ingredients with ice cubes, except soda water. Pour into tumbler. Top with soda water. Garnish with Lemon slice.",
  oldFashionedGlass,
  [
    new Ingredient(gin, 4.5, Unit.CL),
    new Ingredient(lemonJuice, 3, Unit.CL),
    new Ingredient(simpleSyrup, 1, Unit.CL),
    new Ingredient(sodaWater, 8, Unit.CL),
    new Ingredient(lemon, 1, Unit.Slice),
  ],
);
export const johnCollins = new Recipe(
  "John collins",
  "Pour all ingredients directly into highball glass filled with ice. Stir gently. Garnish with Lemon slice and maraschino cherry. Add a dash of Angostura bitters.",
  collinsGlass,
  [
    new Ingredient(gin, 4.5, Unit.CL),
    new Ingredient(lemonJuice, 3, Unit.CL),
    new Ingredient(simpleSyrup, 1.5, Unit.CL),
    new Ingredient(sodaWater, 6, Unit.CL),
    new Ingredient(angosturaBitters, 1, Unit.Dash),
    new Ingredient(lemon, 1, Unit.Slice),
    new Ingredient(cherry, 1, Unit.Whole),
  ],
);
export const manhattan = new Recipe(
  "Manhattan",
  "Pour all ingredients into mixing glass with ice cubes. Stir well. Strain into chilled cocktail glass. Garnish with cocktail cherry.",
  cocktailGlass,
  [
    new Ingredient(ryeWhiskey, 5, Unit.CL),
    new Ingredient(sweetRedVermouth, 2, Unit.CL),
    new Ingredient(angosturaBitters, 1, Unit.Dash),
    new Ingredient(cherry, 1, Unit.Whole),
  ],
);
export const maryPickford = new Recipe(
  "Mary pickford",
  "Shake and strain into a chilled large cocktail glass",
  cocktailGlass,
  [
    new Ingredient(whiteRum, 6, Unit.CL),
    new Ingredient(pineappleJuice, 6, Unit.CL),
    new Ingredient(grenadine, 1, Unit.CL),
    new Ingredient(maraschino, 1, Unit.CL),
  ],
);
export const monkeyGland = new Recipe(
  "Monkey gland",
  "Shake well over ice cubes in a shaker, strain into a chilled cocktail glass.",
  cocktailGlass,
  [
    new Ingredient(gin, 5, Unit.CL),
    new Ingredient(orangeJuice, 3, Unit.CL),
    new Ingredient(absinthe, 2, Unit.Drop),
    new Ingredient(grenadine, 2, Unit.Drop),
  ],
);
export const negroni = new Recipe(
  "Negroni",
  "Pour all ingredients directly into old-fashioned glass filled with ice. Stir gently. Garnish with half Orange slice.",
  oldFashionedGlass,
  [
    new Ingredient(gin, 3, Unit.CL),
    new Ingredient(sweetRedVermouth, 3, Unit.CL),
    new Ingredient(campari, 3, Unit.CL),
    new Ingredient(orange, 0.5, Unit.Slice),
  ],
);
export const oldFashioned = new Recipe(
  "Old fashioned",
  "Place sugar cube in old-fashioned glass and saturate with bitters, add a dash of plain water. Muddle until dissolve. Fill the glass with ice cubes and add whiskey. Garnish with Orange slice and a cocktail cherry.",
  oldFashionedGlass,
  [
    new Ingredient(whiskey, 4.5, Unit.CL),
    new Ingredient(angosturaBitters, 2, Unit.Dash),
    new Ingredient(sugar, 1, Unit.Cube),
    new Ingredient(water, 3, Unit.Dash),
    new Ingredient(orange, 1, Unit.Slice),
    new Ingredient(cherry, 1, Unit.Whole),
  ],
);
export const paradise = new Recipe(
  "Paradise",
  "Shake together over ice. Strain into cocktail glass and serve chilled.",
  cocktailGlass,
  [
    new Ingredient(gin, 3.5, Unit.CL),
    new Ingredient(apricotBrandy, 2, Unit.CL),
    new Ingredient(orangeJuice, 1.5, Unit.CL),
  ],
);
export const planterSPunch = new Recipe(
  "Planter’s punch",
  "Pour all ingredients, except the bitters, into shaker filled with ice. Shake well. Pour into large glass, filled with ice. Add dash Angostura bitters. Garnish with cocktail cherry and pineapple.",
  cocktailGlass,
  [
    new Ingredient(darkRum, 4.5, Unit.CL),
    new Ingredient(orangeJuice, 3.5, Unit.CL),
    new Ingredient(pineappleJuice, 3.5, Unit.CL),
    new Ingredient(lemonJuice, 2, Unit.CL),
    new Ingredient(grenadine, 1, Unit.CL),
    new Ingredient(simpleSyrup, 1, Unit.CL),
    new Ingredient(angosturaBitters, 3, Unit.Dash),
    new Ingredient(cherry, 1, Unit.Whole),
    new Ingredient(pineapple, 1, Unit.Slice),
  ],
);
export const portoFlip = new Recipe(
  "Porto flip",
  "Pour all ingredients into cocktail shaker filled with ice. Shake well. Strain into cocktail glass. Sprinkle with fresh ground nutmeg.",
  cocktailGlass,
  [
    new Ingredient(brandy, 1.5, Unit.CL),
    new Ingredient(port, 4.5, Unit.CL),
    new Ingredient(eggYolk, 1, Unit.CL),
    new Ingredient(nutmeg, 1, Unit.None),
  ],
);
export const ramosFizz = new Recipe(
  "Ramos fizz",
  "Pour all ingredients (except soda) in a mixing glass, dry shake (no ice) for two minutes, add ice and hard shake for another minute. Strain into a highball glass without ice, top with soda.",
  highballGlass,
  [
    new Ingredient(gin, 4.5, Unit.CL),
    new Ingredient(cream, 6, Unit.CL),
    new Ingredient(simpleSyrup, 3, Unit.CL),
    new Ingredient(limeJuice, 1.5, Unit.CL),
    new Ingredient(lemonJuice, 1.5, Unit.CL),
    new Ingredient(eggWhite, 1, Unit.Whole),
    new Ingredient(orangeFlowerWater, 3, Unit.Dash),
    new Ingredient(vanillaExtract, 2, Unit.Drop),
    new Ingredient(sodaWater, 1, Unit.None),
  ],
);
export const rustyNail = new Recipe(
  "Rusty nail",
  "Pour all ingredients directly into old-fashioned glass filled with ice. Stir gently. Garnish with a Lemon twist.",
  oldFashionedGlass,
  [
    new Ingredient(scotchWhiskey, 4.5, Unit.CL),
    new Ingredient(drambuie, 2.5, Unit.CL),
    new Ingredient(lemon, 1, Unit.Twist),
  ],
);
export const sazerac = new Recipe(
  "Sazerac",
  "Rinse a chilled old-fashioned glass with the absinthe, add crushed ice and set it aside. Stir the remaining ingredients over ice and set it aside. Discard the ice and any excess absinthe from the prepared glass, and strain the drink into the glass. Add the Lemon peel for garnish. Note: The original recipe changed after the American Civil War, rye whiskey substituted cognac as it became hard to obtain.",
  oldFashionedGlass,
  [
    new Ingredient(cognac, 5, Unit.CL),
    new Ingredient(absinthe, 1, Unit.CL),
    new Ingredient(sugar, 1, Unit.Cube),
    new Ingredient(peychaudSBitters, 2, Unit.Dash),
    new Ingredient(lemon, 1, Unit.Peel),
  ],
);
export const screwdriver = new Recipe(
  "Screwdriver",
  "Pour all ingredients into a highball glass filled with ice. Stir gently. Garnish with an Orange slice.",
  highballGlass,
  [
    new Ingredient(vodka, 5, Unit.CL),
    new Ingredient(orangeJuice, 10, Unit.CL),
    new Ingredient(orange, 1, Unit.Slice),
  ],
);
export const sidecar = new Recipe(
  "Sidecar",
  "Pour all ingredients into cocktail shaker filled with ice. Shake well and strain into cocktail glass.",
  cocktailGlass,
  [
    new Ingredient(cognac, 5, Unit.CL),
    new Ingredient(tripleSec, 2, Unit.CL),
    new Ingredient(lemonJuice, 2, Unit.CL),
  ],
);
export const stinger = new Recipe(
  "Stinger",
  "Pour in a mixing glass with ice, stir and strain into a cocktail glass. May also be served on rocks in a rocks glass.",
  cocktailGlass,
  [
    new Ingredient(cognac, 5, Unit.CL),
    new Ingredient(whiteCrèmeDeMenthe, 2, Unit.CL),
  ],
);
export const tuxedo = new Recipe(
  "Tuxedo",
  "Stir all ingredients with ice and strain into cocktail glass. Garnish with a cocktail cherry and a Lemon zest twist.",
  cocktailGlass,
  [
    new Ingredient(oldTomGin, 3, Unit.CL),
    new Ingredient(dryVermouth, 3, Unit.CL),
    new Ingredient(maraschino, 0.5, Unit.Tsp),
    new Ingredient(absinthe, 0.25, Unit.Tsp),
    new Ingredient(orangeBitters, 3, Unit.Dash),
    new Ingredient(cherry, 1, Unit.Whole),
    new Ingredient(lemon, 1, Unit.Twist),
  ],
);
export const whiskeySour = new Recipe(
  "Whiskey sour",
  "Egg white is optional. Pour all ingredients into cocktail shaker filled with ice. Shake well (a little harder if using egg white). Strain in cocktail glass. Garnish with half Orange slice and maraschino cherry.",
  oldFashionedGlass,
  [
    new Ingredient(bourbonWhiskey, 4.5, Unit.CL),
    new Ingredient(lemonJuice, 3, Unit.CL),
    new Ingredient(simpleSyrup, 1.5, Unit.CL),
    new Ingredient(cherry, 1, Unit.Whole),
    new Ingredient(orange, 0.5, Unit.Slice),
  ],
);
export const whiteLady = new Recipe(
  "White lady",
  "Add all ingredients into cocktail shaker filled with ice. Shake well and strain into large cocktail glass.",
  cocktailGlass,
  [
    new Ingredient(gin, 4, Unit.CL),
    new Ingredient(tripleSec, 3, Unit.CL),
    new Ingredient(lemonJuice, 2, Unit.CL),
  ],
);
export const frenchConnection = new Recipe(
  "French connection",
  "Pour all ingredients directly into old fashioned glass filled with ice cubes. Stir gently.",
  oldFashionedGlass,
  [
    new Ingredient(cognac, 3.5, Unit.CL),
    new Ingredient(amaretto, 3.5, Unit.CL),
  ],
);
export const mintJulep = new Recipe(
  "Mint julep",
  "In steel cup gently muddle 4 mint sprigs with sugar and water. Fill the glass with cracked ice, add the Bourbon and stir well until the cup frosts. Garnish with a mint sprig.",
  steelCup,
  [
    new Ingredient(bourbonWhiskey, 6, Unit.CL),
    new Ingredient(mint, 5, Unit.Sprig),
    new Ingredient(water, 2, Unit.Tsp),
    new Ingredient(powderedSugar, 1, Unit.Tsp),
  ],
);
export const whiteRussian = new Recipe(
  "White russian",
  "Pour vodka and coffee liqueur into an old fashioned glass filled with ice cubes. Float fresh cream on the top and stir in slowly..",
  oldFashionedGlass,
  [
    new Ingredient(vodka, 5, Unit.CL),
    new Ingredient(coffeeLiqueur, 2, Unit.CL),
    new Ingredient(cream, 3, Unit.CL),
  ],
);
export const bloodyMary = new Recipe(
  "Bloody Mary",
  "Stir gently all the ingredients in a mixing glass with ice. Add tabasco, celery salt, pepper to taste. Pour into rocks glass. Garnish with celery and Lemon wedge. If requested served with ice, pour into highball glass.",
  highballGlass,
  [
    new Ingredient(vodka, 4.5, Unit.CL),
    new Ingredient(tomatoJuice, 9, Unit.CL),
    new Ingredient(lemonJuice, 1.5, Unit.CL),
    new Ingredient(worcestershireSauce, 2, Unit.Dash),
    new Ingredient(tabasco, 1, Unit.None),
    new Ingredient(celerySalt, 1, Unit.None),
    new Ingredient(pepper, 1, Unit.None),
    new Ingredient(celery, 1, Unit.None),
    new Ingredient(lemon, 1, Unit.Wedge),
  ],
);
export const champagneCocktail = new Recipe(
  "Champagne cocktail",
  "Place the sugar cube with 2 dashes of bitters in a large Champagne glass, add the cognac. Optionally add a few drops of Grand Marnier. Pour gently chilled Champagne. Garnish with Orange zest and cherry.",
  cocktailGlass,
  [
    new Ingredient(champagne, 9, Unit.CL),
    new Ingredient(cognac, 1, Unit.CL),
    new Ingredient(angosturaBitters, 2, Unit.Dash),
    new Ingredient(sugar, 1, Unit.Cube),
    new Ingredient(orange, 1, Unit.Zest),
    new Ingredient(cherry, 1, Unit.Whole),
  ],
);
export const kir = new Recipe(
  "Kir",
  "Pour Crème de Cassis into glass, top up with white wine.",
  wineGlass,
  [
    new Ingredient(dryWhiteWine, 9, Unit.CL),
    new Ingredient(crèmeDeCassis, 1, Unit.CL),
  ],
);
export const kirRoyal = new Recipe(
  "Kir royal",
  "Pour Crème de Cassis into glass, top up with Champagne.",
  wineGlass,
  [
    new Ingredient(champagne, 9, Unit.CL),
    new Ingredient(crèmeDeCassis, 1, Unit.CL),
  ],
);
export const longIslandIcedTea = new Recipe(
  "Long island iced tea",
  "Add all ingredients into highball glass filled with ice. Top with cola. Stir gently. Garnish with Lemon slice.",
  highballGlass,
  [
    new Ingredient(vodka, 1.5, Unit.CL),
    new Ingredient(tequila, 1.5, Unit.CL),
    new Ingredient(whiteRum, 1.5, Unit.CL),
    new Ingredient(gin, 1.5, Unit.CL),
    new Ingredient(cointreau, 1.5, Unit.CL),
    new Ingredient(lemonJuice, 2.5, Unit.CL),
    new Ingredient(simpleSyrup, 3, Unit.CL),
    new Ingredient(cola, 1, Unit.None),
    new Ingredient(lemon, 1, Unit.Slice),
  ],
);
export const maiTai = new Recipe(
  "Mai-tai",
  "Add all ingredients into a shaker with ice. Shake and pour into a double rocks glass or an highball glass. Garnish with pineapple spear, mint leaves, and lime peel.",
  highballGlass,
  [
    new Ingredient(whiteRum, 3, Unit.CL),
    new Ingredient(darkRum, 3, Unit.CL),
    new Ingredient(curaçao, 1.5, Unit.CL),
    new Ingredient(orgeatSyrup, 1.5, Unit.CL),
    new Ingredient(limeJuice, 3, Unit.CL),
    new Ingredient(simpleSyrup, 0.75, Unit.CL),
    new Ingredient(pineapple, 1, Unit.Spear),
    new Ingredient(mint, 1, Unit.Leaves),
    new Ingredient(lime, 1, Unit.Peel),
  ],
);
export const margarita = new Recipe(
  "Margarita",
  "Add all ingredients into a shaker with ice. Shake and strain into a chilled cocktail glass. Garnish with a half salt rim (optional).",
  margaritaGlass,
  [
    new Ingredient(tequila, 5, Unit.CL),
    new Ingredient(tripleSec, 2, Unit.CL),
    new Ingredient(limeJuice, 1.5, Unit.CL),
  ],
);
export const tommySMargarita = new Recipe(
  "Tommy’s margarita",
  "Shake and strain into a chilled cocktail glass.",
  margaritaGlass,
  [
    new Ingredient(tequila, 4.5, Unit.CL),
    new Ingredient(limeJuice, 1.5, Unit.CL),
    new Ingredient(agaveNectar, 2, Unit.Tsp),
  ],
);
export const b52 = new Recipe(
  "B52",
  "Layer ingredients one at a time starting with coffee liqueur, followed by irish cream and top with triple sec. Flame the triple sec, serve while the flame is still on, accompanied with a straw on side plate.",
  oldFashionedGlass,
  [
    new Ingredient(coffeeLiqueur, 2, Unit.CL),
    new Ingredient(tripleSec, 2, Unit.CL),
    new Ingredient(irishCream, 2, Unit.CL),
  ],
);
export const barracuda = new Recipe(
  "Barracuda",
  "Shake together with ice. Strain into glass and serve.",
  margaritaGlass,
  [
    new Ingredient(goldRum, 4.5, Unit.CL),
    new Ingredient(galliano, 1.5, Unit.CL),
    new Ingredient(pineappleJuice, 6, Unit.CL),
    new Ingredient(limeJuice, 1, Unit.Dash),
    new Ingredient(prosecco, 1, Unit.None),
  ],
);
export const corpseReviver_2 = new Recipe(
  "Corpse reviver #2",
  "Pour all ingredients into shaker with ice. Shake well and strain in chilled cocktail glass. Garnish with Orange zest.",
  cocktailGlass,
  [
    new Ingredient(gin, 3, Unit.CL),
    new Ingredient(cointreau, 3, Unit.CL),
    new Ingredient(lilletBlanc, 3, Unit.CL),
    new Ingredient(lemonJuice, 3, Unit.CL),
    new Ingredient(absinthe, 1, Unit.Dash),
    new Ingredient(orange, 1, Unit.Zest),
  ],
);
export const cosmopolitan = new Recipe(
  "Cosmopolitan",
  "Add all ingredients into cocktail shaker filled with ice. Shake well and strain into large cocktail glass. Garnish with Lemon twist.",
  cocktailGlass,
  [
    new Ingredient(vodka, 4, Unit.CL),
    new Ingredient(cointreau, 1.5, Unit.CL),
    new Ingredient(limeJuice, 1.5, Unit.CL),
    new Ingredient(cranberryJuice, 3, Unit.CL),
    new Ingredient(lemon, 1, Unit.Twist),
  ],
);
export const dirtyMartini = new Recipe(
  "Dirty martini",
  "Pour all ingredients into mixing glass with ice cubes. Stir well. Strain in chilled martini glass. Garnish with green olive.",
  cocktailGlass,
  [
    new Ingredient(vodka, 6, Unit.CL),
    new Ingredient(dryVermouth, 1, Unit.CL),
    new Ingredient(oliveJuice, 1, Unit.CL),
    new Ingredient(olive, 1, Unit.Whole),
  ],
);
export const espressoMartini = new Recipe(
  "Espresso martini",
  "Shake and strain into a chilled cocktail glass.",
  cocktailGlass,
  [
    new Ingredient(vodka, 5, Unit.CL),
    new Ingredient(coffeeLiqueur, 1, Unit.CL),
    new Ingredient(simpleSyrup, 1, Unit.None),
    new Ingredient(espresso, 4, Unit.CL),
  ],
);
export const goldenDream = new Recipe(
  "Golden dream",
  "Pour all ingredients into shaker filled with ice. Shake briskly for few seconds. Strain into chilled cocktail glass.",
  cocktailGlass,
  [
    new Ingredient(tripleSec, 2, Unit.CL),
    new Ingredient(galliano, 2, Unit.CL),
    new Ingredient(orangeJuice, 2, Unit.CL),
    new Ingredient(cream, 1, Unit.CL),
  ],
);
export const grasshopper = new Recipe(
  "Grasshopper",
  "Pour all ingredients into shaker filled with ice. Shake briskly for few seconds. Strain into chilled cocktail glass. Garnish with mint leaf (optional).",
  cocktailGlass,
  [
    new Ingredient(whiteCrèmeDeCacao, 2, Unit.CL),
    new Ingredient(greenCrèmeDeMenthe, 2, Unit.CL),
    new Ingredient(cream, 2, Unit.CL),
  ],
);
export const hemingwaySpecial = new Recipe(
  "Hemingway special",
  "Pour all ingredients into a shaker with ice. Shake well and strain into a large cocktail glass.",
  cocktailGlass,
  [
    new Ingredient(whiteRum, 6, Unit.CL),
    new Ingredient(grapefruitJuice, 4, Unit.CL),
    new Ingredient(maraschino, 1.5, Unit.CL),
    new Ingredient(limeJuice, 1.5, Unit.CL),
  ],
);
export const horseSNeck = new Recipe(
  "Horse’s neck",
  "Pour Cognac and ginger ale directly into highball glass with ice cubes. Stir gently. If preferred, add dashes of Angostura Bitter. Garnish with rind of one Lemon spiral.",
  collinsGlass,
  [
    new Ingredient(cognac, 4, Unit.CL),
    new Ingredient(gingerAle, 12, Unit.CL),
    new Ingredient(angosturaBitters, 3, Unit.Dash),
    new Ingredient(lemon, 1, Unit.Peel),
  ],
);
export const irishCoffee = new Recipe(
  "Irish coffee",
  "Warm black coffee is poured into a pre-heated Irish coffee glass. Whiskey and at least one teaspoon of sugar is added and stirred until dissolved. Fresh thick chilled cream is carefully poured over the back of a spoon held just above the surface of the coffee. The layer of cream will float on the coffee without mixing. Plain sugar can be replaced with sugar syrup.",
  irishCoffeeMug,
  [
    new Ingredient(irishWhiskey, 5, Unit.CL),
    new Ingredient(coffee, 12, Unit.CL),
    new Ingredient(cream, 5, Unit.CL),
    new Ingredient(sugar, 1, Unit.Tsp),
  ],
);
export const tomCollins = new Recipe(
  "Tom collins",
  "Pour all ingredients directly into highball glass filled with ice. Stir gently. Garnish with Lemon slice and maraschino cherry. Add a dash of Angostura bitters.",
  collinsGlass,
  [
    new Ingredient(oldTomGin, 4.5, Unit.CL),
    new Ingredient(lemonJuice, 3, Unit.CL),
    new Ingredient(simpleSyrup, 1.5, Unit.CL),
    new Ingredient(sodaWater, 6, Unit.CL),
    new Ingredient(angosturaBitters, 1, Unit.Dash),
    new Ingredient(lemon, 1, Unit.Slice),
    new Ingredient(cherry, 1, Unit.Whole),
  ],
);
export const pinaColada = new Recipe(
  "Pina Colada",
  "Blend all the ingredients with ice in a electric blender, pour into a large glass and serve with straws. Garnish with a slice of pineapple with a cocktail cherry. 4 slices of fresh pineapple can be used instead of juice. Historically a few drops of fresh lime juice was added to taste.",
  hurricane,
  [
    new Ingredient(whiteRum, 5, Unit.CL),
    new Ingredient(coconutCream, 3, Unit.CL),
    new Ingredient(pineappleJuice, 5, Unit.CL),
    new Ingredient(pineapple, 1, Unit.Slice),
    new Ingredient(cherry, 1, Unit.Whole),
  ],
);
export const piscoSour = new Recipe(
  "Pisco Sour",
  "Shake and strain into a chilled champagne flute. Dash some Angostura bitters on top.",
  champagneFlute,
  [
    new Ingredient(pisco, 4.5, Unit.CL),
    new Ingredient(simpleSyrup, 2, Unit.CL),
    new Ingredient(lemonJuice, 3, Unit.CL),
    new Ingredient(eggWhite, 1, Unit.Whole),
    new Ingredient(angosturaBitters, 1, Unit.Dash),
  ],
);
export const russianSpringPunch = new Recipe(
  "Russian spring punch",
  "Shake the ingredients and pour into highball glass. Top with Sparkling wine. Garnish with a Lemon slice and a blackberry.",
  highballGlass,
  [
    new Ingredient(vodka, 2.5, Unit.CL),
    new Ingredient(lemonJuice, 2.5, Unit.CL),
    new Ingredient(crèmeDeCassis, 1.5, Unit.CL),
    new Ingredient(simpleSyrup, 1, Unit.CL),
    new Ingredient(sparklingWine, 1, Unit.None),
    new Ingredient(lemon, 1, Unit.Slice),
    new Ingredient(blackberry, 1, Unit.Whole),
  ],
);
export const seaBreeze = new Recipe(
  "Sea breeze",
  "Build all ingredients in a highball glass filled with ice. Garnish with an Orange zest and cherry.",
  highballGlass,
  [
    new Ingredient(vodka, 4, Unit.CL),
    new Ingredient(cranberryJuice, 12, Unit.CL),
    new Ingredient(grapefruitJuice, 3, Unit.CL),
    new Ingredient(orange, 1, Unit.Zest),
    new Ingredient(cherry, 1, Unit.Whole),
  ],
);
export const sexOnTheBeach = new Recipe(
  "Sex on the beach",
  "Build all ingredients in a highball glass filled with ice. Garnish with an Orange zest and cherry.",
  highballGlass,
  [
    new Ingredient(vodka, 4, Unit.CL),
    new Ingredient(peachSchnapps, 2, Unit.CL),
    new Ingredient(orangeJuice, 4, Unit.CL),
    new Ingredient(cranberryJuice, 4, Unit.CL),
    new Ingredient(grapefruitJuice, 3, Unit.CL),
    new Ingredient(orange, 0.5, Unit.Slice),
  ],
);
export const singaporeSling = new Recipe(
  "Singapore sling",
  "Pour all ingredients into cocktail shaker filled with ice cubes. Shake well. Strain into Hurricane glass. Garnish with pineapple and maraschino cherry.",
  hurricane,
  [
    new Ingredient(gin, 3, Unit.CL),
    new Ingredient(cherryLiqueur, 1.5, Unit.CL),
    new Ingredient(cointreau, 0.75, Unit.CL),
    new Ingredient(domBénédictine, 0.75, Unit.CL),
    new Ingredient(pineappleJuice, 12, Unit.CL),
    new Ingredient(limeJuice, 1.5, Unit.CL),
    new Ingredient(grenadine, 1, Unit.CL),
    new Ingredient(angosturaBitters, 1, Unit.Dash),
    new Ingredient(cherry, 1, Unit.Whole),
    new Ingredient(pineapple, 1, Unit.Slice),
  ],
);
export const tequilaSunrise = new Recipe(
  "Tequila sunrise",
  "Pour tequila and Orange juice directly into highball glass filled with ice cubes. Add the grenadine syrup to create chromatic effect (sunrise), do not stir. Garnish with half Orange slice or an Orange zest.",
  collinsGlass,
  [
    new Ingredient(tequila, 4.5, Unit.CL),
    new Ingredient(orangeJuice, 9, Unit.CL),
    new Ingredient(grenadine, 1.5, Unit.CL),
    new Ingredient(orange, 0.5, Unit.Slice),
  ],
);
export const yellowBird = new Recipe(
  "Yellow bird",
  "Shake and strain into a chilled cocktail glass.",
  cocktailGlass,
  [
    new Ingredient(whiteRum, 3, Unit.CL),
    new Ingredient(galliano, 1.5, Unit.CL),
    new Ingredient(tripleSec, 1.5, Unit.CL),
    new Ingredient(limeJuice, 1.5, Unit.CL),
  ],
);
export const zombie = new Recipe(
  "Zombie",
  "Add all ingredients into an electric blender with 170 grams of cracked ice. With pulse bottom blend for a few seconds. Serve in a tall tumbler glass. Garnish with mint leaves.",
  zombieGlass,
  [
    new Ingredient(darkRum, 4.5, Unit.CL),
    new Ingredient(goldRum, 4.5, Unit.CL),
    new Ingredient(demeraraRum, 3, Unit.CL),
    new Ingredient(limeJuice, 2, Unit.CL),
    new Ingredient(falernum, 1.5, Unit.CL),
    new Ingredient(grapefruitJuice, 1, Unit.CL),
    new Ingredient(cinnamonSyrup, 0.5, Unit.CL),
    new Ingredient(grenadine, 1, Unit.Tsp),
    new Ingredient(angosturaBitters, 1, Unit.Dash),
    new Ingredient(absinthe, 2, Unit.Dash),
    new Ingredient(mint, 1, Unit.Leaves),
  ],
);
export const brandyCrusta = new Recipe(
  "Brandy crusta",
  "Mix together all ingredients with ice cubes in a mixing glass and strain into prepared slim cocktail glass. Rub a slice of Orange (or Lemon) around the rim of the glass and dip it in pulverized white sugar, so that the sugar will adhere to the edge of the glass. Carefully curling place the Orange/Lemon peel around the inside of the glass.",
  cocktailGlass,
  [
    new Ingredient(brandy, 5.25, Unit.CL),
    new Ingredient(lemonJuice, 1.5, Unit.CL),
    new Ingredient(maraschino, 0.75, Unit.CL),
    new Ingredient(curaçao, 1, Unit.Tsp),
    new Ingredient(simpleSyrup, 1, Unit.Tsp),
    new Ingredient(aromaticBitters, 2, Unit.Dash),
    new Ingredient(orange, 1, Unit.Slice),
    new Ingredient(powderedSugar, 1, Unit.Tsp),
  ],
);
export const hankyPanky = new Recipe(
  "Hanky panky",
  "Pour all ingredients into mixing glass with ice cubes. Stir well. Strain into chilled cocktail glass. Garnish with Orange zest.",
  cocktailGlass,
  [
    new Ingredient(londonDryGin, 4.5, Unit.CL),
    new Ingredient(sweetRedVermouth, 4.5, Unit.CL),
    new Ingredient(fernetBranca, 0.75, Unit.CL),
    new Ingredient(orange, 1, Unit.Zest),
  ],
);
export const lastWord = new Recipe(
  "Last word",
  "Add all ingredients into a cocktail shaker. Shake with ice and strain into a chilled cocktail glass.",
  cocktailGlass,
  [
    new Ingredient(gin, 2.25, Unit.CL),
    new Ingredient(greenChartreuse, 2.25, Unit.CL),
    new Ingredient(maraschino, 2.25, Unit.CL),
    new Ingredient(limeJuice, 2.25, Unit.CL),
  ],
);
export const martinez = new Recipe(
  "Martinez",
  "Pour all ingredients into mixing glass with ice cubes. Stir well. Strain into chilled cocktail glass. Garnish with Lemon zest.",
  cocktailGlass,
  [
    new Ingredient(londonDryGin, 4.5, Unit.CL),
    new Ingredient(sweetRedVermouth, 4.5, Unit.CL),
    new Ingredient(maraschino, 1, Unit.Tsp),
    new Ingredient(orangeBitters, 2, Unit.Dash),
    new Ingredient(lemon, 1, Unit.Zest),
  ],
);
export const vieuxCarré = new Recipe(
  "Vieux carré",
  "Pour all ingredients into mixing glass with ice cubes. Stir well. Strain into chilled cocktail glass. Garnish with Orange zest and maraschino cherry.",
  cocktailGlass,
  [
    new Ingredient(ryeWhiskey, 3, Unit.CL),
    new Ingredient(cognac, 3, Unit.CL),
    new Ingredient(sweetRedVermouth, 3, Unit.CL),
    new Ingredient(domBénédictine, 1, Unit.Tsp),
    new Ingredient(peychaudSBitters, 2, Unit.Dash),
    new Ingredient(orange, 1, Unit.Zest),
    new Ingredient(cherry, 1, Unit.Whole),
  ],
);
export const beeSKnees = new Recipe(
  "Bee’s knees",
  "Stir honey with Lemon and Orange juices until it dissolves, add gin and shake with ice. Strain into a chilled cocktail glass. Optionally garnish with a Lemon or Orange zest.",
  cocktailGlass,
  [
    new Ingredient(londonDryGin, 5.25, Unit.CL),
    new Ingredient(honeySyrup, 2, Unit.Tsp),
    new Ingredient(lemonJuice, 2.25, Unit.CL),
    new Ingredient(orangeJuice, 2.25, Unit.CL),
  ],
);
export const cachanchara = new Recipe(
  "Cachanchara",
  "Mix honey with water and lime juice and spread the mixture on the bottom and sides of the glass. Add cracked ice, and then the rum. End by energetically stirring from bottom to top. Garnish with Lime wedge.",
  oldFashionedGlass,
  [
    new Ingredient(cubanAguardiente, 6, Unit.CL),
    new Ingredient(lemonJuice, 1.5, Unit.CL),
    new Ingredient(honey, 1.5, Unit.CL),
    new Ingredient(water, 5, Unit.CL),
    new Ingredient(lime, 1, Unit.Wedge),
  ],
);
export const fernandito = new Recipe(
  "Fernandito",
  "Pour the Fernet Branca into a double old fashioned glass with ice, fill the glass up with Cola. Gently stir.",
  highballGlass,
  [
    new Ingredient(fernetBranca, 5, Unit.CL),
    new Ingredient(cola, 1, Unit.None),
  ],
);
export const oldCuban = new Recipe(
  "Old cuban",
  "Pour all ingredients into cocktail shaker except the wine, shake well with ice, strain into chilled elegant cocktail glass. Top up with the sparkling wine. Garnish with mint springs.",
  cocktailGlass,
  [
    new Ingredient(rum, 4.5, Unit.CL),
    new Ingredient(sparklingWine, 6, Unit.CL),
    new Ingredient(limeJuice, 2.25, Unit.CL),
    new Ingredient(simpleSyrup, 3, Unit.CL),
    new Ingredient(angosturaBitters, 2, Unit.Dash),
    new Ingredient(mint, 3, Unit.Sprig),
  ],
);
export const paloma = new Recipe(
  "Paloma",
  "Pour the tequila into a highball glass, squeeze the lime juice. Add ice and salt, fill up pink grapefruit soda. Stir gently. Garnish with a slice of lime.",
  highballGlass,
  [
    new Ingredient(tequila, 5, Unit.CL),
    new Ingredient(grapefruitSoda, 10, Unit.CL),
    new Ingredient(limeJuice, 2, Unit.Tsp),
    new Ingredient(salt, 1, Unit.None),
    new Ingredient(lime, 1, Unit.Slice),
  ],
);
export const paperPlane = new Recipe(
  "Paper plane",
  "Pour all ingredients into cocktail shaker, shake well with ice, strain into chilled cocktail glass.",
  cocktailGlass,
  [
    new Ingredient(bourbonWhiskey, 3, Unit.CL),
    new Ingredient(amaroNonino, 3, Unit.CL),
    new Ingredient(aperol, 3, Unit.CL),
    new Ingredient(lemonJuice, 3, Unit.CL),
  ],
);
export const penicillin = new Recipe(
  "Penicillin",
  "Muddle fresh ginger in a shaker and add the remaining ingredients, except for the Islay single malt whiskey. Fill the shaker with ice and shake. Double-strain into a chilled old fashioned glass with ice. Float the single malt whisky on top. Garnish with a candied ginger.",
  oldFashionedGlass,
  [
    new Ingredient(blendedScotchWhiskey, 6, Unit.CL),
    new Ingredient(islaySingleMaltScotch, 0.75, Unit.CL),
    new Ingredient(lemonJuice, 2.25, Unit.CL),
    new Ingredient(honeySyrup, 2.25, Unit.CL),
    new Ingredient(ginger, 3, Unit.Slice),
    new Ingredient(candiedGinger, 1, Unit.Whole),
  ],
);
export const southside = new Recipe(
  "Southside",
  "Egg white optional. Pour all ingredients into a cocktail shaker, shake well with ice, double-strain into chilled cocktail glass. If egg white is used shake vigorously. Garnish with mint springs.",
  cocktailGlass,
  [
    new Ingredient(londonDryGin, 6, Unit.CL),
    new Ingredient(lemonJuice, 3, Unit.CL),
    new Ingredient(simpleSyrup, 1.5, Unit.CL),
    new Ingredient(mint, 2, Unit.Sprig),
  ],
);
export const spicyFifty = new Recipe(
  "Spicy fifty",
  "Pour all ingredients (including 2 thin slices of pepper) into a cocktail shaker, shake well with ice, double-strain into chilled cocktail glass. Garnish with a red chili pepper.",
  cocktailGlass,
  [
    new Ingredient(vodka, 5, Unit.CL),
    new Ingredient(elderflowerSyrup, 1.5, Unit.CL),
    new Ingredient(lemonJuice, 1.5, Unit.CL),
    new Ingredient(honeySyrup, 1, Unit.CL),
    new Ingredient(vanillaExtract, 1, Unit.Drop),
    new Ingredient(redChiliPepper, 1, Unit.None),
  ],
);
export const sufferingBastard = new Recipe(
  "Suffering bastard",
  "Pour all ingredients into cocktail shaker except the ginger beer, shake well with ice, Pour unstrained into a Collins glass or in the original S. Bastard mug and top up with ginger beer. Garnish with mint sprig and optionally an Orange slice as well.",
  collinsGlass,
  [
    new Ingredient(brandy, 3, Unit.CL),
    new Ingredient(gin, 3, Unit.CL),
    new Ingredient(limeJuice, 1.5, Unit.CL),
    new Ingredient(angosturaBitters, 2, Unit.Dash),
    new Ingredient(gingerBeer, 1, Unit.None),
    new Ingredient(mint, 1, Unit.Sprig),
  ],
);
export const tipperary = new Recipe(
  "Tipperary",
  "Pour all ingredients into mixing glass with ice cubes. Stir well. Strain into chilled martini cocktail glass. Garnish with a slice of Orange.",
  cocktailGlass,
  [
    new Ingredient(irishWhiskey, 5, Unit.CL),
    new Ingredient(sweetRedVermouth, 2.5, Unit.CL),
    new Ingredient(greenChartreuse, 1.5, Unit.CL),
    new Ingredient(angosturaBitters, 2, Unit.Dash),
    new Ingredient(orange, 1, Unit.Slice),
  ],
);
export const trinidadSour = new Recipe(
  "Trinidad sour",
  "Pour all ingredients into mixing glass with ice cubes. Stir well. Strain into chilled cocktail glass.",
  cocktailGlass,
  [
    new Ingredient(angosturaBitters, 4.5, Unit.CL),
    new Ingredient(orgeatSyrup, 3, Unit.CL),
    new Ingredient(lemonJuice, 2.25, Unit.CL),
    new Ingredient(ryeWhiskey, 1.5, Unit.CL),
  ],
);
export const veNTo = new Recipe(
  "Ve.n.to",
  "Egg white optional. Pour all ingredients into the shaker. Shake vigorously with ice. Strain into a chilled small tumbler glass filled with ice. Garnish with Lemon zest and white grapes.",
  oldFashionedGlass,
  [
    new Ingredient(grappa, 4.5, Unit.CL),
    new Ingredient(lemonJuice, 2.25, Unit.CL),
    new Ingredient(honeySyrup, 1.5, Unit.CL),
    new Ingredient(chamomileSyrup, 1.5, Unit.CL),
    new Ingredient(honeySyrup, 1.5, Unit.CL),
    new Ingredient(lemon, 1, Unit.Zest),
    new Ingredient(whiteGrape, 3, Unit.Whole),
  ],
);
export const illegal = new Recipe(
  "Illegal",
  "Egg white optional. Pour all ingredients into the shaker. Shake vigorously with ice. Strain into a chilled cocktail glass, or “on the rocks” in a traditional clay or terracotta mug.",
  cocktailGlass,
  [
    new Ingredient(mezcal, 3, Unit.CL),
    new Ingredient(overproofWhiteRum, 1.5, Unit.CL),
    new Ingredient(limeJuice, 2.25, Unit.CL),
    new Ingredient(falernum, 1.5, Unit.CL),
    new Ingredient(simpleSyrup, 1.5, Unit.CL),
    new Ingredient(maraschino, 1, Unit.Tsp),
  ],
);
export const nakedAndFamous = new Recipe(
  "Naked and famous",
  "Pour all ingredients into cocktail shaker, shake well with ice, strain into chilled cocktail glass.",
  cocktailGlass,
  [
    new Ingredient(mezcal, 2.25, Unit.CL),
    new Ingredient(yellowChartreuse, 2.25, Unit.CL),
    new Ingredient(aperol, 2.25, Unit.CL),
    new Ingredient(limeJuice, 2.25, Unit.CL),
  ],
);
export const newYorkSour = new Recipe(
  "New York sour",
  "Bourbon can be used instead of rye. Pour all ingredients into the shaker. Shake vigorously with ice. Strain into a chilled rocks glass filled with ice. Float the wine on top. Garnish with Lemon or Orange zest with cherry.",
  oldFashionedGlass,
  [
    new Ingredient(ryeWhiskey, 6, Unit.CL),
    new Ingredient(lemonJuice, 3, Unit.CL),
    new Ingredient(eggWhite, 3, Unit.CL),
    new Ingredient(simpleSyrup, 2.25, Unit.CL),
    new Ingredient(redWine, 1.5, Unit.CL),
    new Ingredient(lemon, 1, Unit.Zest),
    new Ingredient(cherry, 1, Unit.Whole),
  ],
);
export const spritz = new Recipe(
  "Spritz",
  "Build all ingredients into a wine glass filled with ice. Stir gently. Garnish with a slice of Orange.",
  wineGlass,
  [
    new Ingredient(prosecco, 9, Unit.CL),
    new Ingredient(aperol, 6, Unit.CL),
    new Ingredient(sodaWater, 1, Unit.Splash),
    new Ingredient(orange, 1, Unit.Slice),
  ],
);
export const gimlet = new Recipe(
  "Gimlet",
  "Pour all ingredients into a cocktail strainer, shake well with ice, strain into chilled cocktail glass.",
  cocktailGlass,
  [
    new Ingredient(limeJuice, 2, Unit.CL),
    new Ingredient(simpleSyrup, 2, Unit.CL),
    new Ingredient(gin, 6, Unit.CL),
  ],
);
export const martini = new Recipe(
  "Martini",
  "Mix gin and vermouth in a chilled pint glass, stir with ice. Strain into a champagne coupe.",
  champagneCoupe,
  [
    new Ingredient(gin, 6, Unit.CL),
    new Ingredient(dryVermouth, 6, Unit.CL),
  ],
);
export const vodkaMartini = new Recipe(
  "Vodka martini",
  "Mix vodka and dry vermouth in a pint glass. The amount of vermouth used varies and can be as little as a drop. Stir with ice. Optionally add olive brine to make a dirty martini.",
  cocktailGlass,
  [
    new Ingredient(vodka, 8, Unit.CL),
    new Ingredient(dryVermouth, 1, Unit.Drop),
  ],
);
export const _20thCentury = new Recipe(
  "20th century",
  "Combine ingredients in a cocktail shaker, shake with ice, strain into a cocktail glass.",
  cocktailGlass,
  [
    new Ingredient(gin, 4.5, Unit.CL),
    new Ingredient(lemonJuice, 2, Unit.CL),
    new Ingredient(whiteCrèmeDeCacao, 1.5, Unit.CL),
    new Ingredient(kinaLillet, 2, Unit.CL),
    new Ingredient(lemon, 1, Unit.Twist),
  ],
);
export const artillery = new Recipe(
  "Artillery",
  "Stir all ingredients with ice and strain into a cocktail glass.",
  cocktailGlass,
  [
    new Ingredient(sweetRedVermouth, 1.5, Unit.Tsp),
    new Ingredient(gin, 4.5, Unit.CL),
    new Ingredient(angosturaBitters, 2, Unit.Dash),
  ],
);
export const whiskeyFix = new Recipe(
  "Whiskey fix",
  "Shake in a cocktail shaker with a small piece of ice. Drain into the glass and top with crushed ice and garnish with a Lemon wedge and a luxardo cherry.",
  oldFashionedGlass,
  [
    new Ingredient(lemonJuice, 2, Unit.CL),
    new Ingredient(simpleSyrup, 2, Unit.CL),
    new Ingredient(whiskey, 6, Unit.CL),
    new Ingredient(lemon, 1, Unit.Wedge),
    new Ingredient(cherry, 1, Unit.Whole),
  ],
);
