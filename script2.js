let milliseconds = 0, seconds = 0, minutes = 0;
let timer;

const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');
const lapButton = document.getElementById('lap');

const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const millisecondsElement = document.getElementById('milliseconds');
const lapTimesElement = document.getElementById('lapTimes');

function updateTimer() {
  milliseconds++;
  if (milliseconds >= 100) {
    milliseconds = 0;
    seconds++;
  }
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
  }

  minutesElement.textContent = minutes < 10 ? '0' + minutes : minutes;
  secondsElement.textContent = seconds < 10 ? '0' + seconds : seconds;
  millisecondsElement.textContent = milliseconds < 10 ? '0' + milliseconds : milliseconds;
}

function startTimer() {
  if (!timer) {
    timer = setInterval(updateTimer, 10); // Update every 10ms
  }
}

function pauseTimer() {
  clearInterval(timer);
  timer = null;
}

function resetTimer() {
  pauseTimer();
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  minutesElement.textContent = '00';
  secondsElement.textContent = '00';
  millisecondsElement.textContent = '00';
  lapTimesElement.innerHTML = ''; // Clear laps
}

function lapTime() {
  const lapItem = document.createElement('li');
  lapItem.textContent = `Lap: ${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}:${milliseconds < 10 ? '0' + milliseconds : milliseconds}`;
  lapTimesElement.appendChild(lapItem);
}

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);
lapButton.addEventListener('click', lapTime);
