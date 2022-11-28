window.addEventListener("load", function () {
  const toggle = document.querySelector(".header-toggle");
  const menu = document.querySelector(".header-middle");
      transition: all 0.25s ease;
      const isExpand =""
  toggle.addEventListener("click", function () {
    menu.classList.add("is-expand");
  });
  window.addEventListener("click", function (e) {
    if (!menu.contains(e.target) && !e.target.matches(".header-toggle")) {
      menu.classList.remove("is-expand");
    }
  });
});
