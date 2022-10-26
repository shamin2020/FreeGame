const cat = document.getElementById("cat");
const mouse = document.getElementById("mouse");
const winner = document.getElementById("winnerModal");
const looser = document.getElementById("looserModal");
const lifeModal = document.getElementById("lifeModal");
const seconds = document.getElementById("seconds");

function setPosition() {
	cat.style.top = Math.floor(Math.random() * (window.innerHeight * 0.9)) + "px";
	cat.style.left = Math.floor(Math.random() * (window.innerWidth * 0.9)) + "px";
	mouse.style.top =
		Math.floor(Math.random() * (window.innerHeight * 0.9)) + "px";
	mouse.style.left =
		Math.floor(Math.random() * (window.innerWidth * 0.9)) + "px";
}

function handleKeys(e) {
	switch (e.keyCode) {
		case 38:
			move("up");
			break;
		case 40:
			move("down");
			break;
		case 37:
			move("left");
			break;
		case 39:
			move("right");
			break;
	}

	if (checkWinner()) {
		winner.style.display = "block";
		flag = false;

		window.onclick = function (event) {
			if (event.target == winner) {
				winner.style.display = "none";
				flag = true;
				location.reload();
			}
		};
	}
}

function checkWinner() {
	if (
		Math.abs(cat.offsetTop - mouse.offsetTop) < 20 &&
		Math.abs(cat.offsetLeft - mouse.offsetLeft) < 20
	) {
		return true;
	} else {
		return false;
	}
}

function move(direction) {
	var step = 10;
	switch (direction) {
		case "up":
			cat.style.top = cat.offsetTop - step + "px";
			if (cat.offsetTop <= 0) {
				cat.style.top = window.innerHeight * 0.9 - 50 + "px";
			}
			break;
		case "down":
			cat.style.top = cat.offsetTop + step + "px";
			if (cat.offsetTop >= window.innerHeight * 0.9) {
				cat.style.top = 0;
			}
			break;
		case "left":
			cat.style.left = cat.offsetLeft - step + "px";
			if (cat.offsetLeft <= 0) {
				cat.style.left = window.innerWidth * 0.9 - 50 + "px";
			}
			break;
		case "right":
			cat.style.left = cat.offsetLeft + step + "px";
			if (cat.offsetLeft >= window.innerWidth * 0.9) {
				cat.style.left = 0;
			}
			break;
	}
}
let life = 3;
let timeleft = 15;
let flag = true;
let downloadTimer = setInterval(function () {
	seconds.innerHTML = timeleft;
	if (timeleft > 0 && flag) {
		timeleft -= 1;

		if (timeleft <= 0) {
			life -= 1;

			if (life > 0) {
				document.getElementById("lifeModal__content").innerHTML =
					"Times up!!" + "Remaining Life:" + life;
				document.getElementById("life" + life).style.visibility = "hidden";

				lifeModal.style.display = "block";
				window.onclick = function (event) {
					if (event.target == lifeModal) {
						lifeModal.style.display = "none";
						timeleft = 15;
					}
				};
			} else {
				document.getElementById("life3").style.visibility = "hidden";
				looser.style.display = "block";
				window.onclick = function (event) {
					if (event.target == looser) {
						looser.style.display = "none";
						location.reload();
					}
				};
			}
		}
	}
}, 1000);

var mouseMove = setInterval(function () {
	mouse.style.top =
		Math.round(Math.random() * (window.innerHeight * 0.9)) + "px";
	mouse.style.left =
		Math.round(Math.random() * (window.innerWidth * 0.9)) + "px";

	//if (timeleft <= 1) {
	//	clearInterval(mouseMove);
	//}
}, 3000);
