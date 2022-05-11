const daysE1 = document.getElementById("days");
const hoursE1 = document.getElementById("hours");
const minutesE1 = document.getElementById("minutes");
const secondsE1 = document.getElementById("seconds");

const newYears = "1 Jan 2023";

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();
  const difference = newYearsDate - currentDate;
  const totalSeconds = difference / 1000;
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysE1.innerHTML = days;
  hoursE1.innerHTML = hours;
  minutesE1.innerHTML = minutes;
  secondsE1.innerHTML = seconds;
}
countdown();
setInterval(countdown, 1000);
