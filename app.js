let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function convertToWord(letter){
  if(letter == "r") return "Rock";
  if(letter == "p") return "Paper";
  return "Scissors";
}

function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function win(user, computer) {
  const smallUserWord = "You".fontsize(3).sub();
  const smallCompWord = "Comp".fontsize(3).sub();
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(user)}${smallUserWord} beats ${convertToWord(computer)}${smallCompWord}. You win!`;
  document.getElementById(user).classList.add('green-glow');
  setTimeout(() => document.getElementById(user).classList.remove('green-glow'), 500);
}

function lose(user, computer) {
  const smallUserWord = "You".fontsize(3).sub();
  const smallCompWord = "Comp".fontsize(3).sub();
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(computer)}${smallCompWord} beats ${convertToWord(user)}${smallUserWord}. You Lose.`;
  document.getElementById(user).classList.add('red-glow');
  setTimeout(() => document.getElementById(user).classList.remove('red-glow'), 500);
}

function draw(user, computer) {
  result_p.innerHTML = "It's a draw";
  document.getElementById(user).classList.add('gray-glow');
  setTimeout(() => document.getElementById(user).classList.remove('gray-glow'), 500);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    default:
      draw(userChoice, computerChoice);
      break;
  }
}

function main(){
  rock_div.addEventListener('click', () => game("r"));
  paper_div.addEventListener('click', () => game("p"));
  scissors_div.addEventListener('click', () => game("s"));
}

main();
