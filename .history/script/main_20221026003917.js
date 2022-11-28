window.addEventListener("load", function () {
  const toggle = document.querySelector(".header-toggle");
  const menu = document.querySelector(".header-middle");
  toggle.addEventListener("click", function () {
    menu.classList.add("is-expend");
  });
});
