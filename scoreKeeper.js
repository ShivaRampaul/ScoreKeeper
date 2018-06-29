var playerOneDisplay = document.querySelector("#playerOneDisplay");
var playerTwoDisplay = document.querySelector("#playerTwoDisplay");
var playerOneBtn = document.querySelector("#playerOneBtn");
var playerTwoBtn = document.querySelector("#playerTwoBtn");
var resetBtn = document.querySelector("#resetBtn");
var numInput = document.querySelector("input");
var p = document.querySelector("#numOfGames");
var playerOneScore, playerTwoScore;
var numOfGames = 5;
var gameOver = false;
playerOneScore = playerTwoScore = 0;

playerOneBtn.addEventListener("click", function() {
	if(!gameOver){
		playerOneScore++;
		playerOneDisplay.textContent = playerOneScore;
		if(playerOneScore === numOfGames) {
			playerOneDisplay.classList.add("winner");
			gameOver = true;
		}
	}
});

playerTwoBtn.addEventListener("click", function() {
	if(!gameOver) {
		playerTwoScore++;
		playerTwoDisplay.textContent = playerTwoScore;
		if(playerTwoScore === numOfGames) {
			playerTwoDisplay.classList.add("winner");
			gameOver = true;
		}
	}
});

numInput.addEventListener("change", function() {
	p.textContent = numInput.value;
	numOfGames = Number(numInput.value);
	reset();
});


resetBtn.addEventListener("click", function() {
	reset();
});

function reset() {
	playerTwoDisplay.textContent = playerOneDisplay.textContent = 0;
	playerOneScore = playerTwoScore = 0;
	playerTwoDisplay.classList.remove("winner");
	playerOneDisplay.classList.remove("winner");
	gameOver = false;
}
