
function playRound(playerSelection, ComputerSelection) {
    let gameMessage = "N/A"
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()
    if (playerSelection = "rock" && (computerSelection = "rock")) {
        gameMessage = "You tied!"
        return gameMessage()
    }
    else if (playerSelection = "rock" && (computerSelection = "paper")) {
        gameMessage = "You lost! Paper beats rock."
        return gameMessage()
    }
    else if (playerSelection = "rock" && (computerSelection = "scissors")) {
        gameMessage = "You win! Rock beats paper."
        return gameMessage()
    }
    else if (playerSelection = "paper" && (computerSelection = "rock")) {
        gameMessage = "You win! Paper beats rock."
        return gameMessage()
    }
    else if (playerSelection = "paper" && (computerSelection = "paper")) {
        gameMessage = "You tied!"
        return gameMessage()
    }
    else if (playerSelection = "paper" && (computerSelection = "scissors")) {
        gameMessage = "You lost! Scissors beats paper."
        return gameMessage()
    }
    else if (playerSelection = "scissors" && (computerSelection = "rock")) {
        gameMessage = "You lost! Rock beats scissors."
        return gameMessage()
    }
    else if (playerSelection = "scissors" && (computerSelection = "paper")) {
        gameMessage = "You win! Scissors beats paper."
        return gameMessage()
    }
    else if (playerSelection = "scissors" && (computerSelection = "scissors")) {
        gameMessage = "You tied!"
        return gameMessage()
    }
    else {
        gameMessage = "Error!"
        return gameMessage()
    }
}