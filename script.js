const userScoreDisplay = document.getElementById("user-score");
const computerScoreDisplay = document.getElementById("computer-score");

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const afterselection = document.querySelector(".afterselection");
const section1 = document.querySelector(".section1");
const rule1 = document.querySelector(".rule1");
const rule2 = document.querySelector(".rule2");
const rule3 = document.querySelector(".rule3");
const ruleDisplay = document.querySelector(".rule-display");
const play = document.querySelector(".playagain");
const play2 = document.querySelector(".playagain2");
const winCelebration = document.querySelector(".win-celebration");

let userScore = parseInt(localStorage.getItem("userScore")) || 0;
let computerScore = parseInt(localStorage.getItem("computerScore")) || 0;
// let userScore = userScoreDisplay.textContent;
// let computerScore = computerScoreDisplay.textContent;

userScoreDisplay.textContent = userScore;
computerScoreDisplay.textContent = computerScore;

play.addEventListener("click", () => {
  section1.classList.remove("hidden");
  afterselection.classList.add("hidden");
  rule2.classList.add("hidden");
  rule1.classList.remove("hidden");
});
play2.addEventListener("click", () => {
  section1.classList.remove("hidden");
  rule3.classList.add("hidden");
  rule1.classList.remove("hidden");
  winCelebration.classList.add("hidden");
  document.querySelector(".score").classList.remove("hidden");
});

rock.addEventListener("click", () => {
  const computerChoice = getComputerChoice();
  const result = getRoundResult("rock", computerChoice);
  displayResult(result, "rock", computerChoice);
});

paper.addEventListener("click", () => {
  const computerChoice = getComputerChoice();
  const result = getRoundResult("paper", computerChoice);
  displayResult(result, "paper", computerChoice);
});

scissor.addEventListener("click", () => {
  const computerChoice = getComputerChoice();
  const result = getRoundResult("scissor", computerChoice);
  displayResult(result, "scissor", computerChoice);
});

function getComputerChoice() {
  const choices = ["rock", "paper", "scissor"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function getRoundResult(user, computer) {
  if (user === computer) {
    return "It's a tie!";
  } else if (
    (user === "rock" && computer === "scissor") ||
    (user === "paper" && computer === "rock") ||
    (user === "scissor" && computer === "paper")
  ) {
    return "You win!";
  } else {
    return "Computer wins!";
  }
}

document.querySelector(".next").addEventListener("click", () => {
  winCelebration.classList.remove("hidden");
  afterselection.classList.add("hidden");
  document.querySelector(".score").classList.add("hidden");
  rule2.classList.add("hidden");
});

function changeWinText(a,b) {
    if(a.classList.contains('hidden')) {
        a.classList.remove('hidden');
    }
    if(!b.classList.contains('hidden')) {
        b.classList.add('hidden');
    }
}

function win() {
  const yourSelection = document.querySelector(".yourselection");
  const yourSelectionElements = yourSelection.querySelectorAll(".hide-circle");
  yourSelectionElements.forEach((element) => {
    if (element.classList.contains("hidden")) {
      element.classList.remove("hidden");
    }
  });
  const pcSelection = document.querySelector(".pcselection");
  const pcSelectionElements = pcSelection.querySelectorAll(".hide-circle");
  pcSelectionElements.forEach((element) => {
    if (!element.classList.contains("hidden")) {
      element.classList.add("hidden");
    }
  });

  const childchange = yourSelection.querySelector(".childchange");
  childchange.style.border = "15px solid rgba(189, 0, 255, 1)";
  const childchange2 = pcSelection.querySelector(".childchange");
  console.log(childchange2);
  childchange2.style.border = "15px solid rgba(255, 169, 67, 1)";
  const win = document.getElementById("win");
  const loss = document.getElementById("loss");
  changeWinText(win,loss);

}
function lost() {
  const pcSelection = document.querySelector(".pcselection");
  const pcSelectionElements = pcSelection.querySelectorAll(".hide-circle");
  pcSelectionElements.forEach((element) => {
    if (element.classList.contains("hidden")) {
      element.classList.remove("hidden");
    }
  });
  const yourSelection = document.querySelector(".yourselection");
  const yourSelectionElements = yourSelection.querySelectorAll(".hide-circle");
  yourSelectionElements.forEach((element) => {
    if (!element.classList.contains("hidden")) {
      element.classList.add("hidden");
    }
  });
  const childchange = yourSelection.querySelector(".childchange");
  childchange.style.border = "15px solid rgba(255, 169, 67, 1)";
  const childchange2 = pcSelection.querySelector(".childchange");
  console.log(childchange2);

  childchange2.style.border = "15px solid rgba(189, 0, 255, 1)";
  const win = document.getElementById("win");
  const loss = document.getElementById("loss");
  changeWinText(loss,win);

}

function displayResult(result, userChoice, computerChoice) {
  if (result === "You win!") {
    userScore++;
    localStorage.setItem("userScore", userScore);
    userScoreDisplay.textContent = userScore;
    if (!rule1.classList.contains("hidden")) {
        rule1.classList.add("hidden");
      }
      
      if (rule2.classList.contains("hidden")) {
        rule2.classList.remove("hidden");
      }
      
      if (!section1.classList.contains("hidden")) {
        section1.classList.add("hidden");
      }
      
      if (afterselection.classList.contains("hidden")) {
        afterselection.classList.remove("hidden");
      }
      
    win();
    // rule2.style.visibility = "visible";
    // console.log()
    // afterselection.style.visibility = "visible";
    // section1.style.visibility = "hidden";
    // rule1.style.visibility = "hidden";
  } else if (result === "Computer wins!") {
    computerScore++;
    localStorage.setItem("computerScore", computerScore);
    computerScoreDisplay.textContent = computerScore;
    if (!rule1.classList.contains("hidden")) {
        rule1.classList.add("hidden");
      }
      
      if (rule2.classList.contains("hidden")) {
        rule2.classList.remove("hidden");
      }
      
      if (!section1.classList.contains("hidden")) {
        section1.classList.add("hidden");
      }
      
      if (afterselection.classList.contains("hidden")) {
        afterselection.classList.remove("hidden");
      }
      
    lost();
  }
}

function rule() {
  const ruleDisplay = document.querySelector(".rule-display");
  if(ruleDisplay.classList.contains("hidden")) {
    ruleDisplay.classList.remove("hidden");
  }
  
}
document.querySelector(".rules").addEventListener("click", rule);
document.querySelector(".cross").addEventListener("click", () => {
    const ruleDisplay = document.querySelector(".rule-display");
    if(!ruleDisplay.classList.contains("hidden")) {
      ruleDisplay.classList.add("hidden");
    }
});
