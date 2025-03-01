// get the date
const todaysDate = new Date();
let weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

document.getElementById("date-name").innerText = weekDays[todaysDate.getDay()];
document.getElementById("todays-date").innerText =
  todaysDate.toLocaleDateString();

// ----------------------------------------------------

// tasks

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

    // last alert
    if (activeTask - 1 === 0) {
      alert("Congrats!! You have completed all the current tasks!");
    }
  });
}
