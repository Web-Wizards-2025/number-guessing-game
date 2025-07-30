"use strict";

const playerValidGuess = getPlayerGuess();

/*
 1. Gets the player guess
 2. Checks for guess validity
 3. The user will be repromped to enter a number as long as they keep entering an invalid input
 4. When the number is valid it gets returned
 */
function getPlayerGuess() {
  let playerGuess;
  let playerGuessNum;

  // This loop will continue as long as the input is invalid
  while (true) {
    playerGuess = prompt(
      "Guess the secret number. It's an integer between 1 and 100"
    );
    playerGuessNum = Number(playerGuess);

    // Checks if the input is valid based on all criterias
    let isGuessValid = checkGuessValidity(playerGuess, playerGuessNum);

    // If all checks pass, isValid will still be true, and the loop can be broken
    if (isGuessValid) break; // Exit the while loop
    // If isValid is false, the loop will continue, prompting the user again
  }

  // After the loop, playerGuessNum is guaranteed to be a valid integer between 1 and 100
  console.log(`You guessed ${playerGuessNum}`);
  return playerGuessNum;
}

// Checks whether the input is valid
function checkGuessValidity(input, inputNum) {
  // Handles a non-existent input
  if (!input) {
    console.log(
      "No input was provided. Please type an integer number between 1 and 100"
    );
    return false;
  }
  // Handles an input that results in not a number (a string input)
  else if (isNaN(inputNum)) {
    console.log(
      `"${input}" is not a number. Please type an integer number between 1 and 100`
    );
    return false;
  }
  // Handles a non-integer number
  else if (!Number.isInteger(inputNum)) {
    console.log(
      `${inputNum} is not a valid number because it's not an integer. Please type an integer number between 1 and 100`
    );
    return false;
  }
  // Handles a number less than 1
  else if (inputNum < 1) {
    console.log(
      `${inputNum} is not a valid number because it's less than 1. The number must be an integer between 1 and 100`
    );
    return false;
  }
  // Handles a number greater than 100
  else if (inputNum > 100) {
    console.log(
      `${inputNum} is not a valid number because it's greater than 100. The number must be an integer between 1 and 100`
    );
    return false;
  }

  // Returns true if all checks get passed
  return true;
}
