const CHOICES = ["rock", "paper", "scissors"];
const rock = document.querySelector('#rock');
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const scoreBoard = document.querySelector("#scoreBoard");
const computer = document.querySelector("#computer");
const winner = document.querySelector("#winner");

let computerScore = 0;
let playerScore = 0;

function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3)
    return CHOICES[randomNumber];    
}

function playRound(playerSelection, computerSelection){
    let result = "";

    if (playerSelection === computerSelection){
        result = "Tie Game!";
    }
    else if (playerSelection === "rock"){
        (computerSelection === "scissors") ? result = "You Win! Rock beats Scissors" : result = "You Lose! Paper beats Rock";
    }
    else if (playerSelection === "paper"){
        (computerSelection === "rock") ? result = "You Win! Paper beats Rock" : result = "You Lose! Scissors beats Paper";
    }
    else if (playerSelection === "scissors"){
        (computerSelection === "paper") ? result = "You Win! Scissors beats Paper" : result = "You Lose! Rock beats Scissors";
    }
    return result;
}

rock.addEventListener("click", () => {
    let computerSelection = getComputerChoice();
    let result = playRound("rock", computerSelection);

    if (result.includes("You Win!")){
        playerScore += 1;
    }
    else if (result.includes("You Lose!")){
        computerScore += 1;
    }

    computer.textContent = "Computers choice: " + computerSelection;
    scoreBoard.textContent = "Player:" + playerScore + " / " + "Computer:" + computerScore;

    if (computerScore === 5){

        playerScore = 0;
        computerScore = 0;
        winner.textContent = "Computer won!";
    }

    if (playerScore === 5){
        playerScore = 0;
        computerScore = 0;
        winner.textContent = "You win!";
    }
});

paper.addEventListener("click", () => {
    let computerSelection = getComputerChoice();
    let result = playRound("rock", computerSelection);

    if (result.includes("You Win!")){
        playerScore += 1;
    }
    else if (result.includes("You Lose!")){
        computerScore += 1;
    }

    computer.textContent = "Computers choice: " + computerSelection;
    scoreBoard.textContent = "Player:" + playerScore + " / " + "Computer:" + computerScore;

    if (computerScore === 5){

        playerScore = 0;
        computerScore = 0;
        winner.textContent = "Computer won!";
    }

    if (playerScore === 5){
        playerScore = 0;
        computerScore = 0;
        winner.textContent = "You win!";
    }
});

scissors.addEventListener("click", () => {
    let computerSelection = getComputerChoice();
    let result = playRound("rock", computerSelection);

    if (result.includes("You Win!")){
        playerScore += 1;
    }
    else if (result.includes("You Lose!")){
        computerScore += 1;
    }

    computer.textContent = "Computers choice: " + computerSelection;
    scoreBoard.textContent = "Player:" + playerScore + " / " + "Computer:" + computerScore;

    if (computerScore === 5){

        playerScore = 0;
        computerScore = 0;
        winner.textContent = "Computer won!";
    }

    if (playerScore === 5){
        playerScore = 0;
        computerScore = 0;
        winner.textContent = "You win!";
    }
});