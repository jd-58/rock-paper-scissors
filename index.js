
function getComputerChoice() {

let randomInteger = Math.floor(Math.random() * 3);


    if (randomInteger = 0) {
        compChoice = "Rock"
    }
    else if (randomInteger = 1) {
        compChoice = "Paper"
    }
    else if (randomInteger = 2) {
        compChoice = "Scissors"
    }
    return compChoice
}
let computerSelection = getComputerChoice()
console.log(computerSelection)