// game buttons
const playBtn = document.getElementById("play");
const resetBtn = document.getElementById("reset");
const rpsButtons = document.querySelectorAll(".clickBtn");

// status elements
const gameStatus = document.getElementById("status");
const userPick = document.getElementById("user-pick");
const cpuPick = document.getElementById("cpu-pick");

const userScore = document.getElementById("userScore");
const cpuScore = document.getElementById("cpuScore");

let userScoreCounter = 0;
let cpuScoreCounter = 0;

let gameCounter = 5;

rpsButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (gameCounter > 0) {
      const rand = choiceRandomizer();
      gamePlay(btn, rand);
      cpuPick.innerText = rand.toUpperCase();
      userPick.innerText = btn.classList[1].toUpperCase();

      gameStatus.style.transform = `rotate(2deg)`;

      userScore.innerText = userScoreCounter;
      cpuScore.innerText = cpuScoreCounter;

      setTimeout(() => {
        gameStatus.style.transform = `rotate(0deg)`;
      }, 400);
    } else {
      if (parseInt(userScore.innerText) > parseInt(cpuScore.innerText)) {
        alert("Game Over, You Won!");
      } else if (parseInt(userScore.innerText) < parseInt(cpuScore.innerText)) {
        alert("Game Over, CPU Won!");
      } else {
        alert(`Game Over, It's a draw!`);
      }
    }
    gameCounter -= 1;
  });
});

function moveText() {
  gameStatus.style.transform = `rotate(4deg)`;
}

function clearStatus() {
  userPick.innerText = "";
  cpuPick.innerText = "";
  gameStatus.innerText = "";
  userScore.innerText = 0;
  cpuScore.innerText = 0;
  userScoreCounter = 0;
  cpuScoreCounter = 0;
  gameCounter = 5;
}

function choiceRandomizer() {
  const random = Math.floor(Math.random() * 3) + 1;

  if (random === 1) {
    return "scissor";
  }
  if (random === 2) {
    return "paper";
  }
  if (random === 3) {
    return "rock";
  }
}

function gamePlay(btn, random) {
  switch (true) {
    case btn.classList.contains("scissor"):
      if (random == "paper") {
        gameStatus.innerText = "You win";
        userScoreCounter += 1;
      } else if (random == "rock") {
        gameStatus.innerText = "You lost";
        cpuScoreCounter += 1;
      } else {
        gameStatus.innerText = "Draw";
      }
      break;
    case btn.classList.contains("paper"):
      if (random == "rock") {
        gameStatus.innerText = "You win";
        userScoreCounter += 1;
      } else if (random == "scissor") {
        gameStatus.innerText = "You lost";
        cpuScoreCounter += 1;
      } else {
        gameStatus.innerText = "Draw";
      }
      break;
    case btn.classList.contains("rock"):
      if (random == "scissor") {
        gameStatus.innerText = "You win";
        userScoreCounter += 1;
      } else if (random == "paper") {
        gameStatus.innerText = "You lost";
        cpuScoreCounter += 1;
      } else {
        gameStatus.innerText = "Draw";
      }
      break;

    default:
      break;
  }
  return gameStatus, userScoreCounter, cpuScoreCounter;
}

resetBtn.addEventListener("click", () => {
  clearStatus();
});
