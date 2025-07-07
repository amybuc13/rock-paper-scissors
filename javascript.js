document.addEventListener("DOMContentLoaded", () => {
  const choices = ["rock", "paper", "scissors"];
  let humanScore = 0;
  let computerScore = 0;
  let round = 1;
  let maxRounds;

  const icons = document.querySelectorAll(".icon");
  const resultText = document.getElementById("result-text");
  const scoreDisplay = document.getElementById("score");
  const roundCount = document.getElementById("round-count");
  const restartBtn = document.getElementById("restart-btn");

  function askRounds() {
    let input;
    do {
      input = prompt("How many rounds would you like to play?");
      if (input === null) input = 0; 
    } while (!/^[1-9][0-9]*$/.test(input));
    maxRounds = parseInt(input);
    round = 1;
    resetUI();
  }

  function getComputerChoice() {
    const index = Math.floor(Math.random() * 3);
    return choices[index];
  }

  function getResult(player, cpu) {
    if (player === cpu) return "It's a draw!";
    if (
      (player === "rock" && cpu === "scissors") ||
      (player === "paper" && cpu === "rock") ||
      (player === "scissors" && cpu === "paper")
    ) {
      humanScore++;
      return "You win!";
    } else {
      computerScore++;
      return "You lose!";
    }
  }

  function updateUI(playerChoice, cpuChoice, result) {
    resultText.textContent = `You picked ${playerChoice}, computer picked ${cpuChoice}. ${result}`;
    scoreDisplay.textContent = `You: ${humanScore} | CPU: ${computerScore}`;
    roundCount.textContent = `Round ${round} of ${maxRounds}`;
  }

  function endGame() {
    let finalResult = humanScore > computerScore ? "🎉 You won the game!" :
                      humanScore < computerScore ? "😞 You lost the game!" :
                      "It's a draw!";
    resultText.textContent = finalResult;
    icons.forEach(icon => icon.style.pointerEvents = "none");
    restartBtn.style.display = "inline-block";
  }

  function resetUI() {
    humanScore = 0;
    computerScore = 0;
    resultText.textContent = "Make your move!";
    scoreDisplay.textContent = `You: 0 | CPU: 0`;
    roundCount.textContent = `Round 1 of ${maxRounds}`;
    restartBtn.style.display = "none";
    icons.forEach(icon => icon.style.pointerEvents = "auto");
  }

  restartBtn.addEventListener("click", () => {
    askRounds();
  });

  icons.forEach(icon => {
    icon.addEventListener("click", () => {
      if (round > maxRounds) return;

      const playerChoice = icon.id;
      const cpuChoice = getComputerChoice();
      const result = getResult(playerChoice, cpuChoice);
      updateUI(playerChoice, cpuChoice, result);

      if (round === maxRounds) {
        endGame();
      } else {
        round++;
      }
    });
  });

  askRounds();
});
