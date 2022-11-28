function showSlider() {
  const slider = document.querySelector(".slider");
  const sliderMain = document.querySelector(".slider-main");
  const sliderItems = document.querySelectorAll(".slider-item");
  const sliderPrev = document.querySelector(".slider-prev");
  const sliderNext = document.querySelector(".slider-next");
  const sliderWidth = sliderItems[0].offsetWidth;
  const slidersLength = sliderItems.length;
  console.log(slidersLength);
  let postionX = 0;
  let index = 0;
  console.log(sliderNext);
  sliderNext.addEventListener("click", function (e) {
    handleChangeSlide(1);
  });
  sliderPrev.addEventListener("click", function (e) {
    handleChangeSlide(-1);
  });

  function handleChangeSlide(direction) {
    console.log(index);
    if (direction === 1) {
      if (index >= slidersLength - 1) {
        index = slidersLength - 1;
        return;
      }
      postionX = postionX - sliderWidth;
      sliderMain.style = `transform: translateX(${postionX}px)`;
      index++;
    } else if (direction === -1) {
      if (index <= 0) {
        index = 0;
        return;
      }
      postionX = postionX + sliderWidth;
      sliderMain.style = `transform: translateX(${postionX}px)`;
      index--;
    }
  }
}
