function innerDetailProduct() {
  const productCategoryList = document.querySelector(".product-category-list");
  const productCategoryItem = document.querySelectorAll(
    ".product-category-item"
  );
  const productRight = document.querySelector(".product-right");

  console.log(productCategoryItem);
  // productCategoryItem.forEach((item) =>
  //   item.addEventListener("click", function (e) {
  //     console.log(e.target);
  //     productRight.insertAdjacentHTML("afterbegin", template);
  //   })
  // );
  const template = `
    <div class="modal">
    <div class="modal-overlay"></div>
    <div class="modal-content">
      <span class="modal-close">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </span>
      <div class="modal-main">
        <img src="./images/shoes-1.png" alt="" class="modal-image" />
        <div class="modal-content">
          <span class="modal-title">GIÀY Ultraboost 4.0 DNA</span>
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

  // productCategoryList.innerHTML = template;
}
