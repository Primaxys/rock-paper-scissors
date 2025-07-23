//  Computer Logic
function getComputerChoice() {
  const randomVal = Math.random();
  if (randomVal < 0.33) {
    return "Rock";
  } else if (randomVal < 0.66) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

// Human Logic
function getHumanChoice() {
  let choices = window.prompt("Rock, Paper, Or Scissors?");

  if (choices == "Rock") {
    return "Rock";
  } else if (choices == "Paper") {
    return "Paper";
  } else if (choices == "Scissors") {
    return "Scissors";
  } else {
    return "Please select one of the values provided.";
  }
}

// Score Variables
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
