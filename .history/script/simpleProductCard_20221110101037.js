function innerDetailProduct() {
  const productSingle = document.querySelector(".product-single");
  console.log(productSingle);
  const productCategoryItem = document.querySelectorAll(
    ".product-category-item"
  );
  const productName = document.querySelectorAll(".product-category-heading");
  console.log(productName);

  productCategoryItem.forEach((item) =>
    item.addEventListener("click", function (e) {
      console.log(e.target);
      const image = e.target.getAttribute("src");
      for (let i = 0; i < productName.length; i++) {}
      // const productName = e.target.textContent;
      const template = `
        <div class="modal">
        <div class="modal-overlay"></div>
        <div class="modal-content">
          <span class="modal-close">
            <i class="fa-solid fa-xmark modal-xmark"></i>
          </span>
          <div class="modal-main">
            <img src="${image}" alt="" class="modal-image" />
            <div class="modal-content">
              <span class="modal-title">${productName}</span>
              <span class="modal-price">4.500.000₫</span>
              <div class="modal-form">
                <span class="modal-size"
                  >Kích thước: <span class="modal-size-number">36.5</span>
                </span>
                <div class="modal-size-option">36.5</div>
                <div class="modal-size-option">37.5</div>
                <div class="modal-size-option">38.5</div>
              </div>
        
              <div class="modal-buy">
                <button type="submit" class="modal-add-cart modal-btn">
                  Thêm vào giỏ
                </button>
                <button type="submit" class="modal-buy-now modal-btn">
                  Mua ngay
                </button>
              </div>
        
              <ul class="modal-desc">
                <li class="modal-desc-item">Ôm sát, vừa vặn như đi tất</li>
                <li class="modal-desc-item">Có dây giày</li>
                <li class="modal-desc-item">
                  Thân giày bằng vải dệt adidas Primeknit
                </li>
                <li class="modal-desc-item">Cảm giác đàn hồi</li>
                <li class="modal-desc-item">Lớp lót bằng vải dệt</li>
                <li class="modal-desc-item">
                  Đế giữa Boost và kẹp gót giày bên ngoài bằng TPU
                </li>
                <li class="modal-desc-item">Trọng lượng: 310 g (size UK 8.5)</li>
                <li class="modal-desc-item">
                  Chênh lệch độ cao đế giữa: 10 mm (gót giày 22 mm / mũi giày 12
                  mm)
                </li>
                <li class="modal-desc-item">
                  Đế ngoài Stretchweb làm từ cao su Continental™ Rubber
                </li>
              </ul>
            </div>
          </div>
        </div>
        </div>
        `;
      productSingle.insertAdjacentHTML("afterbegin", template);
    })
  );

  productSingle.addEventListener("click", function (e) {
    if (e.target.matches(".modal-xmark")) {
      // console.log(e.target);
      const modal = e.target.parentNode.parentNode.parentNode;
      modal.parentNode.removeChild(modal);
    }
  });
}
