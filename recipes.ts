import { Recipe } from "./types.ts";
import { materials } from "./materials.ts";
import { glasses } from "./glasses.ts";
import { U } from "./unit.ts";

export const recipes = new Map<string, Recipe>([
  [
    "toronto",
    new Recipe(
      "Toronto",
      "Stir in mixing glass with ice & strain. Garnish with Orange slice.",
      glasses.cocktailGlass,
      [
        materials.canadianWhiskey.ingredient(new U.CL(5.5)),
        materials.fernetBranca.ingredient(new U.CL(0.75)),
        materials.sugar.ingredient(new U.Tsp(0.25)),
        materials.angosturaBitters.ingredient(new U.Dash(1)),
        materials.orange.ingredient(new U.Slice(1)),
      ],
      {
        wiki: "https://en.wikipedia.org/wiki/Toronto_%28cocktail%29",
        description:
          "A variation on the Old Fashioned, the Toronto is one of the most popular cocktails that uses Fernet Branca.",
      }
    ),
  ],
  [
    "french-75",
    new Recipe(
      "French 75",
      "Pour all the ingredients, except Champagne, into a shaker. Shake well and strain into a Champagne flute. Top up with Champagne. Stir gently.",
      glasses.champagneFlute,
      [
        materials.gin.ingredient(new U.CL(3)),
        materials.simpleSyrup.ingredient(new U.CL(1.5)),
        materials.lemonJuice.ingredient(new U.CL(1.5)),
        materials.champagne.ingredient(new U.CL(6)),
      ],
      {
        description:
          "The drink dates to World War I, and an early form was created in 1915 at the New York Bar in Paris—later Harry's New York Bar—by barman Harry MacElhone. The combination was said to have such a kick that it felt like being shelled with the powerful French 75mm field gun. The French 75 was popularized in America at the Stork Club in New York. The drink's recipe was first recorded in The Savoy Cocktail Book in 1930.",
        wiki: "https://en.wikipedia.org/wiki/French_75_(cocktail)",
      }
    ),
  ],
  [
    "cuba-libre",
    new Recipe(
      "Cuba Libre",
      "Build all ingredients in a highball glass filled with ice. Garnish with lime wedge.",
      glasses.highballGlass,
      [
        materials.cola.ingredient(new U.CL(12)),
        materials.whiteRum.ingredient(new U.CL(5)),
        materials.limeJuice.ingredient(new U.CL(1)),
        materials.lime.ingredient(new U.Wedge(1)),
      ],
      {
        description:
          'Also known as a Rum & Coke, A Cuba Libre is a cocktail made of cola, lime, and dark or light rum. "Libre" is Spanish for "free".',
        wiki: "https://en.wikipedia.org/wiki/Rum_and_Coke",
        tags: ["highball"],
      }
    ),
  ],
  [
    "moscow-mule",
    new Recipe(
      "Moscow mule",
      "Combine vodka and ginger beer in a highball glass filled with ice. Add lime juice. Stir gently. Garnish with a lime slice.",
      glasses.copperMug,
      [
        materials.vodka.ingredient(new U.CL(4.5)),
        materials.gingerBeer.ingredient(new U.CL(12)),
        materials.limeJuice.ingredient(new U.CL(1)),
        materials.lime.ingredient(new U.Slice(1)),
      ],
      {
        description:
          "A Moscow mule is a type of buck, made with vodka. Sometimes called a vodka buck.",
        wiki: "https://en.wikipedia.org/wiki/Moscow_mule",
        tags: ["mule"],
      }
    ),
  ],
  [
    "mimosa",
    new Recipe(
      "Mimosa",
      "Ensure both ingredients are well chilled, then mix into the glass. Garnish with Orange twist (optional).",
      glasses.champagneFlute,
      [
        materials.champagne.ingredient(new U.CL(7.5)),
        materials.orangeJuice.ingredient(new U.CL(7.5)),
        materials.orange.optionalIngredient(new U.Twist(1)),
      ],
      {
        description:
          "The mimosa is traditionally served in a tall champagne flute at brunch, at weddings, or as part of business or first class service on some passenger railways and airlines.",
        wiki: "https://en.wikipedia.org/wiki/Mimosa_(cocktail)",
        tags: ["brunch"],
      }
    ),
  ],
  [
    "bellini",
    new Recipe(
      "Bellini",
      "Pour peach purée into chilled glass, add sparkling wine. Stir gently.",
      glasses.champagneFlute,
      [
        materials.prosecco.ingredient(new U.CL(10)),
        materials.peachPurée.ingredient(new U.CL(5)),
      ],
      {
        wiki: "https://en.wikipedia.org/wiki/Bellini_(cocktail)",
        tags: ["brunch"],
      }
    ),
  ],
  [
    "black-russian",
    new Recipe(
      "Black russian",
      "Pour the ingredients into an old fashioned glass filled with ice cubes. Stir gently.",
      glasses.oldFashionedGlass,
      [
        materials.vodka.ingredient(new U.CL(5)),
        materials.coffeeLiqueur.ingredient(new U.CL(2)),
      ],
      {
        tags: ["stirred"],
      }
    ),
  ],
  [
    "caipirinha",
    new Recipe(
      "Caipirinha",
      "Place small lime wedges from one lime and sugar into old fashioned glass and muddle (mash the two ingredients together using a muddler or a wooden spoon). Fill the glass with ice and add the Cachaça. Use vodka instead of cachaça for a caipiroska; rum instead of cachaça for a caipirissima;",
      glasses.oldFashionedGlass,
      [
        materials.cachaça.ingredient(new U.CL(6)),
        materials.lime.ingredient(new U.Whole(1)),
        materials.caneSugar.ingredient(new U.Tsp(4)),
      ],
      {
        tags: ["muddled"],
      }
    ),
  ],
  [
    "mojito",
    new Recipe(
      "Mojito",
      "Muddle mint springs with sugar and lime juice. Add splash of soda water and fill glass with cracked ice. Pour rum and top with soda water. Garnish with sprig of mint leaves and Lemon slice. Serve with straw.",
      glasses.collinsGlass,
      [
        materials.whiteRum.ingredient(new U.CL(4.5)),
        materials.limeJuice.ingredient(new U.CL(2)),
        materials.mint.ingredient(new U.Sprig(6)),
        materials.caneSugar.ingredient(new U.Tsp(2)),
        materials.lemon.ingredient(new U.Slice(1)),
        materials.sodaWater.ingredient(new U.Splash(1)),
      ],
      {
        tags: ["muddled"],
      }
    ),
  ],
  [
    "dark-'n'-stormy",
    new Recipe(
      "Dark ’n’ Stormy",
      "Fill glass with ice, add rum and top with ginger beer. Garnish with lime wedge.",
      glasses.highballGlass,
      [
        materials.darkRum.ingredient(new U.CL(6)),
        materials.gingerBeer.ingredient(new U.CL(10)),
        materials.lime.ingredient(new U.Wedge(1)),
      ]
    ),
  ],
  [
    "bramble",
    new Recipe(
      "Bramble",
      "Fill glass with crushed ice. Build gin, Lemon juice and simple syrup over. Stir, and then pour blackberry liqueur over in a circular fashion to create marbling effect. Garnish with two blackberries and Lemon slice.",
      glasses.oldFashionedGlass,
      [
        materials.gin.ingredient(new U.CL(4)),
        materials.lemonJuice.ingredient(new U.CL(1.5)),
        materials.simpleSyrup.ingredient(new U.CL(1)),
        materials.crèmeDeMure.ingredient(new U.CL(1.5)),
        materials.lemon.ingredient(new U.Slice(1)),
        materials.blackberry.ingredient(new U.Whole(2)),
      ]
    ),
  ],
  [
    "french-martini",
    new Recipe(
      "French martini",
      "Pour all ingredients into shaker with ice cubes. Shake well and strain into a chilled cocktail glass. Squeeze oil from Lemon peel onto the drink.",
      glasses.cocktailGlass,
      [
        materials.vodka.ingredient(new U.CL(4)),
        materials.raspberryLiqueur.ingredient(new U.CL(1.5)),
        materials.pineappleJuice.ingredient(new U.CL(1)),
        materials.lemon.optionalIngredient(new U.Peel(1)),
      ]
    ),
  ],
  [
    "kamikaze",
    new Recipe(
      "Kamikaze",
      "Shake all ingredients together with ice. Strain into glass. Garnish with lime slice.",
      glasses.cocktailGlass,
      [
        materials.vodka.ingredient(new U.CL(3)),
        materials.tripleSec.ingredient(new U.CL(3)),
        materials.limeJuice.ingredient(new U.CL(3)),
        materials.lime.ingredient(new U.Slice(1)),
      ]
    ),
  ],
  [
    "lemon-drop-martini",
    new Recipe(
      "Lemon drop martini",
      "Shake and strain into a chilled cocktail glass rimmed with sugar, garnish with a slice of Lemon.",
      glasses.cocktailGlass,
      [
        materials.vodka.ingredient(new U.CL(2.5)),
        materials.tripleSec.ingredient(new U.CL(2)),
        materials.lemonJuice.ingredient(new U.CL(1.5)),
        materials.sugar.ingredient(new U.None(1)),
        materials.lime.ingredient(new U.Slice(1)),
      ]
    ),
  ],
  [
    "vesper",
    new Recipe(
      "Vesper",
      "Shake and strain into a chilled cocktail glass. Add the garnish.",
      glasses.cocktailGlass,
      [
        materials.gin.ingredient(new U.CL(4.5)),
        materials.vodka.ingredient(new U.CL(1.5)),
        materials.lilletBlanc.ingredient(new U.CL(0.75)),
        materials.lemon.ingredient(new U.Zest(1)),
      ]
    ),
  ],
  [
    "boulevardier",
    new Recipe(
      "Boulevardier",
      "Pour all ingredients into mixing glass with ice cubes. Stir well. Strain into chilled cocktail glass. Garnish with a Orange zest, optionally a Lemon zest.",
      glasses.oldFashionedGlass,
      [
        materials.bourbonWhiskey.ingredient(new U.CL(4.5)),
        materials.sweetRedVermouth.ingredient(new U.CL(3)),
        materials.campari.ingredient(new U.CL(3)),
        materials.orange.ingredient(new U.Peel(1)),
        materials.lemon.optionalIngredient(new U.Zest(1)),
      ]
    ),
  ],
  [
    "alexander",
    new Recipe(
      "Alexander",
      "Shake all ingredients with ice and strain contents into a cocktail glass. Sprinkle ground nutmeg on top and serve.",
      glasses.cocktailGlass,
      [
        materials.cognac.ingredient(new U.CL(3)),
        materials.brownCrèmeDeCacao.ingredient(new U.CL(3)),
        materials.lightCream.ingredient(new U.CL(3)),
        materials.nutmeg.ingredient(new U.None(1)),
      ]
    ),
  ],
  [
    "americano",
    new Recipe(
      "Americano",
      "Pour the Campari and vermouth over ice into a highball glass, add a splash of soda water and garnish with half Orange slice and a Lemon twist.",
      glasses.highballGlass,
      [
        materials.campari.ingredient(new U.CL(3)),
        materials.sweetRedVermouth.ingredient(new U.CL(3)),
        materials.sodaWater.ingredient(new U.Splash(1)),
        materials.orange.ingredient(new U.Slice(0.5)),
        materials.lemon.ingredient(new U.Twist(1)),
      ]
    ),
  ],
  [
    "angel-face",
    new Recipe(
      "Angel face",
      "Shake all ingredients with ice and strain contents into a cocktail glass.",
      glasses.cocktailGlass,
      [
        materials.gin.ingredient(new U.CL(3)),
        materials.apricotBrandy.ingredient(new U.CL(3)),
        materials.calvados.ingredient(new U.CL(3)),
      ]
    ),
  ],
  [
    "aviation",
    new Recipe(
      "Aviation",
      "Add all ingredients into cocktail shaker filled with ice. Shake well and strain into cocktail glass. Garnish with a cherry.",
      glasses.cocktailGlass,
      [
        materials.gin.ingredient(new U.CL(4.5)),
        materials.lemonJuice.ingredient(new U.CL(1.5)),
        materials.maraschino.ingredient(new U.CL(1.5)),
        materials.crèmeDeViolette.ingredient(new U.Tsp(1)),
        materials.cherry.ingredient(new U.Whole(1)),
      ]
    ),
  ],
  [
    "bacardi-cocktail",
    new Recipe(
      "Bacardi cocktail",
      "Shake together with ice. Strain into glass and serve.",
      glasses.cocktailGlass,
      [
        materials.whiteRum.ingredient(new U.CL(4.5)),
        materials.limeJuice.ingredient(new U.CL(2)),
        materials.grenadine.ingredient(new U.CL(1)),
      ]
    ),
  ],
  [
    "between-the-sheets",
    new Recipe(
      "Between the sheets",
      "Pour all ingredients into shaker with ice cubes, shake, strain into chilled cocktail glass.",
      glasses.cocktailGlass,
      [
        materials.whiteRum.ingredient(new U.CL(3)),
        materials.cognac.ingredient(new U.CL(3)),
        materials.tripleSec.ingredient(new U.CL(3)),
        materials.lemonJuice.ingredient(new U.CL(2)),
      ]
    ),
  ],
  [
    "casino",
    new Recipe(
      "Casino",
      "Pour all ingredients into shaker with ice cubes, shake well. Strain into chilled cocktail glass and garnish with a Lemon twist and a marachino cherry.",
      glasses.cocktailGlass,
      [
        materials.oldTomGin.ingredient(new U.CL(4)),
        materials.maraschino.ingredient(new U.CL(1)),
        materials.orangeBitters.ingredient(new U.CL(1)),
        materials.lemonJuice.ingredient(new U.CL(1)),
        materials.lemon.ingredient(new U.Twist(1)),
        materials.cherry.ingredient(new U.Whole(1)),
      ]
    ),
  ],
  [
    "clover-club",
    new Recipe(
      "Clover club",
      "Pour all ingredients into cocktail shaker filled with ice. Shake well. Strain into cocktail glass. Garnish with fresh raspberries.",
      glasses.cocktailGlass,
      [
        materials.gin.ingredient(new U.CL(4.5)),
        materials.lemonJuice.ingredient(new U.CL(1.5)),
        materials.raspberrySyrup.ingredient(new U.CL(1.5)),
        materials.eggWhite.ingredient(new U.Drop(3)),
        materials.raspberry.ingredient(new U.Whole(2)),
      ]
    ),
  ],
  [
    "daiquiri",
    new Recipe(
      "Daiquiri",
      "Pour all ingredients into shaker with ice cubes. Shake well. Double Strain in chilled cocktail glass.",
      glasses.cocktailGlass,
      [
        materials.whiteRum.ingredient(new U.CL(4.5)),
        materials.limeJuice.ingredient(new U.CL(2.5)),
        materials.simpleSyrup.ingredient(new U.CL(1.5)),
      ]
    ),
  ],
  [
    "derby",
    new Recipe(
      "Derby",
      "Pour all ingredients into a mixing glass with ice. Stir. Strain into a cocktail glass. Garnish with fresh mint leaves in the drink.",
      glasses.cocktailGlass,
      [
        materials.gin.ingredient(new U.CL(6)),
        materials.peachBitters.ingredient(new U.Drop(2)),
        materials.mint.ingredient(new U.Leaves(1)),
      ]
    ),
  ],
  [
    "dry-martini",
    new Recipe(
      "Dry martini",
      "Straight: Pour all ingredients into mixing glass with ice cubes. Stir well. Strain into chilled martini cocktail glass. Squeeze oil from Lemon peel onto the drink, or garnish with olive.",
      glasses.cocktailGlass,
      [
        materials.gin.ingredient(new U.CL(6)),
        materials.dryVermouth.ingredient(new U.CL(1)),
        materials.lemon.ingredient(new U.Peel(1)),
        materials.olive.ingredient(new U.Whole(1)),
      ]
    ),
  ],
  [
    "gin-fizz",
    new Recipe(
      "Gin fizz",
      "Shake all ingredients with ice cubes, except soda water. Pour into tumbler. Top with soda water. Garnish with Lemon slice.",
      glasses.oldFashionedGlass,
      [
        materials.gin.ingredient(new U.CL(4.5)),
        materials.lemonJuice.ingredient(new U.CL(3)),
        materials.simpleSyrup.ingredient(new U.CL(1)),
        materials.sodaWater.ingredient(new U.CL(8)),
        materials.lemon.ingredient(new U.Slice(1)),
      ]
    ),
  ],
  [
    "john-collins",
    new Recipe(
      "John collins",
      "Pour all ingredients directly into highball glass filled with ice. Stir gently. Garnish with Lemon slice and maraschino cherry. Add a dash of Angostura bitters.",
      glasses.collinsGlass,
      [
        materials.gin.ingredient(new U.CL(4.5)),
        materials.lemonJuice.ingredient(new U.CL(3)),
        materials.simpleSyrup.ingredient(new U.CL(1.5)),
        materials.sodaWater.ingredient(new U.CL(6)),
        materials.angosturaBitters.ingredient(new U.Dash(1)),
        materials.lemon.ingredient(new U.Slice(1)),
        materials.cherry.ingredient(new U.Whole(1)),
      ]
    ),
  ],
  [
    "manhattan",
    new Recipe(
      "Manhattan",
      "Pour all ingredients into mixing glass with ice cubes. Stir well. Strain into chilled cocktail glass. Garnish with cocktail cherry.",
      glasses.cocktailGlass,
      [
        materials.ryeWhiskey.ingredient(new U.CL(5)),
        materials.sweetRedVermouth.ingredient(new U.CL(2)),
        materials.angosturaBitters.ingredient(new U.Dash(1)),
        materials.cherry.ingredient(new U.Whole(1)),
      ]
    ),
  ],
  [
    "mary-pickford",
    new Recipe(
      "Mary pickford",
      "Shake and strain into a chilled large cocktail glass",
      glasses.cocktailGlass,
      [
        materials.whiteRum.ingredient(new U.CL(6)),
        materials.pineappleJuice.ingredient(new U.CL(6)),
        materials.grenadine.ingredient(new U.CL(1)),
        materials.maraschino.ingredient(new U.CL(1)),
      ]
    ),
  ],
  [
    "monkey-gland",
    new Recipe(
      "Monkey gland",
      "Shake well over ice cubes in a shaker, strain into a chilled cocktail glass.",
      glasses.cocktailGlass,
      [
        materials.gin.ingredient(new U.CL(5)),
        materials.orangeJuice.ingredient(new U.CL(3)),
        materials.absinthe.ingredient(new U.Drop(2)),
        materials.grenadine.ingredient(new U.Drop(2)),
      ]
    ),
  ],
  [
    "negroni",
    new Recipe(
      "Negroni",
      "Pour all ingredients directly into old-fashioned glass filled with ice. Stir gently. Garnish with half Orange slice.",
      glasses.oldFashionedGlass,
      [
        materials.gin.ingredient(new U.CL(3)),
        materials.sweetRedVermouth.ingredient(new U.CL(3)),
        materials.campari.ingredient(new U.CL(3)),
        materials.orange.ingredient(new U.Slice(0.5)),
      ]
    ),
  ],
  [
    "old-fashioned",
    new Recipe(
      "Old fashioned",
      "Place sugar cube in old-fashioned glass and saturate with bitters, add a dash of plain water. Muddle until dissolve. Fill the glass with ice cubes and add whiskey. Garnish with Orange slice and a cocktail cherry.",
      glasses.oldFashionedGlass,
      [
        materials.whiskey.ingredient(new U.CL(4.5)),
        materials.angosturaBitters.ingredient(new U.Dash(2)),
        materials.sugar.ingredient(new U.Cube(1)),
        materials.water.ingredient(new U.Dash(3)),
        materials.orange.ingredient(new U.Slice(1)),
        materials.cherry.ingredient(new U.Whole(1)),
      ]
    ),
  ],
  [
    "paradise",
    new Recipe(
      "Paradise",
      "Shake together over ice. Strain into cocktail glass and serve chilled.",
      glasses.cocktailGlass,
      [
        materials.gin.ingredient(new U.CL(3.5)),
        materials.apricotBrandy.ingredient(new U.CL(2)),
        materials.orangeJuice.ingredient(new U.CL(1.5)),
      ]
    ),
  ],
  [
    "planter's-punch",
    new Recipe(
      "Planter’s punch",
      "Pour all ingredients, except the bitters, into shaker filled with ice. Shake well. Pour into large glass, filled with ice. Add dash Angostura bitters. Garnish with cocktail cherry and pineapple.",
      glasses.cocktailGlass,
      [
        materials.darkRum.ingredient(new U.CL(4.5)),
        materials.orangeJuice.ingredient(new U.CL(3.5)),
        materials.pineappleJuice.ingredient(new U.CL(3.5)),
        materials.lemonJuice.ingredient(new U.CL(2)),
        materials.grenadine.ingredient(new U.CL(1)),
        materials.simpleSyrup.ingredient(new U.CL(1)),
        materials.angosturaBitters.ingredient(new U.Dash(3)),
        materials.cherry.ingredient(new U.Whole(1)),
        materials.pineapple.ingredient(new U.Slice(1)),
      ]
    ),
  ],
  [
    "porto-flip",
    new Recipe(
      "Porto flip",
      "Pour all ingredients into cocktail shaker filled with ice. Shake well. Strain into cocktail glass. Sprinkle with fresh ground nutmeg.",
      glasses.cocktailGlass,
      [
        materials.brandy.ingredient(new U.CL(1.5)),
        materials.port.ingredient(new U.CL(4.5)),
        materials.eggYolk.ingredient(new U.CL(1)),
        materials.nutmeg.ingredient(new U.None(1)),
      ]
    ),
  ],
  [
    "ramos-fizz",
    new Recipe(
      "Ramos fizz",
      "Pour all ingredients (except soda) in a mixing glass, dry shake (no ice) for two minutes, add ice and hard shake for another minute. Strain into a highball glass without ice, top with soda.",
      glasses.highballGlass,
      [
        materials.gin.ingredient(new U.CL(4.5)),
        materials.cream.ingredient(new U.CL(6)),
        materials.simpleSyrup.ingredient(new U.CL(3)),
        materials.limeJuice.ingredient(new U.CL(1.5)),
        materials.lemonJuice.ingredient(new U.CL(1.5)),
        materials.eggWhite.ingredient(new U.Whole(1)),
        materials.orangeFlowerWater.ingredient(new U.Dash(3)),
        materials.vanillaExtract.ingredient(new U.Drop(2)),
        materials.sodaWater.ingredient(new U.None(1)),
      ]
    ),
  ],
  [
    "rusty-nail",
    new Recipe(
      "Rusty nail",
      "Pour all ingredients directly into old-fashioned glass filled with ice. Stir gently. Garnish with a Lemon twist.",
      glasses.oldFashionedGlass,
      [
        materials.scotchWhiskey.ingredient(new U.CL(4.5)),
        materials.drambuie.ingredient(new U.CL(2.5)),
        materials.lemon.ingredient(new U.Twist(1)),
      ]
    ),
  ],
  [
    "sazerac",
    new Recipe(
      "Sazerac",
      "Rinse a chilled old-fashioned glass with the absinthe, add crushed ice and set it aside. Stir the remaining ingredients over ice and set it aside. Discard the ice and any excess absinthe from the prepared glass, and strain the drink into the glass. Add the Lemon peel for garnish. Note: The original recipe changed after the American Civil War, rye whiskey substituted cognac as it became hard to obtain.",
      glasses.oldFashionedGlass,
      [
        materials.cognac.ingredient(new U.CL(5)),
        materials.absinthe.ingredient(new U.CL(1)),
        materials.sugar.ingredient(new U.Cube(1)),
        materials.peychaudSBitters.ingredient(new U.Dash(2)),
        materials.lemon.ingredient(new U.Peel(1)),
      ],
      { tags: ["stirred"] }
    ),
  ],
  [
    "screwdriver",
    new Recipe(
      "Screwdriver",
      "Pour all ingredients into a highball glass filled with ice. Stir gently. Garnish with an Orange slice.",
      glasses.highballGlass,
      [
        materials.vodka.ingredient(new U.CL(5)),
        materials.orangeJuice.ingredient(new U.CL(10)),
        materials.orange.ingredient(new U.Slice(1)),
      ],
      { tags: ["highball"] }
    ),
  ],
  [
    "sidecar",
    new Recipe(
      "Sidecar",
      "Pour all ingredients into cocktail shaker filled with ice. Shake well and strain into cocktail glass.",
      glasses.cocktailGlass,
      [
        materials.cognac.ingredient(new U.CL(5)),
        materials.tripleSec.ingredient(new U.CL(2)),
        materials.lemonJuice.ingredient(new U.CL(2)),
      ],
      { tags: ["shaken"] }
    ),
  ],
  [
    "stinger",
    new Recipe(
      "Stinger",
      "Pour in a mixing glass with ice, stir and strain into a cocktail glass. May also be served on rocks in a rocks glass.",
      glasses.cocktailGlass,
      [
        materials.cognac.ingredient(new U.CL(5)),
        materials.whiteCrèmeDeMenthe.ingredient(new U.CL(2)),
      ],
      { tags: ["stirred"] }
    ),
  ],
  [
    "tuxedo",
    new Recipe(
      "Tuxedo",
      "Stir all ingredients with ice and strain into cocktail glass. Garnish with a cocktail cherry and a Lemon zest twist.",
      glasses.cocktailGlass,
      [
        materials.oldTomGin.ingredient(new U.CL(3)),
        materials.dryVermouth.ingredient(new U.CL(3)),
        materials.maraschino.ingredient(new U.Tsp(0.5)),
        materials.absinthe.ingredient(new U.Tsp(0.25)),
        materials.orangeBitters.ingredient(new U.Dash(3)),
        materials.cherry.ingredient(new U.Whole(1)),
        materials.lemon.ingredient(new U.Twist(1)),
      ],
      { tags: ["stirred"] }
    ),
  ],
  [
    "whiskey-sour",
    new Recipe(
      "Whiskey sour",
      "Egg white is optional. Pour all ingredients into cocktail shaker filled with ice. Shake well (a little harder if using egg white). Strain in cocktail glass. Garnish with half Orange slice and maraschino cherry.",
      glasses.oldFashionedGlass,
      [
        materials.bourbonWhiskey.ingredient(new U.CL(4.5)),
        materials.lemonJuice.ingredient(new U.CL(3)),
        materials.simpleSyrup.ingredient(new U.CL(1.5)),
        materials.cherry.ingredient(new U.Whole(1)),
        materials.orange.ingredient(new U.Slice(0.5)),
        materials.eggWhite.optionalIngredient(new U.Dash(1)),
      ],
      { tags: ["shaken"] }
    ),
  ],
  [
    "white-lady",
    new Recipe(
      "White lady",
      "Add all ingredients into cocktail shaker filled with ice. Shake well and strain into large cocktail glass.",
      glasses.cocktailGlass,
      [
        materials.gin.ingredient(new U.CL(4)),
        materials.tripleSec.ingredient(new U.CL(3)),
        materials.lemonJuice.ingredient(new U.CL(2)),
      ],
      { tags: ["shaken"] }
    ),
  ],
  [
    "french-connection",
    new Recipe(
      "French connection",
      "Pour all ingredients directly into old fashioned glass filled with ice cubes. Stir gently.",
      glasses.oldFashionedGlass,
      [
        materials.cognac.ingredient(new U.CL(3.5)),
        materials.amaretto.ingredient(new U.CL(3.5)),
      ],
      { tags: ["stirred"] }
    ),
  ],
  [
    "mint-julep",
    new Recipe(
      "Mint julep",
      "In steel cup gently muddle 4 mint sprigs with sugar and water. Fill the glass with cracked ice, add the Bourbon and stir well until the cup frosts. Garnish with a mint sprig.",
      glasses.steelCup,
      [
        materials.bourbonWhiskey.ingredient(new U.CL(6)),
        materials.mint.ingredient(new U.Sprig(5)),
        materials.water.ingredient(new U.Tsp(2)),
        materials.powderedSugar.ingredient(new U.Tsp(1)),
      ],
      { tags: ["muddled"] }
    ),
  ],
  [
    "white-russian",
    new Recipe(
      "White russian",
      "Pour vodka and coffee liqueur into an old fashioned glass filled with ice cubes. Float fresh cream on the top and stir in slowly..",
      glasses.oldFashionedGlass,
      [
        materials.vodka.ingredient(new U.CL(5)),
        materials.coffeeLiqueur.ingredient(new U.CL(2)),
        materials.cream.ingredient(new U.CL(3)),
      ],
      { tags: ["stirred"] }
    ),
  ],
  [
    "bloody-mary",
    new Recipe(
      "Bloody Mary",
      "Stir gently all the ingredients in a mixing glass with ice. Add tabasco, celery salt, pepper to taste. Pour into rocks glass. Garnish with celery and Lemon wedge. If requested served with ice, pour into highball glass.",
      glasses.highballGlass,
      [
        materials.vodka.ingredient(new U.CL(4.5)),
        materials.tomatoJuice.ingredient(new U.CL(9)),
        materials.lemonJuice.ingredient(new U.CL(1.5)),
        materials.worcestershireSauce.ingredient(new U.Dash(2)),
        materials.tabasco.ingredient(new U.None(1)),
        materials.celerySalt.ingredient(new U.None(1)),
        materials.pepper.ingredient(new U.None(1)),
        materials.celery.ingredient(new U.None(1)),
        materials.lemon.ingredient(new U.Wedge(1)),
      ],
      { tags: ["brunch"] }
    ),
  ],
  [
    "champagne-cocktail",
    new Recipe(
      "Champagne cocktail",
      "Place the sugar cube with 2 dashes of bitters in a large Champagne glass, add the cognac. Optionally add a few drops of Grand Marnier. Pour gently chilled Champagne. Garnish with Orange zest and cherry.",
      glasses.cocktailGlass,
      [
        materials.champagne.ingredient(new U.CL(9)),
        materials.cognac.ingredient(new U.CL(1)),
        materials.angosturaBitters.ingredient(new U.Dash(2)),
        materials.sugar.ingredient(new U.Cube(1)),
        materials.orange.ingredient(new U.Zest(1)),
        materials.cherry.ingredient(new U.Whole(1)),
        materials.grandMarnier.optionalIngredient(new U.Drop(3)),
      ],
      { tags: ["topped"] }
    ),
  ],
  [
    "kir",
    new Recipe(
      "Kir",
      "Pour Crème de Cassis into glass, top up with white wine.",
      glasses.wineGlass,
      [
        materials.dryWhiteWine.ingredient(new U.CL(9)),
        materials.crèmeDeCassis.ingredient(new U.CL(1)),
      ],
      { tags: ["topped"] }
    ),
  ],
  [
    "kir-royal",
    new Recipe(
      "Kir royal",
      "Pour Crème de Cassis into glass, top up with Champagne.",
      glasses.wineGlass,
      [
        materials.champagne.ingredient(new U.CL(9)),
        materials.crèmeDeCassis.ingredient(new U.CL(1)),
      ],
      { tags: ["topped"] }
    ),
  ],
  [
    "long-island-iced-tea",
    new Recipe(
      "Long island iced tea",
      "Add all ingredients into highball glass filled with ice. Top with cola. Stir gently. Garnish with Lemon slice.",
      glasses.highballGlass,
      [
        materials.vodka.ingredient(new U.CL(1.5)),
        materials.tequila.ingredient(new U.CL(1.5)),
        materials.whiteRum.ingredient(new U.CL(1.5)),
        materials.gin.ingredient(new U.CL(1.5)),
        materials.cointreau.ingredient(new U.CL(1.5)),
        materials.lemonJuice.ingredient(new U.CL(2.5)),
        materials.simpleSyrup.ingredient(new U.CL(3)),
        materials.cola.ingredient(new U.None(1)),
        materials.lemon.ingredient(new U.Slice(1)),
      ],
      { tags: ["long"] }
    ),
  ],
  [
    "mai-tai",
    new Recipe(
      "Mai-tai",
      "Add all ingredients into a shaker with ice. Shake and pour into a double rocks glass or an highball glass. Garnish with pineapple spear, mint leaves, and lime peel.",
      glasses.highballGlass,
      [
        materials.whiteRum.ingredient(new U.CL(3)),
        materials.darkRum.ingredient(new U.CL(3)),
        materials.curaçao.ingredient(new U.CL(1.5)),
        materials.orgeatSyrup.ingredient(new U.CL(1.5)),
        materials.limeJuice.ingredient(new U.CL(3)),
        materials.simpleSyrup.ingredient(new U.CL(0.75)),
        materials.pineapple.ingredient(new U.Spear(1)),
        materials.mint.ingredient(new U.Leaves(1)),
        materials.lime.ingredient(new U.Peel(1)),
      ],
      { tags: ["shaken"] }
    ),
  ],
  [
    "margarita",
    new Recipe(
      "Margarita",
      "Add all ingredients into a shaker with ice. Shake and strain into a chilled cocktail glass. Garnish with a half salt rim (optional).",
      glasses.margaritaGlass,
      [
        materials.tequila.ingredient(new U.CL(5)),
        materials.tripleSec.ingredient(new U.CL(2)),
        materials.limeJuice.ingredient(new U.CL(1.5)),
        materials.salt.optionalIngredient(new U.None(1)),
      ],
      { tags: ["shaken"] }
    ),
  ],
  [
    "tommy's-margarita",
    new Recipe(
      "Tommy’s margarita",
      "Shake and strain into a chilled cocktail glass.",
      glasses.margaritaGlass,
      [
        materials.tequila.ingredient(new U.CL(4.5)),
        materials.limeJuice.ingredient(new U.CL(1.5)),
        materials.agaveNectar.ingredient(new U.Tsp(2)),
      ],
      { tags: ["shaken"] }
    ),
  ],
  [
    "b52",
    new Recipe(
      "B52",
      "Layer ingredients one at a time starting with coffee liqueur, followed by irish cream and top with triple sec. Flame the triple sec, serve while the flame is still on, accompanied with a straw on side plate.",
      glasses.oldFashionedGlass,
      [
        materials.coffeeLiqueur.ingredient(new U.CL(2)),
        materials.tripleSec.ingredient(new U.CL(2)),
        materials.irishCream.ingredient(new U.CL(2)),
      ],
      { tags: ["layered"] }
    ),
  ],
  [
    "barracuda",
    new Recipe(
      "Barracuda",
      "Shake together with ice. Strain into glass and serve.",
      glasses.margaritaGlass,
      [
        materials.goldRum.ingredient(new U.CL(4.5)),
        materials.galliano.ingredient(new U.CL(1.5)),
        materials.pineappleJuice.ingredient(new U.CL(6)),
        materials.limeJuice.ingredient(new U.Dash(1)),
        materials.prosecco.ingredient(new U.None(1)),
      ],
      { tags: ["shaken"] }
    ),
  ],
  [
    "corpse-reviver-2",
    new Recipe(
      "Corpse reviver #2",
      "Pour all ingredients into shaker with ice. Shake well and strain in chilled cocktail glass. Garnish with Orange zest.",
      glasses.cocktailGlass,
      [
        materials.gin.ingredient(new U.CL(3)),
        materials.cointreau.ingredient(new U.CL(3)),
        materials.lilletBlanc.ingredient(new U.CL(3)),
        materials.lemonJuice.ingredient(new U.CL(3)),
        materials.absinthe.ingredient(new U.Dash(1)),
        materials.orange.ingredient(new U.Zest(1)),
      ],
      { tags: ["shaken"] }
    ),
  ],
  [
    "cosmopolitan",
    new Recipe(
      "Cosmopolitan",
      "Add all ingredients into cocktail shaker filled with ice. Shake well and strain into large cocktail glass. Garnish with Lemon twist.",
      glasses.cocktailGlass,
      [
        materials.vodka.ingredient(new U.CL(4)),
        materials.cointreau.ingredient(new U.CL(1.5)),
        materials.limeJuice.ingredient(new U.CL(1.5)),
        materials.cranberryJuice.ingredient(new U.CL(3)),
        materials.lemon.ingredient(new U.Twist(1)),
      ],
      { tags: ["shaken"] }
    ),
  ],
  [
    "dirty-martini",
    new Recipe(
      "Dirty martini",
      "Pour all ingredients into mixing glass with ice cubes. Stir well. Strain in chilled martini glass. Garnish with green olive.",
      glasses.cocktailGlass,
      [
        materials.vodka.ingredient(new U.CL(6)),
        materials.dryVermouth.ingredient(new U.CL(1)),
        materials.oliveJuice.ingredient(new U.CL(1)),
        materials.olive.ingredient(new U.Whole(1)),
      ],
      { tags: ["stirred"] }
    ),
  ],
  [
    "espresso-martini",
    new Recipe(
      "Espresso martini",
      "Shake and strain into a chilled cocktail glass.",
      glasses.cocktailGlass,
      [
        materials.vodka.ingredient(new U.CL(5)),
        materials.coffeeLiqueur.ingredient(new U.CL(1)),
        materials.simpleSyrup.ingredient(new U.None(1)),
        materials.espresso.ingredient(new U.CL(4)),
      ],
      { tags: ["shaken"] }
    ),
  ],
  [
    "golden-dream",
    new Recipe(
      "Golden dream",
      "Pour all ingredients into shaker filled with ice. Shake briskly for few seconds. Strain into chilled cocktail glass.",
      glasses.cocktailGlass,
      [
        materials.tripleSec.ingredient(new U.CL(2)),
        materials.galliano.ingredient(new U.CL(2)),
        materials.orangeJuice.ingredient(new U.CL(2)),
        materials.cream.ingredient(new U.CL(1)),
      ],
      { tags: ["shaken"] }
    ),
  ],
  [
    "grasshopper",
    new Recipe(
      "Grasshopper",
      "Pour all ingredients into shaker filled with ice. Shake briskly for few seconds. Strain into chilled cocktail glass. Garnish with mint leaf (optional).",
      glasses.cocktailGlass,
      [
        materials.whiteCrèmeDeCacao.ingredient(new U.CL(2)),
        materials.greenCrèmeDeMenthe.ingredient(new U.CL(2)),
        materials.cream.ingredient(new U.CL(2)),
        materials.mint.optionalIngredient(new U.Leaves(1)),
      ],
      { tags: ["shaken"] }
    ),
  ],
  [
    "hemingway-special",
    new Recipe(
      "Hemingway special",
      "Pour all ingredients into a shaker with ice. Shake well and strain into a large cocktail glass.",
      glasses.cocktailGlass,
      [
        materials.whiteRum.ingredient(new U.CL(6)),
        materials.grapefruitJuice.ingredient(new U.CL(4)),
        materials.maraschino.ingredient(new U.CL(1.5)),
        materials.limeJuice.ingredient(new U.CL(1.5)),
      ],
      { tags: ["shaken"] }
    ),
  ],
  [
    "horse's-neck",
    new Recipe(
      "Horse’s neck",
      "Pour Cognac and ginger ale directly into highball glass with ice cubes. Stir gently. If preferred, add dashes of Angostura Bitter. Garnish with rind of one Lemon spiral.",
      glasses.collinsGlass,
      [
        materials.cognac.ingredient(new U.CL(4)),
        materials.gingerAle.ingredient(new U.CL(12)),
        materials.angosturaBitters.ingredient(new U.Dash(3)),
        materials.lemon.ingredient(new U.Peel(1)),
      ],
      { tags: ["layered"] }
    ),
  ],
  [
    "irish-coffee",
    new Recipe(
      "Irish coffee",
      "Warm black coffee is poured into a pre-heated Irish coffee glass. Whiskey and at least one teaspoon of sugar is added and stirred until dissolved. Fresh thick chilled cream is carefully poured over the back of a spoon held just above the surface of the coffee. The layer of cream will float on the coffee without mixing. Plain sugar can be replaced with sugar syrup.",
      glasses.irishCoffeeMug,
      [
        materials.irishWhiskey.ingredient(new U.CL(5)),
        materials.coffee.ingredient(new U.CL(12)),
        materials.cream.ingredient(new U.CL(5)),
        materials.sugar.ingredient(new U.Tsp(1)),
      ],
      { tags: ["layered"] }
    ),
  ],
  [
    "tom-collins",
    new Recipe(
      "Tom collins",
      "Pour all ingredients directly into highball glass filled with ice. Stir gently. Garnish with Lemon slice and maraschino cherry. Add a dash of Angostura bitters.",
      glasses.collinsGlass,
      [
        materials.oldTomGin.ingredient(new U.CL(4.5)),
        materials.lemonJuice.ingredient(new U.CL(3)),
        materials.simpleSyrup.ingredient(new U.CL(1.5)),
        materials.sodaWater.ingredient(new U.CL(6)),
        materials.angosturaBitters.ingredient(new U.Dash(1)),
        materials.lemon.ingredient(new U.Slice(1)),
        materials.cherry.ingredient(new U.Whole(1)),
      ],
      { tags: ["layered"] }
    ),
  ],
  [
    "pina-colada",
    new Recipe(
      "Pina Colada",
      "Blend all the ingredients with ice in a electric blender, pour into a large glass and serve with straws. Garnish with a slice of pineapple with a cocktail cherry. 4 slices of fresh pineapple can be used instead of juice. Historically a few drops of fresh lime juice was added to taste.",
      glasses.hurricane,
      [
        materials.whiteRum.ingredient(new U.CL(5)),
        materials.coconutCream.ingredient(new U.CL(3)),
        materials.pineappleJuice.ingredient(new U.CL(5)),
        materials.pineapple.ingredient(new U.Slice(1)),
        materials.cherry.ingredient(new U.Whole(1)),
      ],
      { tags: ["blended"] }
    ),
  ],
  [
    "pisco-sour",
    new Recipe(
      "Pisco Sour",
      "Shake and strain into a chilled champagne flute. Dash some Angostura bitters on top.",
      glasses.champagneFlute,
      [
        materials.pisco.ingredient(new U.CL(4.5)),
        materials.simpleSyrup.ingredient(new U.CL(2)),
        materials.lemonJuice.ingredient(new U.CL(3)),
        materials.eggWhite.ingredient(new U.Whole(1)),
        materials.angosturaBitters.ingredient(new U.Dash(1)),
      ],
      { tags: ["shaken"] }
    ),
  ],
  [
    "russian-spring-punch",
    new Recipe(
      "Russian spring punch",
      "Shake the ingredients and pour into highball glass. Top with Sparkling wine. Garnish with a Lemon slice and a blackberry.",
      glasses.highballGlass,
      [
        materials.vodka.ingredient(new U.CL(2.5)),
        materials.lemonJuice.ingredient(new U.CL(2.5)),
        materials.crèmeDeCassis.ingredient(new U.CL(1.5)),
        materials.simpleSyrup.ingredient(new U.CL(1)),
        materials.sparklingWine.ingredient(new U.None(1)),
        materials.lemon.ingredient(new U.Slice(1)),
        materials.blackberry.ingredient(new U.Whole(1)),
      ],
      { tags: ["shaken", "layered"] }
    ),
  ],
  [
    "sea-breeze",
    new Recipe(
      "Sea breeze",
      "Build all ingredients in a highball glass filled with ice. Garnish with an Orange zest and cherry.",
      glasses.highballGlass,
      [
        materials.vodka.ingredient(new U.CL(4)),
        materials.cranberryJuice.ingredient(new U.CL(12)),
        materials.grapefruitJuice.ingredient(new U.CL(3)),
        materials.orange.ingredient(new U.Zest(1)),
        materials.cherry.ingredient(new U.Whole(1)),
      ],
      { tags: ["layered"] }
    ),
  ],
  [
    "sex-on-the-beach",
    new Recipe(
      "Sex on the beach",
      "Build all ingredients in a highball glass filled with ice. Garnish with an Orange zest and cherry.",
      glasses.highballGlass,
      [
        materials.vodka.ingredient(new U.CL(4)),
        materials.peachSchnapps.ingredient(new U.CL(2)),
        materials.orangeJuice.ingredient(new U.CL(4)),
        materials.cranberryJuice.ingredient(new U.CL(4)),
        materials.grapefruitJuice.ingredient(new U.CL(3)),
        materials.orange.ingredient(new U.Slice(0.5)),
      ],
      { tags: ["layered"] }
    ),
  ],
  [
    "singapore-sling",
    new Recipe(
      "Singapore sling",
      "Pour all ingredients into cocktail shaker filled with ice cubes. Shake well. Strain into Hurricane glass. Garnish with pineapple and maraschino cherry.",
      glasses.hurricane,
      [
        materials.gin.ingredient(new U.CL(3)),
        materials.cherryLiqueur.ingredient(new U.CL(1.5)),
        materials.cointreau.ingredient(new U.CL(0.75)),
        materials.domBénédictine.ingredient(new U.CL(0.75)),
        materials.pineappleJuice.ingredient(new U.CL(12)),
        materials.limeJuice.ingredient(new U.CL(1.5)),
        materials.grenadine.ingredient(new U.CL(1)),
        materials.angosturaBitters.ingredient(new U.Dash(1)),
        materials.cherry.ingredient(new U.Whole(1)),
        materials.pineapple.ingredient(new U.Slice(1)),
      ],
      { tags: ["shaken"] }
    ),
  ],
  [
    "tequila-sunrise",
    new Recipe(
      "Tequila sunrise",
      "Pour tequila and Orange juice directly into highball glass filled with ice cubes. Add the grenadine syrup to create chromatic effect (sunrise), do not stir. Garnish with half Orange slice or an Orange zest.",
      glasses.collinsGlass,
      [
        materials.tequila.ingredient(new U.CL(4.5)),
        materials.orangeJuice.ingredient(new U.CL(9)),
        materials.grenadine.ingredient(new U.CL(1.5)),
        materials.orange.ingredient(new U.Slice(0.5)),
      ],
      { tags: ["layered"] }
    ),
  ],
  [
    "yellow-bird",
    new Recipe(
      "Yellow bird",
      "Shake and strain into a chilled cocktail glass.",
      glasses.cocktailGlass,
      [
        materials.whiteRum.ingredient(new U.CL(3)),
        materials.galliano.ingredient(new U.CL(1.5)),
        materials.tripleSec.ingredient(new U.CL(1.5)),
        materials.limeJuice.ingredient(new U.CL(1.5)),
      ],
      { tags: ["shaken"] }
    ),
  ],
  [
    "zombie",
    new Recipe(
      "Zombie",
      "Add all ingredients into an electric blender with 170 grams of cracked ice. With pulse bottom blend for a few seconds. Serve in a tall tumbler glass. Garnish with mint leaves.",
      glasses.zombieGlass,
      [
        materials.darkRum.ingredient(new U.CL(4.5)),
        materials.goldRum.ingredient(new U.CL(4.5)),
        materials.demeraraRum.ingredient(new U.CL(3)),
        materials.limeJuice.ingredient(new U.CL(2)),
        materials.falernum.ingredient(new U.CL(1.5)),
        materials.grapefruitJuice.ingredient(new U.CL(1)),
        materials.cinnamonSyrup.ingredient(new U.CL(0.5)),
        materials.grenadine.ingredient(new U.Tsp(1)),
        materials.angosturaBitters.ingredient(new U.Dash(1)),
        materials.absinthe.ingredient(new U.Dash(2)),
        materials.mint.ingredient(new U.Leaves(1)),
      ],
      { tags: ["blended"] }
    ),
  ],
  [
    "brandy-crusta",
    new Recipe(
      "Brandy crusta",
      "Mix together all ingredients with ice cubes in a mixing glass and strain into prepared slim cocktail glass. Rub a slice of Orange (or Lemon) around the rim of the glass and dip it in pulverized white sugar, so that the sugar will adhere to the edge of the glass. Carefully curling place the Orange/Lemon peel around the inside of the glass.",
      glasses.cocktailGlass,
      [
        materials.brandy.ingredient(new U.CL(5.25)),
        materials.lemonJuice.ingredient(new U.CL(1.5)),
        materials.maraschino.ingredient(new U.CL(0.75)),
        materials.curaçao.ingredient(new U.Tsp(1)),
        materials.simpleSyrup.ingredient(new U.Tsp(1)),
        materials.aromaticBitters.ingredient(new U.Dash(2)),
        materials.orange.ingredient(new U.Slice(1)),
        materials.powderedSugar.ingredient(new U.Tsp(1)),
      ],
      { tags: ["stirred"] }
    ),
  ],
  [
    "hanky-panky",
    new Recipe(
      "Hanky panky",
      "Pour all ingredients into mixing glass with ice cubes. Stir well. Strain into chilled cocktail glass. Garnish with Orange zest.",
      glasses.cocktailGlass,
      [
        materials.londonDryGin.ingredient(new U.CL(4.5)),
        materials.sweetRedVermouth.ingredient(new U.CL(4.5)),
        materials.fernetBranca.ingredient(new U.CL(0.75)),
        materials.orange.ingredient(new U.Zest(1)),
      ],
      { tags: ["stirred"] }
    ),
  ],
  [
    "last-word",
    new Recipe(
      "Last word",
      "Add all ingredients into a cocktail shaker. Shake with ice and strain into a chilled cocktail glass.",
      glasses.cocktailGlass,
      [
        materials.gin.ingredient(new U.CL(2.25)),
        materials.greenChartreuse.ingredient(new U.CL(2.25)),
        materials.maraschino.ingredient(new U.CL(2.25)),
        materials.limeJuice.ingredient(new U.CL(2.25)),
      ],
      { tags: ["shaken"] }
    ),
  ],
  [
    "martinez",
    new Recipe(
      "Martinez",
      "Pour all ingredients into mixing glass with ice cubes. Stir well. Strain into chilled cocktail glass. Garnish with Lemon zest.",
      glasses.cocktailGlass,
      [
        materials.londonDryGin.ingredient(new U.CL(4.5)),
        materials.sweetRedVermouth.ingredient(new U.CL(4.5)),
        materials.maraschino.ingredient(new U.Tsp(1)),
        materials.orangeBitters.ingredient(new U.Dash(2)),
        materials.lemon.ingredient(new U.Zest(1)),
      ],
      { tags: ["stirred"] }
    ),
  ],
  [
    "vieux-carre",
    new Recipe(
      "Vieux carré",
      "Pour all ingredients into mixing glass with ice cubes. Stir well. Strain into chilled cocktail glass. Garnish with Orange zest and maraschino cherry.",
      glasses.cocktailGlass,
      [
        materials.ryeWhiskey.ingredient(new U.CL(3)),
        materials.cognac.ingredient(new U.CL(3)),
        materials.sweetRedVermouth.ingredient(new U.CL(3)),
        materials.domBénédictine.ingredient(new U.Tsp(1)),
        materials.peychaudSBitters.ingredient(new U.Dash(2)),
        materials.orange.ingredient(new U.Zest(1)),
        materials.cherry.ingredient(new U.Whole(1)),
      ],
      { tags: ["stirred"] }
    ),
  ],
  [
    "bee's-knees",
    new Recipe(
      "Bee’s knees",
      "Stir honey with Lemon and Orange juices until it dissolves, add gin and shake with ice. Strain into a chilled cocktail glass. Optionally garnish with a Lemon or Orange zest.",
      glasses.cocktailGlass,
      [
        materials.londonDryGin.ingredient(new U.CL(5.25)),
        materials.honeySyrup.ingredient(new U.Tsp(2)),
        materials.lemonJuice.ingredient(new U.CL(2.25)),
        materials.orangeJuice.ingredient(new U.CL(2.25)),
        materials.orange.optionalIngredient(new U.Zest(1)),
      ],
      { tags: ["shaken"] }
    ),
  ],
  [
    "cachanchara",
    new Recipe(
      "Cachanchara",
      "Mix honey with water and lime juice and spread the mixture on the bottom and sides of the glass. Add cracked ice, and then the rum. End by energetically stirring from bottom to top. Garnish with Lime wedge.",
      glasses.oldFashionedGlass,
      [
        materials.cubanAguardiente.ingredient(new U.CL(6)),
        materials.lemonJuice.ingredient(new U.CL(1.5)),
        materials.honey.ingredient(new U.CL(1.5)),
        materials.water.ingredient(new U.CL(5)),
        materials.lime.ingredient(new U.Wedge(1)),
      ],
      { tags: ["stirred"] }
    ),
  ],
  [
    "fernandito",
    new Recipe(
      "Fernandito",
      "Pour the Fernet Branca into a double old fashioned glass with ice, fill the glass up with Cola. Gently stir.",
      glasses.highballGlass,
      [
        materials.fernetBranca.ingredient(new U.CL(5)),
        materials.cola.ingredient(new U.None(1)),
      ],
      { tags: ["long", "stirred"] }
    ),
  ],
  [
    "old-cuban",
    new Recipe(
      "Old cuban",
      "Pour all ingredients into cocktail shaker except the wine, shake well with ice, strain into chilled elegant cocktail glass. Top up with the sparkling wine. Garnish with mint springs.",
      glasses.cocktailGlass,
      [
        materials.rum.ingredient(new U.CL(4.5)),
        materials.sparklingWine.ingredient(new U.CL(6)),
        materials.limeJuice.ingredient(new U.CL(2.25)),
        materials.simpleSyrup.ingredient(new U.CL(3)),
        materials.angosturaBitters.ingredient(new U.Dash(2)),
        materials.mint.ingredient(new U.Sprig(3)),
      ],
      { tags: ["shaken"] }
    ),
  ],
  [
    "paloma",
    new Recipe(
      "Paloma",
      "Pour the tequila into a highball glass, squeeze the lime juice. Add ice and salt, fill up pink grapefruit soda. Stir gently. Garnish with a slice of lime.",
      glasses.highballGlass,
      [
        materials.tequila.ingredient(new U.CL(5)),
        materials.grapefruitSoda.ingredient(new U.CL(10)),
        materials.limeJuice.ingredient(new U.Tsp(2)),
        materials.salt.ingredient(new U.None(1)),
        materials.lime.ingredient(new U.Slice(1)),
      ],
      { tags: ["long"] }
    ),
  ],
  [
    "paper-plane",
    new Recipe(
      "Paper plane",
      "Pour all ingredients into cocktail shaker, shake well with ice, strain into chilled cocktail glass.",
      glasses.cocktailGlass,
      [
        materials.bourbonWhiskey.ingredient(new U.CL(3)),
        materials.amaroNonino.ingredient(new U.CL(3)),
        materials.aperol.ingredient(new U.CL(3)),
        materials.lemonJuice.ingredient(new U.CL(3)),
      ],
      { tags: ["shaken"] }
    ),
  ],
  [
    "penicillin",
    new Recipe(
      "Penicillin",
      "Muddle fresh ginger in a shaker and add the remaining ingredients, except for the Islay single malt whiskey. Fill the shaker with ice and shake. Double-strain into a chilled old fashioned glass with ice. Float the single malt whisky on top. Garnish with a candied ginger.",
      glasses.oldFashionedGlass,
      [
        materials.blendedScotchWhiskey.ingredient(new U.CL(6)),
        materials.islaySingleMaltScotch.ingredient(new U.CL(0.75)),
        materials.lemonJuice.ingredient(new U.CL(2.25)),
        materials.honeySyrup.ingredient(new U.CL(2.25)),
        materials.ginger.ingredient(new U.Slice(3)),
        materials.candiedGinger.ingredient(new U.Whole(1)),
      ],
      { tags: ["shaken"] }
    ),
  ],
  [
    "southside",
    new Recipe(
      "Southside",
      "Egg white optional. Pour all ingredients into a cocktail shaker, shake well with ice, double-strain into chilled cocktail glass. If egg white is used shake vigorously. Garnish with mint springs.",
      glasses.cocktailGlass,
      [
        materials.londonDryGin.ingredient(new U.CL(6)),
        materials.lemonJuice.ingredient(new U.CL(3)),
        materials.simpleSyrup.ingredient(new U.CL(1.5)),
        materials.mint.ingredient(new U.Sprig(2)),
        materials.eggWhite.optionalIngredient(new U.CL(3)),
      ],
      { tags: ["shaken"] }
    ),
  ],
  [
    "spicy-fifty",
    new Recipe(
      "Spicy fifty",
      "Pour all ingredients (including 2 thin slices of pepper) into a cocktail shaker, shake well with ice, double-strain into chilled cocktail glass. Garnish with a red chili pepper.",
      glasses.cocktailGlass,
      [
        materials.vodka.ingredient(new U.CL(5)),
        materials.elderflowerSyrup.ingredient(new U.CL(1.5)),
        materials.lemonJuice.ingredient(new U.CL(1.5)),
        materials.honeySyrup.ingredient(new U.CL(1)),
        materials.vanillaExtract.ingredient(new U.Drop(1)),
        materials.redChiliPepper.ingredient(new U.None(1)),
      ],
      { tags: ["spicy"] }
    ),
  ],
  [
    "suffering-bastard",
    new Recipe(
      "Suffering bastard",
      "Pour all ingredients into cocktail shaker except the ginger beer, shake well with ice, Pour unstrained into a Collins glass or in the original S. Bastard mug and top up with ginger beer. Garnish with mint sprig and optionally an Orange slice as well.",
      glasses.collinsGlass,
      [
        materials.brandy.ingredient(new U.CL(3)),
        materials.gin.ingredient(new U.CL(3)),
        materials.limeJuice.ingredient(new U.CL(1.5)),
        materials.angosturaBitters.ingredient(new U.Dash(2)),
        materials.gingerBeer.ingredient(new U.None(1)),
        materials.mint.ingredient(new U.Sprig(1)),
        materials.orange.optionalIngredient(new U.Slice(1)),
      ],
      { tags: ["long"] }
    ),
  ],
  [
    "tipperary",
    new Recipe(
      "Tipperary",
      "Pour all ingredients into mixing glass with ice cubes. Stir well. Strain into chilled martini cocktail glass. Garnish with a slice of Orange.",
      glasses.cocktailGlass,
      [
        materials.irishWhiskey.ingredient(new U.CL(5)),
        materials.sweetRedVermouth.ingredient(new U.CL(2.5)),
        materials.greenChartreuse.ingredient(new U.CL(1.5)),
        materials.angosturaBitters.ingredient(new U.Dash(2)),
        materials.orange.ingredient(new U.Slice(1)),
      ],
      { tags: ["stirred"] }
    ),
  ],
  [
    "trinidad-sour",
    new Recipe(
      "Trinidad sour",
      "Pour all ingredients into mixing glass with ice cubes. Stir well. Strain into chilled cocktail glass.",
      glasses.cocktailGlass,
      [
        materials.angosturaBitters.ingredient(new U.CL(4.5)),
        materials.orgeatSyrup.ingredient(new U.CL(3)),
        materials.lemonJuice.ingredient(new U.CL(2.25)),
        materials.ryeWhiskey.ingredient(new U.CL(1.5)),
      ],
      { tasg: ["sour"] }
    ),
  ],
  [
    "ve.n.to",
    new Recipe(
      "Ve.n.to",
      "Egg white optional. Pour all ingredients into the shaker. Shake vigorously with ice. Strain into a chilled small tumbler glass filled with ice. Garnish with Lemon zest and white grapes.",
      glasses.oldFashionedGlass,
      [
        materials.grappa.ingredient(new U.CL(4.5)),
        materials.lemonJuice.ingredient(new U.CL(2.25)),
        materials.honeySyrup.ingredient(new U.CL(1.5)),
        materials.chamomileSyrup.ingredient(new U.CL(1.5)),
        materials.honeySyrup.ingredient(new U.CL(1.5)),
        materials.lemon.ingredient(new U.Zest(1)),
        materials.whiteGrape.ingredient(new U.Whole(3)),
        materials.eggWhite.optionalIngredient(new U.CL(3)),
      ],
      { tags: ["shaken"] }
    ),
  ],
  [
    "illegal",
    new Recipe(
      "Illegal",
      "Egg white optional. Pour all ingredients into the shaker. Shake vigorously with ice. Strain into a chilled cocktail glass, or “on the rocks” in a traditional clay or terracotta mug.",
      glasses.cocktailGlass,
      [
        materials.mezcal.ingredient(new U.CL(3)),
        materials.overproofWhiteRum.ingredient(new U.CL(1.5)),
        materials.limeJuice.ingredient(new U.CL(2.25)),
        materials.falernum.ingredient(new U.CL(1.5)),
        materials.simpleSyrup.ingredient(new U.CL(1.5)),
        materials.maraschino.ingredient(new U.Tsp(1)),
        materials.eggWhite.optionalIngredient(new U.CL(3)),
      ],
      { tags: ["shaken"] }
    ),
  ],
  [
    "naked-and-famous",
    new Recipe(
      "Naked and famous",
      "Pour all ingredients into cocktail shaker, shake well with ice, strain into chilled cocktail glass.",
      glasses.cocktailGlass,
      [
        materials.mezcal.ingredient(new U.CL(2.25)),
        materials.yellowChartreuse.ingredient(new U.CL(2.25)),
        materials.aperol.ingredient(new U.CL(2.25)),
        materials.limeJuice.ingredient(new U.CL(2.25)),
      ],
      { tags: ["shaken"] }
    ),
  ],
  [
    "new-york-sour",
    new Recipe(
      "New York sour",
      "Bourbon can be used instead of rye. Pour all ingredients into the shaker. Shake vigorously with ice. Strain into a chilled rocks glass filled with ice. Float the wine on top. Garnish with Lemon or Orange zest with cherry.",
      glasses.oldFashionedGlass,
      [
        materials.ryeWhiskey.ingredient(new U.CL(6)),
        materials.lemonJuice.ingredient(new U.CL(3)),
        materials.eggWhite.ingredient(new U.CL(3)),
        materials.simpleSyrup.ingredient(new U.CL(2.25)),
        materials.redWine.ingredient(new U.CL(1.5)),
        materials.lemon.ingredient(new U.Zest(1)),
        materials.cherry.ingredient(new U.Whole(1)),
      ],
      { tags: ["sour"] }
    ),
  ],
  [
    "spritz",
    new Recipe(
      "Spritz",
      "Build all ingredients into a wine glass filled with ice. Stir gently. Garnish with a slice of Orange.",
      glasses.wineGlass,
      [
        materials.prosecco.ingredient(new U.CL(9)),
        materials.aperol.ingredient(new U.CL(6)),
        materials.sodaWater.ingredient(new U.Splash(1)),
        materials.orange.ingredient(new U.Slice(1)),
      ],
      { tags: ["spritz"] }
    ),
  ],
  [
    "gimlet",
    new Recipe(
      "Gimlet",
      "Pour all ingredients into a cocktail strainer, shake well with ice, strain into chilled cocktail glass.",
      glasses.cocktailGlass,
      [
        materials.limeJuice.ingredient(new U.CL(2)),
        materials.simpleSyrup.ingredient(new U.CL(2)),
        materials.gin.ingredient(new U.CL(6)),
      ],
      { tags: ["shaken"] }
    ),
  ],
  [
    "martini",
    new Recipe(
      "Martini",
      "Mix gin and vermouth in a chilled pint glass, stir with ice. Strain into a champagne coupe.",
      glasses.champagneCoupe,
      [
        materials.gin.ingredient(new U.CL(6)),
        materials.dryVermouth.ingredient(new U.CL(6)),
        materials.lemon.optionalIngredient(new U.Twist(1)),
      ],
      { tags: ["stirred"] }
    ),
  ],
  [
    "vodka-martini",
    new Recipe(
      "Vodka martini",
      "Mix vodka and dry vermouth in a pint glass. The amount of vermouth used varies and can be as little as a drop. Stir with ice. Optionally add olive brine to make a dirty martini.",
      glasses.cocktailGlass,
      [
        materials.vodka.ingredient(new U.CL(8)),
        materials.dryVermouth.ingredient(new U.Drop(1)),
        materials.lemon.optionalIngredient(new U.Twist(1)),
        materials.olive.optionalIngredient(new U.Whole(1)),
      ],
      {
        wiki: "https://en.wikipedia.org/wiki/Martini_(cocktail)",
        tags: ["stirred"],
      }
    ),
  ],
  [
    "20th-century",
    new Recipe(
      "20th century",
      "Combine ingredients in a cocktail shaker, shake with ice, strain into a cocktail glass.",
      glasses.cocktailGlass,
      [
        materials.gin.ingredient(new U.CL(4.5)),
        materials.lemonJuice.ingredient(new U.CL(2)),
        materials.whiteCrèmeDeCacao.ingredient(new U.CL(1.5)),
        materials.kinaLillet.ingredient(new U.CL(2)),
        materials.lemon.ingredient(new U.Twist(1)),
      ],
      {
        tags: ["shaken"],
      }
    ),
  ],
  [
    "artillery",
    new Recipe(
      "Artillery",
      "Stir all ingredients with ice and strain into a cocktail glass.",
      glasses.cocktailGlass,
      [
        materials.sweetRedVermouth.ingredient(new U.Tsp(1.5)),
        materials.gin.ingredient(new U.CL(4.5)),
        materials.angosturaBitters.ingredient(new U.Dash(2)),
      ],
      { tags: ["stirred"] }
    ),
  ],
  [
    "whiskey-fix",
    new Recipe(
      "Whiskey fix",
      "Shake in a cocktail shaker with a small piece of ice. Drain into the glass and top with crushed ice and garnish with a Lemon wedge and a luxardo cherry.",
      glasses.oldFashionedGlass,
      [
        materials.lemonJuice.ingredient(new U.CL(2)),
        materials.simpleSyrup.ingredient(new U.CL(2)),
        materials.whiskey.ingredient(new U.CL(6)),
        materials.lemon.ingredient(new U.Wedge(1)),
        materials.cherry.ingredient(new U.Whole(1)),
      ],
      {
        tags: ["sour"],
      }
    ),
  ],
]);
