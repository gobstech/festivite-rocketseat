const toggle = document.querySelector(".toggle");
const circle = toggle.querySelector("span.circle");
const mode = document.querySelector(".mode");
console.log(toggle, circle, mode);

function handleToggle() {
  console.log("oi");
  toggle.classList.toggle("active");
  circle.classList.toggle("active");
  mode.innerText = circle.classList.contains("active") ? "Claro" : "Escuro";
}

toggle.addEventListener("click", handleToggle);
