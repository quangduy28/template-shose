function showSlider() {
  const slider = document.querySelector(".slider");
  const sliderMain = document.querySelector(".slider-main");
  const sliderItems = document.querySelectorAll(".slider-item");
  const sliderPrev = document.querySelector(".slider-prev");
  const sliderNext = document.querySelector(".slider-next");
  const sliderWidth = sliderItems[0].offsetWidth;
  const slidersLength = sliderItems.length;
  // console.log(slidersLength);
  let postionX = 0;
  let index = 0;
  sliderNext.addEventListener("click", function (e) {
    console.log(sliderNext);
    handleChangeSlide(1);
  });
  sliderPrev.addEventListener("click", function (e) {
    console.log(sliderPrev);
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

// thay đổi chuyển động***
let index = 0;

let n = 0;
function imgAuto() {
  const sliderMain = document.querySelector(".slider-main");
  const sliderItems = document.querySelectorAll(".slider-item");
  const sliderWidth = sliderItems[0].offsetWidth;
  n = n + 1;
  if (n <= 3) {
    index = index + sliderWidth; // or index = index + silderWidth
  } else {
    index = index - sliderWidth;
    if (n > 5) {
      n = n * 0;
    }
  }
  const vt = 0 - index;
  sliderMain.style = `transform: translateX(${vt}px)`;
  // console.log(vt);
}
setInterval(imgAuto, 1500);
showSlider();
