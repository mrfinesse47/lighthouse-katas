const chooseRecipe = function (bakeryA, bakeryB, recipes) {
  let result;

  recipes.forEach((recipie) => {
    if (
      hasIngredient(recipie.ingredients, bakeryA) &&
      hasIngredient(recipie.ingredients, bakeryB)
    ) {
      if (
        hasIngredient(recipie.ingredients, bakeryA) !==
        hasIngredient(recipie.ingredients, bakeryB)
      )
        //to make sure we are picking different ingredients from the 2 different bakeries
        result = recipie;
    }
  });
  return result.name;
};

const hasIngredient = (ingredients, bakery) => {
  //console.log(ingredients);
  for (let i = 0; i < ingredients.length; i++) {
    for (let j = 0; j < bakery.length; j++) {
      if (ingredients[i] === bakery[j]) {
        return ingredients[i];
      }
    }
  }
  return false;
};

let bakeryA = ["coconut", "saffron", "eggs", "tomato paste", "custard"];
let bakeryB = ["milk", "butter", "cream cheese", "coconut"];
let recipes = [
  {
    name: "Coconut Sponge Cake",
    ingredients: ["coconut", "cake base"],
  },
  {
    name: "Persian Cheesecake",
    ingredients: ["saffron", "cream cheese"],
  },
  {
    name: "Custard Surprise",
    ingredients: ["custard", "ground beef"],
  },
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ["potatoes", "bay leaf", "raisins"];
bakeryB = ["red bean", "dijon mustard", "apples"];
recipes = [
  {
    name: "Potato Ganache",
    ingredients: ["potatoes", "chocolate"],
  },
  {
    name: "Sweet Fish",
    ingredients: ["anchovies", "honey"],
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ["dijon mustard", "raisins"],
  },
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

//expected output: Persian Cheesecake
//                 Nima's Famous Dijon Raisins
