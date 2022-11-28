window.addEventListener("load", function () {
  const productCategoryItem = document.querySelectorAll(
    ".product-category-item"
  );
  productCategoryItem.forEach((item) =>
    item.addEventListener("click", function (e) {})
  );
  const productRight = document.querySelector(".product-right");
  const container = productRight.parentNode.parentNode.parentNode.parentNode;
  container.addEventListener("click", function (e) {
    console.log(e.target);
  });
});
