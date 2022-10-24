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
