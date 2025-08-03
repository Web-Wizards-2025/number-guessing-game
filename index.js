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

    if (isGuessValid === null) return null;
    if (isGuessValid) break;
  }

  console.log(`You guessed ${playerGuessNumber}`);
  return playerGuessNumber;
}

function checkGuessValidity(inputString, inputNumber) {
  if (inputString === "") {
    console.log(
      "⚠️ No input was provided. Please type an integer number between 1 and 100"
    );
    return false;
  } else if (inputString === null) {
    alert("Game cancelled. See you next time!");
    return null;
  } else if (isNaN(inputNumber)) {
    console.log(
      `"⚠️ ${inputString}" is not a number. Please type an integer number between 1 and 100`
    );
    return false;
  } else if (!Number.isInteger(inputNumber)) {
    console.log(
      `⚠️ ${inputNumber} is not a valid number because it's not an integer. Please type an integer number between 1 and 100`
    );
    return false;
  } else if (inputNumber < 1) {
    console.log(
      `⚠️ ${inputNumber} is not a valid number because it's less than 1. The number must be an integer between 1 and 100`
    );
    return false;
  } else if (inputNumber > 100) {
    console.log(
      `⚠️ ${inputNumber} is not a valid number because it's greater than 100. The number must be an integer between 1 and 100`
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
  alert(
    "🎮 Welcome to the Number Guessing Game!\n\n" +
    "To play, you need to open the browser console to see game results and feedback.\n\n" +
    "👉 How to open the console:\n" +
    "- Chrome/Edge: Press Ctrl+Shift+J (Windows) or Cmd+Option+J (Mac)\n" +
    "- Firefox: Press Ctrl+Shift+K (Windows) or Cmd+Option+K (Mac)\n\n" +
    "Once the game starts, follow the prompts and enter your guesses. Good luck!"
  );

  alert(
    "INSTRUCTIONS:\n\n" +
    "1. The computer has chosen a secret number between 1 and 100.\n" +
    "2. You have 10 attempts to guess it.\n" +
    "3. After each guess, check the console for hints (Too High / Too Low).\n" +
    "4. Enter an integer between 1 and 100 in each prompt.\n" +
    "5. Your score depends on how quickly you guess the number.\n\n" +
    "Cancel the prompt to quit early."
  );

  const secret = generateRandomNumber(1, 100);
  let attempts = 0;
  const maxAttempts = 10;
  let won = false;

  while (attempts < maxAttempts) {
    const guess = getPlayerGuess(); // Ahora getPlayerGuess ya maneja cancelación y validez.
    const result = checkGuess(guess, secret);

    if (result.isAnswerCorrect) {
      console.log(
        `🎉 You won! The secret number was ${secret}.\nAttempts used: ${attempts}`
      );
      won = true;
      break;
    } else {
      console.log(
        `${result.output} | Remaining attempts: ${maxAttempts - attempts}`
      );
    }
  }

  if (!won) {
    console.log(
      `❌ You lost! The secret number was ${secret}.\nAttempts used: ${attempts}`
    );
  }

  let score = 0;
  if (won) score = 100 - (attempts - 1) * 10;
  console.log(`⭐️ Your Score: ${score}`);
}



game();
