document.addEventListener("DOMContentLoaded", function () {
  const startButton = document.getElementById("startButton");
  const gameContainer = document.getElementById("gameContainer");
  const computerGuessSpan = document.getElementById("computerGuess");
  const tooHighButton = document.getElementById("tooHigh");
  const tooLowButton = document.getElementById("tooLow");
  const correctButton = document.getElementById("correct");

  let minRange = 0;
  let maxRange = 100;
  let computerGuess;

  startButton.addEventListener("click", function () {
    minRange = 0;
    maxRange = 100;
    computerGuess =
      Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;
    gameContainer.style.display = "block";
    computerGuessSpan.textContent = computerGuess;
  });

  tooHighButton.addEventListener("click", function () {
    maxRange = computerGuess - 1;
    computerGuess =
      Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;
    computerGuessSpan.textContent = computerGuess;
  });

  tooLowButton.addEventListener("click", function () {
    minRange = computerGuess + 1;
    computerGuess =
      Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;
    computerGuessSpan.textContent = computerGuess;
  });

  correctButton.addEventListener("click", function () {
    alert("Godt klaret, elskede!");
  });
});
