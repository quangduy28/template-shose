function innerPage() {
  // createProduct()
  // function createProduct() {
  //     if(localStorage.getItem('product5') === null) {
  //         let product = [
  //             { image: "./images/img/nike01.jpg" , price: "3000000",
  //               name: "Nike Air Max TW"
  //             },
  //             { image: "./images/img/nike02.jpg" , price: "4000000",
  //               name: "Nike Air Max Flyknit Racer"
  //             },
  //             { image: "./images/img/nike03.jpg" , price: "2500000",
  //               name: "Nike Blazer Mid 02"
  //             },
  //             { image: "./images/img/nike04.jpg" , price: "3250000",
  //              name: "Nike Max Flyknit"
  //             },
  //             { image: "./images/img/nike05.jpg" , price: "4000000",
  //              name: "Nike Premium"
  //             },
  //             { image: "./images/img/nike06.jpg" , price: "3000000",
  //               name: "Nike Zoom Fly 5"
  //             },
  //             { image: "./images/img/nike07.jpg" , price: "4000000",
  //               name: "Nike Air Max Flyknit Racer 02"
  //             },
  //             { image: "./images/img/nike08.jpg" , price: "2500000",
  //               name: "Nike Blazer Mid 03"
  //             },
  //             { image: "./images/img/nike09.jpg" , price: "3250000",
  //              name: "Nike Max Flyknit 02"
  //             },
  //             { image: "./images/img/nike10.jpg" , price: "4000000",
  //              name: "Nike Max Flyknit 03"
  //             },
  //             { image: "./images/img/nike11.jpg" , price: "4000000",
  //               name: "Nike Air Max Flyknit Racer 03"
  //             },
  //             { image: "./images/img/nike12.jpg" , price: "2500000",
  //               name: "Nike Blazer Mid 04"
  //             },
  //             { image: "./images/img/nike13.jpg" , price: "3250000",
  //              name: "Nike Max Flyknit 045"
  //             },
  //             { image: "./images/img/nike14.jpg" , price: "4000000",
  //              name: "Nike Pe 02"
  //             },
  //             { image: "./images/img/nike15.jpg" , price: "3000000",
  //               name: "Nike Zoom Fly 5 02"
  //             },
  //             { image: "./images/img/nike16.jpg" , price: "4000000",
  //               name: "Nike Air Max Flyknit Racer 04"
  //             },
  //             { image: "./images/img/nike17.jpg" , price: "2500000",
  //               name: "Nike Blazer Mid 05"
  //             },
  //             { image: "./images/img/nike18.jpg" , price: "3250000",
  //               name: "Nike Max Flyknit 04"
  //             },
  //             { image: "./images/img/nike19.jpg" , price: "4000000",
  //              name: "Nike Max Flyknit 05"
  //             },

  //         ]
  //         localStorage.setItem('product5',JSON.stringify(product))
  //     }
  // }
  function currency(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") + "đ";
  }

  // Hiển thị sản phẩm
  console.log(document.querySelector(".product-category-list"));
  console.log(document.querySelector(".page"));
  showProduct(JSON.parse(localStorage.getItem("product5")));
  function showProduct(tmpArr) {
    let product = tmpArr;
    let perPage = 9;
    let currentPage = 1;
    let start = 0;
    let end = perPage;
    function renderProduct() {
      const ProductPerform = document.querySelector(".product-category-list");

      let s = "";
      product.forEach((item, index) => {
        if (index >= start && index < end) {
          s += `
                  <div class="product-category-item" onclick="showProductDetail('${
                    item.name
                  }')">
                  <img
                  src="${item.image}"
                  alt=""
                  class="product-category-image"
                  />
                  <div class="product-category-info">
                    <h3 class="product-category-heading">${item.name}</h3>
                    <span class="product-category-price">${currency(
                      item.price
                    )}</span>
                  </div>
                </div>
                  `;
          return s;
        }
      });

      ProductPerform.innerHTML = s;
    }
    function getCurrentPage(currentPage) {
      start = (currentPage - 1) * perPage;
      end = currentPage * perPage;
    }
    function changePage() {
      const currentPages = document.querySelectorAll(".page div");
      for (let i = 0; i < currentPages.length; i++) {
        currentPages[i].addEventListener("click", function () {
          let value = i + 1;
          currentPage = value;
          getCurrentPage(currentPage);
          renderProduct();
        });
      }
    }

    function displayPagination() {
      let productNumberPage = document.querySelector(".page");

      let sotrang = Math.ceil(product.length / perPage);
      let lienket = "";
      for (let i = 1; i <= sotrang; i++) {
        vitri = (i - 1) * perPage;
        lienket += '<div class="pageNumber">' + i + "</div>";
      }
      productNumberPage.innerHTML = lienket;
      // document.getElementById("page").innerHTML=lienket;
    }
    renderProduct();
    displayPagination();
    changePage();
  }
}

function showProductDetail(productname) {
  function currency(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") + "đ";
  }
  let product2 = JSON.parse(localStorage.getItem("product5"));
  const productSingle = document.querySelector(".product-single");
  for (let i = 0; i < product2.length; i++) {
    if (product2[i].name === productname) {
      totalPrice2 = currency(product2[i].price);
      productSingle.innerHTML = `
            <div class="modal">
            <div class="modal-overlay"></div>
            <div class="modal-contents">
              <span class="modal-close" >
                <i class="fa-solid fa-xmark modal-xmark"></i>
              </span>
              <div class="modal-main">
                <img src="${product2[i].image}" alt="" class="modal-image" />
                <div class="modal-content">
                  <span class="modal-title">${product2[i].name}</span>
                  <span class="modal-price">${totalPrice2}</span>
                  <div class="modal-form">
                    <span class="modal-size"
                      >Kích thước: <span class="modal-size-number">36.5</span>
                    </span>
                    <div class="modal-size-option">36.5</div>
                    <div class="modal-size-option">37.5</div>
                    <div class="modal-size-option">38.5</div>
                  </div>
            
                  <div class="modal-buy">
                    <button type="submit" class="modal-add-cart modal-btn" >
                      Thêm vào giỏ
                    </button>
                    <button  class="modal-buy-now modal-btn ">
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
    }
  }
  // addToCart(productid) // chuc nang cua users da dang ki tai khoan

  productSingle.addEventListener("click", function (e) {
    if (e.target.matches(".modal-xmark")) {
      // console.log(e.target);
      const modal = e.target.parentNode.parentNode.parentNode;
      modal.parentNode.removeChild(modal);
    }
  });
  addCart();
  addCart2();

  const btnThem = document.querySelector(".modal-add-cart");
  btnThem.addEventListener("click", function (e) {
    const modal =
      e.target.parentNode.parentNode.parentNode.parentNode.parentNode;
    modal.parentNode.removeChild(modal);
  });

  const btnmua = document.querySelector(".modal-buy-now");
  btnmua.addEventListener("click", function (e) {
    alert("Bạn muốn thanh toán đơn hàng này chứ");
    buy();
    const modal =
      e.target.parentNode.parentNode.parentNode.parentNode.parentNode;
    modal.parentNode.removeChild(modal);
  });
}

/* DANH SÁCH ĐƠN HÀNG */
showBillList();
function showBillList() {
  let bill = JSON.parse(localStorage.getItem("bill"));
  let s = "";
  for (let i = 0; i < bill.length; i++) {
    s += `
          <tr onclick="showBillDetail(${bill[i].id})">
              <td>${bill[i].id}</td>
              <td>${bill[i].customer.fullname}</td>
              <td>${bill[i].date}</td>
              <td>${bill[i].status}</td>
          </tr>
      `;
  }
  document.getElementById("bill-list-perform").innerHTML = s;
}

function showBillDetail(billid) {
  function currency(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") + "đ";
  }
  document.getElementById("bill-list-detail").style.display = "block";
  let bill = JSON.parse(localStorage.getItem("bill"));
  for (let i = 0; i < bill.length; i++) {
    if (bill[i].id == billid) {
      document.getElementById("bill-list-detail").innerHTML = `<form>
              <div class="bill-list-detail-header">
                  <span onclick="document.getElementById('bill-list-detail').style.display='none'" class="close" id="close" >&times;</span>
                  <h2>THÔNG TIN ĐƠN HÀNG</h2>
              </div>
              <div class="bill-list-detail-content">
                  <div>
                      <span>Mã đơn hàng:</span>  ${bill[i].id}
                  </div>
                  <div>
                      <span>Tên khách hàng:</span>  ${bill[i].customer.fullname}
                  </div>
                  <div>
                      <span>Số điện thoại:</span>  ${bill[i].customer.phone}
                  </div>
                  <div>
                      <span>Ngày thanh toán:</span>  ${bill[i].date}
                  </div>
                  <div>
                      <span>Sản phẩm:</span>  ${bill[i].info}
                  </div>
                  <div>
                      <span>Thành tiền:</span> ${currency(bill[i].totalprice)}
                  </div>
                  <div>
                      <span>Trạng thái đơn hàng:</span> 
                      &nbsp;&nbsp;&nbsp;
                      <p id="status">${bill[i].status}</p>  
                      <label class="switch">
                          <input type="checkbox" id="switch-el" onchange="setBillStatus(${
                            bill[i].id
                          })" >
                          <span class="slider round"></span>
                      </label>
                  </div>
              </div>
          </form>`;
      let switchEl = document.getElementById("switch-el");
      if (bill[i].status == "Chưa xử lý") {
        switchEl.checked == false;
        document.getElementById("status").style.color = "red";
      } else {
        switchEl.checked == true;
        document.getElementById("status").style.color = "green";
      }
      break;
    }
  }
}

function setBillStatus(billid) {
  let switchEl = document.getElementById("switch-el");
  let bill = JSON.parse(localStorage.getItem("bill"));
  if (switchEl.checked == true) {
    for (let i = 0; i < bill.length; i++) {
      if (bill[i].id == billid) {
        bill[i].status = "Đã xử lý";
        document.getElementById("status").innerHTML = "Đã xử lý";
        document.getElementById("status").style.color = "green";
      }
    }
  } else {
    for (let i = 0; i < bill.length; i++) {
      if (bill[i].id == billid) {
        bill[i].status = "Chưa xử lý";
        document.getElementById("status").innerHTML = "Chưa xử lý";
        document.getElementById("status").style.color = "red";
      }
    }
  }
  localStorage.setItem("bill", JSON.stringify(bill));
  showBillList();
}

/*-----   DANG XUAT  ----- */
function logout() {
  localStorage.removeItem("userlogin");
  window.location.href = "index.html";
}
