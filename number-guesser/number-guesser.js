let prompt = require("prompt-sync")();
let number = Math.floor(Math.random() * 100) + 1; //random number
let guesses = 0;
let answer;
let answers = [];
// code below (replace this example)
do {
  answer = parseInt(prompt("Guess a number: "));

  if (answer) {
    if (!answers.includes(answer)) {
      if (answer < number) {
        console.log("Too low!");
      }
      if (answer > number) {
        console.log("Too high!");
      }

      answers.push(answer);
      guesses++;
    } else {
      console.log("Already Guessed!");
    }
  } else {
    console.log("Not a number! Try again!");
  }
} while (answer !== number);

console.log(`You got it! You took ${guesses} attempts!`);

// Guess a number:
// > 12
// Too Low!
// Guess a number:
// > 65
// Too High!
// Guess a number:
// > 65
// Already Guessed!
// Guess a number:
// > asdf
// Not a number! Try again!
// Guess a number:
// > 42
// You got it! You took 3 attempts!
