window.addEventListener("load", function () {
  const toggle = document.querySelector(".header-toggle");
  const menu = document.querySelector(".header-middle");
  const isExpand = "is-expand";
  toggle.addEventListener("click", function () {
    menu.classList.add(isExpand);
  });
  window.addEventListener("click", function (e) {
    if (!menu.contains(e.target) && !e.target.matches(".header-toggle")) {
      menu.classList.remove(isExpand);
    }
  });

  const productLeft = document.querySelector(".product-left");
  const productFilter = document.querySelector(".product-filter");
  productFilter.addEventListener("click", function () {
    console.log("hell");
    productLeft.classList.add(isExpand);
  });
  window.addEventListener("click", function (e) {
    if (
      !productLeft.contains(e.target) &&
      !e.target.matches(".product-filter")
    ) {
      menu.classList.remove(isExpand);
    }
  });
});
