// get the date
const todaysDate = new Date();
let weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

document.getElementById("date-name").innerText = weekDays[todaysDate.getDay()];

// get the today's date
const day = todaysDate.getDate();
const monthIndex = todaysDate.getMonth();
const year = todaysDate.getFullYear();

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const monthName = monthNames[monthIndex];
const currentDate = `${monthName} ${day} ${year}`;
document.getElementById("todays-date").innerText = currentDate;

// ----------------------------------------------------
const activityContainer = document.getElementById("activity-container");

const buttons = document.getElementsByClassName("card-btn");
for (let button of buttons) {
  button.addEventListener("click", function () {
    alert("Board Updated Successfully");
    button.disabled = true;

    let activeTask = parseInt(document.getElementById("active-task").innerText);
    document.getElementById("active-task").innerText = activeTask - 1;

    let completedTask = parseInt(
      document.getElementById("completed-task").innerText
    );
    document.getElementById("completed-task").innerText = completedTask + 1;

    // update activity
    let currentTime = new Date().toLocaleTimeString();

    const activityCard = button.closest(".activity-card");
    const h3Text = activityCard.querySelector("h3").innerText;

    let div = document.createElement("div");
    div.style.cssText =
      "background-color: #F4F7FF; padding: 8px; border-radius:12px ";
    div.innerHTML = `
    <p>You have completed the task ${h3Text} at ${currentTime}</p>
    `;

    activityContainer.appendChild(div);
    // last alert
    if (activeTask - 1 === 0) {
      alert("Congrats!! You have completed all the current tasks!");
    }
  });
}
