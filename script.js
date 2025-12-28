const btn = document.querySelector(".mode-btn");
const img = document.querySelector(".logo-img");
const icon = document.querySelector(".mode-btn i");

btn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    img.src = "image/logo-dark.svg";
  } else {
    img.src = "image/logo.svg";
  }

  if (document.body.classList.contains("dark-mode")) {
    icon.classList.replace("ri-moon-clear-line", "ri-sun-line");
  } else {
    icon.classList.replace("ri-sun-line", "ri-moon-clear-line");
  }
});
