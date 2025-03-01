// get the date
const todaysDate = new Date();
let weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

document.getElementById("date-name").innerText = weekDays[todaysDate.getDay()];
document.getElementById("todays-date").innerText =
  todaysDate.toLocaleDateString();

// ----------------------------------------------------
