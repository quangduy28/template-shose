window.addEventListener("load", function () {
  // menu
  const toggle = document.querySelector(".header-toggle");
  const menu = document.querySelector(".header-middle");
  const isExpand = "is-expand";
  toggle.addEventListener("click", function () {
    menu.classList.add(isExpand);
  });
  document.addEventListener("click", function (e) {
    if (!menu.contains(e.target) && !e.target.matches(".header-toggle")) {
      menu.classList.remove(isExpand);
    }
  });

  // product filter
  const productLeft = document.querySelector(".product-left");
  const productFilter = document.querySelector(".product-filter");
  const container = document.querySelector("#container");
  const isShow = "is-show";
  container.addEventListener("click", handleToggleMenu);
  function handleToggleMenu(e) {
    console.log("heloo");
    e.target.classList.toggle("fa-xmark");
    e.target.classList.toggle("fa-filter");
    productLeft.classList.toggle(isShow);
  }
  productFilter.addEventListener("click", handleToggleOutMenu);
  function handleToggleOutMenu(e) {
    if (
      !productLeft.contains(e.target) &&
      !e.target.matches(".product-filter")
    ) {
      productLeft.classList.remove(isShow);
      productFilter.classList.remove("fa-xmark");
      productFilter.classList.add("fa-filter");
    }
  }
});
