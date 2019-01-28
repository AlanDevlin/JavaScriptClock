//Function that will display the current time in the html
function displayTime() {
  var today = new Date();
  const HOURS = today.getHours();
  const MINUTES = checkTime(today.getMinutes());
  const SECONDS = checkTime(today.getSeconds());
  const CURRENT_TIME = HOURS + ":" + MINUTES + ":" + SECONDS;
  document.getElementById("currentTime").innerHTML = CURRENT_TIME;
  let time = setTimeout(displayTime, 500);
}

//function that checks the seconds from CURRENT_TIME and if less than 10 precede it with a zero
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function displayDate(day) {
  var todayDate = new Date();
  const WEEK_ARRAY = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday", "Sunday"];
  const MONTH_ARRAY = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const DAY = WEEK_ARRAY[todayDate.getDay()];
  const DATE = todayDate.getDate();
  const MONTH = MONTH_ARRAY[todayDate.getMonth()];
  const YEAR = todayDate.getFullYear();
  const CURRENT_DATE = DAY + ", " + DATE + " " + MONTH + " " + YEAR;
  document.getElementById("currentDay").innerHTML = CURRENT_DATE;
}

displayTime();
displayDate();
