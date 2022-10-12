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

//Functions

const resetGame = function () {
  player1Score.textContent = 0;
  player2Score.textContent = 0;
  player1Current.textContent = 0;
  player2Current.textContent = 0;
  if (player2Sect.classList.contains("player--active")) {
    player2Sect.classList.remove("player--active");
    player1Sect.classList.add("player--active");
  }
  document.querySelector(".player").classList.remove("player--winner");
  document.querySelector("#name--0").textContent = "Player 1";
  document.querySelector("#name--1").textContent = "Player 2";
};

const switchPlayer = function () {
  if (player1Sect.classList.contains("player--active")) {
    player1Sect.classList.remove("player--active");
    player2Sect.classList.add("player--active");
  } else if (player2Sect.classList.contains("player--active")) {
    player2Sect.classList.remove("player--active");
    player1Sect.classList.add("player--active");
  }
  player1Current.textContent = 0;
  player2Current.textContent = 0;
};

const gameOver = function () {
  if (Number(player1Score.textContent) >= 100) {
    document.querySelector("#name--0").textContent = "Winner!";
    player1Sect.classList.add("player--winner");
  } else if (Number(player2Score.textContent) >= 100) {
    document.querySelector("#name--1").textContent = "Winner!";
    player2Sect.classList.add("player--winner");
  }
};

//Start of game
resetGame();

// Roll Dice && Current Score
rollDice.addEventListener("click", function () {
  diceNumber = Math.trunc(Math.random() * 6) + 1;
  diceImg.src = `dice-${diceNumber}.png`;
  if (diceNumber === 1) {
    switchPlayer();
  } else {
    if (player1Sect.classList.contains("player--active")) {
      player1Current.textContent =
        Number(player1Current.textContent) + diceNumber;
    } else if (player2Sect.classList.contains("player--active")) {
      player2Current.textContent =
        Number(player2Current.textContent) + diceNumber;
    }
  }
});

//Hold Score
hold.addEventListener("click", function () {
  player1Score.textContent =
    Number(player1Score.textContent) + Number(player1Current.textContent);
  player2Score.textContent =
    Number(player2Score.textContent) + Number(player2Current.textContent);
  switchPlayer();
  gameOver();
});

//Game Over

//New Game
newGame.addEventListener("click", resetGame);
