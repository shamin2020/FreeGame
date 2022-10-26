let number = Math.floor(Math.random() * 51);
const score = document.querySelector(".score");
const num = document.querySelector(".number");
const highscore = document.querySelector(".highscore");

document.querySelector(".check").addEventListener("click", function () {
	const i = Number(document.querySelector(".guess").value);
	const displayMessage = function (message) {
		document.querySelector(".message").textContent = message;
	};
	if (!i) {
		displayMessage("⛔ No Number!");
	} else if (i == number) {
		document.querySelector("body").style.backgroundColor = "#60b347";
		num.style.width = "15rem";
		num.textContent = number;
		displayMessage("🏆 You Find it!");

		if (highscore.textContent < score.textContent) {
			highscore.textContent = score.textContent;
		}
	} else if (i != number) {
		if (score.textContent > 1) {
			displayMessage(i > number ? "📈  High!!" : "📉  Low!!");
			score.textContent -= 1;
		} else {
			displayMessage("You Lost the game!");
		}
	}
});
document.querySelector(".again").addEventListener("click", function again() {
	document.querySelector("body").style.backgroundColor = "#696969";
	document.querySelector(".message").textContent = "Start Guessing ...";
	num.style.width = "8rem";
	num.textContent = "?";
	score.textContent = 50;
	document.querySelector(".guess").value = "";
	number = Math.floor(Math.random() * 51);
});
