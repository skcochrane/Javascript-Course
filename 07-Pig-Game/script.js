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
const rollDice = document.querySelector(".btn--roll");
const hold = document.querySelector(".btn--hold");

let diceNumber = Math.trunc(Math.random() * 6) + 1;
let activePlayer = document
  .querySelector(".player")
  .classList.contains("player--active");

player1Score.textContent = 0;
player2Score.textContent = 0;
//Functions

const switchPlayer = function () {
  if (player1Sect.classList.contains("player--active")) {
    player1Sect.classList.remove("player--active");
    player2Sect.classList.add("player--active");
  } else if (player2Sect.classList.contains("player--active")) {
    player2Sect.classList.remove("player--active");
    player1Sect.classList.add("player--active");
  }
};

// Roll Dice
rollDice.addEventListener("click", function () {
  diceNumber = Math.trunc(Math.random() * 6) + 1;
  switch (diceNumber) {
    case 1:
      diceImg.src = "dice-1.png";
      break;
    case 2:
      diceImg.src = "dice-2.png";
      break;
    case 3:
      diceImg.src = "dice-3.png";
      break;
    case 4:
      diceImg.src = "dice-4.png";
      break;
    case 5:
      diceImg.src = "dice-5.png";
      break;
    case 6:
      diceImg.src = "dice-6.png";
      break;
  }
});

//Current Score ---- THIS DOESN"T DO ANYTHING WITH diceNumber! new diceNumber is stuck inside rollDice function, it doesn't follow outside the function to allow interaction with current score...
if (diceNumber === 1) {
  switchPlayer;
} else {
  if (player1Sect.classList.contains("player--active")) {
    player1Current.textContent = player1Current + diceNumber;
  } else if (player2Sect.classList.contains("player--active")) {
    player2Current.textContent = player2Current + diceNumber;
  }
}

//Hold Score

//New Game
const resetGame = function () {
  player1Score.textContent = 0;
  player2Score.textContent = 0;
  player1Current.textContent = 0;
  player2Current.textContent = 0;
  if (player2Sect.classList.contains("player--active")) {
    player2Sect.classList.remove("player--active");
    player1Sect.classList.add("player--active");
  }
};

newGame.addEventListener("click", resetGame);
