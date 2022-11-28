window.addEventListener("load", function () {
  const productCategoryItem = document.querySelectorAll(
    ".product-category-item"
  );
  productCategoryItem.forEach((item) =>
    item.addEventListener("click", function (e) {
      console.log(e.target);
    })
  );
});
