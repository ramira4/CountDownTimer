const daysl = document.getElementById("days");
const hoursl= document.getElementById("hours");
const minutesl = document.getElementById("minutes");
const secondsl = document.getElementById("seconds");

const newYears = 'January 1 2022';

function countdown(){
    const newYearDate = new Date(newYears);
    const currentDate = new Date();

    const time = new Date(newYearDate - currentDate)/ 1000;

    const days = Math.floor(time/ 3600/24);
    const hours = Math.floor(time/ 3600)%24;
    const mins = Math.floor(time/ 60)%60;
    const seconds = Math.floor(time) %60;

    daysl.innerHTML = days;
    hoursl.innerHTML = formatTime(hours);
    minutesl.innerHTML = formatTime(mins);
    secondsl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
countdown();
setInterval(countdown, 1000);
