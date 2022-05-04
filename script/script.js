const choice = document.getElementById("choice");
const scissor = document.querySelector("#scissor");
const paper = document.querySelector("#paper");
const rock = document.querySelector("#rock");

const buttons = document.querySelectorAll(".clickBtn");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const rand = choiceRandomizer();
    gamePlay(btn, rand);
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
  //   if (btn.classList.contains("scissor") && random == "paper") {
  //     choice.innerText = "You win";
  //   } else if (btn.classList.contains("scissor") && random == "rock") {
  //     choice.innerText = "You lost";
  //   } else {
  //     choice.innerText = "Draw";
  //   }
  //   if (btn.classList.contains("paper") && random == "rock") {
  //     choice.innerText = "You win";
  //   } else if (btn.classList.contains("paper") && random == "scissor") {
  //     choice.innerText = "You lost";
  //   } else {
  //     choice.innerText = "Draw";
  //   }
  //   if (btn.classList.contains("rock") && random == "scissor") {
  //     choice.innerText = "You win";
  //   } else if (btn.classList.contains("rock") && random == "paper") {
  //     choice.innerText = "You lost";
  //   } else {
  //     choice.innerText = "Draw";
  //   }

  switch (true) {
    case btn.classList.contains("scissor"):
      if (random == "paper") {
        choice.innerText = "You win";
      } else if (random == "rock") {
        choice.innerText = "You lost";
      } else {
        choice.innerText = "Draw";
      }
      break;
    case btn.classList.contains("paper"):
      if (random == "rock") {
        choice.innerText = "You win";
      } else if (random == "scissor") {
        choice.innerText = "You lost";
      } else {
        choice.innerText = "Draw";
      }
      break;
    case btn.classList.contains("rock"):
      if (random == "scissor") {
        choice.innerText = "You win";
      } else if (random == "paper") {
        choice.innerText = "You lost";
      } else {
        choice.innerText = "Draw";
      }
      break;

    default:
      break;
  }
  return choice;
}
