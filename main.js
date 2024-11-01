// import AOS from "aos";
// import "aos/dist/aos.css";
// import anime from "animejs/lib/anime.es.js";

// AOS.init({
//   duration: 300,
//   easing: "ease-in-out",
//   once: true,
// });

// const arabicMenu = document.getElementById("arabic-menu");
// const englishMenu = document.getElementById("english-menu");

// document
//   .getElementById("lang-toggle-ar")
//   .addEventListener("click", function () {
//     toggleLanguage("ar");
//   });

// document
//   .getElementById("lang-toggle-en")
//   .addEventListener("click", function () {
//     toggleLanguage("en");
//   });

// function toggleLanguage(lang) {
//   if (lang == "en") {
//     englishMenu.classList.remove("hidden");
//     arabicMenu.classList.add("hidden");
//   } else {
//     arabicMenu.classList.remove("hidden");
//     englishMenu.classList.add("hidden");
//   }
// }
// Select the hamburger button and sidebar

const hamburger = document.getElementById("hamburger");
const closeButton = document.getElementById("close-button");
const sidebar = document.getElementById("sidebar");
const sideArabic = document.getElementById("sidebar-ar");

hamburger.addEventListener("click", () => {
  sidebar.classList.toggle("show");
  closeButton.classList.toggle("hidden");
  hamburger.classList.toggle("hidden");
});

closeButton.addEventListener("click", () => {
  sidebar.classList.toggle("show");
  closeButton.classList.toggle("hidden");
  hamburger.classList.toggle("hidden");
});

// document
//   .getElementById("s-lang-toggle-ar")
//   .addEventListener("click", function () {
//     toggleSideLang("ar");
//   });

// document
//   .getElementById("s-lang-toggle-en")
//   .addEventListener("click", function () {
//     toggleSideLang("en");
//   });

// function toggleSideLang(lang) {
//   if (lang === "ar") {
//     sideArabic.classList.remove("hidden");
//     sidebar.classList.add("hidden");
//   } else {
//     sideArabic.classList.add("hidden");
//     sidebar.classList.remove("hidden");
//   }
// }
function formatNumber(num) {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K"; // Format number to K
  }
  return num; // Return original number if less than 1000
}

function animateNumber() {
  anime({
    targets: "#animatedNumber",
    innerHTML: [20, 580.5], // Range from 20 to 580.5
    easing: "easeInOutQuad", // Smoother easing for gradual transition
    round: 1,
    duration: 3000, // Adjust duration as needed
    update: function (anim) {
      const currentValue = (anim.progress / 100) * (580.5 - 20) + 20; // Animate between 20 and 580.5
      document.getElementById("animatedNumber").innerHTML = formatNumber(
        currentValue * 1000
      ); // Display in "K" format
    },
  });
}

document.addEventListener("DOMContentLoaded", function () {
  animateNumber();
});
