function playRound(playerSelection, computerSelection) {
    // Code goes here
    switch (playerSelection) {
        case "rock": 
            if (computerSelection === "rock") {
                console.log("tie!")
            } else if (computerSelection === "paper") {
                console.log("paper beats rock, computer wins!")
            } else if (computerSelection === "scissors") {
                console.log("rock beats scissors, player wins!")
            }
            break;
        case "paper":
            if (computerSelection === "rock") {
                console.log("paper beats rock, player wins!")
            } else if (computerSelection === "paper") {
                console.log("tie!")
            } else if (computerSelection === "scissors") {
                console.log("scissors beats paper, computer wins!")
            }
            break;
        case "scissors":
            if (computerSelection === "rock") {
                console.log("rock beats scissors, computer wins!")
            } else if (computerSelection === "paper") {
                console.log("scissors beats paper, player wins!")
            } else if (computerSelection === "scissors") {
                console.log("tie!")
            }
            break;
        try {
            throw 'Invalid player choice.'
        }
        catch (err) {
            console.log("That is not a valid response, try again!")
        }
    }
}

function computerPlay() {
    
    let scissors = "scissors";
    let paper = "paper";
    let rock = "rock";

    let choice = Math.floor(Math.random() * 3);
    let answer = "";
    switch (choice) {
        case 0:
            answer = rock;
            break;
        case 1:
            answer = paper;
            break;
        case 2:
            answer = scissors;
            break;
    }
    return answer;
}

function playerSelection(playerChoice) {
    playerChoice = playerChoice.toLowerCase();
        if (playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissors") {
            console.log("You put something other than rock, paper, scissors.  Try again!")
            return playerChoice;
        } else {
            return playerChoice;
        }
}
const playerSelect = playerSelection(prompt("Choose: Rock, Paper, or Scissors?"))
const computerSelect = computerPlay();
// console.log(playerSelection(playerSelect) + " " + computerSelect);
playRound(playerSelect, computerSelect)