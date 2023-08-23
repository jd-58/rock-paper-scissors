let playerScore = 0
let computerScore = 0

const buttons = document.querySelector('#buttons')
const resultsDiv = document.querySelector('#resultsDiv')

let resultMessage = "Score \n Player: " + playerScore + "\n Computer: " + computerScore
String(resultMessage) 
const resultDisplay = document.createElement('div')
resultDisplay.classList.add('resultDisplay')
resultDisplay.textContent = resultMessage
resultDisplay.addEventListener
resultsDiv.appendChild(resultDisplay)

const rockButton = document.createElement('button')
rockButton.classList.add('rockButton')
rockButton.textContent = "Rock"
buttons.appendChild(rockButton)
rockButton.addEventListener('click', () => {
    playGame(0)
    let resultMessage = "Score \n Player: " + playerScore + "\n Computer: " + computerScore
    String(resultMessage) 
    resultsDiv.textContent = resultMessage
})

const paperButton = document.createElement('button')
paperButton.classList.add('paperButton')
paperButton.textContent = "Paper"
buttons.appendChild(paperButton)
paperButton.addEventListener('click', () => {
    playGame(1)
    let resultMessage = "Score \n Player: " + playerScore + "\n Computer: " + computerScore
    String(resultMessage) 
    resultsDiv.textContent = resultMessage
})

const scissorButton = document.createElement('button')
scissorButton.classList.add('scissorButton')
scissorButton.textContent = "Scissors"
buttons.appendChild(scissorButton)
scissorButton.addEventListener('click', () => {
    playGame(2)
    let resultMessage = "Score \n Player: " + playerScore + "\n Computer: " + computerScore
    String(resultMessage) 
    resultsDiv.textContent = resultMessage
})



const moves = ["rock", "paper", "scissors", "Error"] // 0 for rock, 1 for paper, 2 for scissors
messages = ["You won!", "You lost!", "It's a tie!", "Error"]
let result                                       
let playerNumber
let computerNumber


function getComputerChoice() {
        const ComputerChoice = Math.floor(Math.random() * 3)
        return (ComputerChoice)
    }
function getResult(playerNumber, computerNumber) {
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

function playGame(playerNumber) {
            let gameMessage = "N/A"
            computerNumber = getComputerChoice()
            result = getResult(playerNumber, computerNumber)
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


        
        // while(i < 5)
        
        }


    
        



    
   








