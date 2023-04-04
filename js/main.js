const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");
var rounds = 0;
var playerCount = 0;
var computerCount = 0;
playerScore.innerText = playerCount;
computerScore.innerText = computerCount;

const choices = ["Rock", "Paper", "Scissors"];

let playerSelelction = null;
let computerSelection = null;

function computerChoice() {
  const random = Math.floor(Math.random() * choices.length);
  computerSelection = choices[random];
}

const playRound = (e) => {
  // Event object is being passed here
  playerSelection = e.target.innerText;
  rounds = rounds + 1;
  if (rounds == 5) {
    if (playerScore.innerText > computerScore.innerText) {
      console.log("You Win!");
    } else if (playerScore.innerText < computerScore.innerText) {
      console.log("You Lose!");
    } else {
      console.log("It's a tie");
    }
    document.getElementById("choice-r").removeEventListener("click", playRound);
    document.getElementById("choice-p").removeEventListener("click", playRound);
    document.getElementById("choice-s").removeEventListener("click", playRound);
    return;
  }
  computerChoice();
  if (playerSelection === choices[0] && computerSelection === choices[0]) {
    showResults("It's a tie!");
  } else if (
    playerSelection === choices[1] &&
    computerSelection === choices[1]
  ) {
    showResults("It's a tie!");
  } else if (
    playerSelection === choices[2] &&
    computerSelection === choices[2]
  ) {
    showResults("It's a tie!");
  } else if (
    playerSelection === choices[0] &&
    computerSelection === choices[2]
  ) {
    showResults(`You win! ${playerSelection} beats ${computerSelection}.`);
    playerScoreIncrease();
  } else if (
    playerSelection === choices[1] &&
    computerSelection === choices[0]
  ) {
    showResults(`You win! ${playerSelection} beats ${computerSelection}.`);
    playerScoreIncrease();
  } else if (
    playerSelection === choices[2] &&
    computerSelection === choices[1]
  ) {
    showResults(`You win! ${playerSelection} beats ${computerSelection}.`);
    playerScoreIncrease();
  } else if (
    playerSelection === choices[0] &&
    computerSelection === choices[1]
  ) {
    showResults(`You Lose! ${computerSelection} beats ${computerSelection}.`);
    computerScoreIncrease();
  } else if (
    playerSelection === choices[1] &&
    computerSelection === choices[2]
  ) {
    showResults(`You Lose! ${computerSelection} beats ${playerSelection}.`);
    computerScoreIncrease();
  } else if (
    playerSelection === choices[2] &&
    computerSelection === choices[0]
  ) {
    showResults(`You Lose! ${computerSelection} beats ${playerSelection}.`);
    computerScoreIncrease();
  }
};

function playerScoreIncrease() {
  playerCount++;
  playerScore.innerText = playerCount;
}

function computerScoreIncrease() {
  computerCount++;
  computerScore.innerText = computerCount;
}

function resetScores() {
  playerCount = 0;
  computerCount = 0;
  rounds = 0;
  playerScore.innerText = playerCount;
  computerScore.innerText = computerCount;
  document.getElementById("result").innerText = "";
  document.getElementById("choice-r").addEventListener("click", playRound);
  document.getElementById("choice-p").addEventListener("click", playRound);
  document.getElementById("choice-s").addEventListener("click", playRound);
}

function showResults(results) {
  document.getElementById("result").innerText = results;
}

// activates playRound function onclick
document.getElementById("choice-r").addEventListener("click", playRound);
document.getElementById("choice-p").addEventListener("click", playRound);
document.getElementById("choice-s").addEventListener("click", playRound);

document.getElementById("reset-button").addEventListener("click", resetScores);
