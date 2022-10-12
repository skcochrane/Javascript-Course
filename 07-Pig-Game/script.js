"use strict";

// Variables
const player1Sect = document.querySelector(".player--0");
let player1Score = document.querySelector("#score--0");
let player1Current = document.querySelector("#current--0");
const player2Sect = document.querySelector(".player--1");
let player2Score = document.querySelector("#score--1");
let player2Current = document.querySelector("#current--1");
let activePlayer = document
  .querySelector(".player")
  .classList.contains("player--active");

const newGame = document.querySelector(".btn--new");
const hold = document.querySelector(".btn--hold");
const rollDice = document.querySelector(".btn--roll");
let diceImg = document.querySelector(".dice");
let diceNumber = Math.trunc(Math.random() * 6) + 1;
let playing = true;

//Functions
// Reset
const resetGame = function () {
  let playing = true;
  player1Score.textContent = 0;
  player2Score.textContent = 0;
  player1Current.textContent = 0;
  player2Current.textContent = 0;
  player1Sect.classList.remove("player--winner");
  player2Sect.classList.remove("player--winner");
  player2Sect.classList.remove("player--active");
  player1Sect.classList.add("player--active");
  document.querySelector("#name--0").textContent = "Player 1";
  document.querySelector("#name--1").textContent = "Player 2";
};

//SwitchPlayer
const switchPlayer = function () {
  player1Sect.classList.toggle("player--active");
  player2Sect.classList.toggle("player--active");
  player1Current.textContent = 0;
  player2Current.textContent = 0;
};

//gameOver
const gameOver = function () {
  if (Number(player1Score.textContent) >= 100) {
    playing = false;
    document.querySelector("#name--0").textContent = "Winner!";
    player1Sect.classList.add("player--winner");
  } else if (Number(player2Score.textContent) >= 100) {
    playing = false;
    document.querySelector("#name--1").textContent = "Winner!";
    player2Sect.classList.add("player--winner");
  }
};

//Start of game
resetGame();

// Roll Dice && Current Score
rollDice.addEventListener("click", function () {
  if (playing) {
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
  }
});

//Hold Score
hold.addEventListener("click", function () {
  if (playing) {
    player1Score.textContent =
      Number(player1Score.textContent) + Number(player1Current.textContent);
    player2Score.textContent =
      Number(player2Score.textContent) + Number(player2Current.textContent);
    switchPlayer();
  }
  gameOver();
});

//New Game
newGame.addEventListener("click", resetGame);
