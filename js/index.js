const carousel = document.querySelector(".slider-mini__line");
const firstElem = document.querySelector(".slider-mini__item");
const arrowIcons = document.querySelectorAll(".slider-mini i");

let firstElemWidth = firstElem.clientWidth + 8;

arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    if (icon.id == "left") {
      carousel.scrollLeft -= firstElemWidth;
    } else {
      carousel.scrollLeft += firstElemWidth;
    }
  });
});

const dragging = (e) => {
  carousel.scrollLeft = e.pageX;
};

carousel.addEventListener("mousemove", dragging);

////////////////////////////////////

const sliderLine = document.querySelector(".slider__line");
const dots = document.querySelectorAll(".slider__dot");

let position = 0;
let dotIndex = 0;

const nextSlide = () => {
  if (position < (dots.length - 1) * 1338) {
    position += 1338;
  } else {
    position = 0;
  }
  sliderLine.style.left = -position + "px";
};

const thisSlide = (index) => {
  for (let dot of dots) {
    dot.classList.remove("active__dot");
  }

  dots[index].classList.add("active__dot");
};

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    position = 1338 * index;
    sliderLine.style.left = -position + "px";
    dotIndex = index;
    thisSlide(dotIndex);
  });
});

setInterval(() => {
  nextSlide();
}, 3000);
