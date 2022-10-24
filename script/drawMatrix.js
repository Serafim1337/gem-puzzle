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
