window.addEventListener("load", function () {
  const productCategoryItem = document.querySelectorAll(
    ".product-category-item"
  );
  // [...productCategoryItem].forEach((item) =>
  //   item.addEventListener("click", handleClickCategory)
  // );
  // function handleClickCategory(e) {
  //   console.log(e.target);
  // }
  for (let i = 0; i < productCategoryItem.length; i++) {
    productCategoryItem.addEventListener("click", function (e) {
      console.log(e.target);
    });
  }
});
