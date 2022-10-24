// timer function

let timer = setInterval(function () {
  let seconds = timerSeconds % 60;
  let minutes = (timerSeconds / 60) % 60;
  let hour = (timerSeconds / 60 / 60) % 60;

  let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;

  timerData.innerHTML = strTimer;

  timerSeconds++;
}, 1000);
