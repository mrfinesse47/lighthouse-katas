const chooseRecipe = function (bakeryA, bakeryB, recipes) {
  let result = 0; //if it goes to 2 it has matched for both bakery

  recipes.forEach((recipie) => {
    if (
      hasIngredient(recipie.ingredients, bakeryA) &&
      hasIngredient(recipie.ingredients, bakeryB)
    ) {
      result = recipie;
    }
  });
  return result.name;
};

const hasIngredient = (ingredients, bakery) => {
  //console.log(ingredients);
  for (let i = 0; i < ingredients.length; i++) {
    for (let j = 0; j < bakery.length; j++) {
      if (ingredients[i] === ingredients[j]) {
        return true;
      }
    }
  }
  return false;
};

let bakeryA = ["saffron", "eggs", "tomato paste", "coconut", "custard"];
let bakeryB = ["milk", "butter", "cream cheese"];
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
