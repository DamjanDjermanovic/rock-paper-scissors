const CHOICES = ["rock 👊", "paper ✋", "scissors ✌️"];

const rock = document.querySelector('#rock');
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const scorePlayer = document.querySelector("#scorePlayer");
const computerDisp = document.querySelector("#computerDisp");
const winner = document.querySelector("#winner");
const scoreComputer = document.querySelector("#scoreComputer");
const results = document.querySelector("#results");

let computerScore = 0;
let playerScore = 0;

function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3)
    return CHOICES[randomNumber];    
}

function playRound(playerSelection, computerSelection){
    let result = "";

    if (computerSelection === playerSelection) {
        result = "Tie Game!";
    }
    else if (playerSelection.includes("rock")) {
        (computerSelection.includes("scissors")) ? result = "You Win! Rock beats Scissors" : result = "You Lose! Paper beats Rock";
    }
    else if (playerSelection.includes("paper")) {
        (computerSelection.includes("rock")) ? result = "You Win! Paper beats Rock" : result = "You Lose! Scissors beats Paper";
    }
    else if (playerSelection.includes("scissors")) {
        (computerSelection.includes("paper")) ? result = "You Win! Scissors beats Paper" : result = "You Lose! Rock beats Scissors";
    }
    return result;
}

function logScore(playerScore, computerScore, computerSelection){
    computerDisp.textContent = "Computers choice: " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);;
    scorePlayer.textContent = "Player: " + playerScore;
    scoreComputer.textContent = "Computer: " + computerScore;
}

function setWinner(score1, score2) {
    if (score1 === 5 || score2 === 5) {
      (score1 === 5) ? winner.textContent = "You win!" : winner.textContent = "Computer wins!";
      playerScore = 0;
      computerScore = 0;
    }
    else{
        winner.textContent = "First to five!";
    }
}  

function roundResult(result){
    if (result.includes("You Win!")){
        playerScore += 1;
    }
    else if (result.includes("You Lose!")){
        computerScore += 1;
    }
    results.textContent = result;
}

rock.addEventListener("click", () => {
    let computerSelection = getComputerChoice();
    let result = playRound(CHOICES[0], computerSelection);

    roundResult(result);

    logScore(playerScore, computerScore, computerSelection);

    setWinner(playerScore, computerScore);
});

paper.addEventListener("click", () => {
    let computerSelection = getComputerChoice();
    let result = playRound(CHOICES[1], computerSelection);

    roundResult(result);

    logScore(playerScore, computerScore, computerSelection);

    setWinner(playerScore, computerScore);
});

scissors.addEventListener("click", () => {
    let computerSelection = getComputerChoice();
    let result = playRound(CHOICES[2], computerSelection);

    roundResult(result);

    logScore(playerScore, computerScore, computerSelection);

    setWinner(playerScore, computerScore);
});