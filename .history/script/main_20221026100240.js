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
  const iconFilter = document.querySelector(".fa-filter");
  const iconXmark = document.querySelector(".fa-xmark");

  productFilter.addEventListener("click", handleToggleMenu);
  function handleToggleMenu() {
    productLeft.classList.toggle(isExpand);
    // productLeft.classList.add(iconXmark);
    // productLeft.classList.remove(iconFilter);
  }

  window.addEventListener("click", function (e) {
    if (
      !productLeft.contains(e.target) &&
      !e.target.matches(".product-filter")
    ) {
      productLeft.classList.remove(isExpand);
    }
  });
});
