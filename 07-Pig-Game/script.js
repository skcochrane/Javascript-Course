"use strict";

// Variables
const player1Sect = document.querySelector(".player--0");
let player1Score = document.querySelector("#score--0");
let player1Current = document.querySelector("#current--0");

const player2Sect = document.querySelector(".player--1");
let player2Score = document.querySelector("#score--1");
let player2Current = document.querySelector("#current--1");

let diceImg = document.querySelector(".dice");
const newGame = document.querySelector(".btn--new");
const rollDice = document.querySelector("btn--roll");
const hold = document.querySelector(".btn--hold");

//Functions

// Roll Dice
let diceNumber = Math.trunc(Math.random() * 6) + 1;
if (diceNumber === 1) {
  diceImg.src = "dice-1.png";
} else if (diceNumber === 2) {
  diceImg.src = "dice-2.png";
} else if (diceNumber === 3) {
  diceImg.src = "dice-3.png";
} else if (diceNumber === 4) {
  diceImg.src = "dice-4.png";
} else if (diceNumber === 5) {
  diceImg.src = "dice-5.png";
} else if (diceNumber === 6) {
  diceImg.src = "dice-6.png";
}

//Current Score

//Hold Score

//Switch Players

//New Game
