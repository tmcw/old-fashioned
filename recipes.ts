interface Ingredient {
  unit:
    | "CL"
    | "Tsp"
    | "Dash"
    | "Slice"
    | "Whole"
    | "Sprig"
    | "Wedge"
    | "Twist"
    | "Cube"
    | "Drop"
    | "Peel"
    | "Zest"
    | "None"
    | "Spear"
    | "Leaves"
    | "Splash";
  amount: number;
  name: MaterialName;
}

export interface Recipe {
  name: string;
  description: string;
  ingredients: Ingredient[];
  optionalIngredients?: Ingredient[];
  glass: string;
  video?: string;
}

export interface Material {
  name: string;
  type:
    | "Spirit"
    | "Liqueur"
    | "Bitters"
    | "Fruit"
    | "Fortified"
    | "Juice"
    | "Soda"
    | "Syrup"
    | "Other"
    | "Base"
    | "Seasoning";
  parent?: string;
  id: number;
}

type MaterialName = (typeof materials)[number]["name"];

export const materials = [
  { "name": "Whiskey", "type": "Spirit", "id": 0 },
  {
    "name": "Scotch whiskey",
    "type": "Spirit",
    "parent": "whiskey",
    "id": 1,
  },
  {
    "name": "Bourbon whiskey",
    "type": "Spirit",
    "parent": "whiskey",
    "id": 2,
  },
  {
    "name": "Canadian whiskey",
    "type": "Spirit",
    "parent": "whiskey",
    "id": 3,
  },
  { "name": "Rye whiskey", "type": "Spirit", "parent": "whiskey", "id": 4 },
  { "name": "Irish whiskey", "type": "Spirit", "parent": "whiskey", "id": 5 },
  { "name": "Drambuie", "type": "Liqueur", "id": 6 },
  { "name": "Water", "type": "Other", "id": 7 },
  { "name": "Soda water", "type": "Soda", "id": 8 },
  { "name": "Gin", "type": "Spirit", "id": 9 },
  { "name": "Old Tom Gin", "type": "Spirit", "parent": "gin", "id": 10 },
  { "name": "London dry gin", "type": "Spirit", "parent": "gin", "id": 11 },
  { "name": "White crème de menthe", "type": "Liqueur", "id": 12 },
  { "name": "Crème de mure", "type": "Liqueur", "id": 13 },
  { "name": "Maraschino", "type": "Liqueur", "id": 14 },
  { "name": "Brandy", "type": "Spirit", "id": 15 },
  { "name": "Apricot brandy", "type": "Liqueur", "id": 16 },
  { "name": "Port", "type": "Fortified", "id": 17 },
  { "name": "Calvados", "type": "Spirit", "id": 18 },
  { "name": "Bitters", "type": "Bitters", "id": 19 },
  {
    "name": "Peach bitters",
    "type": "Bitters",
    "parent": "bitters",
    "id": 20,
  },
  {
    "name": "Orange bitters",
    "type": "Bitters",
    "parent": "bitters",
    "id": 21,
  },
  {
    "name": "Angostura bitters",
    "type": "Bitters",
    "parent": "bitters",
    "id": 22,
  },
  {
    "name": "Peychaud’s bitters",
    "type": "Bitters",
    "parent": "bitters",
    "id": 23,
  },
  {
    "name": "Aromatic bitters",
    "type": "Bitters",
    "parent": "bitters",
    "id": 24,
  },
  { "name": "Lemon", "type": "Fruit", "id": 25 },
  { "name": "Blackberry", "type": "Fruit", "id": 26 },
  { "name": "Raspberry", "type": "Fruit", "id": 27 },
  { "name": "Cherry", "type": "Fruit", "id": 28 },
  { "name": "Pineapple", "type": "Fruit", "id": 29 },
  { "name": "Sweet red vermouth", "type": "Fortified", "id": 30 },
  { "name": "Dry vermouth", "type": "Fortified", "id": 31 },
  { "name": "Cognac", "type": "Spirit", "parent": "brandy", "id": 32 },
  { "name": "Triple sec", "type": "Liqueur", "id": 33 },
  {
    "name": "Grand Marnier",
    "type": "Liqueur",
    "parent": "tripleSec",
    "id": 34,
  },
  { "name": "Cointreau", "type": "Liqueur", "parent": "tripleSec", "id": 35 },
  { "name": "Curaçao", "type": "Liqueur", "parent": "tripleSec", "id": 36 },
  { "name": "Grenadine", "type": "Syrup", "id": 37 },
  { "name": "Orange juice", "type": "Juice", "id": 38 },
  { "name": "Pineapple juice", "type": "Juice", "id": 39 },
  { "name": "Lime", "type": "Fruit", "id": 40 },
  { "name": "Cachaça", "type": "Spirit", "parent": "rum", "id": 41 },
  { "name": "Absinthe", "type": "Liqueur", "id": 42 },
  { "name": "Campari", "type": "Liqueur", "id": 43 },
  { "name": "Fernet Branca", "type": "Liqueur", "id": 44 },
  { "name": "Raspberry syrup", "type": "Syrup", "id": 45 },
  { "name": "Raspberry liqueur", "type": "Liqueur", "id": 46 },
  { "name": "Orange", "type": "Fruit", "id": 47 },
  { "name": "Egg yolk", "type": "Other", "id": 48 },
  { "name": "Egg white", "type": "Other", "id": 49 },
  {
    "name": "Champagne",
    "type": "Base",
    "parent": "sparklingWine",
    "id": 50,
  },
  { "name": "Tequila", "type": "Spirit", "id": 51 },
  { "name": "Rum", "type": "Spirit", "id": 52 },
  { "name": "White rum", "type": "Spirit", "parent": "rum", "id": 53 },
  { "name": "Gold rum", "type": "Spirit", "parent": "rum", "id": 54 },
  { "name": "Demerara rum", "type": "Spirit", "parent": "rum", "id": 55 },
  { "name": "Dark rum", "type": "Spirit", "parent": "rum", "id": 56 },
  { "name": "Lime juice", "type": "Juice", "id": 57 },
  { "name": "Cream", "type": "Other", "id": 58 },
  { "name": "Brown crème de cacao", "type": "Liqueur", "id": 59 },
  { "name": "White crème de cacao", "type": "Liqueur", "id": 60 },
  { "name": "Light cream", "type": "Other", "id": 61 },
  { "name": "Orange flower water", "type": "Other", "id": 62 },
  { "name": "Vanilla extract", "type": "Bitters", "id": 63 },
  { "name": "Cola", "type": "Soda", "id": 64 },
  { "name": "Nutmeg", "type": "Seasoning", "id": 65 },
  { "name": "Lemon juice", "type": "Juice", "id": 66 },
  { "name": "Vodka", "type": "Spirit", "id": 67 },
  { "name": "Ginger beer", "type": "Soda", "id": 68 },
  { "name": "Ginger ale", "type": "Soda", "id": 69 },
  { "name": "Prosecco", "type": "Base", "parent": "sparklingWine", "id": 70 },
  { "name": "Mint", "type": "Seasoning", "id": 71 },
  { "name": "Peach purée", "type": "Other", "id": 72 },
  { "name": "Coffee liqueur", "type": "Liqueur", "id": 73 },
  { "name": "Lillet blanc", "type": "Fortified", "id": 74 },
  { "name": "Kina lillet", "type": "Fortified", "id": 75 },
  { "name": "Green crème de menthe", "type": "Liqueur", "id": 76 },
  { "name": "Crème de cassis", "type": "Liqueur", "id": 77 },
  { "name": "Amaretto", "type": "Liqueur", "id": 78 },
  { "name": "Olive", "type": "Fruit", "id": 79 },
  { "name": "Wine", "type": "Base", "id": 80 },
  { "name": "Dry white wine", "type": "Base", "parent": "wine", "id": 81 },
  { "name": "Sparkling wine", "type": "Base", "id": 82 },
  { "name": "Peach schnapps", "type": "Liqueur", "id": 83 },
  { "name": "Cherry liqueur", "type": "Liqueur", "id": 84 },
  { "name": "DOM Bénédictine", "type": "Liqueur", "id": 85 },
  { "name": "Olive juice", "type": "Juice", "id": 86 },
  { "name": "Cranberry juice", "type": "Juice", "id": 87 },
  { "name": "Grapefruit juice", "type": "Juice", "id": 88 },
  { "name": "Tomato juice", "type": "Juice", "id": 89 },
  { "name": "Pepper", "type": "Seasoning", "id": 90 },
  { "name": "Salt", "type": "Seasoning", "id": 91 },
  { "name": "Celery salt", "type": "Seasoning", "id": 92 },
  { "name": "Sugar", "type": "Seasoning", "id": 93 },
  { "name": "Simple syrup", "type": "Syrup", "id": 94 },
  { "name": "Cane sugar", "type": "Seasoning", "parent": "sugar", "id": 95 },
  {
    "name": "Powdered sugar",
    "type": "Seasoning",
    "parent": "sugar",
    "id": 96,
  },
  { "name": "Aperol", "type": "Liqueur", "id": 97 },
  { "name": "Galliano", "type": "Liqueur", "id": 98 },
  { "name": "Pisco", "type": "Spirit", "parent": "brandy", "id": 99 },
  { "name": "Orgeat syrup", "type": "Syrup", "id": 100 },
  { "name": "Cinnamon syrup", "type": "Syrup", "id": 101 },
  { "name": "Agave nectar", "type": "Syrup", "id": 102 },
  { "name": "Coconut cream", "type": "Other", "id": 103 },
  { "name": "Espresso", "type": "Other", "id": 104 },
  { "name": "Coffee", "type": "Other", "id": 105 },
  { "name": "Worcestershire sauce", "type": "Other", "id": 106 },
  { "name": "Irish cream", "type": "Liqueur", "id": 107 },
  { "name": "Falernum", "type": "Liqueur", "id": 108 },
  { "name": "Tabasco", "type": "Other", "id": 109 },
  { "name": "Celery", "type": "Other", "id": 110 },
  { "name": "Green Chartreuse", "type": "Liqueur", "id": 111 },
  { "name": "Crème de violette", "type": "Liqueur", "id": 112 },
  {
    "name": "Cuban aguardiente",
    "type": "Spirit",
    "parent": "rum",
    "id": 113,
  },
  { "name": "Honey syrup", "type": "Syrup", "id": 114 },
  { "name": "Honey", "type": "Other", "id": 115 },
  { "name": "Grapefruit soda", "type": "Soda", "id": 116 },
  { "name": "Amaro Nonino", "type": "Liqueur", "id": 117 },
  {
    "name": "Blended Scotch whiskey",
    "type": "Spirit",
    "parent": "whiskey",
    "id": 118,
  },
  {
    "name": "Islay single malt scotch",
    "type": "Spirit",
    "parent": "whiskey",
    "id": 119,
  },
  { "name": "Ginger", "type": "Other", "id": 120 },
  { "name": "Candied ginger", "type": "Other", "id": 121 },
  { "name": "Elderflower syrup", "type": "Syrup", "id": 122 },
  { "name": "Grappa", "type": "Spirit", "parent": "brandy", "id": 123 },
  { "name": "White grape", "type": "Fruit", "id": 124 },
  { "name": "Mezcal", "type": "Spirit", "id": 125 },
  {
    "name": "Overproof white rum",
    "type": "Spirit",
    "parent": "rum",
    "id": 126,
  },
  { "name": "Yellow chartreuse", "type": "Liqueur", "id": 127 },
  { "name": "Red wine", "type": "Base", "parent": "wine", "id": 128 },
  { "name": "Red chili pepper", "type": "Fruit", "id": 129 },
  { "name": "Chamomile syrup", "type": "Syrup", "id": 130 },
] as const;

materials satisfies readonly Material[];

export const recipes: Recipe[] = [
  {
    "name": "Toronto",
    "ingredients": [
      { "unit": "CL", "amount": 5.5, "name": "Canadian whiskey" },
      { "unit": "CL", "amount": 0.75, "name": "Fernet Branca" },
      { "unit": "Tsp", "amount": 0.25, "name": "Sugar" },
      { "unit": "Dash", "amount": 1, "name": "Angostura bitters" },
      { "unit": "Slice", "amount": 1, "name": "Orange" },
    ],
    "description":
      "Stir in mixing glass with ice & strain. Garnish with Orange slice.",
    "glass": "Cocktail glass",
  },
  {
    "name": "French 75",
    "ingredients": [
      { "unit": "CL", "amount": 3, "name": "Gin" },
      { "unit": "CL", "amount": 1.5, "name": "Simple syrup" },
      { "unit": "CL", "amount": 1.5, "name": "Lemon juice" },
      { "unit": "CL", "amount": 6, "name": "Champagne" },
    ],
    "description":
      "Pour all the ingredients, except Champagne, into a shaker. Shake well and strain into a Champagne flute. Top up with Champagne. Stir gently.",
    "glass": "Champagne flute",
    "video": "29:55",
  },
  {
    "name": "Cuba Libre",
    "ingredients": [
      { "unit": "CL", "amount": 12, "name": "Cola" },
      { "unit": "CL", "amount": 5, "name": "White rum" },
      { "unit": "CL", "amount": 1, "name": "Lime juice" },
      { "unit": "Wedge", "amount": 1, "name": "Lime" },
    ],
    "description":
      "Build all ingredients in a highball glass filled with ice. Garnish with lime wedge.",
    "glass": "Highball glass",
  },
  {
    "name": "Moscow mule",
    "ingredients": [
      { "unit": "CL", "amount": 4.5, "name": "Vodka" },
      { "unit": "CL", "amount": 12, "name": "Ginger beer" },
      { "unit": "CL", "amount": 1, "name": "Lime juice" },
      { "unit": "Slice", "amount": 1, "name": "Lime" },
    ],
    "description":
      "Combine vodka and ginger beer in a highball glass filled with ice. Add lime juice. Stir gently. Garnish with a lime slice.",
    "glass": "Copper mug",
    "video": "22:42",
  },
  {
    "name": "Mimosa",
    "description":
      "Ensure both ingredients are well chilled, then mix into the glass. Garnish with Orange twist (optional).",
    "glass": "Champagne flute",
    "ingredients": [
      { "unit": "CL", "amount": 7.5, "name": "Champagne" },
      { "unit": "CL", "amount": 7.5, "name": "Orange juice" },
    ],
    "optionalIngredients": [{
      "name": "Orange",
      amount: 1,
      "unit": "Twist",
    }],
  },
  {
    "name": "Bellini",
    "ingredients": [
      { "unit": "CL", "amount": 10, "name": "Prosecco" },
      { "unit": "CL", "amount": 5, "name": "Peach purée" },
    ],
    "description":
      "Pour peach purée into chilled glass, add sparkling wine. Stir gently.",
    "glass": "Champagne flute",
  },
  {
    "name": "Black russian",
    "ingredients": [
      { "unit": "CL", "amount": 5, "name": "Vodka" },
      { "unit": "CL", "amount": 2, "name": "Coffee liqueur" },
    ],
    "description":
      "Pour the ingredients into an old fashioned glass filled with ice cubes. Stir gently.",
    "glass": "Old fashioned glass",
  },
  {
    "name": "Caipirinha",
    "ingredients": [
      { "unit": "CL", "amount": 6, "name": "Cachaça" },
      { "unit": "Whole", "amount": 1, "name": "Lime" },
      { "unit": "Tsp", "amount": 4, "name": "Cane sugar" },
    ],
    "description":
      "Place small lime wedges from one lime and sugar into old fashioned glass and muddle (mash the two ingredients together using a muddler or a wooden spoon). Fill the glass with ice and add the Cachaça. Use vodka instead of cachaça for a caipiroska; rum instead of cachaça for a caipirissima;",
    "glass": "Old fashioned glass",
    "video": "35:50",
  },
  {
    "name": "Mojito",
    "ingredients": [
      { "unit": "CL", "amount": 4.5, "name": "White rum" },
      { "unit": "CL", "amount": 2, "name": "Lime juice" },
      { "unit": "Sprig", "amount": 6, "name": "Mint" },
      { "unit": "Tsp", "amount": 2, "name": "Cane sugar" },
      { "unit": "Slice", "amount": 1, "name": "Lemon" },
      { "unit": "Splash", "amount": 1, "name": "Soda water" },
    ],
    "description":
      "Muddle mint springs with sugar and lime juice. Add splash of soda water and fill glass with cracked ice. Pour rum and top with soda water. Garnish with sprig of mint leaves and Lemon slice. Serve with straw.",
    "glass": "Collins glass",
    "video": "28:10",
  },
  {
    "name": "Dark ’n’ Stormy",
    "ingredients": [
      { "unit": "CL", "amount": 6, "name": "Dark rum" },
      { "unit": "CL", "amount": 10, "name": "Ginger beer" },
      { "unit": "Wedge", "amount": 1, "name": "Lime" },
    ],
    "description":
      "Fill glass with ice, add rum and top with ginger beer. Garnish with lime wedge.",
    "glass": "Highball glass",
    "video": "26:53",
  },
  {
    "name": "Bramble",
    "ingredients": [
      { "unit": "CL", "amount": 4, "name": "Gin" },
      { "unit": "CL", "amount": 1.5, "name": "Lemon juice" },
      { "unit": "CL", "amount": 1, "name": "Simple syrup" },
      { "unit": "CL", "amount": 1.5, "name": "Crème de mure" },
      { "unit": "Slice", "amount": 1, "name": "Lemon" },
      { "unit": "Whole", "amount": 2, "name": "Blackberry" },
    ],
    "description":
      "Fill glass with crushed ice. Build gin, Lemon juice and simple syrup over. Stir, and then pour blackberry liqueur over in a circular fashion to create marbling effect. Garnish with two blackberries and Lemon slice.",
    "glass": "Old fashioned glass",
    "video": "19:10",
  },
  {
    "name": "French martini",
    "ingredients": [
      { "unit": "CL", "amount": 4, "name": "Vodka" },
      { "unit": "CL", "amount": 1.5, "name": "Raspberry liqueur" },
      { "unit": "CL", "amount": 1, "name": "Pineapple juice" },
    ],
    "optionalIngredients": [
      {
        "name": "Lemon",
        amount: 1,
        "unit": "Peel",
      },
    ],
    "description":
      "Pour all ingredients into shaker with ice cubes. Shake well and strain into a chilled cocktail glass. Squeeze oil from Lemon peel onto the drink.",
    "glass": "Cocktail glass",
  },
  {
    "name": "Kamikaze",
    "ingredients": [
      { "unit": "CL", "amount": 3, "name": "Vodka" },
      { "unit": "CL", "amount": 3, "name": "Triple sec" },
      { "unit": "CL", "amount": 3, "name": "Lime juice" },
      { "unit": "Slice", "amount": 1, "name": "Lime" },
    ],
    "description":
      "Shake all ingredients together with ice. Strain into glass. Garnish with lime slice.",
    "glass": "Cocktail glass",
  },
  {
    "name": "Lemon drop martini",
    "ingredients": [
      { "unit": "CL", "amount": 2.5, "name": "Vodka" },
      { "unit": "CL", "amount": 2, "name": "Triple sec" },
      { "unit": "CL", "amount": 1.5, "name": "Lemon juice" },
      { "name": "Sugar", amount: 1, "unit": "None" },
      { "unit": "Slice", "amount": 1, "name": "Lime" },
    ],
    "description":
      "Shake and strain into a chilled cocktail glass rimmed with sugar, garnish with a slice of Lemon.",
    "glass": "Cocktail glass",
  },
  {
    "name": "Vesper",
    "ingredients": [
      { "unit": "CL", "amount": 4.5, "name": "Gin" },
      { "unit": "CL", "amount": 1.5, "name": "Vodka" },
      { "unit": "CL", "amount": 0.75, "name": "Lillet blanc" },
      { "unit": "Zest", "amount": 1, "name": "Lemon" },
    ],
    "description":
      "Shake and strain into a chilled cocktail glass. Add the garnish.",
    "glass": "Cocktail glass",
    "video": "23:30",
  },
  {
    "name": "Boulevardier",
    "ingredients": [
      { "unit": "CL", "amount": 4.5, "name": "Bourbon whiskey" },
      { "unit": "CL", "amount": 3, "name": "Sweet red vermouth" },
      { "unit": "CL", "amount": 3, "name": "Campari" },
      { "name": "Orange", "unit": "Peel", "amount": 1 },
    ],
    "optionalIngredients": [
      {
        "name": "Lemon",
        "unit": "Zest",
        "amount": 1,
      },
    ],
    "description":
      "Pour all ingredients into mixing glass with ice cubes. Stir well. Strain into chilled cocktail glass. Garnish with a Orange zest, optionally a Lemon zest.",
    "glass": "Old fashioned glass",
    "video": "8:15",
  },
  {
    "name": "Alexander",
    "ingredients": [
      { "unit": "CL", "amount": 3, "name": "Cognac" },
      { "unit": "CL", "amount": 3, "name": "Brown crème de cacao" },
      { "unit": "CL", "amount": 3, "name": "Light cream" },
      { "name": "Nutmeg", "unit": "None", "amount": 1 },
    ],
    "description":
      "Shake all ingredients with ice and strain contents into a cocktail glass. Sprinkle ground nutmeg on top and serve.",
    "glass": "Cocktail glass",
  },
  {
    "name": "Americano",
    "ingredients": [
      { "unit": "CL", "amount": 3, "name": "Campari" },
      { "unit": "CL", "amount": 3, "name": "Sweet red vermouth" },
      { "unit": "Splash", "amount": 1, "name": "Soda water" },
      { "unit": "Slice", "amount": 0.5, "name": "Orange" },
      { "name": "Lemon", "unit": "Twist", "amount": 1 },
    ],
    "description":
      "Pour the Campari and vermouth over ice into a highball glass, add a splash of soda water and garnish with half Orange slice and a Lemon twist.",
    "glass": "Highball glass",
    "video": "33:41",
  },
  {
    "name": "Angel face",
    "ingredients": [
      { "unit": "CL", "amount": 3, "name": "Gin" },
      { "unit": "CL", "amount": 3, "name": "Apricot brandy" },
      { "unit": "CL", "amount": 3, "name": "Calvados" },
    ],
    "description":
      "Shake all ingredients with ice and strain contents into a cocktail glass.",
    "glass": "Cocktail glass",
  },
  {
    "name": "Aviation",
    "ingredients": [
      { "unit": "CL", "amount": 4.5, "name": "Gin" },
      { "unit": "CL", "amount": 1.5, "name": "Lemon juice" },
      { "unit": "CL", "amount": 1.5, "name": "Maraschino" },
      { "unit": "Tsp", "amount": 1, "name": "Crème de violette" },
      { "unit": "Whole", "amount": 1, "name": "Cherry" },
    ],
    "description":
      "Add all ingredients into cocktail shaker filled with ice. Shake well and strain into cocktail glass. Garnish with a cherry.",
    "glass": "Cocktail glass",
  },
  {
    "name": "Bacardi cocktail",
    "ingredients": [
      { "unit": "CL", "amount": 4.5, "name": "White rum" },
      { "unit": "CL", "amount": 2, "name": "Lime juice" },
      { "unit": "CL", "amount": 1, "name": "Grenadine" },
    ],
    "description": "Shake together with ice. Strain into glass and serve.",
    "glass": "Cocktail glass",
  },
  {
    "name": "Between the sheets",
    "ingredients": [
      { "unit": "CL", "amount": 3, "name": "White rum" },
      { "unit": "CL", "amount": 3, "name": "Cognac" },
      { "unit": "CL", "amount": 3, "name": "Triple sec" },
      { "unit": "CL", "amount": 2, "name": "Lemon juice" },
    ],
    "description":
      "Pour all ingredients into shaker with ice cubes, shake, strain into chilled cocktail glass.",
    "glass": "Cocktail glass",
  },
  {
    "name": "Casino",
    "ingredients": [
      { "unit": "CL", "amount": 4, "name": "Old Tom Gin" },
      { "unit": "CL", "amount": 1, "name": "Maraschino" },
      { "unit": "CL", "amount": 1, "name": "Orange bitters" },
      { "unit": "CL", "amount": 1, "name": "Lemon juice" },
      { "name": "Lemon", "unit": "Twist", "amount": 1 },
      { "unit": "Whole", "amount": 1, "name": "Cherry" },
    ],
    "description":
      "Pour all ingredients into shaker with ice cubes, shake well. Strain into chilled cocktail glass and garnish with a Lemon twist and a marachino cherry.",
    "glass": "Cocktail glass",
  },
  {
    "name": "Clover club",
    "ingredients": [
      { "unit": "CL", "amount": 4.5, "name": "Gin" },
      { "unit": "CL", "amount": 1.5, "name": "Lemon juice" },
      { "unit": "CL", "amount": 1.5, "name": "Raspberry syrup" },
      { "name": "Egg white", "unit": "Drop", "amount": 3 },
      { "unit": "Whole", "amount": 2, "name": "Raspberry" },
    ],
    "description":
      "Pour all ingredients into cocktail shaker filled with ice. Shake well. Strain into cocktail glass. Garnish with fresh raspberries.",
    "glass": "Cocktail glass",
  },
  {
    "name": "Daiquiri",
    "ingredients": [
      { "unit": "CL", "amount": 4.5, "name": "White rum" },
      { "unit": "CL", "amount": 2.5, "name": "Lime juice" },
      { "unit": "CL", "amount": 1.5, "name": "Simple syrup" },
    ],
    "description":
      "Pour all ingredients into shaker with ice cubes. Shake well. Double Strain in chilled cocktail glass.",
    "glass": "Cocktail glass",
    "video": "26:04",
  },
  {
    "name": "Derby",
    "ingredients": [
      { "unit": "CL", "amount": 6, "name": "Gin" },
      { "unit": "Drop", "amount": 2, "name": "Peach bitters" },
      { "name": "Mint", "unit": "Leaves", "amount": 1 },
    ],
    "description":
      "Pour all ingredients into a mixing glass with ice. Stir. Strain into a cocktail glass. Garnish with fresh mint leaves in the drink.",
    "glass": "Cocktail glass",
  },
  {
    "name": "Dry martini",
    "ingredients": [
      { "unit": "CL", "amount": 6, "name": "Gin" },
      { "unit": "CL", "amount": 1, "name": "Dry vermouth" },
      { "name": "Lemon", "unit": "Peel", "amount": 1 },
      { "unit": "Whole", "amount": 1, "name": "Olive" },
    ],
    "description":
      "Straight: Pour all ingredients into mixing glass with ice cubes. Stir well. Strain into chilled martini cocktail glass. Squeeze oil from Lemon peel onto the drink, or garnish with olive.",
    "glass": "Cocktail glass",
    "video": "13:39",
  },
  {
    "name": "Gin fizz",
    "ingredients": [
      { "unit": "CL", "amount": 4.5, "name": "Gin" },
      { "unit": "CL", "amount": 3, "name": "Lemon juice" },
      { "unit": "CL", "amount": 1, "name": "Simple syrup" },
      { "unit": "CL", "amount": 8, "name": "Soda water" },
      { "unit": "Slice", "amount": 1, "name": "Lemon" },
    ],
    "description":
      "Shake all ingredients with ice cubes, except soda water. Pour into tumbler. Top with soda water. Garnish with Lemon slice.",
    "glass": "Old fashioned glass",
  },
  {
    "name": "John collins",
    "ingredients": [
      { "unit": "CL", "amount": 4.5, "name": "Gin" },
      { "unit": "CL", "amount": 3, "name": "Lemon juice" },
      { "unit": "CL", "amount": 1.5, "name": "Simple syrup" },
      { "unit": "CL", "amount": 6, "name": "Soda water" },
      { "unit": "Dash", "amount": 1, "name": "Angostura bitters" },
      { "unit": "Slice", "amount": 1, "name": "Lemon" },
      { "unit": "Whole", "amount": 1, "name": "Cherry" },
    ],
    "description":
      "Pour all ingredients directly into highball glass filled with ice. Stir gently. Garnish with Lemon slice and maraschino cherry. Add a dash of Angostura bitters.",
    "glass": "Collins glass",
  },
  {
    "name": "Manhattan",
    "ingredients": [
      { "unit": "CL", "amount": 5, "name": "Rye whiskey" },
      { "unit": "CL", "amount": 2, "name": "Sweet red vermouth" },
      { "unit": "Dash", "amount": 1, "name": "Angostura bitters" },
      { "unit": "Whole", "amount": 1, "name": "Cherry" },
    ],
    "description":
      "Pour all ingredients into mixing glass with ice cubes. Stir well. Strain into chilled cocktail glass. Garnish with cocktail cherry.",
    "glass": "Cocktail glass",
    "video": "2:54",
  },
  {
    "name": "Mary pickford",
    "ingredients": [
      { "unit": "CL", "amount": 6, "name": "White rum" },
      { "unit": "CL", "amount": 6, "name": "Pineapple juice" },
      { "unit": "CL", "amount": 1, "name": "Grenadine" },
      { "unit": "CL", "amount": 1, "name": "Maraschino" },
    ],
    "description": "Shake and strain into a chilled large cocktail glass",
    "glass": "Cocktail glass",
  },
  {
    "name": "Monkey gland",
    "ingredients": [
      { "unit": "CL", "amount": 5, "name": "Gin" },
      { "unit": "CL", "amount": 3, "name": "Orange juice" },
      { "unit": "Drop", "amount": 2, "name": "Absinthe" },
      { "unit": "Drop", "amount": 2, "name": "Grenadine" },
    ],
    "description":
      "Shake well over ice cubes in a shaker, strain into a chilled cocktail glass.",
    "glass": "Cocktail glass",
  },
  {
    "name": "Negroni",
    "ingredients": [
      { "unit": "CL", "amount": 3, "name": "Gin" },
      { "unit": "CL", "amount": 3, "name": "Sweet red vermouth" },
      { "unit": "CL", "amount": 3, "name": "Campari" },
      { "unit": "Slice", "amount": 0.5, "name": "Orange" },
    ],
    "description":
      "Pour all ingredients directly into old-fashioned glass filled with ice. Stir gently. Garnish with half Orange slice.",
    "glass": "Old fashioned glass",
    "video": "15:52",
  },
  {
    "name": "Old fashioned",
    "ingredients": [
      { "unit": "CL", "amount": 4.5, "name": "Whiskey" },
      { "unit": "Dash", "amount": 2, "name": "Angostura bitters" },
      { "unit": "Cube", "amount": 1, "name": "Sugar" },
      { "name": "Water", "unit": "Dash", "amount": 3 },
      { "unit": "Slice", "amount": 1, "name": "Orange" },
      { "unit": "Whole", "amount": 1, "name": "Cherry" },
    ],
    "description":
      "Place sugar cube in old-fashioned glass and saturate with bitters, add a dash of plain water. Muddle until dissolve. Fill the glass with ice cubes and add whiskey. Garnish with Orange slice and a cocktail cherry.",
    "glass": "Old fashioned glass",
    "video": "1:45",
  },
  {
    "name": "Paradise",
    "ingredients": [
      { "unit": "CL", "amount": 3.5, "name": "Gin" },
      { "unit": "CL", "amount": 2, "name": "Apricot brandy" },
      { "unit": "CL", "amount": 1.5, "name": "Orange juice" },
    ],
    "description":
      "Shake together over ice. Strain into cocktail glass and serve chilled.",
    "glass": "Cocktail glass",
  },
  {
    "name": "Planter’s punch",
    "ingredients": [
      { "unit": "CL", "amount": 4.5, "name": "Dark rum" },
      { "unit": "CL", "amount": 3.5, "name": "Orange juice" },
      { "unit": "CL", "amount": 3.5, "name": "Pineapple juice" },
      { "unit": "CL", "amount": 2, "name": "Lemon juice" },
      { "unit": "CL", "amount": 1, "name": "Grenadine" },
      { "unit": "CL", "amount": 1, "name": "Simple syrup" },
      { "unit": "Dash", "amount": 3, "name": "Angostura bitters" },
      { "unit": "Whole", "amount": 1, "name": "Cherry" },
      { "unit": "Slice", "amount": 1, "name": "Pineapple" },
    ],
    "description":
      "Pour all ingredients, except the bitters, into shaker filled with ice. Shake well. Pour into large glass, filled with ice. Add dash Angostura bitters. Garnish with cocktail cherry and pineapple.",
    "glass": "Cocktail glass",
  },
  {
    "name": "Porto flip",
    "ingredients": [
      { "unit": "CL", "amount": 1.5, "name": "Brandy" },
      { "unit": "CL", "amount": 4.5, "name": "Port" },
      { "unit": "CL", "amount": 1, "name": "Egg yolk" },
      { "name": "Nutmeg", "unit": "None", "amount": 1 },
    ],
    "description":
      "Pour all ingredients into cocktail shaker filled with ice. Shake well. Strain into cocktail glass. Sprinkle with fresh ground nutmeg.",
    "glass": "Cocktail glass",
  },
  {
    "name": "Ramos fizz",
    "ingredients": [
      { "unit": "CL", "amount": 4.5, "name": "Gin" },
      { "unit": "CL", "amount": 6, "name": "Cream" },
      { "unit": "CL", "amount": 3, "name": "Simple syrup" },
      { "unit": "CL", "amount": 1.5, "name": "Lime juice" },
      { "unit": "CL", "amount": 1.5, "name": "Lemon juice" },
      { "unit": "Whole", "amount": 1, "name": "Egg white" },
      { "unit": "Dash", "amount": 3, "name": "Orange flower water" },
      { "unit": "Drop", "amount": 2, "name": "Vanilla extract" },
      { "name": "Soda water", "unit": "None", "amount": 1 },
    ],
    "description":
      "Pour all ingredients (except soda) in a mixing glass, dry shake (no ice) for two minutes, add ice and hard shake for another minute. Strain into a highball glass without ice, top with soda.",
    "glass": "Highball glass",
    "video": "17:38",
  },
  {
    "name": "Rusty nail",
    "ingredients": [
      { "unit": "CL", "amount": 4.5, "name": "Scotch whiskey" },
      { "unit": "CL", "amount": 2.5, "name": "Drambuie" },
      { "name": "Lemon", "unit": "Twist", "amount": 1 },
    ],
    "description":
      "Pour all ingredients directly into old-fashioned glass filled with ice. Stir gently. Garnish with a Lemon twist.",
    "glass": "Old fashioned glass",
  },
  {
    "name": "Sazerac",
    "ingredients": [
      { "unit": "CL", "amount": 5, "name": "Cognac" },
      { "unit": "CL", "amount": 1, "name": "Absinthe" },
      { "unit": "Cube", "amount": 1, "name": "Sugar" },
      { "unit": "Dash", "amount": 2, "name": "Peychaud’s bitters" },
      { "name": "Lemon", "unit": "Peel", "amount": 1 },
    ],
    "description":
      "Rinse a chilled old-fashioned glass with the absinthe, add crushed ice and set it aside. Stir the remaining ingredients over ice and set it aside. Discard the ice and any excess absinthe from the prepared glass, and strain the drink into the glass. Add the Lemon peel for garnish. Note: The original recipe changed after the American Civil War, rye whiskey substituted cognac as it became hard to obtain.",
    "glass": "Old fashioned glass",
    "video": "5:45",
  },
  {
    "name": "Screwdriver",
    "ingredients": [
      { "unit": "CL", "amount": 5, "name": "Vodka" },
      { "unit": "CL", "amount": 10, "name": "Orange juice" },
      { "unit": "Slice", "amount": 1, "name": "Orange" },
    ],
    "description":
      "Pour all ingredients into a highball glass filled with ice. Stir gently. Garnish with an Orange slice.",
    "glass": "Highball glass",
  },
  {
    "name": "Sidecar",
    "ingredients": [
      { "unit": "CL", "amount": 5, "name": "Cognac" },
      { "unit": "CL", "amount": 2, "name": "Triple sec" },
      { "unit": "CL", "amount": 2, "name": "Lemon juice" },
    ],
    "description":
      "Pour all ingredients into cocktail shaker filled with ice. Shake well and strain into cocktail glass.",
    "glass": "Cocktail glass",
    "video": "29:31",
  },
  {
    "name": "Stinger",
    "ingredients": [
      { "unit": "CL", "amount": 5, "name": "Cognac" },
      { "unit": "CL", "amount": 2, "name": "White crème de menthe" },
    ],
    "description":
      "Pour in a mixing glass with ice, stir and strain into a cocktail glass. May also be served on rocks in a rocks glass.",
    "glass": "Cocktail glass",
  },
  {
    "name": "Tuxedo",
    "ingredients": [
      { "unit": "CL", "amount": 3, "name": "Old Tom Gin" },
      { "unit": "CL", "amount": 3, "name": "Dry vermouth" },
      { "unit": "Tsp", "amount": 0.5, "name": "Maraschino" },
      { "unit": "Tsp", "amount": 0.25, "name": "Absinthe" },
      { "unit": "Dash", "amount": 3, "name": "Orange bitters" },
      { "unit": "Whole", "amount": 1, "name": "Cherry" },
      { "name": "Lemon", "unit": "Twist", "amount": 1 },
    ],
    "description":
      "Stir all ingredients with ice and strain into cocktail glass. Garnish with a cocktail cherry and a Lemon zest twist.",
    "glass": "Cocktail glass",
  },
  {
    "name": "Whiskey sour",
    "ingredients": [
      { "unit": "CL", "amount": 4.5, "name": "Bourbon whiskey" },
      { "unit": "CL", "amount": 3, "name": "Lemon juice" },
      { "unit": "CL", "amount": 1.5, "name": "Simple syrup" },
      { "unit": "Whole", "amount": 1, "name": "Cherry" },
      { "unit": "Slice", "amount": 0.5, "name": "Orange" },
    ],
    "optionalIngredients": [
      { "name": "Egg white", "unit": "Dash", "amount": 1 },
    ],
    "description":
      "Egg white is optional. Pour all ingredients into cocktail shaker filled with ice. Shake well (a little harder if using egg white). Strain in cocktail glass. Garnish with half Orange slice and maraschino cherry.",
    "glass": "Old fashioned glass",
    "video": "4:03",
  },
  {
    "name": "White lady",
    "ingredients": [
      { "unit": "CL", "amount": 4, "name": "Gin" },
      { "unit": "CL", "amount": 3, "name": "Triple sec" },
      { "unit": "CL", "amount": 2, "name": "Lemon juice" },
    ],
    "description":
      "Add all ingredients into cocktail shaker filled with ice. Shake well and strain into large cocktail glass.",
    "glass": "Cocktail glass",
  },
  {
    "name": "French connection",
    "ingredients": [
      { "unit": "CL", "amount": 3.5, "name": "Cognac" },
      { "unit": "CL", "amount": 3.5, "name": "Amaretto" },
    ],
    "description":
      "Pour all ingredients directly into old fashioned glass filled with ice cubes. Stir gently.",
    "glass": "Old fashioned glass",
  },
  {
    "name": "Mint julep",
    "ingredients": [
      { "unit": "CL", "amount": 6, "name": "Bourbon whiskey" },
      { "unit": "Sprig", "amount": 5, "name": "Mint" },
      { "unit": "Tsp", "amount": 2, "name": "Water" },
      { "unit": "Tsp", "amount": 1, "name": "Powdered sugar" },
    ],
    "description":
      "In steel cup gently muddle 4 mint sprigs with sugar and water. Fill the glass with cracked ice, add the Bourbon and stir well until the cup frosts. Garnish with a mint sprig.",
    "glass": "Steel cup",
    "video": "12:05",
  },
  {
    "name": "White russian",
    "ingredients": [
      { "unit": "CL", "amount": 5, "name": "Vodka" },
      { "unit": "CL", "amount": 2, "name": "Coffee liqueur" },
      { "unit": "CL", "amount": 3, "name": "Cream" },
    ],
    "description":
      "Pour vodka and coffee liqueur into an old fashioned glass filled with ice cubes. Float fresh cream on the top and stir in slowly..",
    "glass": "Old fashioned glass",
  },
  {
    "name": "Bloody Mary",
    "ingredients": [
      { "unit": "CL", "amount": 4.5, "name": "Vodka" },
      { "unit": "CL", "amount": 9, "name": "Tomato juice" },
      { "unit": "CL", "amount": 1.5, "name": "Lemon juice" },
      { "unit": "Dash", "amount": 2, "name": "Worcestershire sauce" },
      { "name": "Tabasco", "unit": "None", "amount": 1 },
      { "name": "Celery salt", "unit": "None", "amount": 1 },
      { "name": "Pepper", "unit": "None", "amount": 1 },
      { "name": "Celery", "unit": "None", "amount": 1 },
      { "unit": "Wedge", "amount": 1, "name": "Lemon" },
    ],
    "description":
      "Stir gently all the ingredients in a mixing glass with ice. Add tabasco, celery salt, pepper to taste. Pour into rocks glass. Garnish with celery and Lemon wedge. If requested served with ice, pour into highball glass.",
    "glass": "Highball glass",
  },
  {
    "name": "Champagne cocktail",
    "ingredients": [
      { "unit": "CL", "amount": 9, "name": "Champagne" },
      { "unit": "CL", "amount": 1, "name": "Cognac" },
      { "unit": "Dash", "amount": 2, "name": "Angostura bitters" },
      { "unit": "Cube", "amount": 1, "name": "Sugar" },
      { "name": "Orange", "unit": "Zest", "amount": 1 },
      { "unit": "Whole", "amount": 1, "name": "Cherry" },
    ],
    "optionalIngredients": [
      { "name": "Grand Marnier", "unit": "Drop", "amount": 3 },
    ],
    "description":
      "Place the sugar cube with 2 dashes of bitters in a large Champagne glass, add the cognac. Optionally add a few drops of Grand Marnier. Pour gently chilled Champagne. Garnish with Orange zest and cherry.",
    "glass": "Cocktail glass",
  },
  {
    "name": "Kir",
    "ingredients": [
      { "unit": "CL", "amount": 9, "name": "Dry white wine" },
      { "unit": "CL", "amount": 1, "name": "Crème de cassis" },
    ],
    "description": "Pour Crème de Cassis into glass, top up with white wine.",
    "glass": "Wine glass",
  },
  {
    "name": "Kir royal",
    "ingredients": [
      { "unit": "CL", "amount": 9, "name": "Champagne" },
      { "unit": "CL", "amount": 1, "name": "Crème de cassis" },
    ],
    "description": "Pour Crème de Cassis into glass, top up with Champagne.",
    "glass": "Wine glass",
  },
  {
    "name": "Long island iced tea",
    "ingredients": [
      { "unit": "CL", "amount": 1.5, "name": "Vodka" },
      { "unit": "CL", "amount": 1.5, "name": "Tequila" },
      { "unit": "CL", "amount": 1.5, "name": "White rum" },
      { "unit": "CL", "amount": 1.5, "name": "Gin" },
      { "unit": "CL", "amount": 1.5, "name": "Cointreau" },
      { "unit": "CL", "amount": 2.5, "name": "Lemon juice" },
      { "unit": "CL", "amount": 3, "name": "Simple syrup" },
      { "name": "Cola", "unit": "None", "amount": 1 },
      { "unit": "Slice", "amount": 1, "name": "Lemon" },
    ],
    "description":
      "Add all ingredients into highball glass filled with ice. Top with cola. Stir gently. Garnish with Lemon slice.",
    "glass": "Highball glass",
  },
  {
    "name": "Mai-tai",
    "ingredients": [
      { "unit": "CL", "amount": 3, "name": "White rum" },
      { "unit": "CL", "amount": 3, "name": "Dark rum" },
      { "unit": "CL", "amount": 1.5, "name": "Curaçao" },
      { "unit": "CL", "amount": 1.5, "name": "Orgeat syrup" },
      { "unit": "CL", "amount": 3, "name": "Lime juice" },
      { "unit": "CL", "amount": 0.75, "name": "Simple syrup" },
      { "name": "Pineapple", "unit": "Spear", "amount": 1 },
      { "name": "Mint", "unit": "Leaves", "amount": 1 },
      { "name": "Lime", "unit": "Peel", "amount": 1 },
    ],
    "description":
      "Add all ingredients into a shaker with ice. Shake and pour into a double rocks glass or an highball glass. Garnish with pineapple spear, mint leaves, and lime peel.",
    "glass": "Highball glass",
    "video": "27:20",
  },
  {
    "name": "Margarita",
    "ingredients": [
      { "unit": "CL", "amount": 5, "name": "Tequila" },
      { "unit": "CL", "amount": 2, "name": "Triple sec" },
      { "unit": "CL", "amount": 1.5, "name": "Lime juice" },
    ],
    "optionalIngredients": [
      {
        "name": "Salt",
        "unit": "None",
        "amount": 1,
      },
    ],
    "description":
      "Add all ingredients into a shaker with ice. Shake and strain into a chilled cocktail glass. Garnish with a half salt rim (optional).",
    "glass": "Margarita glass",
    "video": "24:13",
  },
  {
    "name": "Tommy’s margarita",
    "ingredients": [
      { "unit": "CL", "amount": 4.5, "name": "Tequila" },
      { "unit": "CL", "amount": 1.5, "name": "Lime juice" },
      { "unit": "Tsp", "amount": 2, "name": "Agave nectar" },
    ],
    "description": "Shake and strain into a chilled cocktail glass.",
    "glass": "Margarita glass",
  },
  {
    "name": "B52",
    "ingredients": [
      { "unit": "CL", "amount": 2, "name": "Coffee liqueur" },
      { "unit": "CL", "amount": 2, "name": "Triple sec" },
      { "unit": "CL", "amount": 2, "name": "Irish cream" },
    ],
    "description":
      "Layer ingredients one at a time starting with coffee liqueur, followed by irish cream and top with triple sec. Flame the triple sec, serve while the flame is still on, accompanied with a straw on side plate.",
    "glass": "Old fashioned glass",
  },
  {
    "name": "Barracuda",
    "ingredients": [
      { "unit": "CL", "amount": 4.5, "name": "Gold rum" },
      { "unit": "CL", "amount": 1.5, "name": "Galliano" },
      { "unit": "CL", "amount": 6, "name": "Pineapple juice" },
      { "unit": "Dash", "amount": 1, "name": "Lime juice" },
      { "name": "Prosecco", "unit": "None", "amount": 1 },
    ],
    "description": "Shake together with ice. Strain into glass and serve.",
    "glass": "Margarita glass",
  },
  {
    "name": "Corpse reviver #2",
    "ingredients": [
      { "unit": "CL", "amount": 3, "name": "Gin" },
      { "unit": "CL", "amount": 3, "name": "Cointreau" },
      { "unit": "CL", "amount": 3, "name": "Lillet blanc" },
      { "unit": "CL", "amount": 3, "name": "Lemon juice" },
      { "unit": "Dash", "amount": 1, "name": "Absinthe" },
      { "name": "Orange", "unit": "Zest", "amount": 1 },
    ],
    "description":
      "Pour all ingredients into shaker with ice. Shake well and strain in chilled cocktail glass. Garnish with Orange zest.",
    "glass": "Cocktail glass",
    "video": "16:10",
  },
  {
    "name": "Cosmopolitan",
    "ingredients": [
      { "unit": "CL", "amount": 4, "name": "Vodka" },
      { "unit": "CL", "amount": 1.5, "name": "Cointreau" },
      { "unit": "CL", "amount": 1.5, "name": "Lime juice" },
      { "unit": "CL", "amount": 3, "name": "Cranberry juice" },
      { "name": "Lemon", "unit": "Twist", "amount": 1 },
    ],
    "description":
      "Add all ingredients into cocktail shaker filled with ice. Shake well and strain into large cocktail glass. Garnish with Lemon twist.",
    "glass": "Cocktail glass",
  },
  {
    "name": "Dirty martini",
    "ingredients": [
      { "unit": "CL", "amount": 6, "name": "Vodka" },
      { "unit": "CL", "amount": 1, "name": "Dry vermouth" },
      { "unit": "CL", "amount": 1, "name": "Olive juice" },
      { "unit": "Whole", "amount": 1, "name": "Olive" },
    ],
    "description":
      "Pour all ingredients into mixing glass with ice cubes. Stir well. Strain in chilled martini glass. Garnish with green olive.",
    "glass": "Cocktail glass",
  },
  {
    "name": "Espresso martini",
    "description": "Shake and strain into a chilled cocktail glass.",
    "glass": "Cocktail glass",
    "ingredients": [
      { "unit": "CL", "amount": 5, "name": "Vodka" },
      { "unit": "CL", "amount": 1, "name": "Coffee liqueur" },
      { "name": "Simple syrup", "unit": "None", "amount": 1 },
      { "name": "Espresso", "unit": "CL", amount: 4 },
    ],
  },
  {
    "name": "Golden dream",
    "description":
      "Pour all ingredients into shaker filled with ice. Shake briskly for few seconds. Strain into chilled cocktail glass.",
    "glass": "Cocktail glass",
    "ingredients": [
      { "unit": "CL", "amount": 2, "name": "Triple sec" },
      { "unit": "CL", "amount": 2, "name": "Galliano" },
      { "unit": "CL", "amount": 2, "name": "Orange juice" },
      { "unit": "CL", "amount": 1, "name": "Cream" },
    ],
  },
  {
    "name": "Grasshopper",
    "description":
      "Pour all ingredients into shaker filled with ice. Shake briskly for few seconds. Strain into chilled cocktail glass. Garnish with mint leaf (optional).",
    "glass": "Cocktail glass",
    "ingredients": [
      { "unit": "CL", "amount": 2, "name": "White crème de cacao" },
      { "unit": "CL", "amount": 2, "name": "Green crème de menthe" },
      { "unit": "CL", "amount": 2, "name": "Cream" },
    ],
    "optionalIngredients": [{ "name": "Mint", "unit": "Leaves", amount: 1 }],
  },
  {
    "name": "Hemingway special",
    "description":
      "Pour all ingredients into a shaker with ice. Shake well and strain into a large cocktail glass.",
    "glass": "Cocktail glass",
    "ingredients": [
      { "unit": "CL", "amount": 6, "name": "White rum" },
      { "unit": "CL", "amount": 4, "name": "Grapefruit juice" },
      { "unit": "CL", "amount": 1.5, "name": "Maraschino" },
      { "unit": "CL", "amount": 1.5, "name": "Lime juice" },
    ],
  },
  {
    "name": "Horse’s neck",
    "description":
      "Pour Cognac and ginger ale directly into highball glass with ice cubes. Stir gently. If preferred, add dashes of Angostura Bitter. Garnish with rind of one Lemon spiral.",
    "glass": "Collins glass",
    "ingredients": [
      { "unit": "CL", "amount": 4, "name": "Cognac" },
      { "unit": "CL", "amount": 12, "name": "Ginger ale" },
      { "name": "Angostura bitters", "unit": "Dash", "amount": 3 },
      { "name": "Lemon", "unit": "Peel", "amount": 1 },
    ],
  },
  {
    "name": "Irish coffee",
    "description":
      "Warm black coffee is poured into a pre-heated Irish coffee glass. Whiskey and at least one teaspoon of sugar is added and stirred until dissolved. Fresh thick chilled cream is carefully poured over the back of a spoon held just above the surface of the coffee. The layer of cream will float on the coffee without mixing. Plain sugar can be replaced with sugar syrup.",
    "glass": "Irish coffee mug",
    "ingredients": [
      { "unit": "CL", "amount": 5, "name": "Irish whiskey" },
      { "unit": "CL", "amount": 12, "name": "Coffee" },
      { "unit": "CL", "amount": 5, "name": "Cream" },
      { "unit": "Tsp", "amount": 1, "name": "Sugar" },
    ],
  },
  {
    "name": "Tom collins",
    "description":
      "Pour all ingredients directly into highball glass filled with ice. Stir gently. Garnish with Lemon slice and maraschino cherry. Add a dash of Angostura bitters.",
    "glass": "Collins glass",
    "video": "17:13",
    "ingredients": [
      { "unit": "CL", "amount": 4.5, "name": "Old Tom Gin" },
      { "unit": "CL", "amount": 3, "name": "Lemon juice" },
      { "unit": "CL", "amount": 1.5, "name": "Simple syrup" },
      { "unit": "CL", "amount": 6, "name": "Soda water" },
      { "unit": "Dash", "amount": 1, "name": "Angostura bitters" },
      { "unit": "Slice", "amount": 1, "name": "Lemon" },
      { "unit": "Whole", "amount": 1, "name": "Cherry" },
    ],
  },
  {
    "name": "Pina Colada",
    "description":
      "Blend all the ingredients with ice in a electric blender, pour into a large glass and serve with straws. Garnish with a slice of pineapple with a cocktail cherry. 4 slices of fresh pineapple can be used instead of juice. Historically a few drops of fresh lime juice was added to taste.",
    "glass": "Hurricane",
    "ingredients": [
      { "unit": "CL", "amount": 5, "name": "White rum" },
      { "unit": "CL", "amount": 3, "name": "Coconut cream" },
      { "unit": "CL", "amount": 5, "name": "Pineapple juice" },
      { "unit": "Slice", "amount": 1, "name": "Pineapple" },
      { "unit": "Whole", "amount": 1, "name": "Cherry" },
    ],
  },
  {
    "name": "Pisco Sour",
    "ingredients": [
      { "unit": "CL", "amount": 4.5, "name": "Pisco" },
      { "unit": "CL", "amount": 2, "name": "Simple syrup" },
      { "unit": "CL", "amount": 3, "name": "Lemon juice" },
      { "unit": "Whole", "amount": 1, "name": "Egg white" },
      { "unit": "Dash", "amount": 1, "name": "Angostura bitters" },
    ],
    "description":
      "Shake and strain into a chilled champagne flute. Dash some Angostura bitters on top.",
    "glass": "Champagne flute",
    "video": "35:00",
  },
  {
    "name": "Russian spring punch",
    "ingredients": [
      { "unit": "CL", "amount": 2.5, "name": "Vodka" },
      { "unit": "CL", "amount": 2.5, "name": "Lemon juice" },
      { "unit": "CL", "amount": 1.5, "name": "Crème de cassis" },
      { "unit": "CL", "amount": 1, "name": "Simple syrup" },
      { "name": "Sparkling wine", "unit": "None", "amount": 1 },
      { "unit": "Slice", "amount": 1, "name": "Lemon" },
      { "unit": "Whole", "amount": 1, "name": "Blackberry" },
    ],
    "description":
      "Shake the ingredients and pour into highball glass. Top with Sparkling wine. Garnish with a Lemon slice and a blackberry.",
    "glass": "Highball glass",
  },
  {
    "name": "Sea breeze",
    "ingredients": [
      { "unit": "CL", "amount": 4, "name": "Vodka" },
      { "unit": "CL", "amount": 12, "name": "Cranberry juice" },
      { "unit": "CL", "amount": 3, "name": "Grapefruit juice" },
      { "name": "Orange", "unit": "Zest", "amount": 1 },
      { "unit": "Whole", "amount": 1, "name": "Cherry" },
    ],
    "description":
      "Build all ingredients in a highball glass filled with ice. Garnish with an Orange zest and cherry.",
    "glass": "Highball glass",
  },
  {
    "name": "Sex on the beach",
    "ingredients": [
      { "unit": "CL", "amount": 4, "name": "Vodka" },
      { "unit": "CL", "amount": 2, "name": "Peach schnapps" },
      { "unit": "CL", "amount": 4, "name": "Orange juice" },
      { "unit": "CL", "amount": 4, "name": "Cranberry juice" },
      { "unit": "CL", "amount": 3, "name": "Grapefruit juice" },
      { "unit": "Slice", "amount": 0.5, "name": "Orange" },
    ],
    "description":
      "Build all ingredients in a highball glass filled with ice. Garnish with an Orange zest and cherry.",
    "glass": "Highball glass",
  },
  {
    "name": "Singapore sling",
    "ingredients": [
      { "unit": "CL", "amount": 3, "name": "Gin" },
      { "unit": "CL", "amount": 1.5, "name": "Cherry liqueur" },
      { "unit": "CL", "amount": 0.75, "name": "Cointreau" },
      { "unit": "CL", "amount": 0.75, "name": "DOM Bénédictine" },
      { "unit": "CL", "amount": 12, "name": "Pineapple juice" },
      { "unit": "CL", "amount": 1.5, "name": "Lime juice" },
      { "unit": "CL", "amount": 1, "name": "Grenadine" },
      { "unit": "Dash", "amount": 1, "name": "Angostura bitters" },
      { "unit": "Whole", "amount": 1, "name": "Cherry" },
      { "unit": "Slice", "amount": 1, "name": "Pineapple" },
    ],
    "description":
      "Pour all ingredients into cocktail shaker filled with ice cubes. Shake well. Strain into Hurricane glass. Garnish with pineapple and maraschino cherry.",
    "glass": "Hurricane",
  },
  {
    "name": "Tequila sunrise",
    "ingredients": [
      { "unit": "CL", "amount": 4.5, "name": "Tequila" },
      { "unit": "CL", "amount": 9, "name": "Orange juice" },
      { "unit": "CL", "amount": 1.5, "name": "Grenadine" },
      { "unit": "Slice", "amount": 0.5, "name": "Orange" },
    ],
    "description":
      "Pour tequila and Orange juice directly into highball glass filled with ice cubes. Add the grenadine syrup to create chromatic effect (sunrise), do not stir. Garnish with half Orange slice or an Orange zest.",
    "glass": "Collins glass",
  },
  {
    "name": "Yellow bird",
    "ingredients": [
      { "unit": "CL", "amount": 3, "name": "White rum" },
      { "unit": "CL", "amount": 1.5, "name": "Galliano" },
      { "unit": "CL", "amount": 1.5, "name": "Triple sec" },
      { "unit": "CL", "amount": 1.5, "name": "Lime juice" },
    ],
    "description": "Shake and strain into a chilled cocktail glass.",
    "glass": "Cocktail glass",
  },
  {
    "name": "Zombie",
    "ingredients": [
      { "unit": "CL", "amount": 4.5, "name": "Dark rum" },
      { "unit": "CL", "amount": 4.5, "name": "Gold rum" },
      { "unit": "CL", "amount": 3, "name": "Demerara rum" },
      { "unit": "CL", "amount": 2, "name": "Lime juice" },
      { "unit": "CL", "amount": 1.5, "name": "Falernum" },
      { "unit": "CL", "amount": 1, "name": "Grapefruit juice" },
      { "unit": "CL", "amount": 0.5, "name": "Cinnamon syrup" },
      { "unit": "Tsp", "amount": 1, "name": "Grenadine" },
      { "unit": "Dash", "amount": 1, "name": "Angostura bitters" },
      { "unit": "Dash", "amount": 2, "name": "Absinthe" },
      { "name": "Mint", "unit": "Leaves", "amount": 1 },
    ],
    "description":
      "Add all ingredients into an electric blender with 170 grams of cracked ice. With pulse bottom blend for a few seconds. Serve in a tall tumbler glass. Garnish with mint leaves.",
    "glass": "Zombie glass",
  },
  {
    "name": "Brandy crusta",
    "ingredients": [
      { "unit": "CL", "amount": 5.25, "name": "Brandy" },
      { "unit": "CL", "amount": 1.5, "name": "Lemon juice" },
      { "unit": "CL", "amount": 0.75, "name": "Maraschino" },
      { "unit": "Tsp", "amount": 1, "name": "Curaçao" },
      { "unit": "Tsp", "amount": 1, "name": "Simple syrup" },
      { "unit": "Dash", "amount": 2, "name": "Aromatic bitters" },
      { "unit": "Slice", "amount": 1, "name": "Orange" },
      { "unit": "Tsp", "amount": 1, "name": "Powdered sugar" },
    ],
    "description":
      "Mix together all ingredients with ice cubes in a mixing glass and strain into prepared slim cocktail glass. Rub a slice of Orange (or Lemon) around the rim of the glass and dip it in pulverized white sugar, so that the sugar will adhere to the edge of the glass. Carefully curling place the Orange/Lemon peel around the inside of the glass.",
    "glass": "Cocktail glass",
  },
  {
    "name": "Hanky panky",
    "ingredients": [
      { "unit": "CL", "amount": 4.5, "name": "London dry gin" },
      { "unit": "CL", "amount": 4.5, "name": "Sweet red vermouth" },
      { "unit": "CL", "amount": 0.75, "name": "Fernet Branca" },
      { "name": "Orange", "unit": "Zest", "amount": 1 },
    ],
    "description":
      "Pour all ingredients into mixing glass with ice cubes. Stir well. Strain into chilled cocktail glass. Garnish with Orange zest.",
    "glass": "Cocktail glass",
  },
  {
    "name": "Last word",
    "ingredients": [
      { "unit": "CL", "amount": 2.25, "name": "Gin" },
      { "unit": "CL", "amount": 2.25, "name": "Green Chartreuse" },
      { "unit": "CL", "amount": 2.25, "name": "Maraschino" },
      { "unit": "CL", "amount": 2.25, "name": "Lime juice" },
    ],
    "description":
      "Add all ingredients into a cocktail shaker. Shake with ice and strain into a chilled cocktail glass.",
    "glass": "Cocktail glass",
    "video": "21:18",
  },
  {
    "name": "Martinez",
    "ingredients": [
      { "unit": "CL", "amount": 4.5, "name": "London dry gin" },
      { "unit": "CL", "amount": 4.5, "name": "Sweet red vermouth" },
      { "unit": "Tsp", "amount": 1, "name": "Maraschino" },
      { "unit": "Dash", "amount": 2, "name": "Orange bitters" },
      { "name": "Lemon", "unit": "Zest", "amount": 1 },
    ],
    "description":
      "Pour all ingredients into mixing glass with ice cubes. Stir well. Strain into chilled cocktail glass. Garnish with Lemon zest.",
    "glass": "Cocktail glass",
    "video": "14:20",
  },
  {
    "name": "Vieux carré",
    "ingredients": [
      { "unit": "CL", "amount": 3, "name": "Rye whiskey" },
      { "unit": "CL", "amount": 3, "name": "Cognac" },
      { "unit": "CL", "amount": 3, "name": "Sweet red vermouth" },
      { "unit": "Tsp", "amount": 1, "name": "DOM Bénédictine" },
      { "unit": "Dash", "amount": 2, "name": "Peychaud’s bitters" },
      { "name": "Orange", "unit": "Zest", "amount": 1 },
      { "unit": "Whole", "amount": 1, "name": "Cherry" },
    ],
    "description":
      "Pour all ingredients into mixing glass with ice cubes. Stir well. Strain into chilled cocktail glass. Garnish with Orange zest and maraschino cherry.",
    "glass": "Cocktail glass",
    "video": "31:04",
  },
  {
    "name": "Bee’s knees",
    "ingredients": [
      { "unit": "CL", "amount": 5.25, "name": "London dry gin" },
      { "unit": "Tsp", "amount": 2, "name": "Honey syrup" },
      { "unit": "CL", "amount": 2.25, "name": "Lemon juice" },
      { "unit": "CL", "amount": 2.25, "name": "Orange juice" },
    ],
    "optionalIngredients": [
      {
        "name": "Orange",
        "unit": "Zest",
        "amount": 1,
      },
    ],
    "description":
      "Stir honey with Lemon and Orange juices until it dissolves, add gin and shake with ice. Strain into a chilled cocktail glass. Optionally garnish with a Lemon or Orange zest.",
    "glass": "Cocktail glass",
    "video": "20:46",
  },
  {
    "name": "Cachanchara",
    "ingredients": [
      { "unit": "CL", "amount": 6, "name": "Cuban aguardiente" },
      { "unit": "CL", "amount": 1.5, "name": "Lemon juice" },
      { "unit": "CL", "amount": 1.5, "name": "Honey" },
      { "unit": "CL", "amount": 5, "name": "Water" },
      { "unit": "Wedge", "amount": 1, "name": "Lime" },
    ],
    "description":
      "Mix honey with water and lime juice and spread the mixture on the bottom and sides of the glass. Add cracked ice, and then the rum. End by energetically stirring from bottom to top. Garnish with Lime wedge.",
    "glass": "Old fashioned glass",
  },
  {
    "name": "Fernandito",
    "ingredients": [
      { "unit": "CL", "amount": 5, "name": "Fernet Branca" },
      { "name": "Cola", "unit": "None", "amount": 1 },
    ],
    "description":
      "Pour the Fernet Branca into a double old fashioned glass with ice, fill the glass up with Cola. Gently stir.",
    "glass": "Highball glass",
  },
  {
    "name": "Old cuban",
    "ingredients": [
      { "unit": "CL", "amount": 4.5, "name": "Rum" },
      { "unit": "CL", "amount": 6, "name": "Sparkling wine" },
      { "unit": "CL", "amount": 2.25, "name": "Lime juice" },
      { "unit": "CL", "amount": 3, "name": "Simple syrup" },
      { "unit": "Dash", "amount": 2, "name": "Angostura bitters" },
      { "unit": "Sprig", "amount": 3, "name": "Mint" },
    ],
    "description":
      "Pour all ingredients into cocktail shaker except the wine, shake well with ice, strain into chilled elegant cocktail glass. Top up with the sparkling wine. Garnish with mint springs.",
    "glass": "Cocktail glass",
  },
  {
    "name": "Paloma",
    "ingredients": [
      { "unit": "CL", "amount": 5, "name": "Tequila" },
      { "unit": "CL", "amount": 10, "name": "Grapefruit soda" },
      { "unit": "Tsp", "amount": 2, "name": "Lime juice" },
      { "name": "Salt", "unit": "None", "amount": 1 },
      { "unit": "Slice", "amount": 1, "name": "Lime" },
    ],
    "description":
      "Pour the tequila into a highball glass, squeeze the lime juice. Add ice and salt, fill up pink grapefruit soda. Stir gently. Garnish with a slice of lime.",
    "glass": "Highball glass",
    "video": "24:47",
  },
  {
    "name": "Paper plane",
    "ingredients": [
      { "unit": "CL", "amount": 3, "name": "Bourbon whiskey" },
      { "unit": "CL", "amount": 3, "name": "Amaro Nonino" },
      { "unit": "CL", "amount": 3, "name": "Aperol" },
      { "unit": "CL", "amount": 3, "name": "Lemon juice" },
    ],
    "description":
      "Pour all ingredients into cocktail shaker, shake well with ice, strain into chilled cocktail glass.",
    "glass": "Cocktail glass",
  },
  {
    "name": "Penicillin",
    "ingredients": [
      { "unit": "CL", "amount": 6, "name": "Blended Scotch whiskey" },
      { "unit": "CL", "amount": 0.75, "name": "Islay single malt scotch" },
      { "unit": "CL", "amount": 2.25, "name": "Lemon juice" },
      { "unit": "CL", "amount": 2.25, "name": "Honey syrup" },
      { "unit": "Slice", "amount": 3, "name": "Ginger" },
      { "unit": "Whole", "amount": 1, "name": "Candied ginger" },
    ],
    "description":
      "Muddle fresh ginger in a shaker and add the remaining ingredients, except for the Islay single malt whiskey. Fill the shaker with ice and shake. Double-strain into a chilled old fashioned glass with ice. Float the single malt whisky on top. Garnish with a candied ginger.",
    "glass": "Old fashioned glass",
  },
  {
    "name": "Southside",
    "ingredients": [
      { "unit": "CL", "amount": 6, "name": "London dry gin" },
      { "unit": "CL", "amount": 3, "name": "Lemon juice" },
      { "unit": "CL", "amount": 1.5, "name": "Simple syrup" },
      { "unit": "Sprig", "amount": 2, "name": "Mint" },
    ],
    "optionalIngredients": [
      {
        "name": "Egg white",
        "unit": "CL",
        "amount": 3,
      },
    ],
    "description":
      "Egg white optional. Pour all ingredients into a cocktail shaker, shake well with ice, double-strain into chilled cocktail glass. If egg white is used shake vigorously. Garnish with mint springs.",
    "glass": "Cocktail glass",
  },
  {
    "name": "Spicy fifty",
    "ingredients": [
      { "unit": "CL", "amount": 5, "name": "Vodka" },
      { "unit": "CL", "amount": 1.5, "name": "Elderflower syrup" },
      { "unit": "CL", "amount": 1.5, "name": "Lemon juice" },
      { "unit": "CL", "amount": 1, "name": "Honey syrup" },
      { "unit": "Drop", "amount": 1, "name": "Vanilla extract" },
      { "name": "Red chili pepper", "unit": "None", "amount": 1 },
    ],
    "description":
      "Pour all ingredients (including 2 thin slices of pepper) into a cocktail shaker, shake well with ice, double-strain into chilled cocktail glass. Garnish with a red chili pepper.",
    "glass": "Cocktail glass",
  },
  {
    "name": "Suffering bastard",
    "ingredients": [
      { "unit": "CL", "amount": 3, "name": "Brandy" },
      { "unit": "CL", "amount": 3, "name": "Gin" },
      { "unit": "CL", "amount": 1.5, "name": "Lime juice" },
      { "unit": "Dash", "amount": 2, "name": "Angostura bitters" },
      { "name": "Ginger beer", "unit": "None", "amount": 1 },
      { "unit": "Sprig", "amount": 1, "name": "Mint" },
    ],
    "optionalIngredients": [
      {
        "name": "Orange",
        "unit": "Slice",
        "amount": 1,
      },
    ],
    "description":
      "Pour all ingredients into cocktail shaker except the ginger beer, shake well with ice, Pour unstrained into a Collins glass or in the original S. Bastard mug and top up with ginger beer. Garnish with mint sprig and optionally an Orange slice as well.",
    "glass": "Collins glass",
  },
  {
    "name": "Tipperary",
    "ingredients": [
      { "unit": "CL", "amount": 5, "name": "Irish whiskey" },
      { "unit": "CL", "amount": 2.5, "name": "Sweet red vermouth" },
      { "unit": "CL", "amount": 1.5, "name": "Green Chartreuse" },
      { "unit": "Dash", "amount": 2, "name": "Angostura bitters" },
      { "unit": "Slice", "amount": 1, "name": "Orange" },
    ],
    "description":
      "Pour all ingredients into mixing glass with ice cubes. Stir well. Strain into chilled martini cocktail glass. Garnish with a slice of Orange.",
    "glass": "Cocktail glass",
  },
  {
    "name": "Trinidad sour",
    "ingredients": [
      { "unit": "CL", "amount": 4.5, "name": "Angostura bitters" },
      { "unit": "CL", "amount": 3, "name": "Orgeat syrup" },
      { "unit": "CL", "amount": 2.25, "name": "Lemon juice" },
      { "unit": "CL", "amount": 1.5, "name": "Rye whiskey" },
    ],
    "description":
      "Pour all ingredients into mixing glass with ice cubes. Stir well. Strain into chilled cocktail glass.",
    "glass": "Cocktail glass",
  },
  {
    "name": "Ve.n.to",
    "ingredients": [
      { "unit": "CL", "amount": 4.5, "name": "Grappa" },
      { "unit": "CL", "amount": 2.25, "name": "Lemon juice" },
      { "unit": "CL", "amount": 1.5, "name": "Honey syrup" },
      { "unit": "CL", "amount": 1.5, "name": "Chamomile syrup" },
      { "unit": "CL", "amount": 1.5, "name": "Honey syrup" },
      { "name": "Lemon", "unit": "Zest", "amount": 1 },
      { "unit": "Whole", "amount": 3, "name": "White grape" },
    ],
    "optionalIngredients": [
      { "name": "Egg white", "unit": "CL", "amount": 3 },
    ],
    "description":
      "Egg white optional. Pour all ingredients into the shaker. Shake vigorously with ice. Strain into a chilled small tumbler glass filled with ice. Garnish with Lemon zest and white grapes.",
    "glass": "Old fashioned glass",
  },
  {
    "name": "Illegal",
    "ingredients": [
      { "unit": "CL", "amount": 3, "name": "Mezcal" },
      { "unit": "CL", "amount": 1.5, "name": "Overproof white rum" },
      { "unit": "CL", "amount": 2.25, "name": "Lime juice" },
      { "unit": "CL", "amount": 1.5, "name": "Falernum" },
      { "unit": "CL", "amount": 1.5, "name": "Simple syrup" },
      { "unit": "Tsp", "amount": 1, "name": "Maraschino" },
    ],
    "optionalIngredients": [
      {
        "name": "Egg white",
        "unit": "CL",
        "amount": 3,
      },
    ],
    "description":
      "Egg white optional. Pour all ingredients into the shaker. Shake vigorously with ice. Strain into a chilled cocktail glass, or “on the rocks” in a traditional clay or terracotta mug.",
    "glass": "Cocktail glass",
  },
  {
    "name": "Naked and famous",
    "ingredients": [
      { "unit": "CL", "amount": 2.25, "name": "Mezcal" },
      { "unit": "CL", "amount": 2.25, "name": "Yellow chartreuse" },
      { "unit": "CL", "amount": 2.25, "name": "Aperol" },
      { "unit": "CL", "amount": 2.25, "name": "Lime juice" },
    ],
    "description":
      "Pour all ingredients into cocktail shaker, shake well with ice, strain into chilled cocktail glass.",
    "glass": "Cocktail glass",
  },
  {
    "name": "New York sour",
    "ingredients": [
      { "unit": "CL", "amount": 6, "name": "Rye whiskey" },
      { "unit": "CL", "amount": 3, "name": "Lemon juice" },
      { "unit": "CL", "amount": 3, "name": "Egg white" },
      { "unit": "CL", "amount": 2.25, "name": "Simple syrup" },
      { "unit": "CL", "amount": 1.5, "name": "Red wine" },
      { "name": "Lemon", "unit": "Zest", "amount": 1 },
      { "unit": "Whole", "amount": 1, "name": "Cherry" },
    ],
    "description":
      "Bourbon can be used instead of rye. Pour all ingredients into the shaker. Shake vigorously with ice. Strain into a chilled rocks glass filled with ice. Float the wine on top. Garnish with Lemon or Orange zest with cherry.",
    "glass": "Old fashioned glass",
  },
  {
    "name": "Spritz",
    "ingredients": [
      { "unit": "CL", "amount": 9, "name": "Prosecco" },
      { "unit": "CL", "amount": 6, "name": "Aperol" },
      { "unit": "Splash", "amount": 1, "name": "Soda water" },
      { "unit": "Slice", "amount": 1, "name": "Orange" },
    ],
    "description":
      "Build all ingredients into a wine glass filled with ice. Stir gently. Garnish with a slice of Orange.",
    "glass": "Wine glass",
    "video": "33:11",
  },
  {
    "name": "Gimlet",
    "ingredients": [
      { "unit": "CL", "amount": 2, "name": "Lime juice" },
      { "unit": "CL", "amount": 2, "name": "Simple syrup" },
      { "unit": "CL", "amount": 6, "name": "Gin" },
    ],
    "description":
      "Pour all ingredients into a cocktail strainer, shake well with ice, strain into chilled cocktail glass.",
    "glass": "Cocktail glass",
    "video": "15:00",
  },
  {
    "name": "Martini",
    "ingredients": [
      { "unit": "CL", "amount": 6, "name": "Gin" },
      { "unit": "CL", "amount": 6, "name": "Dry vermouth" },
    ],
    "optionalIngredients": [
      {
        "name": "Lemon",
        "unit": "Twist",
        "amount": 1,
      },
    ],
    "description":
      "Mix gin and vermouth in a chilled pint glass, stir with ice. Strain into a champagne coupe.",
    "glass": "Champagne coupe",
    "video": "13:39",
  },
  {
    "name": "Vodka martini",
    "ingredients": [
      { "unit": "CL", "amount": 8, "name": "Vodka" },
      { "unit": "Drop", "amount": 1, "name": "Dry vermouth" },
    ],
    "optionalIngredients": [
      { "name": "Lemon", "unit": "Twist", "amount": 1 },
      {
        "name": "Olive",
        "unit": "Whole",
        "amount": 1,
      },
    ],
    "description":
      "Mix vodka and dry vermouth in a pint glass. The amount of vermouth used varies and can be as little as a drop. Stir with ice. Optionally add olive brine to make a dirty martini.",
    "glass": "Cocktail glass",
    "video": "21:53",
  },
  {
    "name": "20th century",
    "ingredients": [
      { "unit": "CL", "amount": 4.5, "name": "Gin" },
      { "unit": "CL", "amount": 2, "name": "Lemon juice" },
      { "unit": "CL", "amount": 1.5, "name": "White crème de cacao" },
      { "unit": "CL", "amount": 2, "name": "Kina lillet" },
      { "name": "Lemon", amount: 1, "unit": "Twist" },
    ],
    "description":
      "Combine ingredients in a cocktail shaker, shake with ice, strain into a cocktail glass.",
    "glass": "Cocktail glass",
    "video": "19:51",
  },
  {
    "name": "Artillery",
    "ingredients": [
      { "unit": "Tsp", "amount": 1.5, "name": "Sweet red vermouth" },
      { "unit": "CL", "amount": 4.5, "name": "Gin" },
      { "unit": "Dash", "amount": 2, "name": "Angostura bitters" },
    ],
    "description":
      "Stir all ingredients with ice and strain into a cocktail glass.",
    "glass": "Cocktail glass",
  },
  {
    "name": "Whiskey fix",
    "description":
      "Shake in a cocktail shaker with a small piece of ice. Drain into the glass and top with crushed ice and garnish with a Lemon wedge and a luxardo cherry.",
    "glass": "Old fashioned glass",
    "video": "7:11",
    "ingredients": [
      { "unit": "CL", "amount": 2, "name": "Lemon juice" },
      { "unit": "CL", "amount": 2, "name": "Simple syrup" },
      { "unit": "CL", "amount": 6, "name": "Whiskey" },
      { "unit": "Wedge", "amount": 1, "name": "Lemon" },
      { "unit": "Whole", "amount": 1, "name": "Cherry" },
    ],
  },
];
