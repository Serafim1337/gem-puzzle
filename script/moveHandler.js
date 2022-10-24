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

// add another move

function addMoves() {
  movesCounter++;
  movesItem.textContent = movesCounter;
}
