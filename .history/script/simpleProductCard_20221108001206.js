window.addEventListener("load", function () {
  const productCategoryItem = document.querySelectorAll(
    ".product-category-item"
  );
  const productRight = document.querySelector(".product-right");
  productRight.addEventListener("click", function (e) {
    console.log(e.target);
  });

  productCategoryItem.forEach((item) =>
    item.addEventListener("click", handleClickCategory)
  );
  function handleClickCategory(e) {
    console.log(e.target);
  }
});
