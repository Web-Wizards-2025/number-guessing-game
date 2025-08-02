"use strict";

const randomNumber = generateRandomNumber(1, 100);

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getPlayerGuess() {
  let playerGuessInput;
  let playerGuessNumber;

  while (true) {
    playerGuessInput = prompt(
      "Guess the secret number. It's an integer between 1 and 100"
    );
    playerGuessNumber = Number(playerGuessInput);

    let isGuessValid = checkGuessValidity(playerGuessInput, playerGuessNumber);

    if (isGuessValid) break;
  }

  console.log(`You guessed ${playerGuessNumber}`);
  return playerGuessNumber;
}

function checkGuessValidity(inputString, inputNumber) {
  if (!inputString) {
    console.log(
      "No input was provided. Please type an integer number between 1 and 100"
    );
    return false;
  } else if (isNaN(inputNumber)) {
    console.log(
      `"${inputString}" is not a number. Please type an integer number between 1 and 100`
    );
    return false;
  } else if (!Number.isInteger(inputNumber)) {
    console.log(
      `${inputNumber} is not a valid number because it's not an integer. Please type an integer number between 1 and 100`
    );
    return false;
  } else if (inputNumber < 1) {
    console.log(
      `${inputNumber} is not a valid number because it's less than 1. The number must be an integer between 1 and 100`
    );
    return false;
  } else if (inputNumber > 100) {
    console.log(
      `${inputNumber} is not a valid number because it's greater than 100. The number must be an integer between 1 and 100`
    );
    return false;
  }

  return true;
}

function checkGuess(playerGuessNumber, answer) {
  let output;
  let isAnswerCorrect;

  if (playerGuessNumber < answer) {
    output = `Mwahahaha your guess is too low!`;
    isAnswerCorrect = false;
  }

  if (playerGuessNumber > answer) {
    output = `You're making me laugh, your guess is too high!`;
    isAnswerCorrect = false;
  }

  if (playerGuessNumber === answer) {
    output = `How did you know...it's not fair! You guessed correctly! The answer was ${answer}.`;
    isAnswerCorrect = true;
  }

  return { output, isAnswerCorrect };
}

function game() {
  const secret = generateRandomNumber(1, 100);
  let attempts = 0;
  const maxAttempts = 10;
  let won = false;

  alert(
    "Welcome to the Guessing Game!\nYou have 10 attempts to guess a number between 1 and 100."
  );

  while (attempts < maxAttempts) {
    const guess = getPlayerGuess();
    const result = checkGuess(guess, secret);

    if (result.isAnswerCorrect) {
      console.log(
        `You won! The number was ${secret}.\nAmount of attempts used: ${attempts}`
      );
      won = true;
      break;
    } else {
      attempts++;
      console.log(
        `${result.output}. Remaining attempts: ${maxAttempts - attempts}`
      );
    }
  }

  if (!won) {
    console.log(
      `You lost! The number was ${secret}.\nAmount of attempts used: ${attempts}`
    );
  }

  let score = 0;
  if (won) score = 100 - (attempts - 1) * 10;
  console.log(`Score: ${score}`);
}

game();
