// save current game
function saveGame() {
  localStorage.setItem("matrix", initialMatrix.join());
  localStorage.setItem("movesCounter", movesCounter);
  localStorage.setItem("timerSeconds", timerSeconds);
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
