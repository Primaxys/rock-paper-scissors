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

function playGame() {
  // Score Variables
  let humanScore = 0;
  let computerScore = 0;

  // Choice functions
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());

  // Round Logic
  function playRound(humanChoice, computerChoice) {
    // Win conditionals
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
  }

  console.log(`Player Score: ${humanScore}`);
  console.log(`Computer Score: ${computerScore}`);

  if (humanScore > computerScore) {
    console.log("The player wins!");
  } else if (humanScore < computerScore) {
    console.log("The computer wins!");
  } else if (humanScore === computerScore) {
    console.log("It's a tie! both players are equal");
  }
}

playGame();
