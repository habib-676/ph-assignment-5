function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}

document.getElementById("theme-btn").addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = getRandomColor();
});
