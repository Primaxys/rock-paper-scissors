//  Computer Logic
function getComputerChoice() {
  const randomVal = Math.random();
  if (randomVal < 0.33) {
    return "rock";
  } else if (randomVal < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Human Logic
function getHumanChoice() {
  let humanChoice = window.prompt("Rock, Paper, Or Scissors?").toLowerCase();

  if (humanChoice == "rock") {
    return "rock";
  } else if (humanChoice == "paper") {
    return "paper";
  } else if (humanChoice == "scissors") {
    return "scissors";
  } else {
    return "Please select one of the values provided.";
  }
}

// Score Variables
let humanScore = 0;
let computerScore = 0;

// Round Logic
function playRound(humanChoice, computerChoice) {
  // Win Conditionals
  if (humanChoice === computerChoice) {
    console.log("It's a tie");
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You Win! Paper beats Rock");
    humanScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You Win! Scissors beats Paper");
    humanScore++;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You Win! Rock beats Scissors");
    humanScore++;
  }

  // Lose Conditionals
  if (humanChoice === "rock" && computerChoice === "paper") {
    console.log("You lose Paper  beats Rock");
    computerScore++;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log("You lose Scissors beats Paper");
    computerScore++;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("You lose Rock beats Scissors");
    computerScore++;
  }

  console.log(humanScore);
  console.log(computerScore);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

// function capitalize() {
//   return String("bOTH").charAt(0).toUpperCase() + String("bOTH").slice(1);
// }

// console.log(capitalize());
