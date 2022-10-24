// create header
let headerElement = document.createElement("div");
headerElement.classList.add("container");
headerElement.classList.add("header");
let h1Element = document.createElement("h1");
h1Element.textContent = "Gem Puzzle";

document.body.append(headerElement);
headerElement.append(h1Element);

// create controls block with buttons
let controlsElement = document.createElement("div");
controlsElement.classList.add("container");
controlsElement.classList.add("controls");

let newGameButtonElement = document.createElement("button");
newGameButtonElement.classList.add("button");
newGameButtonElement.classList.add("new-game-button");
newGameButtonElement.textContent = "New game";

document.body.append(controlsElement);
controlsElement.append(newGameButtonElement);

// create wrapper for matrix
let wrapperElement = document.createElement("div");
wrapperElement.classList.add("container");
wrapperElement.classList.add("wrapper");

document.body.append(wrapperElement);

// create block for stats

// moves counter
let statsElement = document.createElement("div");
statsElement.classList.add("container");
statsElement.classList.add("statistics");

let movesElement = document.createElement("div");
movesElement.classList.add("moves");
movesElement.textContent = "Moves:";

let movesSpan = document.createElement("span");
movesSpan.classList.add("moves-amount");
movesSpan.textContent = "0";

document.body.append(statsElement);
statsElement.append(movesElement);
movesElement.append(movesSpan);

// timer
let timerElement = document.createElement("div");
timerElement.classList.add("timer");
timerElement.textContent = "Time:";

let timerSpan = document.createElement("span");
timerSpan.classList.add("timer-data");
timerSpan.textContent = "0:0:0";

statsElement.append(timerElement);
timerElement.append(timerSpan);
