




const moves = ["rock", "paper", "scissors"] // 0 for rock, 1 for paper, 2 for scissors
messages = ["You won!", "You lost", "It's a tie!"]
let result                                       // 3 is a placeholder that cannot happen in the game, for debugging purposes
let playerNumber
let computerNumber
let playerScore = 0
let computerScore = 0

function getComputerChoice() {
        const ComputerChoice = Math.floor(Math.random() * 3)
        return (ComputerChoice)
    }
function getResult() {
        if (playerNumber == computerNumber) {
            result = 2 // tie
            return(result)
        }
        else if (playerNumber == ((computerNumber + 1) %3)) {
            result = 1 // player wins
            playerScore += 1
            return(result)
        }
        else {
            result = 0 //computer wins
            computerScore += 1
            return(result)
        }
        }
function getUserNumber() {
        playerSelection = prompt("Choose rock, paper, or scissors: ")
        playerSelection = playerSelection.toLowerCase()
            if (playerSelection == moves[0]) {
                playerNumber = 0 // rock
                return(playerNumber)
            }
            else if (playerSelection == moves[1]) {
                playerNumber = 1 // paper
                return(playerNumber)
            }
            else if (playerSelection == moves[2]) {
                playerNumber = 2 // scissors
                return(playerNumber)
            }
            else {
                playerNumber = 3 // for debugging
                return(playerNumber)
            }
    }

function playRound() {
            let gameMessage = "N/A"
            computerNumber = getComputerChoice()
            console.log("Computer choice is: " + computerNumber)
            playerNumber = getUserNumber()
            console.log("Player choice is: " + playerNumber)
            result = getResult()
            console.log(getResult)
            if (result == 1) {
                gameMessage = messages[0]
            }
            else if (result == 0) {
                gameMessage = messages[1]
            }
            else if (result == 2) {
                gameMessage = messages[2]
            }
            else {
                gameMessage = messages[3]
            }
            console.log("Result is: " + result)
            console.log(gameMessage)
            console.log("Player score is: " + playerScore)
            console.log("Computer score is: " + computerScore)
            return(gameMessage)
        }

playRound()
playRound()
    
        



    
   








