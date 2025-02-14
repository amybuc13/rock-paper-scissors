function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let number = getRandomInt(3);
    if (number === 0) {
        return "rock";
    } else if (number === 1) {
        return "paper";
    } else if (number === 2) {
        return "scissors";
    }
}

function getRoundResult(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a draw!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}

let rounds = parseInt(prompt("How many rounds would you like to play?"));
let humanScore = 0;
let computerScore = 0;

for (let i = 0; i < rounds; i++) {
    const humanChoice = prompt("Enter rock, paper or scissors").toLowerCase();
    const computerChoice = getComputerChoice();

    const result = getRoundResult(humanChoice, computerChoice);
    console.log(`Round ${i + 1}:`);
    console.log(`You chose ${humanChoice}, computer chose ${computerChoice}.`);
    console.log(result);

    if (result === "You win!") {
        humanScore++;
    } else if (result === "You lose!") {
        computerScore++;
    }

    console.log(`Current Score: You: ${humanScore} - Computer: ${computerScore}`);
}
