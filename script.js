// //  Computer Logic
// function getComputerChoice() {
//   const randomVal = Math.random();
//   if (randomVal < 0.33) {
//     return "Rock";
//   } else if (randomVal < 0.66) {
//     return "Paper";
//   } else {
//     return "Scissors";
//   }
// }

// // Human Logic
// function getHumanChoice() {
//   let choices = window.prompt("Rock, Paper, Or Scissors?");

//   if (choices == "Rock") {
//     return "Rock";
//   } else if (choices == "Paper") {
//     return "Paper";
//   } else if (choices == "Scissors") {
//     return "Scissors";
//   } else {
//     return "Please select one of the values provided.";
//   }
// }

// // Score Variables
// let humanScore = 0;
// let computerScore = 0;

// // Round Logic
// function playRound(humanChoice, computerChoice) {
//   if (humanChoice === computerChoice) {
//     console.log("It's a tie");
//   } else if (humanChoice === "Paper" && computerChoice === "Rock") {
//     console.log("You Win! Paper beats Rock");
//   } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
//     console.log("You Win! Scissors beats Paper");
//   } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
//     console.log("You Win! Rock beats Scissors");
//   }

//   if (humanChoice === "Rock" && computerChoice === "Paper") {
//     console.log("You lose Paper beats Rock");
//   } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
//     console.log("You lose Scissors beats Paper");
//   } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
//     console.log("You lose Rock beats Scissors");
//   }
// }

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection);
