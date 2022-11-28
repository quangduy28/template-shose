window.addEventListener("load", function () {
  // const productCategoryItem = document.querySelectorAll(
  //   ".product-category-item"
  // );
  const productRight = document.querySelector(".product-right");
  const productCategoryItem = productRight.childNodes.childNodes;
  productCategoryItem.addEventListener("click", function (e) {
    console.log(e.target);
  });
});
