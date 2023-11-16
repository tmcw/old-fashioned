import { Ingredient, Recipe } from "./types.ts";
import {
  absinthe,
  agaveNectar,
  amaretto,
  amaroNonino,
  angosturaBitters,
  anyBitters,
  aperol,
  apricotBrandy,
  aromaticBitters,
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
import {
  BaseUnit,
  CL,
  Cube,
  Dash,
  Drop,
  Leaves,
  None,
  Peel,
  Slice,
  Spear,
  Splash,
  Sprig,
  Tsp,
  Twist,
  Wedge,
  Whole,
  Zest,
} from "./unit.ts";
export const toronto = new Recipe(
  "Toronto",
  "Stir in mixing glass with ice & strain. Garnish with Orange slice.",
  cocktailGlass,
  [
    canadianWhiskey.ingredient(
      new CL(5.5),
    ),
    fernetBranca.ingredient(
      new CL(0.75),
    ),
    sugar.ingredient(
      new Tsp(0.25),
    ),
    angosturaBitters.ingredient(
      new Dash(1),
    ),
    orange.ingredient(
      new Slice(1),
    ),
  ],
);
export const french_75 = new Recipe(
  "French 75",
  "Pour all the ingredients, except Champagne, into a shaker. Shake well and strain into a Champagne flute. Top up with Champagne. Stir gently.",
  champagneFlute,
  [
    gin.ingredient(
      new CL(3),
    ),
    simpleSyrup.ingredient(
      new CL(1.5),
    ),
    lemonJuice.ingredient(
      new CL(1.5),
    ),
    champagne.ingredient(
      new CL(6),
    ),
  ],
);
export const cubaLibre = new Recipe(
  "Cuba Libre",
  "Build all ingredients in a highball glass filled with ice. Garnish with lime wedge.",
  highballGlass,
  [
    cola.ingredient(
      new CL(12),
    ),
    whiteRum.ingredient(
      new CL(5),
    ),
    limeJuice.ingredient(
      new CL(1),
    ),
    lime.ingredient(
      new Wedge(1),
    ),
  ],
);
export const moscowMule = new Recipe(
  "Moscow mule",
  "Combine vodka and ginger beer in a highball glass filled with ice. Add lime juice. Stir gently. Garnish with a lime slice.",
  copperMug,
  [
    vodka.ingredient(
      new CL(4.5),
    ),
    gingerBeer.ingredient(
      new CL(12),
    ),
    limeJuice.ingredient(
      new CL(1),
    ),
    lime.ingredient(
      new Slice(1),
    ),
  ],
);
export const mimosa = new Recipe(
  "Mimosa",
  "Ensure both ingredients are well chilled, then mix into the glass. Garnish with Orange twist (optional).",
  champagneFlute,
  [
    champagne.ingredient(
      new CL(7.5),
    ),
    orangeJuice.ingredient(
      new CL(7.5),
    ),
    orange.optionalIngredient(
      new Twist(1),
    ),
  ],
);
export const bellini = new Recipe(
  "Bellini",
  "Pour peach purée into chilled glass, add sparkling wine. Stir gently.",
  champagneFlute,
  [
    prosecco.ingredient(
      new CL(10),
    ),
    peachPurée.ingredient(
      new CL(5),
    ),
  ],
);
export const blackRussian = new Recipe(
  "Black russian",
  "Pour the ingredients into an old fashioned glass filled with ice cubes. Stir gently.",
  oldFashionedGlass,
  [
    vodka.ingredient(
      new CL(5),
    ),
    coffeeLiqueur.ingredient(
      new CL(2),
    ),
  ],
);
export const caipirinha = new Recipe(
  "Caipirinha",
  "Place small lime wedges from one lime and sugar into old fashioned glass and muddle (mash the two ingredients together using a muddler or a wooden spoon). Fill the glass with ice and add the Cachaça. Use vodka instead of cachaça for a caipiroska; rum instead of cachaça for a caipirissima;",
  oldFashionedGlass,
  [
    cachaça.ingredient(
      new CL(6),
    ),
    lime.ingredient(
      new Whole(1),
    ),
    caneSugar.ingredient(
      new Tsp(4),
    ),
  ],
);
export const mojito = new Recipe(
  "Mojito",
  "Muddle mint springs with sugar and lime juice. Add splash of soda water and fill glass with cracked ice. Pour rum and top with soda water. Garnish with sprig of mint leaves and Lemon slice. Serve with straw.",
  collinsGlass,
  [
    whiteRum.ingredient(
      new CL(4.5),
    ),
    limeJuice.ingredient(
      new CL(2),
    ),
    mint.ingredient(
      new Sprig(6),
    ),
    caneSugar.ingredient(
      new Tsp(2),
    ),
    lemon.ingredient(
      new Slice(1),
    ),
    sodaWater.ingredient(
      new Splash(1),
    ),
  ],
);
export const darkNStormy = new Recipe(
  "Dark ’n’ Stormy",
  "Fill glass with ice, add rum and top with ginger beer. Garnish with lime wedge.",
  highballGlass,
  [
    darkRum.ingredient(
      new CL(6),
    ),
    gingerBeer.ingredient(
      new CL(10),
    ),
    lime.ingredient(
      new Wedge(1),
    ),
  ],
);
export const bramble = new Recipe(
  "Bramble",
  "Fill glass with crushed ice. Build gin, Lemon juice and simple syrup over. Stir, and then pour blackberry liqueur over in a circular fashion to create marbling effect. Garnish with two blackberries and Lemon slice.",
  oldFashionedGlass,
  [
    gin.ingredient(
      new CL(4),
    ),
    lemonJuice.ingredient(
      new CL(1.5),
    ),
    simpleSyrup.ingredient(
      new CL(1),
    ),
    crèmeDeMure.ingredient(
      new CL(1.5),
    ),
    lemon.ingredient(
      new Slice(1),
    ),
    blackberry.ingredient(
      new Whole(2),
    ),
  ],
);
export const frenchMartini = new Recipe(
  "French martini",
  "Pour all ingredients into shaker with ice cubes. Shake well and strain into a chilled cocktail glass. Squeeze oil from Lemon peel onto the drink.",
  cocktailGlass,
  [
    vodka.ingredient(
      new CL(4),
    ),
    raspberryLiqueur.ingredient(
      new CL(1.5),
    ),
    pineappleJuice.ingredient(
      new CL(1),
    ),
    lemon.optionalIngredient(
      new Peel(1),
    ),
  ],
);
export const kamikaze = new Recipe(
  "Kamikaze",
  "Shake all ingredients together with ice. Strain into glass. Garnish with lime slice.",
  cocktailGlass,
  [
    vodka.ingredient(
      new CL(3),
    ),
    tripleSec.ingredient(
      new CL(3),
    ),
    limeJuice.ingredient(
      new CL(3),
    ),
    lime.ingredient(
      new Slice(1),
    ),
  ],
);
export const lemonDropMartini = new Recipe(
  "Lemon drop martini",
  "Shake and strain into a chilled cocktail glass rimmed with sugar, garnish with a slice of Lemon.",
  cocktailGlass,
  [
    vodka.ingredient(
      new CL(2.5),
    ),
    tripleSec.ingredient(
      new CL(2),
    ),
    lemonJuice.ingredient(
      new CL(1.5),
    ),
    sugar.ingredient(
      new None(1),
    ),
    lime.ingredient(
      new Slice(1),
    ),
  ],
);
export const vesper = new Recipe(
  "Vesper",
  "Shake and strain into a chilled cocktail glass. Add the garnish.",
  cocktailGlass,
  [
    gin.ingredient(
      new CL(4.5),
    ),
    vodka.ingredient(
      new CL(1.5),
    ),
    lilletBlanc.ingredient(
      new CL(0.75),
    ),
    lemon.ingredient(
      new Zest(1),
    ),
  ],
);
export const boulevardier = new Recipe(
  "Boulevardier",
  "Pour all ingredients into mixing glass with ice cubes. Stir well. Strain into chilled cocktail glass. Garnish with a Orange zest, optionally a Lemon zest.",
  oldFashionedGlass,
  [
    bourbonWhiskey.ingredient(
      new CL(4.5),
    ),
    sweetRedVermouth.ingredient(
      new CL(3),
    ),
    campari.ingredient(
      new CL(3),
    ),
    orange.ingredient(
      new Peel(1),
    ),
    lemon.optionalIngredient(
      new Zest(1),
    ),
  ],
);
export const alexander = new Recipe(
  "Alexander",
  "Shake all ingredients with ice and strain contents into a cocktail glass. Sprinkle ground nutmeg on top and serve.",
  cocktailGlass,
  [
    cognac.ingredient(
      new CL(3),
    ),
    brownCrèmeDeCacao.ingredient(
      new CL(3),
    ),
    lightCream.ingredient(
      new CL(3),
    ),
    nutmeg.ingredient(
      new None(1),
    ),
  ],
);
export const americano = new Recipe(
  "Americano",
  "Pour the Campari and vermouth over ice into a highball glass, add a splash of soda water and garnish with half Orange slice and a Lemon twist.",
  highballGlass,
  [
    campari.ingredient(
      new CL(3),
    ),
    sweetRedVermouth.ingredient(
      new CL(3),
    ),
    sodaWater.ingredient(
      new Splash(1),
    ),
    orange.ingredient(
      new Slice(0.5),
    ),
    lemon.ingredient(
      new Twist(1),
    ),
  ],
);
export const angelFace = new Recipe(
  "Angel face",
  "Shake all ingredients with ice and strain contents into a cocktail glass.",
  cocktailGlass,
  [
    gin.ingredient(
      new CL(3),
    ),
    apricotBrandy.ingredient(
      new CL(3),
    ),
    calvados.ingredient(
      new CL(3),
    ),
  ],
);
export const aviation = new Recipe(
  "Aviation",
  "Add all ingredients into cocktail shaker filled with ice. Shake well and strain into cocktail glass. Garnish with a cherry.",
  cocktailGlass,
  [
    gin.ingredient(
      new CL(4.5),
    ),
    lemonJuice.ingredient(
      new CL(1.5),
    ),
    maraschino.ingredient(
      new CL(1.5),
    ),
    crèmeDeViolette.ingredient(
      new Tsp(1),
    ),
    cherry.ingredient(
      new Whole(1),
    ),
  ],
);
export const bacardiCocktail = new Recipe(
  "Bacardi cocktail",
  "Shake together with ice. Strain into glass and serve.",
  cocktailGlass,
  [
    whiteRum.ingredient(
      new CL(4.5),
    ),
    limeJuice.ingredient(
      new CL(2),
    ),
    grenadine.ingredient(
      new CL(1),
    ),
  ],
);
export const betweenTheSheets = new Recipe(
  "Between the sheets",
  "Pour all ingredients into shaker with ice cubes, shake, strain into chilled cocktail glass.",
  cocktailGlass,
  [
    whiteRum.ingredient(
      new CL(3),
    ),
    cognac.ingredient(
      new CL(3),
    ),
    tripleSec.ingredient(
      new CL(3),
    ),
    lemonJuice.ingredient(
      new CL(2),
    ),
  ],
);
export const casino = new Recipe(
  "Casino",
  "Pour all ingredients into shaker with ice cubes, shake well. Strain into chilled cocktail glass and garnish with a Lemon twist and a marachino cherry.",
  cocktailGlass,
  [
    oldTomGin.ingredient(
      new CL(4),
    ),
    maraschino.ingredient(
      new CL(1),
    ),
    orangeBitters.ingredient(
      new CL(1),
    ),
    lemonJuice.ingredient(
      new CL(1),
    ),
    lemon.ingredient(
      new Twist(1),
    ),
    cherry.ingredient(
      new Whole(1),
    ),
  ],
);
export const cloverClub = new Recipe(
  "Clover club",
  "Pour all ingredients into cocktail shaker filled with ice. Shake well. Strain into cocktail glass. Garnish with fresh raspberries.",
  cocktailGlass,
  [
    gin.ingredient(
      new CL(4.5),
    ),
    lemonJuice.ingredient(
      new CL(1.5),
    ),
    raspberrySyrup.ingredient(
      new CL(1.5),
    ),
    eggWhite.ingredient(
      new Drop(3),
    ),
    raspberry.ingredient(
      new Whole(2),
    ),
  ],
);
export const daiquiri = new Recipe(
  "Daiquiri",
  "Pour all ingredients into shaker with ice cubes. Shake well. Double Strain in chilled cocktail glass.",
  cocktailGlass,
  [
    whiteRum.ingredient(
      new CL(4.5),
    ),
    limeJuice.ingredient(
      new CL(2.5),
    ),
    simpleSyrup.ingredient(
      new CL(1.5),
    ),
  ],
);
export const derby = new Recipe(
  "Derby",
  "Pour all ingredients into a mixing glass with ice. Stir. Strain into a cocktail glass. Garnish with fresh mint leaves in the drink.",
  cocktailGlass,
  [
    gin.ingredient(
      new CL(6),
    ),
    peachBitters.ingredient(
      new Drop(2),
    ),
    mint.ingredient(
      new Leaves(1),
    ),
  ],
);
export const dryMartini = new Recipe(
  "Dry martini",
  "Straight: Pour all ingredients into mixing glass with ice cubes. Stir well. Strain into chilled martini cocktail glass. Squeeze oil from Lemon peel onto the drink, or garnish with olive.",
  cocktailGlass,
  [
    gin.ingredient(
      new CL(6),
    ),
    dryVermouth.ingredient(
      new CL(1),
    ),
    lemon.ingredient(
      new Peel(1),
    ),
    olive.ingredient(
      new Whole(1),
    ),
  ],
);
export const ginFizz = new Recipe(
  "Gin fizz",
  "Shake all ingredients with ice cubes, except soda water. Pour into tumbler. Top with soda water. Garnish with Lemon slice.",
  oldFashionedGlass,
  [
    gin.ingredient(
      new CL(4.5),
    ),
    lemonJuice.ingredient(
      new CL(3),
    ),
    simpleSyrup.ingredient(
      new CL(1),
    ),
    sodaWater.ingredient(
      new CL(8),
    ),
    lemon.ingredient(
      new Slice(1),
    ),
  ],
);
export const johnCollins = new Recipe(
  "John collins",
  "Pour all ingredients directly into highball glass filled with ice. Stir gently. Garnish with Lemon slice and maraschino cherry. Add a dash of Angostura bitters.",
  collinsGlass,
  [
    gin.ingredient(
      new CL(4.5),
    ),
    lemonJuice.ingredient(
      new CL(3),
    ),
    simpleSyrup.ingredient(
      new CL(1.5),
    ),
    sodaWater.ingredient(
      new CL(6),
    ),
    angosturaBitters.ingredient(
      new Dash(1),
    ),
    lemon.ingredient(
      new Slice(1),
    ),
    cherry.ingredient(
      new Whole(1),
    ),
  ],
);
export const manhattan = new Recipe(
  "Manhattan",
  "Pour all ingredients into mixing glass with ice cubes. Stir well. Strain into chilled cocktail glass. Garnish with cocktail cherry.",
  cocktailGlass,
  [
    ryeWhiskey.ingredient(
      new CL(5),
    ),
    sweetRedVermouth.ingredient(
      new CL(2),
    ),
    angosturaBitters.ingredient(
      new Dash(1),
    ),
    cherry.ingredient(
      new Whole(1),
    ),
  ],
);
export const maryPickford = new Recipe(
  "Mary pickford",
  "Shake and strain into a chilled large cocktail glass",
  cocktailGlass,
  [
    whiteRum.ingredient(
      new CL(6),
    ),
    pineappleJuice.ingredient(
      new CL(6),
    ),
    grenadine.ingredient(
      new CL(1),
    ),
    maraschino.ingredient(
      new CL(1),
    ),
  ],
);
export const monkeyGland = new Recipe(
  "Monkey gland",
  "Shake well over ice cubes in a shaker, strain into a chilled cocktail glass.",
  cocktailGlass,
  [
    gin.ingredient(
      new CL(5),
    ),
    orangeJuice.ingredient(
      new CL(3),
    ),
    absinthe.ingredient(
      new Drop(2),
    ),
    grenadine.ingredient(
      new Drop(2),
    ),
  ],
);
export const negroni = new Recipe(
  "Negroni",
  "Pour all ingredients directly into old-fashioned glass filled with ice. Stir gently. Garnish with half Orange slice.",
  oldFashionedGlass,
  [
    gin.ingredient(
      new CL(3),
    ),
    sweetRedVermouth.ingredient(
      new CL(3),
    ),
    campari.ingredient(
      new CL(3),
    ),
    orange.ingredient(
      new Slice(0.5),
    ),
  ],
);
export const oldFashioned = new Recipe(
  "Old fashioned",
  "Place sugar cube in old-fashioned glass and saturate with bitters, add a dash of plain water. Muddle until dissolve. Fill the glass with ice cubes and add whiskey. Garnish with Orange slice and a cocktail cherry.",
  oldFashionedGlass,
  [
    whiskey.ingredient(
      new CL(4.5),
    ),
    angosturaBitters.ingredient(
      new Dash(2),
    ),
    sugar.ingredient(
      new Cube(1),
    ),
    water.ingredient(
      new Dash(3),
    ),
    orange.ingredient(
      new Slice(1),
    ),
    cherry.ingredient(
      new Whole(1),
    ),
  ],
);
export const paradise = new Recipe(
  "Paradise",
  "Shake together over ice. Strain into cocktail glass and serve chilled.",
  cocktailGlass,
  [
    gin.ingredient(
      new CL(3.5),
    ),
    apricotBrandy.ingredient(
      new CL(2),
    ),
    orangeJuice.ingredient(
      new CL(1.5),
    ),
  ],
);
export const planterSPunch = new Recipe(
  "Planter’s punch",
  "Pour all ingredients, except the bitters, into shaker filled with ice. Shake well. Pour into large glass, filled with ice. Add dash Angostura bitters. Garnish with cocktail cherry and pineapple.",
  cocktailGlass,
  [
    darkRum.ingredient(
      new CL(4.5),
    ),
    orangeJuice.ingredient(
      new CL(3.5),
    ),
    pineappleJuice.ingredient(
      new CL(3.5),
    ),
    lemonJuice.ingredient(
      new CL(2),
    ),
    grenadine.ingredient(
      new CL(1),
    ),
    simpleSyrup.ingredient(
      new CL(1),
    ),
    angosturaBitters.ingredient(
      new Dash(3),
    ),
    cherry.ingredient(
      new Whole(1),
    ),
    pineapple.ingredient(
      new Slice(1),
    ),
  ],
);
export const portoFlip = new Recipe(
  "Porto flip",
  "Pour all ingredients into cocktail shaker filled with ice. Shake well. Strain into cocktail glass. Sprinkle with fresh ground nutmeg.",
  cocktailGlass,
  [
    brandy.ingredient(
      new CL(1.5),
    ),
    port.ingredient(
      new CL(4.5),
    ),
    eggYolk.ingredient(
      new CL(1),
    ),
    nutmeg.ingredient(
      new None(1),
    ),
  ],
);
export const ramosFizz = new Recipe(
  "Ramos fizz",
  "Pour all ingredients (except soda) in a mixing glass, dry shake (no ice) for two minutes, add ice and hard shake for another minute. Strain into a highball glass without ice, top with soda.",
  highballGlass,
  [
    gin.ingredient(
      new CL(4.5),
    ),
    cream.ingredient(
      new CL(6),
    ),
    simpleSyrup.ingredient(
      new CL(3),
    ),
    limeJuice.ingredient(
      new CL(1.5),
    ),
    lemonJuice.ingredient(
      new CL(1.5),
    ),
    eggWhite.ingredient(
      new Whole(1),
    ),
    orangeFlowerWater.ingredient(
      new Dash(3),
    ),
    vanillaExtract.ingredient(
      new Drop(2),
    ),
    sodaWater.ingredient(
      new None(1),
    ),
  ],
);
export const rustyNail = new Recipe(
  "Rusty nail",
  "Pour all ingredients directly into old-fashioned glass filled with ice. Stir gently. Garnish with a Lemon twist.",
  oldFashionedGlass,
  [
    scotchWhiskey.ingredient(
      new CL(4.5),
    ),
    drambuie.ingredient(
      new CL(2.5),
    ),
    lemon.ingredient(
      new Twist(1),
    ),
  ],
);
export const sazerac = new Recipe(
  "Sazerac",
  "Rinse a chilled old-fashioned glass with the absinthe, add crushed ice and set it aside. Stir the remaining ingredients over ice and set it aside. Discard the ice and any excess absinthe from the prepared glass, and strain the drink into the glass. Add the Lemon peel for garnish. Note: The original recipe changed after the American Civil War, rye whiskey substituted cognac as it became hard to obtain.",
  oldFashionedGlass,
  [
    cognac.ingredient(
      new CL(5),
    ),
    absinthe.ingredient(
      new CL(1),
    ),
    sugar.ingredient(
      new Cube(1),
    ),
    peychaudSBitters.ingredient(
      new Dash(2),
    ),
    lemon.ingredient(
      new Peel(1),
    ),
  ],
);
export const screwdriver = new Recipe(
  "Screwdriver",
  "Pour all ingredients into a highball glass filled with ice. Stir gently. Garnish with an Orange slice.",
  highballGlass,
  [
    vodka.ingredient(
      new CL(5),
    ),
    orangeJuice.ingredient(
      new CL(10),
    ),
    orange.ingredient(
      new Slice(1),
    ),
  ],
);
export const sidecar = new Recipe(
  "Sidecar",
  "Pour all ingredients into cocktail shaker filled with ice. Shake well and strain into cocktail glass.",
  cocktailGlass,
  [
    cognac.ingredient(
      new CL(5),
    ),
    tripleSec.ingredient(
      new CL(2),
    ),
    lemonJuice.ingredient(
      new CL(2),
    ),
  ],
);
export const stinger = new Recipe(
  "Stinger",
  "Pour in a mixing glass with ice, stir and strain into a cocktail glass. May also be served on rocks in a rocks glass.",
  cocktailGlass,
  [
    cognac.ingredient(
      new CL(5),
    ),
    whiteCrèmeDeMenthe.ingredient(
      new CL(2),
    ),
  ],
);
export const tuxedo = new Recipe(
  "Tuxedo",
  "Stir all ingredients with ice and strain into cocktail glass. Garnish with a cocktail cherry and a Lemon zest twist.",
  cocktailGlass,
  [
    oldTomGin.ingredient(
      new CL(3),
    ),
    dryVermouth.ingredient(
      new CL(3),
    ),
    maraschino.ingredient(
      new Tsp(0.5),
    ),
    absinthe.ingredient(
      new Tsp(0.25),
    ),
    orangeBitters.ingredient(
      new Dash(3),
    ),
    cherry.ingredient(
      new Whole(1),
    ),
    lemon.ingredient(
      new Twist(1),
    ),
  ],
);
export const whiskeySour = new Recipe(
  "Whiskey sour",
  "Egg white is optional. Pour all ingredients into cocktail shaker filled with ice. Shake well (a little harder if using egg white). Strain in cocktail glass. Garnish with half Orange slice and maraschino cherry.",
  oldFashionedGlass,
  [
    bourbonWhiskey.ingredient(
      new CL(4.5),
    ),
    lemonJuice.ingredient(
      new CL(3),
    ),
    simpleSyrup.ingredient(
      new CL(1.5),
    ),
    cherry.ingredient(
      new Whole(1),
    ),
    orange.ingredient(
      new Slice(0.5),
    ),
    eggWhite.optionalIngredient(
      new Dash(1),
    ),
  ],
);
export const whiteLady = new Recipe(
  "White lady",
  "Add all ingredients into cocktail shaker filled with ice. Shake well and strain into large cocktail glass.",
  cocktailGlass,
  [
    gin.ingredient(
      new CL(4),
    ),
    tripleSec.ingredient(
      new CL(3),
    ),
    lemonJuice.ingredient(
      new CL(2),
    ),
  ],
);
export const frenchConnection = new Recipe(
  "French connection",
  "Pour all ingredients directly into old fashioned glass filled with ice cubes. Stir gently.",
  oldFashionedGlass,
  [
    cognac.ingredient(
      new CL(3.5),
    ),
    amaretto.ingredient(
      new CL(3.5),
    ),
  ],
);
export const mintJulep = new Recipe(
  "Mint julep",
  "In steel cup gently muddle 4 mint sprigs with sugar and water. Fill the glass with cracked ice, add the Bourbon and stir well until the cup frosts. Garnish with a mint sprig.",
  steelCup,
  [
    bourbonWhiskey.ingredient(
      new CL(6),
    ),
    mint.ingredient(
      new Sprig(5),
    ),
    water.ingredient(
      new Tsp(2),
    ),
    powderedSugar.ingredient(
      new Tsp(1),
    ),
  ],
);
export const whiteRussian = new Recipe(
  "White russian",
  "Pour vodka and coffee liqueur into an old fashioned glass filled with ice cubes. Float fresh cream on the top and stir in slowly..",
  oldFashionedGlass,
  [
    vodka.ingredient(
      new CL(5),
    ),
    coffeeLiqueur.ingredient(
      new CL(2),
    ),
    cream.ingredient(
      new CL(3),
    ),
  ],
);
export const bloodyMary = new Recipe(
  "Bloody Mary",
  "Stir gently all the ingredients in a mixing glass with ice. Add tabasco, celery salt, pepper to taste. Pour into rocks glass. Garnish with celery and Lemon wedge. If requested served with ice, pour into highball glass.",
  highballGlass,
  [
    vodka.ingredient(
      new CL(4.5),
    ),
    tomatoJuice.ingredient(
      new CL(9),
    ),
    lemonJuice.ingredient(
      new CL(1.5),
    ),
    worcestershireSauce.ingredient(
      new Dash(2),
    ),
    tabasco.ingredient(
      new None(1),
    ),
    celerySalt.ingredient(
      new None(1),
    ),
    pepper.ingredient(
      new None(1),
    ),
    celery.ingredient(
      new None(1),
    ),
    lemon.ingredient(
      new Wedge(1),
    ),
  ],
);
export const champagneCocktail = new Recipe(
  "Champagne cocktail",
  "Place the sugar cube with 2 dashes of bitters in a large Champagne glass, add the cognac. Optionally add a few drops of Grand Marnier. Pour gently chilled Champagne. Garnish with Orange zest and cherry.",
  cocktailGlass,
  [
    champagne.ingredient(
      new CL(9),
    ),
    cognac.ingredient(
      new CL(1),
    ),
    angosturaBitters.ingredient(
      new Dash(2),
    ),
    sugar.ingredient(
      new Cube(1),
    ),
    orange.ingredient(
      new Zest(1),
    ),
    cherry.ingredient(
      new Whole(1),
    ),
    grandMarnier.optionalIngredient(
      new Drop(3),
    ),
  ],
);
export const kir = new Recipe(
  "Kir",
  "Pour Crème de Cassis into glass, top up with white wine.",
  wineGlass,
  [
    dryWhiteWine.ingredient(
      new CL(9),
    ),
    crèmeDeCassis.ingredient(
      new CL(1),
    ),
  ],
);
export const kirRoyal = new Recipe(
  "Kir royal",
  "Pour Crème de Cassis into glass, top up with Champagne.",
  wineGlass,
  [
    champagne.ingredient(
      new CL(9),
    ),
    crèmeDeCassis.ingredient(
      new CL(1),
    ),
  ],
);
export const longIslandIcedTea = new Recipe(
  "Long island iced tea",
  "Add all ingredients into highball glass filled with ice. Top with cola. Stir gently. Garnish with Lemon slice.",
  highballGlass,
  [
    vodka.ingredient(
      new CL(1.5),
    ),
    tequila.ingredient(
      new CL(1.5),
    ),
    whiteRum.ingredient(
      new CL(1.5),
    ),
    gin.ingredient(
      new CL(1.5),
    ),
    cointreau.ingredient(
      new CL(1.5),
    ),
    lemonJuice.ingredient(
      new CL(2.5),
    ),
    simpleSyrup.ingredient(
      new CL(3),
    ),
    cola.ingredient(
      new None(1),
    ),
    lemon.ingredient(
      new Slice(1),
    ),
  ],
);
export const maiTai = new Recipe(
  "Mai-tai",
  "Add all ingredients into a shaker with ice. Shake and pour into a double rocks glass or an highball glass. Garnish with pineapple spear, mint leaves, and lime peel.",
  highballGlass,
  [
    whiteRum.ingredient(
      new CL(3),
    ),
    darkRum.ingredient(
      new CL(3),
    ),
    curaçao.ingredient(
      new CL(1.5),
    ),
    orgeatSyrup.ingredient(
      new CL(1.5),
    ),
    limeJuice.ingredient(
      new CL(3),
    ),
    simpleSyrup.ingredient(
      new CL(0.75),
    ),
    pineapple.ingredient(
      new Spear(1),
    ),
    mint.ingredient(
      new Leaves(1),
    ),
    lime.ingredient(
      new Peel(1),
    ),
  ],
);
export const margarita = new Recipe(
  "Margarita",
  "Add all ingredients into a shaker with ice. Shake and strain into a chilled cocktail glass. Garnish with a half salt rim (optional).",
  margaritaGlass,
  [
    tequila.ingredient(
      new CL(5),
    ),
    tripleSec.ingredient(
      new CL(2),
    ),
    limeJuice.ingredient(
      new CL(1.5),
    ),
    salt.optionalIngredient(
      new None(1),
    ),
  ],
);
export const tommySMargarita = new Recipe(
  "Tommy’s margarita",
  "Shake and strain into a chilled cocktail glass.",
  margaritaGlass,
  [
    tequila.ingredient(
      new CL(4.5),
    ),
    limeJuice.ingredient(
      new CL(1.5),
    ),
    agaveNectar.ingredient(
      new Tsp(2),
    ),
  ],
);
export const b52 = new Recipe(
  "B52",
  "Layer ingredients one at a time starting with coffee liqueur, followed by irish cream and top with triple sec. Flame the triple sec, serve while the flame is still on, accompanied with a straw on side plate.",
  oldFashionedGlass,
  [
    coffeeLiqueur.ingredient(
      new CL(2),
    ),
    tripleSec.ingredient(
      new CL(2),
    ),
    irishCream.ingredient(
      new CL(2),
    ),
  ],
);
export const barracuda = new Recipe(
  "Barracuda",
  "Shake together with ice. Strain into glass and serve.",
  margaritaGlass,
  [
    goldRum.ingredient(
      new CL(4.5),
    ),
    galliano.ingredient(
      new CL(1.5),
    ),
    pineappleJuice.ingredient(
      new CL(6),
    ),
    limeJuice.ingredient(
      new Dash(1),
    ),
    prosecco.ingredient(
      new None(1),
    ),
  ],
);
export const corpseReviver_2 = new Recipe(
  "Corpse reviver #2",
  "Pour all ingredients into shaker with ice. Shake well and strain in chilled cocktail glass. Garnish with Orange zest.",
  cocktailGlass,
  [
    gin.ingredient(
      new CL(3),
    ),
    cointreau.ingredient(
      new CL(3),
    ),
    lilletBlanc.ingredient(
      new CL(3),
    ),
    lemonJuice.ingredient(
      new CL(3),
    ),
    absinthe.ingredient(
      new Dash(1),
    ),
    orange.ingredient(
      new Zest(1),
    ),
  ],
);
export const cosmopolitan = new Recipe(
  "Cosmopolitan",
  "Add all ingredients into cocktail shaker filled with ice. Shake well and strain into large cocktail glass. Garnish with Lemon twist.",
  cocktailGlass,
  [
    vodka.ingredient(
      new CL(4),
    ),
    cointreau.ingredient(
      new CL(1.5),
    ),
    limeJuice.ingredient(
      new CL(1.5),
    ),
    cranberryJuice.ingredient(
      new CL(3),
    ),
    lemon.ingredient(
      new Twist(1),
    ),
  ],
);
export const dirtyMartini = new Recipe(
  "Dirty martini",
  "Pour all ingredients into mixing glass with ice cubes. Stir well. Strain in chilled martini glass. Garnish with green olive.",
  cocktailGlass,
  [
    vodka.ingredient(
      new CL(6),
    ),
    dryVermouth.ingredient(
      new CL(1),
    ),
    oliveJuice.ingredient(
      new CL(1),
    ),
    olive.ingredient(
      new Whole(1),
    ),
  ],
);
export const espressoMartini = new Recipe(
  "Espresso martini",
  "Shake and strain into a chilled cocktail glass.",
  cocktailGlass,
  [
    vodka.ingredient(
      new CL(5),
    ),
    coffeeLiqueur.ingredient(
      new CL(1),
    ),
    simpleSyrup.ingredient(
      new None(1),
    ),
    espresso.ingredient(
      new CL(4),
    ),
  ],
);
export const goldenDream = new Recipe(
  "Golden dream",
  "Pour all ingredients into shaker filled with ice. Shake briskly for few seconds. Strain into chilled cocktail glass.",
  cocktailGlass,
  [
    tripleSec.ingredient(
      new CL(2),
    ),
    galliano.ingredient(
      new CL(2),
    ),
    orangeJuice.ingredient(
      new CL(2),
    ),
    cream.ingredient(
      new CL(1),
    ),
  ],
);
export const grasshopper = new Recipe(
  "Grasshopper",
  "Pour all ingredients into shaker filled with ice. Shake briskly for few seconds. Strain into chilled cocktail glass. Garnish with mint leaf (optional).",
  cocktailGlass,
  [
    whiteCrèmeDeCacao.ingredient(
      new CL(2),
    ),
    greenCrèmeDeMenthe.ingredient(
      new CL(2),
    ),
    cream.ingredient(
      new CL(2),
    ),
    mint.optionalIngredient(
      new Leaves(1),
    ),
  ],
);
export const hemingwaySpecial = new Recipe(
  "Hemingway special",
  "Pour all ingredients into a shaker with ice. Shake well and strain into a large cocktail glass.",
  cocktailGlass,
  [
    whiteRum.ingredient(
      new CL(6),
    ),
    grapefruitJuice.ingredient(
      new CL(4),
    ),
    maraschino.ingredient(
      new CL(1.5),
    ),
    limeJuice.ingredient(
      new CL(1.5),
    ),
  ],
);
export const horseSNeck = new Recipe(
  "Horse’s neck",
  "Pour Cognac and ginger ale directly into highball glass with ice cubes. Stir gently. If preferred, add dashes of Angostura Bitter. Garnish with rind of one Lemon spiral.",
  collinsGlass,
  [
    cognac.ingredient(
      new CL(4),
    ),
    gingerAle.ingredient(
      new CL(12),
    ),
    angosturaBitters.ingredient(
      new Dash(3),
    ),
    lemon.ingredient(
      new Peel(1),
    ),
  ],
);
export const irishCoffee = new Recipe(
  "Irish coffee",
  "Warm black coffee is poured into a pre-heated Irish coffee glass. Whiskey and at least one teaspoon of sugar is added and stirred until dissolved. Fresh thick chilled cream is carefully poured over the back of a spoon held just above the surface of the coffee. The layer of cream will float on the coffee without mixing. Plain sugar can be replaced with sugar syrup.",
  irishCoffeeMug,
  [
    irishWhiskey.ingredient(
      new CL(5),
    ),
    coffee.ingredient(
      new CL(12),
    ),
    cream.ingredient(
      new CL(5),
    ),
    sugar.ingredient(
      new Tsp(1),
    ),
  ],
);
export const tomCollins = new Recipe(
  "Tom collins",
  "Pour all ingredients directly into highball glass filled with ice. Stir gently. Garnish with Lemon slice and maraschino cherry. Add a dash of Angostura bitters.",
  collinsGlass,
  [
    oldTomGin.ingredient(
      new CL(4.5),
    ),
    lemonJuice.ingredient(
      new CL(3),
    ),
    simpleSyrup.ingredient(
      new CL(1.5),
    ),
    sodaWater.ingredient(
      new CL(6),
    ),
    angosturaBitters.ingredient(
      new Dash(1),
    ),
    lemon.ingredient(
      new Slice(1),
    ),
    cherry.ingredient(
      new Whole(1),
    ),
  ],
);
export const pinaColada = new Recipe(
  "Pina Colada",
  "Blend all the ingredients with ice in a electric blender, pour into a large glass and serve with straws. Garnish with a slice of pineapple with a cocktail cherry. 4 slices of fresh pineapple can be used instead of juice. Historically a few drops of fresh lime juice was added to taste.",
  hurricane,
  [
    whiteRum.ingredient(
      new CL(5),
    ),
    coconutCream.ingredient(
      new CL(3),
    ),
    pineappleJuice.ingredient(
      new CL(5),
    ),
    pineapple.ingredient(
      new Slice(1),
    ),
    cherry.ingredient(
      new Whole(1),
    ),
  ],
);
export const piscoSour = new Recipe(
  "Pisco Sour",
  "Shake and strain into a chilled champagne flute. Dash some Angostura bitters on top.",
  champagneFlute,
  [
    pisco.ingredient(
      new CL(4.5),
    ),
    simpleSyrup.ingredient(
      new CL(2),
    ),
    lemonJuice.ingredient(
      new CL(3),
    ),
    eggWhite.ingredient(
      new Whole(1),
    ),
    angosturaBitters.ingredient(
      new Dash(1),
    ),
  ],
);
export const russianSpringPunch = new Recipe(
  "Russian spring punch",
  "Shake the ingredients and pour into highball glass. Top with Sparkling wine. Garnish with a Lemon slice and a blackberry.",
  highballGlass,
  [
    vodka.ingredient(
      new CL(2.5),
    ),
    lemonJuice.ingredient(
      new CL(2.5),
    ),
    crèmeDeCassis.ingredient(
      new CL(1.5),
    ),
    simpleSyrup.ingredient(
      new CL(1),
    ),
    sparklingWine.ingredient(
      new None(1),
    ),
    lemon.ingredient(
      new Slice(1),
    ),
    blackberry.ingredient(
      new Whole(1),
    ),
  ],
);
export const seaBreeze = new Recipe(
  "Sea breeze",
  "Build all ingredients in a highball glass filled with ice. Garnish with an Orange zest and cherry.",
  highballGlass,
  [
    vodka.ingredient(
      new CL(4),
    ),
    cranberryJuice.ingredient(
      new CL(12),
    ),
    grapefruitJuice.ingredient(
      new CL(3),
    ),
    orange.ingredient(
      new Zest(1),
    ),
    cherry.ingredient(
      new Whole(1),
    ),
  ],
);
export const sexOnTheBeach = new Recipe(
  "Sex on the beach",
  "Build all ingredients in a highball glass filled with ice. Garnish with an Orange zest and cherry.",
  highballGlass,
  [
    vodka.ingredient(
      new CL(4),
    ),
    peachSchnapps.ingredient(
      new CL(2),
    ),
    orangeJuice.ingredient(
      new CL(4),
    ),
    cranberryJuice.ingredient(
      new CL(4),
    ),
    grapefruitJuice.ingredient(
      new CL(3),
    ),
    orange.ingredient(
      new Slice(0.5),
    ),
  ],
);
export const singaporeSling = new Recipe(
  "Singapore sling",
  "Pour all ingredients into cocktail shaker filled with ice cubes. Shake well. Strain into Hurricane glass. Garnish with pineapple and maraschino cherry.",
  hurricane,
  [
    gin.ingredient(
      new CL(3),
    ),
    cherryLiqueur.ingredient(
      new CL(1.5),
    ),
    cointreau.ingredient(
      new CL(0.75),
    ),
    domBénédictine.ingredient(
      new CL(0.75),
    ),
    pineappleJuice.ingredient(
      new CL(12),
    ),
    limeJuice.ingredient(
      new CL(1.5),
    ),
    grenadine.ingredient(
      new CL(1),
    ),
    angosturaBitters.ingredient(
      new Dash(1),
    ),
    cherry.ingredient(
      new Whole(1),
    ),
    pineapple.ingredient(
      new Slice(1),
    ),
  ],
);
export const tequilaSunrise = new Recipe(
  "Tequila sunrise",
  "Pour tequila and Orange juice directly into highball glass filled with ice cubes. Add the grenadine syrup to create chromatic effect (sunrise), do not stir. Garnish with half Orange slice or an Orange zest.",
  collinsGlass,
  [
    tequila.ingredient(
      new CL(4.5),
    ),
    orangeJuice.ingredient(
      new CL(9),
    ),
    grenadine.ingredient(
      new CL(1.5),
    ),
    orange.ingredient(
      new Slice(0.5),
    ),
  ],
);
export const yellowBird = new Recipe(
  "Yellow bird",
  "Shake and strain into a chilled cocktail glass.",
  cocktailGlass,
  [
    whiteRum.ingredient(
      new CL(3),
    ),
    galliano.ingredient(
      new CL(1.5),
    ),
    tripleSec.ingredient(
      new CL(1.5),
    ),
    limeJuice.ingredient(
      new CL(1.5),
    ),
  ],
);
export const zombie = new Recipe(
  "Zombie",
  "Add all ingredients into an electric blender with 170 grams of cracked ice. With pulse bottom blend for a few seconds. Serve in a tall tumbler glass. Garnish with mint leaves.",
  zombieGlass,
  [
    darkRum.ingredient(
      new CL(4.5),
    ),
    goldRum.ingredient(
      new CL(4.5),
    ),
    demeraraRum.ingredient(
      new CL(3),
    ),
    limeJuice.ingredient(
      new CL(2),
    ),
    falernum.ingredient(
      new CL(1.5),
    ),
    grapefruitJuice.ingredient(
      new CL(1),
    ),
    cinnamonSyrup.ingredient(
      new CL(0.5),
    ),
    grenadine.ingredient(
      new Tsp(1),
    ),
    angosturaBitters.ingredient(
      new Dash(1),
    ),
    absinthe.ingredient(
      new Dash(2),
    ),
    mint.ingredient(
      new Leaves(1),
    ),
  ],
);
export const brandyCrusta = new Recipe(
  "Brandy crusta",
  "Mix together all ingredients with ice cubes in a mixing glass and strain into prepared slim cocktail glass. Rub a slice of Orange (or Lemon) around the rim of the glass and dip it in pulverized white sugar, so that the sugar will adhere to the edge of the glass. Carefully curling place the Orange/Lemon peel around the inside of the glass.",
  cocktailGlass,
  [
    brandy.ingredient(
      new CL(5.25),
    ),
    lemonJuice.ingredient(
      new CL(1.5),
    ),
    maraschino.ingredient(
      new CL(0.75),
    ),
    curaçao.ingredient(
      new Tsp(1),
    ),
    simpleSyrup.ingredient(
      new Tsp(1),
    ),
    aromaticBitters.ingredient(
      new Dash(2),
    ),
    orange.ingredient(
      new Slice(1),
    ),
    powderedSugar.ingredient(
      new Tsp(1),
    ),
  ],
);
export const hankyPanky = new Recipe(
  "Hanky panky",
  "Pour all ingredients into mixing glass with ice cubes. Stir well. Strain into chilled cocktail glass. Garnish with Orange zest.",
  cocktailGlass,
  [
    londonDryGin.ingredient(
      new CL(4.5),
    ),
    sweetRedVermouth.ingredient(
      new CL(4.5),
    ),
    fernetBranca.ingredient(
      new CL(0.75),
    ),
    orange.ingredient(
      new Zest(1),
    ),
  ],
);
export const lastWord = new Recipe(
  "Last word",
  "Add all ingredients into a cocktail shaker. Shake with ice and strain into a chilled cocktail glass.",
  cocktailGlass,
  [
    gin.ingredient(
      new CL(2.25),
    ),
    greenChartreuse.ingredient(
      new CL(2.25),
    ),
    maraschino.ingredient(
      new CL(2.25),
    ),
    limeJuice.ingredient(
      new CL(2.25),
    ),
  ],
);
export const martinez = new Recipe(
  "Martinez",
  "Pour all ingredients into mixing glass with ice cubes. Stir well. Strain into chilled cocktail glass. Garnish with Lemon zest.",
  cocktailGlass,
  [
    londonDryGin.ingredient(
      new CL(4.5),
    ),
    sweetRedVermouth.ingredient(
      new CL(4.5),
    ),
    maraschino.ingredient(
      new Tsp(1),
    ),
    orangeBitters.ingredient(
      new Dash(2),
    ),
    lemon.ingredient(
      new Zest(1),
    ),
  ],
);
export const vieuxCarré = new Recipe(
  "Vieux carré",
  "Pour all ingredients into mixing glass with ice cubes. Stir well. Strain into chilled cocktail glass. Garnish with Orange zest and maraschino cherry.",
  cocktailGlass,
  [
    ryeWhiskey.ingredient(
      new CL(3),
    ),
    cognac.ingredient(
      new CL(3),
    ),
    sweetRedVermouth.ingredient(
      new CL(3),
    ),
    domBénédictine.ingredient(
      new Tsp(1),
    ),
    peychaudSBitters.ingredient(
      new Dash(2),
    ),
    orange.ingredient(
      new Zest(1),
    ),
    cherry.ingredient(
      new Whole(1),
    ),
  ],
);
export const beeSKnees = new Recipe(
  "Bee’s knees",
  "Stir honey with Lemon and Orange juices until it dissolves, add gin and shake with ice. Strain into a chilled cocktail glass. Optionally garnish with a Lemon or Orange zest.",
  cocktailGlass,
  [
    londonDryGin.ingredient(
      new CL(5.25),
    ),
    honeySyrup.ingredient(
      new Tsp(2),
    ),
    lemonJuice.ingredient(
      new CL(2.25),
    ),
    orangeJuice.ingredient(
      new CL(2.25),
    ),
    orange.optionalIngredient(
      new Zest(1),
    ),
  ],
);
export const cachanchara = new Recipe(
  "Cachanchara",
  "Mix honey with water and lime juice and spread the mixture on the bottom and sides of the glass. Add cracked ice, and then the rum. End by energetically stirring from bottom to top. Garnish with Lime wedge.",
  oldFashionedGlass,
  [
    cubanAguardiente.ingredient(
      new CL(6),
    ),
    lemonJuice.ingredient(
      new CL(1.5),
    ),
    honey.ingredient(
      new CL(1.5),
    ),
    water.ingredient(
      new CL(5),
    ),
    lime.ingredient(
      new Wedge(1),
    ),
  ],
);
export const fernandito = new Recipe(
  "Fernandito",
  "Pour the Fernet Branca into a double old fashioned glass with ice, fill the glass up with Cola. Gently stir.",
  highballGlass,
  [
    fernetBranca.ingredient(
      new CL(5),
    ),
    cola.ingredient(
      new None(1),
    ),
  ],
);
export const oldCuban = new Recipe(
  "Old cuban",
  "Pour all ingredients into cocktail shaker except the wine, shake well with ice, strain into chilled elegant cocktail glass. Top up with the sparkling wine. Garnish with mint springs.",
  cocktailGlass,
  [
    rum.ingredient(
      new CL(4.5),
    ),
    sparklingWine.ingredient(
      new CL(6),
    ),
    limeJuice.ingredient(
      new CL(2.25),
    ),
    simpleSyrup.ingredient(
      new CL(3),
    ),
    angosturaBitters.ingredient(
      new Dash(2),
    ),
    mint.ingredient(
      new Sprig(3),
    ),
  ],
);
export const paloma = new Recipe(
  "Paloma",
  "Pour the tequila into a highball glass, squeeze the lime juice. Add ice and salt, fill up pink grapefruit soda. Stir gently. Garnish with a slice of lime.",
  highballGlass,
  [
    tequila.ingredient(
      new CL(5),
    ),
    grapefruitSoda.ingredient(
      new CL(10),
    ),
    limeJuice.ingredient(
      new Tsp(2),
    ),
    salt.ingredient(
      new None(1),
    ),
    lime.ingredient(
      new Slice(1),
    ),
  ],
);
export const paperPlane = new Recipe(
  "Paper plane",
  "Pour all ingredients into cocktail shaker, shake well with ice, strain into chilled cocktail glass.",
  cocktailGlass,
  [
    bourbonWhiskey.ingredient(
      new CL(3),
    ),
    amaroNonino.ingredient(
      new CL(3),
    ),
    aperol.ingredient(
      new CL(3),
    ),
    lemonJuice.ingredient(
      new CL(3),
    ),
  ],
);
export const penicillin = new Recipe(
  "Penicillin",
  "Muddle fresh ginger in a shaker and add the remaining ingredients, except for the Islay single malt whiskey. Fill the shaker with ice and shake. Double-strain into a chilled old fashioned glass with ice. Float the single malt whisky on top. Garnish with a candied ginger.",
  oldFashionedGlass,
  [
    blendedScotchWhiskey.ingredient(
      new CL(6),
    ),
    islaySingleMaltScotch.ingredient(
      new CL(0.75),
    ),
    lemonJuice.ingredient(
      new CL(2.25),
    ),
    honeySyrup.ingredient(
      new CL(2.25),
    ),
    ginger.ingredient(
      new Slice(3),
    ),
    candiedGinger.ingredient(
      new Whole(1),
    ),
  ],
);
export const southside = new Recipe(
  "Southside",
  "Egg white optional. Pour all ingredients into a cocktail shaker, shake well with ice, double-strain into chilled cocktail glass. If egg white is used shake vigorously. Garnish with mint springs.",
  cocktailGlass,
  [
    londonDryGin.ingredient(
      new CL(6),
    ),
    lemonJuice.ingredient(
      new CL(3),
    ),
    simpleSyrup.ingredient(
      new CL(1.5),
    ),
    mint.ingredient(
      new Sprig(2),
    ),
    eggWhite.optionalIngredient(
      new CL(3),
    ),
  ],
);
export const spicyFifty = new Recipe(
  "Spicy fifty",
  "Pour all ingredients (including 2 thin slices of pepper) into a cocktail shaker, shake well with ice, double-strain into chilled cocktail glass. Garnish with a red chili pepper.",
  cocktailGlass,
  [
    vodka.ingredient(
      new CL(5),
    ),
    elderflowerSyrup.ingredient(
      new CL(1.5),
    ),
    lemonJuice.ingredient(
      new CL(1.5),
    ),
    honeySyrup.ingredient(
      new CL(1),
    ),
    vanillaExtract.ingredient(
      new Drop(1),
    ),
    redChiliPepper.ingredient(
      new None(1),
    ),
  ],
);
export const sufferingBastard = new Recipe(
  "Suffering bastard",
  "Pour all ingredients into cocktail shaker except the ginger beer, shake well with ice, Pour unstrained into a Collins glass or in the original S. Bastard mug and top up with ginger beer. Garnish with mint sprig and optionally an Orange slice as well.",
  collinsGlass,
  [
    brandy.ingredient(
      new CL(3),
    ),
    gin.ingredient(
      new CL(3),
    ),
    limeJuice.ingredient(
      new CL(1.5),
    ),
    angosturaBitters.ingredient(
      new Dash(2),
    ),
    gingerBeer.ingredient(
      new None(1),
    ),
    mint.ingredient(
      new Sprig(1),
    ),
    orange.optionalIngredient(
      new Slice(1),
    ),
  ],
);
export const tipperary = new Recipe(
  "Tipperary",
  "Pour all ingredients into mixing glass with ice cubes. Stir well. Strain into chilled martini cocktail glass. Garnish with a slice of Orange.",
  cocktailGlass,
  [
    irishWhiskey.ingredient(
      new CL(5),
    ),
    sweetRedVermouth.ingredient(
      new CL(2.5),
    ),
    greenChartreuse.ingredient(
      new CL(1.5),
    ),
    angosturaBitters.ingredient(
      new Dash(2),
    ),
    orange.ingredient(
      new Slice(1),
    ),
  ],
);
export const trinidadSour = new Recipe(
  "Trinidad sour",
  "Pour all ingredients into mixing glass with ice cubes. Stir well. Strain into chilled cocktail glass.",
  cocktailGlass,
  [
    angosturaBitters.ingredient(
      new CL(4.5),
    ),
    orgeatSyrup.ingredient(
      new CL(3),
    ),
    lemonJuice.ingredient(
      new CL(2.25),
    ),
    ryeWhiskey.ingredient(
      new CL(1.5),
    ),
  ],
);
export const veNTo = new Recipe(
  "Ve.n.to",
  "Egg white optional. Pour all ingredients into the shaker. Shake vigorously with ice. Strain into a chilled small tumbler glass filled with ice. Garnish with Lemon zest and white grapes.",
  oldFashionedGlass,
  [
    grappa.ingredient(
      new CL(4.5),
    ),
    lemonJuice.ingredient(
      new CL(2.25),
    ),
    honeySyrup.ingredient(
      new CL(1.5),
    ),
    chamomileSyrup.ingredient(
      new CL(1.5),
    ),
    honeySyrup.ingredient(
      new CL(1.5),
    ),
    lemon.ingredient(
      new Zest(1),
    ),
    whiteGrape.ingredient(
      new Whole(3),
    ),
    eggWhite.optionalIngredient(
      new CL(3),
    ),
  ],
);
export const illegal = new Recipe(
  "Illegal",
  "Egg white optional. Pour all ingredients into the shaker. Shake vigorously with ice. Strain into a chilled cocktail glass, or “on the rocks” in a traditional clay or terracotta mug.",
  cocktailGlass,
  [
    mezcal.ingredient(
      new CL(3),
    ),
    overproofWhiteRum.ingredient(
      new CL(1.5),
    ),
    limeJuice.ingredient(
      new CL(2.25),
    ),
    falernum.ingredient(
      new CL(1.5),
    ),
    simpleSyrup.ingredient(
      new CL(1.5),
    ),
    maraschino.ingredient(
      new Tsp(1),
    ),
    eggWhite.optionalIngredient(
      new CL(3),
    ),
  ],
);
export const nakedAndFamous = new Recipe(
  "Naked and famous",
  "Pour all ingredients into cocktail shaker, shake well with ice, strain into chilled cocktail glass.",
  cocktailGlass,
  [
    mezcal.ingredient(
      new CL(2.25),
    ),
    yellowChartreuse.ingredient(
      new CL(2.25),
    ),
    aperol.ingredient(
      new CL(2.25),
    ),
    limeJuice.ingredient(
      new CL(2.25),
    ),
  ],
);
export const newYorkSour = new Recipe(
  "New York sour",
  "Bourbon can be used instead of rye. Pour all ingredients into the shaker. Shake vigorously with ice. Strain into a chilled rocks glass filled with ice. Float the wine on top. Garnish with Lemon or Orange zest with cherry.",
  oldFashionedGlass,
  [
    ryeWhiskey.ingredient(
      new CL(6),
    ),
    lemonJuice.ingredient(
      new CL(3),
    ),
    eggWhite.ingredient(
      new CL(3),
    ),
    simpleSyrup.ingredient(
      new CL(2.25),
    ),
    redWine.ingredient(
      new CL(1.5),
    ),
    lemon.ingredient(
      new Zest(1),
    ),
    cherry.ingredient(
      new Whole(1),
    ),
  ],
);
export const spritz = new Recipe(
  "Spritz",
  "Build all ingredients into a wine glass filled with ice. Stir gently. Garnish with a slice of Orange.",
  wineGlass,
  [
    prosecco.ingredient(
      new CL(9),
    ),
    aperol.ingredient(
      new CL(6),
    ),
    sodaWater.ingredient(
      new Splash(1),
    ),
    orange.ingredient(
      new Slice(1),
    ),
  ],
);
export const gimlet = new Recipe(
  "Gimlet",
  "Pour all ingredients into a cocktail strainer, shake well with ice, strain into chilled cocktail glass.",
  cocktailGlass,
  [
    limeJuice.ingredient(
      new CL(2),
    ),
    simpleSyrup.ingredient(
      new CL(2),
    ),
    gin.ingredient(
      new CL(6),
    ),
  ],
);
export const martini = new Recipe(
  "Martini",
  "Mix gin and vermouth in a chilled pint glass, stir with ice. Strain into a champagne coupe.",
  champagneCoupe,
  [
    gin.ingredient(
      new CL(6),
    ),
    dryVermouth.ingredient(
      new CL(6),
    ),
    lemon.optionalIngredient(
      new Twist(1),
    ),
  ],
);
export const vodkaMartini = new Recipe(
  "Vodka martini",
  "Mix vodka and dry vermouth in a pint glass. The amount of vermouth used varies and can be as little as a drop. Stir with ice. Optionally add olive brine to make a dirty martini.",
  cocktailGlass,
  [
    vodka.ingredient(
      new CL(8),
    ),
    dryVermouth.ingredient(
      new Drop(1),
    ),
    lemon.optionalIngredient(
      new Twist(1),
    ),
    olive.optionalIngredient(
      new Whole(1),
    ),
  ],
);
export const _20thCentury = new Recipe(
  "20th century",
  "Combine ingredients in a cocktail shaker, shake with ice, strain into a cocktail glass.",
  cocktailGlass,
  [
    gin.ingredient(
      new CL(4.5),
    ),
    lemonJuice.ingredient(
      new CL(2),
    ),
    whiteCrèmeDeCacao.ingredient(
      new CL(1.5),
    ),
    kinaLillet.ingredient(
      new CL(2),
    ),
    lemon.ingredient(
      new Twist(1),
    ),
  ],
);
export const artillery = new Recipe(
  "Artillery",
  "Stir all ingredients with ice and strain into a cocktail glass.",
  cocktailGlass,
  [
    sweetRedVermouth.ingredient(
      new Tsp(1.5),
    ),
    gin.ingredient(
      new CL(4.5),
    ),
    angosturaBitters.ingredient(
      new Dash(2),
    ),
  ],
);
export const whiskeyFix = new Recipe(
  "Whiskey fix",
  "Shake in a cocktail shaker with a small piece of ice. Drain into the glass and top with crushed ice and garnish with a Lemon wedge and a luxardo cherry.",
  oldFashionedGlass,
  [
    lemonJuice.ingredient(
      new CL(2),
    ),
    simpleSyrup.ingredient(
      new CL(2),
    ),
    whiskey.ingredient(
      new CL(6),
    ),
    lemon.ingredient(
      new Wedge(1),
    ),
    cherry.ingredient(
      new Whole(1),
    ),
  ],
);
