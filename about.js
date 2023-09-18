// Functionality for the About page

let ianPic = document.getElementById("ian-pic");
let jimPic = document.getElementById("jim-pic");
let rodPic = document.getElementById("rod-pic");
let adamPic = document.getElementById("adam-pic");

let bioPics = [ianPic, jimPic, rodPic, adamPic];

let bioIan = document.getElementById("bio-ian");
let bioJim = document.getElementById("bio-jim");
let bioRod = document.getElementById("bio-rod");
let bioAdam = document.getElementById("bio-adam");

let ianXIcon = document.getElementById("ian-x-icon");
let jimXIcon = document.getElementById("jim-x-icon");
let rodXIcon = document.getElementById("rod-x-icon");
let adamXIcon = document.getElementById("adam-x-icon");

ianPic.addEventListener("click", (e) => {
  for (let i = 0; i < bioPics.length; i++) {
    if (bioPics[i] !== ianPic) {
      bioPics[i].classList.remove("shown");
      bioPics[i].classList.add("hidden");
    }
    if (bioIan.classList.contains("bio-hidden")) {
      console.log("clicked");
      bioIan.classList.remove("bio-hidden");
      bioIan.classList.add("bio-shown");
    }
  }
});

jimPic.addEventListener("click", () => {});

rodPic.addEventListener("click", () => {});

adamPic.addEventListener("click", () => {
  console.log("adam clicked");
});

ianXIcon.addEventListener("click", () => {
  for (let i = 0; i < bioPics.length; i++) {
    if (bioPics[i] !== ianPic) {
      bioPics[i].classList.remove("hidden");
      bioPics[i].classList.add("shown");
    }
    bioIan.classList.remove("bio-shown");
    bioIan.classList.add("bio-hidden");
  }
});
