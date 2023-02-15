const rock = document.querySelector(".choice-r").innerHTML;
const paper = document.querySelector(".choice-p").innerHTML;
const scissors = document.querySelector(".choice-s").innerHTML;

function getComputerChoice() {
  const rps = [rock, paper, scissors];
  const random = Math.floor(Math.random() * rps.length);
  return rps[random];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === rock && computerSelection === rock) {
    return "It's a tie!";
  } else if (playerSelection === paper && computerSelection === paper) {
    return "It's a tie!";
  } else if (playerSelection === scissors && computerSelection === scissors) {
    return "It's a tie!";
  } else if (playerSelection === rock && computerSelection === scissors) {
    return `You win! ${playerSelection} beats ${computerSelection}.`;
  } else if (playerSelection === paper && computerSelection === rock) {
    return `You win! ${playerSelection} beats ${computerSelection}.`;
  } else if (playerSelection === scissors && computerSelection === paper) {
    return `You win! ${playerSelection} beats ${computerSelection}.`;
  } else if (playerSelection === rock && computerSelection === paper) {
    return `You Lose! ${computerSelection} beats ${computerSelection}.`;
  } else if (playerSelection === paper && computerSelection === scissors) {
    return `You Lose! ${computerSelection} beats ${playerSelection}.`;
  } else if (playerSelection === scissors && computerSelection === rock) {
    return `You Lose! ${computerSelection} beats ${playerSelection}.`;
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }
}

game();

// const playerSelection = rock;
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));
