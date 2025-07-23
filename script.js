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

function getHumanChoice() {
  let choices = window.prompt("Rock, Paper, Or Scissors?");

  if (choices == "Rock") {
    return "Rock";
  } else if (choices == "Paper") {
    return "Paper";
  } else if (choices == "Scissors") {
    return "Scissors";
  } else {
    return "Please select a one of them";
  }
}
