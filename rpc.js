const CHOICES = ["rock", "paper", "scissors"];

function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3)
    return CHOICES[randomNumber];    
}

let computerSelection = getComputerChoice();

function playRound(computerSelection){
    let playerSelection;
    let result = "";

    do {
        playerSelection = prompt("Select rock, paper or scissors!").toLowerCase();
    } while (CHOICES.indexOf(playerSelection) === -1)

    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    console.log(player, computer);

    if (playerSelection === computer){
        result = "Draw!";
    }
    else if (player === "rock"){
        (computer === "scissors") ? result = "You Win! Rock beats Scissors" : result = "You Lose! Paper beats Rock";
    }
    else if (player === "paper"){
        (computer === "rock") ? result = "You Win! Paper beats Rock" : result = "You Lose! Scissors beats Paper";
    }
    else if (player === "scissors"){
        (computer === "paper") ? result = "You Win! Scissors beats Paper" : result = "You Lose! Rock beats Scissors";
    }
    return result;
}

console.log(playRound(computerSelection));