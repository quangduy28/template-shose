window.addEventListener("load", function () {
  const slider = document.querySelector(".slider");
  const sliderMain = document.querySelector(".slider-main");
  const sliderItems = document.querySelectorAll(".slider-item");
  const sliderPrev = document.querySelector(".slider-prev");
  const sliderNext = document.querySelector(".slider-next");
  const sliderDotItems = document.querySelectorAll(".slider-dot-item");
  const sliderWidth = sliderItems[0].offsetWidth;
  const slidersLength = sliderItems.length;
  console.log(slidersLength);
  let postionX = 0;
  let index = 0;

  sliderNext.addEventListener("click", function (e) {
    handleChangeSlide(1);
  });
  sliderPrev.addEventListener("click", function (e) {
    handleChangeSlide(-1);
  });

  function handleChangeSlide(direction) {
    console.log(index);
    index++;
    if (direction === 1) {
      if (index >= slidersLength - 1) {
        // index = slidersLength - 1;
        return;
      }
      postionX = postionX - sliderWidth;
      sliderMain.style = `transform: translateX(${postionX}px)`;
      console.log("next");
    } else if (direction === -1) {
      postionX = postionX + sliderWidth;
      sliderMain.style = `transform: translateX(${postionX}px)`;
      console.log("previus");
    }
  }
});
