let playerScore = 0
let computerScore = 0
let gameMessage = "N/A"
let resultDisplayMessage = "Click a button to play!"


const buttons = document.querySelector('#buttons')
const scoreDiv = document.querySelector('#scoreDiv')
const tieDiv = document.querySelector('#tieDiv')
const choicesDiv = document.querySelector('#choicesDiv')
const resultDiv = document.querySelector('#resultDiv')
const gameOverPopup = document.querySelector('#gameOverPopup')
const playAgainButton = document.querySelector('#playAgainButton')
const webpageBlur = document.querySelector('#webpage')
const gameOverWindow = document.querySelector('#gameOverFinalContainer')
const userChoiceButtons = document.getElementsByClassName('selectionButton')

gameOverWindow.style.display ="none"


playAgainButton.textContent = "Click to play again."

gameOverPopup.textContent = "Game over."

resultDiv.textContent = resultDisplayMessage

const tieDisplay = document.createElement('div')
tieDisplay.classList.add('tieDisplay')
tieDisplay.textContent = "It's a tie! Choose again."
tieDiv.appendChild(tieDisplay)
document.getElementById("tieDiv").style.display = "none"

let resultMessage = "Score | Player: " + playerScore + "\n Computer: " + computerScore
String(resultMessage) 
const resultDisplay = document.createElement('div')
resultDisplay.classList.add('resultDisplay')
resultDisplay.textContent = resultMessage
resultDisplay.addEventListener
scoreDiv.appendChild(resultDisplay)

function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}

rockButton.classList.add('rockButton')
rockButton.addEventListener('click', () => {
    document.getElementById("tieDiv").style.display = "none"
    playGame(0)
    playerNumber = 0
    if (result == 2) {
        gameMessage = messages[2]
    }
    else if (result == 1) {
        gameMessage = messages[0]
    }
    else if (result == 0) {
        gameMessage = messages[1]
    }
    else {
        gameMessage = messages[3]
    }
    let resultMessage = "Score | " +  "Player: " + playerScore + "\n Computer: " + computerScore
    String(resultMessage) 
    resultDisplayMessage = gameMessage + " You chose " + moves[playerNumber]
    + " and the computer chose " + moves[computerNumber] + "."
    String(resultDisplayMessage)
    scoreDiv.textContent = resultMessage
    resultDiv.textContent = resultDisplayMessage 
    gameOverCheck()
})


paperButton.classList.add('paperButton')
paperButton.addEventListener('click', () => {
    document.getElementById("tieDiv").style.display = "none"
    playGame(1)
    playerNumber = 1
    if (result == 2) {
        gameMessage = messages[2]
    }
    else if (result == 1) {
        gameMessage = messages[0]
    }
    else if (result == 0) {
        gameMessage = messages[1]
    }
    else {
        gameMessage = messages[3]
    }
    gameOverCheck()
    let resultMessage = "Score | " + "Player: " + playerScore + "\n Computer: " + computerScore
    String(resultMessage) 
    let resultDisplayMessage = gameMessage + " You chose " + moves[playerNumber]
    + " and the computer chose " + moves[computerNumber] + "."
    String(resultDisplayMessage)
    scoreDiv.textContent = resultMessage
    resultDiv.textContent = resultDisplayMessage
})


scissorButton.classList.add('scissorButton')
scissorButton.addEventListener('click', () => {
    document.getElementById("tieDiv").style.display = "none"
    playGame(2)
    playerNumber = 2
    if (result == 2) {
        gameMessage = messages[2]
    }
    else if (result == 1) {
        gameMessage = messages[0]
    }
    else if (result == 0) {
        gameMessage = messages[1]
    }
    else {
        gameMessage = messages[3]
    }
    gameOverCheck()
    let resultMessage = "Score | " + "Player: " + playerScore + "\n Computer: " + computerScore
    String(resultMessage) 
    let resultDisplayMessage = gameMessage + " You chose " + moves[playerNumber]
    + " and the computer chose " + moves[computerNumber] + "."
    String(resultDisplayMessage)
    scoreDiv.textContent = resultMessage
    resultDiv.textContent = resultDisplayMessage
})




const moves = ["rock", "paper", "scissors", "Error"] // 0 for rock, 1 for paper, 2 for scissors
messages = ["You won!", "You lost!", "It's a tie! Choose again.", "Error"]
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
finalGameOverMessage = "n/a"

function gameOverCheck() {
    console.log("Player score is check: " + playerScore)
    console.log("Computer score is check: " + computerScore)
    if (playerScore == 5 || computerScore == 5) {
        rockButton.disabled = true
        paperButton.disabled = true
        scissorButton.disabled = true
        if (playerScore > computerScore) {
            finalGameOverMessage = messages[0] + " You scored " + playerScore + " and the computer scored " 
            + computerScore + ". Game over."
            String(finalGameOverMessage)
        }
        else if (computerScore > playerScore) {
            finalGameOverMessage = messages[1] + " You scored " + playerScore + " and the computer scored " 
            + computerScore + ". Game over."
            String(finalGameOverMessage)
        } 
        gameOverPopup.textContent = finalGameOverMessage
        gameOverWindow.style.display ="flex"
        webpageBlur.style.transition = "3s"
        webpageBlur.style.filter = "blur(3px)"   
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

        function resetScores() {
            playerScore = 0
            computerScore = 0
            resultDisplayMessage = "Click a button to play!"
            String(resultDisplayMessage)
            resultMessage = "Score | Player: " + playerScore + "\n Computer: " + computerScore
            String(resultMessage)
        }


        playAgainButton.addEventListener('click', () => {
            webpageBlur.style.filter = "none"
            gameOverWindow.style.display ="none"
            resetScores()
            console.log(resultMessage)
            rockButton.disabled = false
            paperButton.disabled = false
            scissorButton.disabled = false
            document.getElementById("resultDiv").textContent = resultDisplayMessage;
            document.getElementById("scoreDiv").textContent = resultMessage;
        })

    
        


    
   








