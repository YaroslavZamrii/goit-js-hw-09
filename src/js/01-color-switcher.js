const CHANGE_COLOR_DELAY = 1000;
let timerId = null;

const refs = {
  startBtnEl: document.querySelector('button[data-start]'),
  stopBtnEl: document.querySelector('button[data-stop]'),
  bodyEl: document.querySelector('body'),
};

refs.startBtnEl.addEventListener('click', onStartColorSwitcher);
refs.stopBtnEl.addEventListener('click', onStopColorSwitcher);
refs.stopBtnEl.disabled = true;

function onStartColorSwitcher() {
  refs.startBtnEl.disabled = true;
  refs.stopBtnEl.disabled = false;
  timerId = setInterval(() => {
    refs.bodyEl.style.backgroundColor = getRandomHexColor();
  }, CHANGE_COLOR_DELAY);
}

function onStopColorSwitcher() {
  refs.stopBtnEl.disabled = true;
  refs.startBtnEl.disabled = false;
  clearInterval(timerId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
