function playRound(playerSelection, computerSelection) {
    // Code goes here
    switch (playerSelection) {
        case "rock": 
            if (computerSelection === "rock") {
                alert("tie!")
            } else if (computerSelection === "paper") {
                alert("paper beats rock, computer wins!")
                computerScore = computerScore + 1;
            } else if (computerSelection === "scissors") {
                alert("rock beats scissors, player wins!")
                playerScore = playerScore + 1;
            }
            break;
        case "paper":
            if (computerSelection === "rock") {
                alert("paper beats rock, player wins!")
                playerScore = playerScore + 1;
            } else if (computerSelection === "paper") {
                alert("tie!")
            } else if (computerSelection === "scissors") {
                alert("scissors beats paper, computer wins!")
                computerScore = computerScore + 1;
            }
            break;
        case "scissors":
            if (computerSelection === "rock") {
                alert("rock beats scissors, computer wins!")
                computerScore = computerScore + 1;
            } else if (computerSelection === "paper") {
                alert("scissors beats paper, player wins!")
                playerScore = playerScore + 1;
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

let playerScore = 0;
let computerScore = 0;

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
            return playerChoice;
        }
}

function game() {
    for (let i = 0; i < 5; i++){
        let playerSelect = playerSelection(prompt("Choose: Rock, Paper, or Scissors?"))
        let computerSelect = computerPlay()
        playRound(playerSelect, computerSelect)
    }
    alert("Player Score: " + playerScore + " Computer Score: " + computerScore)
}

game()

const container = document.querySelector('#container');
const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

/*content.createElement('p')
container.appendChild(content);
content.textContent = "Hey I'm red!";
content.createElement('h3')
container.appendChild(content);
content.textContent = "I'm a blue h3!";*/
// alert(playerSelection(playerSelect) + " " + computerSelect);