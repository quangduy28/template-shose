window.addEventListener("load", function () {
  const productCategoryItem = document.querySelectorAll(
    ".product-right .product-category-list .product-category-item"
  );
  productCategoryItem.forEach((item) =>
    item.addEventListener("click", handleClickCategory)
  );
  function handleClickCategory(e) {
    console.log(e.target);
  }
});
