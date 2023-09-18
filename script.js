let hamburgerIcon = document.getElementById("hamburger-icon");
let navMenu = document.getElementById("nav-menu");

hamburgerIcon.addEventListener("click", () => {
  if (navMenu.classList.contains("nav-hidden")) {
    navMenu.classList.remove("nav-hidden");
    navMenu.classList.add("nav-shown");
  } else if (navMenu.classList.contains("nav-shown")) {
    navMenu.classList.remove("nav-shown");
    navMenu.classList.add("nav-hidden");
  }
});
