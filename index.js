


function game() {



    function getComputerChoice() {
        const pick = ["rock", "paper", "scissors"]
        return pick[Math.floor(Math.random() * 3)]
    }

    function playRound(playerSelection, computerChoice) {
            let gameMessage = "N/A"
            computerChoice = getComputerChoice()
            console.log(computerChoice)
            playerSelection = prompt("Choose rock, paper, or scissors: ", "n/a")
            playerSelection = playerSelection.toLowerCase()
            if (playerSelection == "rock" && (computerChoice == "scissors")) {
                gameMessage = "You win! Rock beats paper."
                return (gameMessage)
            }
            else if (playerSelection == "rock" && (computerChoice == "paper")) {
                gameMessage = "You lost! Paper beats rock."
                return (gameMessage)
            }
            else if (playerSelection == "rock" && (computerChoice == "rock")) {
                gameMessage = "You tied!"
                return (gameMessage)
            }
            else if (playerSelection == "paper" && (computerChoice == "paper")) {
                gameMessage = "You tied!"
                return (gameMessage)
            }
            else if (playerSelection == "paper" && (computerChoice == "rock")) {
                gameMessage = "You win! Paper beats rock."
                return (gameMessage)
            }
            else if (playerSelection == "paper" && (computerChoice == "scissors")) {
                gameMessage = "You lost! Scissors beats paper."
                return (gameMessage)
            }
            else if (playerSelection == "scissors" && (computerChoice == "rock")) {
                gameMessage = "You lost! Rock beats scissors."
                return (gameMessage)
            }
            else if (playerSelection == "scissors" && (computerChoice == "paper")) {
                gameMessage = "You win! Scissors beats paper."
                return (gameMessage)
            }
            else if (playerSelection == "scissors" && (computerChoice == "scissors")) {
                gameMessage = "You tied!"
                return (gameMessage)
            }
            else {
                gameMessage = "Error!"
                return (gameMessage)
            }
            
        }
        console.log(playRound())
        console.log(playRound())
        console.log(playRound())
        console.log(playRound())
        console.log(playRound())


        

}

    
   








