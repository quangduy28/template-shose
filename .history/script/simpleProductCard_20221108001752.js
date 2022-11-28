window.addEventListener("load", function () {
  const productCategoryItem = document.querySelectorAll(
    ".product-category-item"
  );
  productCategoryItem = document
    .querySelectorAll(".product-category-item")
    .forEach((item) =>
      item.addEventListener("click", function (e) {
        console.log(e.target);
      })
    );
  // productCategoryItem.forEach((item) =>
  //   item.addEventListener("click", handleClickCategory)
  // );
  // function handleClickCategory(e) {
  //   console.log(e.target);
  // }
});
