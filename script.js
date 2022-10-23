let initialMatrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

let wrapper = document.querySelector(".wrapper");

let movesCounter = 0;
let movesItem = document.querySelector(".moves-amount");

let shuffleButton = document.querySelector(".shuffle-button");

// button to shuffle matrix

shuffleButton.addEventListener("click", function (e) {
  if (confirm("Are you sure? Your progress will be lost!")) {
    initialMatrix = shuffleMatrix(initialMatrix);
    drawMatrix(initialMatrix);
    movesCounter = 0;
    movesItem.textContent = movesCounter;
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
  } else {
    initialMatrix = shuffleMatrix(initialMatrix);
  }
})();

// shuffling matrix
function shuffleMatrix(matrix) {
  const oneDimArr = matrix.reduce((a, b) => [...a, ...b], []);
  const shuffledArr = shuffleArray(oneDimArr); // this is your existing function
  const shuffledMatrix = shuffledArr.reduce(
    (acc, i) => {
      if (acc[acc.length - 1].length >= initialMatrix.length) {
        acc.push([]);
      }
      acc[acc.length - 1].push(i);
      return acc;
    },
    [[]]
  );
  return shuffledMatrix;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// initial formation

function drawMatrix(matrix) {
  if (wrapper.firstElementChild) {
    wrapper.innerHTML = "";
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] == 16) {
        let tile = document.createElement("div");
        tile.dataset.id = matrix[i][j];
        tile.classList.add("empty");

        wrapper.append(tile);
      } else {
        let tile = document.createElement("div");
        tile.dataset.id = matrix[i][j];
        tile.classList.add("tile");
        tile.textContent = matrix[i][j];
        wrapper.append(tile);
      }
    }
  }

  checkOnWin(matrix);
}

drawMatrix(initialMatrix);

// listener on clicks

wrapper.addEventListener("click", function (e) {
  if (!e.target.classList.contains("tile")) {
    return false;
  }

  tileClickHandler(e.target);
});

// on tile click function
function tileClickHandler(currentTile) {
  let matrix = initialMatrix;
  let tileValue = currentTile.dataset.id;
  analyzeMatrix(matrix, tileValue);
}

// check if empty spot is near
function analyzeMatrix(matrix, tileValue) {
  let emptyTile = 16;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] == tileValue) {
        // if empty spot is found near, then call move tile function
        if (matrix[i][j + 1] == emptyTile) {
          // console.log("right");
          initialMatrix = moveTile(matrix, i, j, i, j + 1);
          drawMatrix(initialMatrix);
          break;
        }
        if (matrix[i][j - 1] == emptyTile) {
          // console.log("left");
          initialMatrix = moveTile(matrix, i, j, i, j - 1);
          drawMatrix(initialMatrix);
          break;
        }

        if (i - 1 >= 0 && matrix[i - 1][j] == emptyTile) {
          // console.log("up");
          initialMatrix = moveTile(matrix, i, j, i - 1, j);
          drawMatrix(initialMatrix);
          break;
        }

        if (i + 1 <= matrix.length - 1 && matrix[i + 1][j] == emptyTile) {
          // console.log("down");
          initialMatrix = moveTile(matrix, i, j, i + 1, j);
          drawMatrix(initialMatrix);
          return;
        }

        break;
      }
    }
  }
}

// move tile on an empty spot
function moveTile(matrix, tileI, tileJ, emptyI, emptyJ) {
  let tile = matrix[tileI][tileJ];
  let empty = matrix[emptyI][emptyJ];

  matrix[emptyI][emptyJ] = tile;
  matrix[tileI][tileJ] = empty;

  addMoves();

  saveGame();

  return matrix;
}

// check if player won (sorted matrix)

function checkOnWin(matrix) {
  let winner = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ];
  let isWon = false;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] != winner[i][j]) {
        return isWon;
      }
      isWon = true;
    }
  }
  return isWon;
}

// add another move

function addMoves() {
  movesCounter++;
  movesItem.textContent = movesCounter;
}

function saveGame() {
  localStorage.setItem("matrix", initialMatrix.join());
  localStorage.setItem("movesCounter", movesCounter);
}

// if local storage has saved data

function hasPreviousSave() {
  if (
    localStorage.getItem("matrix") != null &&
    localStorage.getItem("movesCounter") != null
  ) {
    return true;
  } else {
    return false;
  }
}
