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
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  duration: 800, // Animation duration in milliseconds
  easing: "ease-in-out", // Easing function
  once: true, // Whether animation should happen only once
});

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
    innerHTML: [100, 580500],
    easing: "linear",
    round: 1,
    duration: 3000,
    update: function (anim) {
      const currentValue = Math.round(
        (anim.progress / 100) * (580500 - 100) + 100
      );
      document.getElementById("animatedNumber").innerHTML =
        formatNumber(currentValue);
    },
  });
}

document.addEventListener("DOMContentLoaded", function () {
  animateNumber();
});
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("show");
    }, index * 200); // delay by 200ms for each card
  });
});
