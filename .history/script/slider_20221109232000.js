window.addEventListener("load", function () {
  const slider = document.querySelector(".slider");
  const sliderMain = document.querySelector(".slider-main");
  const sliderItems = document.querySelectorAll(".slider-item");
  const sliderPrev = document.querySelector(".slider-prev");
  const sliderNext = document.querySelector(".slider-next");
  const sliderDotItems = document.querySelectorAll(".slider-dot-item");
  const sliderWidth = sliderItems[0].offsetWidth;
  console.log(sliderWidth);
  const slidersLengt = sliderItems.length;
});
