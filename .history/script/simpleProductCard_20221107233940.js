window.addEventListener("load", function () {
  const productCategoryItem = document.querySelectorAll(
    ".product-category-item"
  );
  const productCategoryList = productCategoryItem.parentNode;
  productCategoryList.forEach((item) =>
    item.addEventListener("click", handleClickCategory)
  );
  function handleClickCategory(e) {
    console.log(e.target);
  }
});
