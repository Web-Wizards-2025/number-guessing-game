"use strict";

// Functions

/*
 1. Captures the user guess which must be a number between 1 and 100 to be valid
 2. Checks whether this is valid (guard clause), if not it displays an error message and prompts again the user to take a guess
 3. If the input is valid then the guess gets saved and returned
 */

function getPlayerGuess() {
  const playerGuess = prompt(
    "Guess the secret number. It's an integer between 1 and 100"
  );
  const playerGuessNum = Number(playerGuess);

  const isPlayerGuessValid =
    playerGuess &&
    !isNaN(playerGuessNum) &&
    Number.isInteger(playerGuessNum) &&
    playerGuessNum > 0 &&
    playerGuessNum <= 100;

  checkGuessValidity(playerGuess, playerGuessNum);

  console.log(`Your guess is ${isPlayerGuessValid ? "valid" : "invalid"}`);
  console.log(`Your guess is ${playerGuessNum}`);
  return playerGuessNum;
}

// Checks whether the input is valid and consoles messages depending on the case
function checkGuessValidity(input, inputNum) {
  // Handles a non existent input
  if (!input)
    console.log(
      "No input was provided. Please type an integer number between 1 and 100"
    );
  // Handles an input that results in not a number (a string input)
  else if (isNaN(inputNum))
    console.log(
      `"${input}" is not a number. Please type an integer number between 1 and 100`
    );
  // Handles a non-integer number
  else if (!Number.isInteger(inputNum))
    console.log(
      `${inputNum} is not a valid number because it's not an integer. Please type an integer number between 1 and 100`
    );
  // Handles a number less than 1
  else if (inputNum < 1)
    console.log(
      `${inputNum} is not a valid number because it's less than 1. The number must be an integer between 1 and 100`
    );
  // Handles a number greater than 100
  else if (inputNum > 100)
    console.log(
      `${inputNum} is not a valid number because it's greater than 100. The number must be an integer between 1 and 100`
    );
}

getPlayerGuess();
