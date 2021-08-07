const daysEl = document.getElementById('day-counter');
const hoursEl = document.getElementById('hours-counter');
const minsEl = document.getElementById('mins-counter');
const secondsEl = document.getElementById('seconds-counter');

const newYears = '25 july 2021';

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (currentDate - newYearsDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600 )  % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds ) % 60;

    daysEl.innerHTML = Math.abs(days);
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 0 ? `${Math.abs(time)}` : time;
}

countdown();

setInterval(countdown, 1000);
