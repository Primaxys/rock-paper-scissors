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
  let sign = window.prompt("Rock, Paper, Or Scissors?");
}
