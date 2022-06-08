let userName = prompt("What's Your Name?");
let welcome = alert(`Hello, ${userName}.  it's a great Name😍!! Let's play!`);
console.log("Let's Play");

// parseInt() -> returns an integer.
let playerScore = parseInt(0);
let computerScore = parseInt(0);

// takes the user input
const playerSelection = () => {
    let userSelection = prompt('Enter your Selection 📄, 🪨, or ✂️?').toLowerCase(); // case-insensitive 
    console.log(`${userName}: ${userSelection}`);
    return userSelection;
}

const computerSelection = () => {
    const SELECTION = ['rock', 'paper', 'scissors'];
    let randmSelection = Math.floor(Math.random() * SELECTION.length);
    console.log(`Computer: ${SELECTION[randmSelection]}`);
    return SELECTION[randmSelection];
}

const winMassege = (odd1, odd2) => {
    console.log(`You Won🥳👍, ${odd1} beats the ${odd2}!`);
} 

const loseMassege = (odd1, odd2) => {
    console.log(`You Lost🥲👎, ${odd1} beats the ${odd2}!`);
} 

function results(playerSelection, computerSelection) {
    // ROCK ODDS
    if (computerSelection === "rock") {
        if (playerSelection === "paper") {
            playerScore++;
            winMassege("Paper", "Rock");
        } else if (playerSelection === "scissors") {
            computerScore++;
            loseMassege("Rock", "Scissors");
        } else {
            console.log(`It's a draw😅!`);
        }
    }

    // PAPER ODDS
    if (computerSelection === "paper") {
        if (playerSelection === "scissors") {
            playerScore++;
            winMassege("Scissors", "Paper");
        } else if (playerSelection === "rock") {
            computerScore++;
            loseMassege("Paper", "Rock");
        } else {
            console.log(`It's a draw😅!`);
        }
    }

    // SCISSORS ODDS
    if (computerSelection === "scissors") {
        if (playerSelection === "rock") {
            playerScore++;
            winMassege("Rock", "Scissors");
        } else if (playerSelection === "paper") {
            computerScore++;
            loseMassege("Scissors", "Paper");
        } else {
            console.log(`It's a draw😅!`);
        }
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        console.log("***********");
        console.log(`Round: ${i + 1}`)

        const player = playerSelection();
        if (player == "rock" || player == "scissors" || player == "paper") {
            const computer = computerSelection();
            results(player, computer);
            console.log(`Computer's score = ${computerScore}, Your Score = ${playerScore}`);
        } else {
            alert('Please Enter a Vaild Value, You should pick one of 📄, 🪨, or ✂️!');
            console.log('Game Over! Try again.');
            return false;
        }

        console.log("***********");
    }
    if (computerScore > playerScore) {
        console.log(`You're the loser. 😥!!!!`)
    } else if (computerScore < playerScore) {
        console.log(`You're the winner. 😎!!!!!`)
    } else {
        console.log(`It's draw 😏!!!!!`)
    }
}

// Run the game
game();