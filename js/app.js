// app.js
var exampleModal = document.getElementById("exampleModal");
var modalTitle = exampleModal.querySelector(".modal-title");
var modalBodyInput = exampleModal.querySelector(".modal-body");

// Complete logic of game inside this function
const game = () => {
  // Function to
  const playGame = () => {
    const rockBtn = document.querySelector(".rock");
    const paperBtn = document.querySelector(".paper");
    const scissorBtn = document.querySelector(".scissor");
    const playerOptions = [rockBtn, paperBtn, scissorBtn];

    // Function to start playing game
    playerOptions.forEach((option) => {
      option.addEventListener("click", function () {
        const choiceNumber = Math.floor(Math.random() * 3) + 1;

        // Function to check who wins
        winner(this.value, choiceNumber);
        // gameOver(playerOptions,movesLeft);
      });
    });
  };

  // Function to decide winner
  const winner = (player, computer) => {
    // const result = document.querySelector(".result");
    let cosas = ["tijeras", "piedra", "papel"];
    // result.textContent = "Computer Won";
    // result.textContent = "Player Won";

    let resultados = [
      // tijeras (1)
      [0, -1, 1],
      // piedra (2)
      [1, 0, -1],
      // papel (3)
      [-1, 1, 0],
    ];

    let resultado = resultados[player - 1][computer - 1];

    if (resultado == 1) {
      modalTitle.textContent = "¡Ganaste!";
      modalBodyInput.textContent = "La pc saco: " + cosas[computer - 1];
    } else if (resultado == 0) {
      modalTitle.textContent = "¡Empate!";
      modalBodyInput.textContent = "La pc saco: " + cosas[computer - 1];
    } else {
      modalTitle.textContent = "¡Perdiste!";
      modalBodyInput.textContent =
        "¿Vuelves a jugar? La pc saco:  " + cosas[computer - 1];
    }
  };

  // Calling playGame function inside game
  playGame();
};

// Calling the game function
game();

//////////////////////////////////////////////
