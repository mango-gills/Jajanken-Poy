// game buttons
const playBtn = document.getElementById("play");
const resetBtn = document.getElementById("reset");
const rpsButtons = document.querySelectorAll(".clickBtn");

// status elements
const gameStatus = document.getElementById("status");
const userPick = document.getElementById("user-pick");
const cpuPick = document.getElementById("cpu-pick");

rpsButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const rand = choiceRandomizer();
    gamePlay(btn, rand);
    cpuPick.innerText = rand.toUpperCase();
    userPick.innerText = btn.classList[1].toUpperCase();
  });
});

// console.log(choiceRandomizer());

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
      } else if (random == "rock") {
        gameStatus.innerText = "You lost";
      } else {
        gameStatus.innerText = "Draw";
      }
      break;
    case btn.classList.contains("paper"):
      if (random == "rock") {
        gameStatus.innerText = "You win";
      } else if (random == "scissor") {
        gameStatus.innerText = "You lost";
      } else {
        gameStatus.innerText = "Draw";
      }
      break;
    case btn.classList.contains("rock"):
      if (random == "scissor") {
        gameStatus.innerText = "You win";
      } else if (random == "paper") {
        gameStatus.innerText = "You lost";
      } else {
        gameStatus.innerText = "Draw";
      }
      break;

    default:
      break;
  }
  return gameStatus;
}

resetBtn.addEventListener("click", () => {
  userPick.innerText = "";
  cpuPick.innerText = "";
  gameStatus.innerText = "";
});
