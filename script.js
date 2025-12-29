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

// nav
const menuBtn = document.querySelector(".menu-bar");
const navbar = document.querySelector(".navbar");

// navbar
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navbar.classList.toggle("active");
  
  const menuIcon = menuBtn.querySelector("i");
  if (menuBtn.classList.contains("active")) {
    menuIcon.classList.replace("ri-menu-line", "ri-close-line");
  } else {
    menuIcon.classList.replace("ri-close-line", "ri-menu-line");
  }
});

function closeNavbar() {
  menuBtn.classList.remove("active");
  navbar.classList.remove("active");
  const menuIcon = menuBtn.querySelector("i");
  menuIcon.classList.replace("ri-close-line", "ri-menu-line");
}

navbar.addEventListener("click", (e) => {
  if (e.target.localName == "a") {
    closeNavbar();
  }
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeNavbar();
  }
});
