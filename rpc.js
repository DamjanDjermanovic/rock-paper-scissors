function getComputerChoice(){
    let randomNumber = Math.floor((Math.random() * 3) + 1);
    let computerSelection = "";
    switch(randomNumber){
        case 1:
            computerSelection = "Rock";
            break;
        case 2:
            computerSelection = "Paper";
            break;
        case 3:
            computerSelection = "Scissors"
            break;
    }
    return computerSelection;
}

let computerSelection = getComputerChoice()
let playerSelection = prompt("Select rock, paper or scissors!")

function playRound(computerSelection, playerSelection){
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    let result = "";

    if (player === computer){
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
    else {
        result = "Invalid input";
    }
    return result;
}

console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(computerSelection, playerSelection));