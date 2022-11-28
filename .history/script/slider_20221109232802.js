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
  let postionX = 0;
  sliderNext.addEventListener("click", function (e) {
    handleChangeSlide(1);
  });
  sliderPrev.addEventListener("click", function (e) {
    handleChangeSlide(-1);
  });

  function handleChangeSlide(direction) {
    if (direction === 1) {
      console.log("next");
    } else if (direction === -1) {
      console.log("previus");
    }
  }
});
