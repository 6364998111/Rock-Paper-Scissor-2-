let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

update();

function update() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`;
}

function computerPlay() {
  const randomNumber = Math.random();

  if (randomNumber < 1 / 3) {
    return "rock";
  } else if (randomNumber < 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}

function play(playerMove) {
  const computerMove = computerPlay();
  let result = "";

  if (playerMove === computerMove) {
    result = "Tie";
  } else if (
    (playerMove === "rock" && computerMove === "scissors") ||
    (playerMove === "paper" && computerMove === "rock") ||
    (playerMove === "scissors" && computerMove === "paper")
  ) {
    result = "You win!";
  } else {
    result = "You lose!";
  }

  if (result === "You win!") {
    score.wins++;
  } else if (result === "You lose!") {
    score.losses++;
  } else {
    score.ties++;
  }

  localStorage.setItem("score", JSON.stringify(score));

  document.querySelector(".js-result").innerHTML = result;
  document.querySelector(
    ".js-choices"
  ).innerHTML = `You <img src="${playerMove}-emoji.png" class="result-image">
     <img src="${computerMove}-emoji.png" class="result-image"> computer`;
  update();
}
