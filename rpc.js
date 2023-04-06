const CHOICES = ["rock", "paper", "scissors"];

function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3)
    return CHOICES[randomNumber];    
}

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
        result = "Tie Game!";
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

function game(){
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 5; i > 0; i--){
        let computerSelection = getComputerChoice();
        let winner = playRound(computerSelection).slice(0, 5);
        if (winner === "You W"){
            playerScore += 1;
        }
        else if (winner === "You L"){
            computerScore += 1;
        }
        console.log(`Player: ${playerScore} Computer: ${computerScore}`);
    }
    if (playerScore > computerScore){
        return `Player won ${playerScore}:${computerScore}`;
    }
    else if (computerScore > playerScore){
        return `Computer won ${computerScore}:${playerScore}`;
    }
    else{
        return `It's a tie! ${playerScore}:${computerScore}`;
    }
}

console.log(game());