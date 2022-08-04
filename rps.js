let playerWins = 0;
let computerWins = 0;
let roundScore = document.getElementById('round-score');
let playerScore = document.getElementById('player-score');
let computerScore = document.getElementById('computer-score');
let finalWinner = document.getElementById('final-winner');
let totalRounds = 0;

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

function setSelection(e) {
    if (e == 'rock') {
        return 'rock';
        // console.log(playerSelection);
        
    }
    else if (e == 'paper') {
        return 'paper';
    }
    else if (e == 'scissors') {
        return 'scissors';
    }
}

function game(e) {
    
    let playerSelection = setSelection(this.classList.value);
    let computerSelection = getComputerChoice();

    let roundResult = playRound(playerSelection, computerSelection);
    roundScore.textContent = roundResult;
    playerScore.textContent = playerWins;
    computerScore.textContent = computerWins;
    totalRounds++;
    if (totalRounds == 5) {
        if (playerWins > computerWins) {
            finalWinner.textContent = 'You Win!!';
        }
        else if (playerWins < computerWins) {
            finalWinner.textContent = 'You Lose!!';
        }
        else {
            finalWinner.textContent = "It's a Tie!!";
        }
    }
    
}

function main() {
    
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => button.addEventListener('click', game));
    
}

main();