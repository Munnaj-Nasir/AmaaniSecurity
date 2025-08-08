const slideSets = document.querySelectorAll(".slide-set");
let current = 0;

function showNextSet() {
  slideSets[current].classList.remove("active");
  current = (current + 1) % slideSets.length;
  slideSets[current].classList.add("active");
}

setInterval(showNextSet, 5000);