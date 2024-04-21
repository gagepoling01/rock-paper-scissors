let playerScore = 0;
let computerScore = 0;

const gameBtns = document.querySelectorAll("#gameBtn");
gameBtns.forEach((gameBtn) => {
    gameBtn.addEventListener("click", () => {
        game(gameBtn.value);
    })
})

const resetBtn = document.querySelector("#resetBtn");
resetBtn.addEventListener("click", () => {
    resetGame();
})

const roundResults = document.createElement("p");
roundResults.classList.add("roundResults");
roundResults.textContent = "The match has not started, please make a selection."
results.appendChild(roundResults);

const totalScore = document.createElement("p");
totalScore.classList.add("totalScore");
totalScore.textContent = "Player - Computer | " + playerScore + " - " + computerScore;
results.appendChild(totalScore);

function getComputerChoice() {
    let random = Math.floor((Math.random() * 3) + 1);

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
        roundResults.textContent = "The round was tied, no points awarded";
        return "round tie";
    }
    if ((playerSelection == "ROCK" && computerSelection == "SCISSORS") || (playerSelection == "PAPER" && computerSelection == "ROCK") || (playerSelection == "SCISSORS" && computerSelection == "PAPER")) {
        playerScore++;
        roundResults.textContent = "Human won the round and was awarded 1 point";
        return "round win";
    }
    if ((playerSelection == "SCISSORS" && computerSelection == "ROCK") || (playerSelection == "ROCK" && computerSelection == "PAPER") || (playerSelection == "PAPER" && computerSelection == "SCISSORS")) {
        computerScore++;
        roundResults.textContent = "Computer won the round and was awarded 1 point";
        return "round loss";
    }
}

function game(playerSelection) {
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        if (playerScore >= 5) {
            gameBtns.forEach((gameBtn) => {
                gameBtn.disabled = true;
            })
            roundResults.textContent = "The Player has won the last round, therefore winning the game!"
            results.appendChild(roundResults);
            totalScore.textContent = "Player - Computer | " + playerScore + " - " + computerScore;
        }
        if (computerScore >= 5) {
            gameBtns.forEach((gameBtn) => {
                gameBtn.disabled = true;
            })
            roundResults.textContent = "The Computer has won the last round, therefore winning the game!"
            results.appendChild(roundResults);
            totalScore.textContent = "Player - Computer | " + playerScore + " - " + computerScore;
        }
        if (playerScore <= 5 || computerScore <= 5) {
            totalScore.textContent = "Player - Computer | " + playerScore + " - " + computerScore;
        }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    gameBtns.forEach((gameBtn) => {
        gameBtn.disabled = false;
    })
    roundResults.textContent = "The match has been restarted, please make a selection."
    totalScore.textContent = "Player - Computer | " + playerScore + " - " + computerScore;
}