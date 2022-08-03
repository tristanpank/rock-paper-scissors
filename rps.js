let playerWins = 0;
let computerWins = 0;


function getComputerChoice() {
    let num = Math.floor(Math.random()*3);
    if (num == 0) {
        return 'rock';
    }
    else if (num == 1) {
        return 'paper';
    }
    else {
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            return "Tie!"
        }
        else if (computerSelection == "paper") {
            computerWins++;
            return "You Lose! Paper beats Rock"
        }
        else if (computerSelection == "scissors") {
            playerWins++;
            return "You Win! Rock beats Scissors"
        }
    }

    else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            playerWins++;
            return "You Win! Paper beats Rock"
        }
        else if (computerSelection == "paper") {
            return "Tie!"
        }
        else if (computerSelection == "scissors") {
            computerWins++;
            return "You Lose! Scissors beats Paper"
        }
    }

    else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            computerWins++;
            return "You Lose! Rock beats Scissors"
        }
        else if (computerSelection == "paper") {
            playerWins++;
            return "You Win! Scissors beats Paper"
        }
        else if (computerSelection == "scissors") {
            return "Tie!"
        }
    }
    
    else {
        return "Invalid Entry"
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt().toLowerCase()
        let result = playRound(playerSelection, getComputerChoice());
        console.log(result);
    }
    if (playerWins > computerWins) {
        console.log("You Win! You're Score: " + playerWins);
    }
    else if (playerWins < computerWins) {
        console.log("You Lose! You're Score: " + playerWins);
    }
    else {
        console.log("Tie! You're Score: " + playerWins);
    }
}

game();