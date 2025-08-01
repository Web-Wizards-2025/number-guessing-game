"use strict";

const randomNumber = generateRandomNumber(1, 100);

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
