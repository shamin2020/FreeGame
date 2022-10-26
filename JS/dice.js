"use strict";

//selecting elemnts
const score1 = document.getElementById("score1");
const score2 = document.getElementById("score2");
const dice = document.querySelector(".dice");
const hold = document.querySelector(".hold");
const roll = document.querySelector(".roll");
const current1 = document.getElementById("current1");
const current2 = document.getElementById("current2");
const player1 = document.querySelector(".player1");
const player2 = document.querySelector(".player2");
const newGame = document.querySelector(".newGame");

//switch user function
const switchUser = function () {
	currentScore = 0;
	document.getElementById(`current${active}`).textContent = 0;
	document.querySelector(`.player${active}`).classList.remove("p-active");

	active = active === 1 ? 2 : 1;

	document.querySelector(`.player${active}`).classList.add("p-active");
};
// starting conditions
score1.textContent = 0;
score2.textContent = 0;
dice.classList.add("hidden");
let currentScore = 0;
let active = 1;
let playing = true;

//Rolling Dice
roll.addEventListener("click", function () {
	document.querySelector(".rules").classList.add("hidden");
	if (playing) {
		const number = Math.ceil(Math.random() * 6);
		dice.src = `images/dice-${number}.png`;
		dice.classList.remove("hidden");

		if (number == 1) {
			switchUser();
		} else {
			currentScore += number;
			document.getElementById(`current${active}`).textContent = currentScore;
		}
	}
});

//Hold buttom
hold.addEventListener("click", function () {
	if (playing) {
		let scoreP = Number(document.getElementById(`score${active}`).textContent);
		scoreP += currentScore;
		document.getElementById(`score${active}`).textContent = scoreP;
		if (scoreP >= 100) {
			playing = false;
			document
				.querySelector(`.player${active}`)
				.classList.add("player--winner");
			document.querySelector(`.player${active}`).classList.remove("p-active");
			document.querySelector(`.image${active}`).classList.remove("hidden");
			dice.classList.add("hidden");
		} else {
			switchUser();
		}
	}
});

//New Game
newGame.addEventListener("click", function () {
	score1.textContent = 0;
	score2.textContent = 0;
	current1.textContent = 0;
	current2.textContent = 0;

	dice.classList.add("hidden");
	document.querySelector(".image1").classList.add("hidden");
	document.querySelector(".image2").classList.add("hidden");
	document.querySelector(".rules").classList.remove("hidden");
	currentScore = 0;
	active = 1;
	playing = true;
	player1.classList.add("p-active");
	player1.classList.remove("p-active");

	player1.classList.remove("player--winner");
	player2.classList.remove("player--winner");
});
