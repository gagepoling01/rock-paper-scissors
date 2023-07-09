let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let random = Math.floor((Math.random() * 3) + 1);
    let computerSelection;

    if (random === 1) {
        return "ROCK";
    }
    if (random === 2) {
        return "PAPER";
    }
    if (random === 3) {
        return "SCISSORS";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toUpperCase() == computerSelection) {
        return "round tie";
    }
    if ((playerSelection == "ROCK" && computerSelection == "SCISSORS") || (playerSelection == "PAPER" && computerSelection == "ROCK") || (playerSelection == "SCISSORS" && computerSelection == "PAPER")) {
        playerScore++;
        return "round win";
    }
    if ((playerSelection == "SCISSORS" && computerSelection == "ROCK") || (playerSelection == "ROCK" && computerSelection == "PAPER") || (playerSelection == "PAPER" && computerSelection == "SCISSORS")) {
        computerScore++;
        return "round lose";
    }
}

function game() {
    for (let i = 0; i < 5; i++ ) {
        const computerSelection = getComputerChoice();
        let playerSelection = prompt("Enter your selection: ").toUpperCase();
        playRound(playerSelection, computerSelection);
        console.log("Player - Computer | " + playerScore + " - " + computerScore);
    }
    scorekeeper();
}

function scorekeeper() {
    if (playerScore > computerScore) {
        console.log("player won the game")
    }
    if (playerScore < computerScore) {
        console.log("player lost the game")
    }
    if (playerScore == computerScore) {
        console.log("the game was a draw")
    }

    playerScore = 0;
    computerScore = 0;
}

game();