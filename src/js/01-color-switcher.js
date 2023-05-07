const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const bodyUrl = document.guerySelector('body');

dataStartRef.addEventListener('click', onStart);
dataStopRef.addEventListener('click', onStop);

function onStart() {
  timerId = setInterval(getBgColor, 1000);

  dataStopRef.toggleAttribute('disabled');
}

function onStop() {
  clearInterval(timerId);

  dataStopRef.removeAttribute('disabled');
}
function getBgColor() {
  bodyRef.style.backgroundColor = getRandomHexColor();
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
