"use strict";

function checkGuess (playerGuess, answer) {
    if (playerGuess < answer) {
        output = `Mwahahaha your guess is too low!`
    }

    if (playerGuess > answer) {
        output = `You're making me laugh, your guess is too high!`
    }

    if (playerGuess === answer) {
        output = `How did you know...it's not fair! You guessed correctly! The answer was ${answer}.`
    }

    return output;
}