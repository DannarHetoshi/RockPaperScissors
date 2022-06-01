function playRound(playerSelection, computerSelection) {
    // Code goes here
    switch (playerSelection) {
        case "rock": 
            if (computerSelection === "rock") {
                alert("tie!")
            } else if (computerSelection === "paper") {
                alert("paper beats rock, computer wins!")
            } else if (computerSelection === "scissors") {
                alert("rock beats scissors, player wins!")
            }
            break;
        case "paper":
            if (computerSelection === "rock") {
                alert("paper beats rock, player wins!")
            } else if (computerSelection === "paper") {
                alert("tie!")
            } else if (computerSelection === "scissors") {
                alert("scissors beats paper, computer wins!")
            }
            break;
        case "scissors":
            if (computerSelection === "rock") {
                alert("rock beats scissors, computer wins!")
            } else if (computerSelection === "paper") {
                alert("scissors beats paper, player wins!")
            } else if (computerSelection === "scissors") {
                alert("tie!")
            }
            break;
        try {
            throw 'Invalid player choice.'
        }
        catch (err) {
            alert("That is not a valid response, try again!")
        }
    }
}

function computerPlay() {
    
    let scissors = "scissors";
    let paper = "paper";
    let rock = "rock";

    let choice = Math.floor(Math.random() * 3);
    let answer = null;
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
            alert("You put something other than rock, paper, scissors.  Try again!")
            return playerChoice;
        } else {
            playRound(playerChoice, computerSelect)
        }
}
let playerSelect = playerSelection(prompt("Choose: Rock, Paper, or Scissors?"))
let computerSelect = computerPlay();
// alert(playerSelection(playerSelect) + " " + computerSelect);
