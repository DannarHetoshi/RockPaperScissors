let playerScore = 0;
let computerScore = 0;
let playerSelect;
let computerSelection;
let winner = "And the winner is: ";

function playRound(playerSelection, computerSelection) {
    // Code goes here
    const compSelect = computerSelection.toLowerCase();
    if (playerSelection == compSelect) {
        document.getElementById("winner").innerHTML = winner + "It's a tie!";
    } else {
        switch (playerSelection) {        
            case "rock": 
                if (compSelect == "paper") {
                    document.getElementById("winner").innerHTML = winner + "Computer";
                    computerScore = computerScore + 1;
                } else {
                    document.getElementById("winner").innerHTML = winner + "Player";
                    playerScore = playerScore + 1;
                }
                break;
            case "paper":
                if (compSelect == "rock") {
                    document.getElementById("winner").innerHTML = winner + "Player";
                    playerScore = playerScore + 1;
                } else {
                    document.getElementById("winner").innerHTML = winner + "Computer";
                    computerScore = computerScore + 1;
                }
                break;
            case "scissors":
                if (compSelect == "rock") {
                    document.getElementById("winner").innerHTML = winner + "Computer";
                    computerScore = computerScore + 1;
                } else {
                    document.getElementById("winner").innerHTML = winner + "Player";
                    playerScore = playerScore + 1;
                }
                break;
            /*try {
                throw 'Invalid player choice.'
            }
            catch (err) {
                alert("That is not a valid response, try again!")
            }*/
        }
    }
    game(playerScore, computerScore);
}

function game(pScore, cScore) {
    document.getElementById("playerScore").innerHTML = "Player: " + pScore;
    document.getElementById("computerScore").innerHTML = "Computer: " + cScore;
    if (pScore == 5) {
        alert("Player wins with a score of " + pScore + " to " + cScore);
        gameReset();
        return;
    } else if (cScore == 5) {
        alert("Computer wins with a score of " + cScore + " to " + pScore);
        gameReset();
        return;
    }
    return;
}

function gameReset(){
    playerScore = 0;
    computerScore = 0;
    document.getElementById("playerScore").innerHTML = "Player: " + playerScore;
    document.getElementById("computerScore").innerHTML = "Computer: " + computerScore;
    document.getElementById("winner").innerHTML = "And the winner is: ";
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

function btnClick(e){
    const choice = this.innerText;
    this.classList.add('clicked');
    document.getElementById("playChoice").innerHTML = "Player Chooses: " + choice;
    playerSelect = choice.toLowerCase();
    computerSelection = computerPlay();
    document.getElementById("compChoice").innerHTML = "Computer Chooses: " + computerSelection;
    playRound(playerSelect, computerSelection);
}

function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    this.classList.remove('clicked');
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', btnClick));
buttons.forEach(button => button.addEventListener('transitionend', removeTransition));
