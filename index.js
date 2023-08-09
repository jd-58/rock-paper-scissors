




const moves = ["rock", "paper", "scissors", "Error"] // 0 for rock, 1 for paper, 2 for scissors
messages = ["You won!", "You lost!", "It's a tie!", "Error"]
let result                                       
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
        else if (playerNumber == 3) {
            result = 3
            return(result)
        }
        else {
            result = 0 //computer wins
            computerScore += 1
            return(result)
        }
        }
function getUserChoice() {
        playerChoice = prompt("Choose rock, paper, or scissors: ")
        playerChoice = playerChoice.toLowerCase()
            if (playerChoice == moves[0]) {
                playerNumber = 0 // rock
                return(playerNumber)
            }
            else if (playerChoice == moves[1]) {
                playerNumber = 1 // paper
                return(playerNumber)
            }
            else if (playerChoice == moves[2]) {
                playerNumber = 2 // scissors
                return(playerNumber)
            }
            else {
                playerNumber = 3 // for debugging
                return(playerNumber)
            }
    }

function playGame() {
        console.log("Let's play rock paper scissors! The game will last 5 turns.")
        var i = 0
        do {  
            let gameMessage = "N/A"
            computerNumber = getComputerChoice()
            playerNumber = getUserChoice()
            result = getResult()
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
            console.log(gameMessage + " You chose " + moves[playerNumber] + ", and the computer chose " + moves[computerNumber] + ".")
            console.log("Player score is: " + playerScore)
            console.log("Computer score is: " + computerScore)
            i++
            console.log("Games played: " + i)  
        }
        while(i < 5)
        return("Game over!")
        }


    
        



    
   








