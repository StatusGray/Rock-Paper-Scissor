const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");
var count = 0;
playerScore.innerText = count;
computerScore.innerText = count;

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

// function showResults(results) {
//   node = document.createElement("p");
//   node.innerText = results;
//   document.querySelector(".container").appendChild(node);
// }

function playerScoreIncrease() {
  count++;
  playerScore.innerText = count;
}

function computerScoreIncrease() {
  count++;
  computerScore.innerText = count;
}

function showResults(results) {
  document.getElementById("result").innerText = results;
}

// activates playRound function onclick
document.getElementById("choice-r").addEventListener("click", playRound);
document.getElementById("choice-p").addEventListener("click", playRound);
document.getElementById("choice-s").addEventListener("click", playRound);
