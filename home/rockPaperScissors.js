let playerScore = 0;
let computerScore = 0;
let playerSelect;
let computerSelection;
let winner = "And the winner is: ";

function playRound(playerSelection, computerSelection) {
    // Code goes here
    const compSelect = computerSelection.toLowerCase();
    switch (playerSelection) {
        case "rock": 
            if (compSelect == "rock") {
                document.getElementById("winner").innerHTML = winner + "It's a tie!";
            } else if (compSelect == "paper") {
                document.getElementById("winner").innerHTML = winner + "Computer";
                computerScore = computerScore + 1;
            } else if (compSelect == "scissors") {
                document.getElementById("winner").innerHTML = winner + "Player";
                playerScore = playerScore + 1;
            }
            break;
        case "paper":
            if (compSelect == "rock") {
                document.getElementById("winner").innerHTML = winner + "Player";
                playerScore = playerScore + 1;
            } else if (compSelect == "paper") {
                document.getElementById("winner").innerHTML = winner + "It's a tie!";
            } else if (compSelect == "scissors") {
                document.getElementById("winner").innerHTML = winner + "Computer";
                computerScore = computerScore + 1;
            }
            break;
        case "scissors":
            if (compSelect == "rock") {
                document.getElementById("winner").innerHTML = winner + "Computer";
                computerScore = computerScore + 1;
            } else if (compSelect == "paper") {
                document.getElementById("winner").innerHTML = winner + "Player";
                playerScore = playerScore + 1;
            } else if (compSelect == "scissors") {
                document.getElementById("winner").innerHTML = winner + "It's a tie!";
            }
            break;
        try {
            throw 'Invalid player choice.'
        }
        catch (err) {
            alert("That is not a valid response, try again!")
        }
    }
    game(playerScore, computerScore);
}

function game(pScore, cScore) {
    document.getElementById("playerScore").innerHTML = "Player: " + pScore;
    document.getElementById("computerScore").innerHTML = "Computer: " + cScore;
    if (pScore == 5) {
        alert("Player wins with a score of " + pScore + " to " + cScore);
    } else if (cScore == 5) {
        alert("Computer wins with a score of " + cScore + " to " + pScore);
    } 
    return;
}

function computerPlay() {
    
    let scissors = "Scissors";
    let paper = "Paper";
    let rock = "Rock";

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
        if (playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissors") {
            alert("You put something other than rock, paper, scissors.  Try again!")
            return playerChoice;
        } else {
            return playerChoice;
        }
}

function btnClick(e){
    const choice = this.innerText;
    document.getElementById("playChoice").innerHTML = "Player Chooses: " + choice;
    playerSelect = playerSelection(choice.toLowerCase());
    computerSelection = computerPlay();
    document.getElementById("compChoice").innerHTML = "Computer Chooses: " + computerSelection;
    playRound(playerSelect, computerSelection)
}

const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => button.addEventListener('click', btnClick));
