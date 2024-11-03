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

function formatNumber(num) {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  }
  return num;
}

function animateNumber() {
  anime({
    targets: "#animatedNumber",
    innerHTML: [20, 580.5],
    easing: "easeInOutQuad",
    round: 1,
    duration: 3000,
    update: function (anim) {
      const currentValue = (anim.progress / 100) * (580.5 - 20) + 20;
      document.getElementById("animatedNumber").innerHTML = formatNumber(
        currentValue * 1000
      );
    },
  });
}

document.addEventListener("DOMContentLoaded", function () {
  animateNumber();
});
