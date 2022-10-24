let initialMatrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

let wrapper = document.querySelector(".wrapper");

let movesCounter = 0;

let movesItem = document.querySelector(".moves-amount");

let newGameButton = document.querySelector(".new-game-button");

let timerData = document.querySelector(".timer-data");

let timerSeconds = 0;

// button to shuffle matrix

newGameButton.addEventListener("click", function (e) {
  if (confirm("Are you sure? Your progress will be lost!")) {
    initialMatrix = shuffleMatrix(initialMatrix);
    drawMatrix(initialMatrix);
    movesCounter = 0;
    movesItem.textContent = movesCounter;
    timerSeconds = 0;
    saveGame();
  }
});

// load saved game

(function () {
  if (hasPreviousSave()) {
    initialMatrix = localStorage
      .getItem("matrix")
      .split(",")
      .reduce(
        (acc, i) => {
          if (acc[acc.length - 1].length >= initialMatrix.length) {
            acc.push([]);
          }
          acc[acc.length - 1].push(i);
          return acc;
        },
        [[]]
      );

    movesCounter = parseInt(localStorage.getItem("movesCounter"));
    movesItem.textContent = movesCounter;
    timerSeconds = parseInt(localStorage.getItem("timerSeconds"));
  } else {
    initialMatrix = shuffleMatrix(initialMatrix);
  }
})();

// initial formation

drawMatrix(initialMatrix);

// listener on clicks

wrapper.addEventListener("click", function (e) {
  if (!e.target.classList.contains("tile")) {
    return false;
  }

  tileClickHandler(e.target);
});
