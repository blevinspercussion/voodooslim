// Functionality for the About page

let ianPic = document.getElementById("ian-pic");
let jimPic = document.getElementById("jim-pic");
let rodPic = document.getElementById("rod-pic");
let adamPic = document.getElementById("adam-pic");

let hamburgerIcon = document.getElementById("hamburger-icon");

let bioPics = [ianPic, jimPic, rodPic, adamPic];

ianPic.addEventListener("click", (e) => {
  for (let i = 0; i < bioPics.length; i++) {
    if (bioPics[i] !== ianPic) {
      bioPics[i].classList.remove("shown");
      bioPics[i].classList.add("hidden");
    }
  }
});

jimPic.addEventListener("click", () => {});

rodPic.addEventListener("click", () => {});

adamPic.addEventListener("click", () => {
  console.log("adam clicked");
});
