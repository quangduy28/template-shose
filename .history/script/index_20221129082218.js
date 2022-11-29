//Mảng product

// đơn vị tiền việt
function currency(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") + "đ";
}

function innerPage() {
  function createProduct() {
    if (localStorage.getItem("product6") === null) {
      let product = [
        {
          image: "./images/img/nike01.jpg",
          price: "3000000",
          name: "Nike Air Max TW",
        },
        {
          image: "./images/img/nike02.jpg",
          price: "4000000",
          name: "Nike Air Max Flyknit Racer",
        },
        {
          image: "./images/img/nike03.jpg",
          price: "2500000",
          name: "Nike Blazer Mid 02",
        },
        {
          image: "./images/img/nike04.jpg",
          price: "3250000",
          name: "Nike Max Flyknit",
        },
        {
          image: "./images/img/nike05.jpg",
          price: "4000000",
          name: "Nike Premium",
        },
        {
          image: "./images/img/nike06.jpg",
          price: "3000000",
          name: "Nike Zoom Fly 5",
        },
        {
          image: "./images/img/nike07.jpg",
          price: "4000000",
          name: "Nike Air Max Flyknit Racer 02",
        },
        {
          image: "./images/img/nike08.jpg",
          price: "2500000",
          name: "Nike Blazer Mid 03",
        },
        {
          image: "./images/img/nike09.jpg",
          price: "3250000",
          name: "Nike Max Flyknit 02",
        },
        {
          image: "./images/img/nike10.jpg",
          price: "4000000",
          name: "Nike Max Flyknit 03",
        },
        {
          image: "./images/img/nike11.jpg",
          price: "4000000",
          name: "Nike Air Max Flyknit Racer 03",
        },
        {
          image: "./images/img/nike12.jpg",
          price: "2500000",
          name: "Nike Blazer Mid 04",
        },
        {
          image: "./images/img/nike13.jpg",
          price: "3250000",
          name: "Nike Max Flyknit 045",
        },
        {
          image: "./images/img/nike14.jpg",
          price: "4000000",
          name: "Nike Pe 02",
        },
        {
          image: "./images/img/nike15.jpg",
          price: "3000000",
          name: "Nike Zoom Fly 5 02",
        },
        {
          image: "./images/img/nike16.jpg",
          price: "4000000",
          name: "Nike Air Max Flyknit Racer 04",
        },
        {
          image: "./images/img/nike17.jpg",
          price: "2500000",
          name: "Nike Blazer Mid 05",
        },
        {
          image: "./images/img/nike18.jpg",
          price: "3250000",
          name: "Nike Max Flyknit 04",
        },
        {
          image: "./images/img/nike19.jpg",
          price: "4000000",
          name: "Nike Max Flyknit 05",
        },
        {
          image: "./images/img/nike20.jpg",
          price: "1000000",
          name: "Nike Air Force 1 Low Retro",
        },
        {
          image: "./images/img/nike21.jpg",
          price: "1500000",
          name: "Jordan Series",
        },
        {
          image: "./images/img/nike22.jpg",
          price: "4500000",
          name: "Nike Air Zoom Alphafly",
        },
        {
          image: "./images/img/nike23.jpg",
          price: "3250000",
          name: "Nike Air Presto",
        },
        {
          image: "./images/img/nike24.jpg",
          price: "3200000",
          name: "Air Jordan 1 Low SE",
        },
        {
          image: "./images/img/nike25.jpg",
          price: "2200000",
          name: "Nike Zoom Mercurial",
        },
        {
          image: "./images/img/nike26.jpg",
          price: "5300000",
          name: "Air Jordan XXXVII PF",
        },
        {
          image: "./images/img/nike27.jpg",
          price: "5100000",
          name: "Air Jordan 1 Zoom CMFT",
        },
        {
          image: "./images/img/nike28.jpg",
          price: "2300000",
          name: "Air Jordan 1 Mid SE",
        },
        {
          image: "./images/img/nike29.jpg",
          price: "3300000",
          name: "Jordan 1 KO",
        },
        {
          image: "./images/img/nike30.jpg",
          price: "1300000",
          name: "Nike Oneonta",
        },
        {
          image: "./images/img/nike31.jpg",
          price: "3200000",
          name: "Nike Pegasus Turbo Next Nature",
        },
        {
          image: "./images/img/nike32.jpg",
          price: "5500000",
          name: "Air Jordan 6 Retro",
        },
        {
          image: "./images/img/nike33.jpg",
          price: "4400000",
          name: "Air Jordan 5 Retro",
        },
        {
          image: "./images/img/nike34.jpg",
          price: "2700000",
          name: "Nike Dunk Low SE",
        },
        {
          image: "./images/img/nike35.jpg",
          price: "3800000",
          name: "Nike Air Trainer 1",
        },
        {
          image: "./images/img/nike36.jpg",
          price: "3200000",
          name: "Nike Air Trainer 2",
        },
        {
          image: "./images/img/nike37.jpg",
          price: "4500000",
          name: "Nike ACG Mountain Fly Low SE",
        },
        {
          image: "./images/img/nike38.jpg",
          price: "6600000",
          name: "Nike ZoomX Vaporfly NEXT",
        },
        {
          image: "./images/img/nike39.jpg",
          price: "3800000",
          name: "Nike Air Zoom Pegasus 39 A.I.R. Hola Lou",
        },
        {
          image: "./images/img/nike40.jpg",
          price: "3500000",
          name: "Nike Hyperdunk X EP",
        },
        {
          image: "./images/img/nike41.jpg",
          price: "3500000",
          name: "Nike SuperRep Cycle 2 Next Nature",
        },
        {
          image: "./images/img/nike42.jpg",
          price: "7500000",
          name: "Nike Zoom Mercurial Superfly 9 Elite KM FG",
        },
        {
          image: "./images/img/nike43.jpg",
          price: "7500000",
          name: "Air Jordan 1 Low SE 02",
        },
      ];
      localStorage.setItem("product6", JSON.stringify(product));
    }
  }
  createProduct();
  // Hiển thị sản phẩm
  showProduct(JSON.parse(localStorage.getItem("product6")));
}

// phần trang sản phẩm
function showProduct(tmpArr) {
  let product = tmpArr;
  let perPage = 9;
  let currentPage = 1;
  let start = 0;
  let end = perPage;

  function renderProduct() {
    const productCategoryList = document.querySelector(
      ".product-category-list"
    );
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
    productCategoryList.innerHTML = s;
  }

  function getCurrentPage(currentPage) {
    start = (currentPage - 1) * perPage;
    end = currentPage * perPage;
  }

  // thay đổi số trang
  function changePage() {
    const currentPages = document.querySelectorAll(".pageNumber");
    // console.log(currentPages);
    for (let i = 0; i < currentPages.length; i++) {
      currentPages[i].addEventListener("click", function (e) {
        let value = i + 1;
        currentPage = value;
        getCurrentPage(currentPage);
        renderProduct();
      });
    }
  }

  // khởi tạo số trang sản phẩm
  function displayPagination() {
    let productNumberPage = document.querySelector(".page");
    let page = Math.ceil(product.length / perPage);
    let numberPage = "";
    for (let i = 1; i <= page; i++) {
      vitri = (i - 1) * perPage;
      numberPage += '<div class="pageNumber">' + i + "</div>";
    }
    productNumberPage.innerHTML = numberPage;
  }

  renderProduct();
  displayPagination();
  changePage();
}

// tìm kiếm sản phầm
function search1() {
  innerPage();
  let tmpArr = [];
  let productSearch = document.querySelector("#search").value.toLowerCase();
  let arrProduct = JSON.parse(localStorage.getItem("product6"));
  if (productSearch != "") {
    for (let i = 0; i < arrProduct.length; i++) {
      if (arrProduct[i].name.toLowerCase().search(productSearch) != -1) {
        tmpArr.push(arrProduct[i]);
      }
    }
    showProduct(tmpArr);
  }
}

// hiển thị thông tin sản phẩm
function showProductDetail(productName) {
  const product = JSON.parse(localStorage.getItem("product6"));
  const productSingle = document.querySelector(".product-single");
  for (let i = 0; i < product.length; i++) {
    const productImage = product[i].image;
    const productTitle = product[i].name;
    const productPrice = currency(product[i].price);
    if (product[i].name === productName) {
      productSingle.innerHTML = `
            <div class="modal">
            <div class="modal-overlay"></div>
            <div class="modal-contents">
              <span class="modal-close" >
                <i class="fa-solid fa-xmark modal-xmark"></i>
              </span>
              <div class="modal-main">
                <img src="${productImage}" alt="" class="modal-image" />
                <div class="modal-content">
                  <span class="modal-title">${productTitle}</span>
                  <span class="modal-price">${productPrice}</span>
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

  const btnAdd = document.querySelector(".modal-add-cart");
  btnAdd.addEventListener("click", function (e) {
    const modal =
      e.target.parentNode.parentNode.parentNode.parentNode.parentNode;
    modal.parentNode.removeChild(modal);
  });

  const btnBuy = document.querySelector(".modal-buy-now");
  btnBuy.addEventListener("click", function (e) {
    alert("Bạn muốn thanh toán đơn hàng này chứ");
    buy();
    const modal =
      e.target.parentNode.parentNode.parentNode.parentNode.parentNode;
    modal.parentNode.removeChild(modal);
  });
}

//LOGIN

// tạo tài khoản admin
function createAdmin() {
  if (localStorage.getItem("user") === null) {
    let userArray = [];
    let user = {
      email: "admin@gmail.com",
      password: "12345678",
      fullname: "ADMIN",
      phone: "0815147600",
      datesignup: "20-11-2022",
    };
    userArray.push(user);
    localStorage.setItem("user", JSON.stringify(userArray));
  }
}
createAdmin();

// kiểm tra đăng ký
function registerfrm() {
  const registerForm = document.querySelector(".register-form");
  registerForm.addEventListener("submit", createUser);
  function createUser(e) {
    e.preventDefault();
    const fname = document.querySelector("#fname");
    const name = document.querySelector("#name");
    const phone = document.querySelector("#text");
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
    const fullName = fname.value + " " + name.value + "";
    const errorFname = document.querySelector(".error-fname");
    const errorName = document.querySelector(".error-name");
    const errorPhone = document.querySelector(".error-phone");

    const errorEmail = document.querySelector(".error-email");
    const errorPass = document.querySelector(".error-pass");
    let flag = false;

    // Phần kiểm tra Firstname người dùng
    if (fname.value.length === 0) {
      errorFname.style.display = "block";
      fname.style.border = "1px solid red";
      fname.focus();
      flag = true;
    } else {
      let tenRegex =
        /^[AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬBCDĐEÈẺẼÉẸÊỀỂỄẾỆFGHIÌỈĨÍỊJKLMNOÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢPQRSTUÙỦŨÚỤƯỪỬỮỨỰVWXYỲỶỸÝỴZ][aàảãáạăằẳẵắặâầẩẫấậbcdđeèẻẽéẹêềểễếệfghiìỉĩíịjklmnoòỏõóọôồổỗốộơờởỡớợpqrstuùủũúụưừửữứựvwxyỳỷỹýỵz]+ [AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬBCDĐEÈẺẼÉẸÊỀỂỄẾỆFGHIÌỈĨÍỊJKLMNOÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢPQRSTUÙỦŨÚỤƯỪỬỮỨỰVWXYỲỶỸÝỴZ][aàảãáạăằẳẵắặâầẩẫấậbcdđeèẻẽéẹêềểễếệfghiìỉĩíịjklmnoòỏõóọôồổỗốộơờởỡớợpqrstuùủũúụưừửữứựvwxyỳỷỹýỵz]+(?: [AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬBCDĐEÈẺẼÉẸÊỀỂỄẾỆFGHIÌỈĨÍỊJKLMNOÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢPQRSTUÙỦŨÚỤƯỪỬỮỨỰVWXYỲỶỸÝỴZ][aàảãáạăằẳẵắặâầẩẫấậbcdđeèẻẽéẹêềểễếệfghiìỉĩíịjklmnoòỏõóọôồổỗốộơờởỡớợpqrstuùủũúụưừửữứựvwxyỳỷỹýỵz]*)*/;
      if (!tenRegex.test(fname.value)) {
        errorFname.style.display = "block";
        fname.style.border = "1px solid red";
        flag = true;
      } else {
        fname.style.border = "1px solid #e5e5e5";
        errorFname.style.display = "none";
      }
    }
    // kiểm tra name ng dùng
    if (name.value.length === 0) {
      errorName.style.display = "block";
      name.style.border = "1px solid red";
      fname.focus();
      flag = true;
    } else {
      name.style.border = "1px solid #e5e5e5";
      errorName.style.display = "none";
    }

    // Phần kiểm tra số điện thoại người dùng
    if (phone.value.length === 0) {
      errorPhone.style.display = "block";
      phone.style.border = "1px solid red";
      phone.focus();
      flag = true;
    } else {
      let phone_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
      if (!phone_regex.test(phone.value)) {
        errorPhone.style.display = "block";
        phone.style.border = "1px solid red";
        flag = true;
      } else {
        errorPhone.style.display = "none";
        phone.style.border = "1px solid #e5e5e5";
      }
    }

    // Phần kiểm  tra email người dùng
    if (email.value.length === 0) {
      // document.getElementById('usernameerror').style.display = 'block';
      email.style.border = "1px solid red";
      username.focus();
      flag = true;
    } else {
      // document.getElementById('usernameerror').style.display = 'none';
      email.style.border = "1px solid #e5e5e5";
    }

    // Phần kiểm tra mật khẩu người dùng
    if (password.value.length === 0) {
      errorPass.style.display = "block";
      document.getElementById("password").style.border = "1px solid red";
      password.focus();
      flag = true;
    } else if (password.value.length < 8) {
      errorPass.style.display = "block";
      // document.getElementById('passerror').innerHTML = 'Mật khẩu phải đủ 8 kí tự';
      password.style.border = "1px solid red";
      flag = true;
    } else {
      errorPass.style.display = "none";
      password.style.border = "1px solid #e5e5e5";
    }

    if (flag == true) {
      return true;
    }

    const d = new Date();
    const dateSignup =
      d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear();
    const user = {
      email: email.value,
      password: password.value,
      fullname: fullName,
      phone: phone.value,
      datesignup: dateSignup,
    };
    const userArray = JSON.parse(localStorage.getItem("user"));
    for (let i = 0; i < userArray.length; i++) {
      if (user.email == userArray[i].email) {
        errorEmail.style.display = "block";
        email.style.border = "1px solid red";
        email.focus();
        return true;
      }
      if (user.phone == userArray[i].phone) {
        errorPhone.style.display = "block";
        phone.style.border = "1px solid red";
        username.focus();
        return true;
      }
    }
    userArray.push(user);
    localStorage.setItem("user", JSON.stringify(userArray));
    alert("Bạn đã đăng kí thành công !");

    const container = document.querySelector("#container");
    const template = `
    <section class="banner">
      <div class="banner-top">
        <img src="./images/slider-img.jpg" alt="" class="banner-image" />
        <div class="banner-content">
          <div class="banner-content-heading">Đăng nhập tài khoảng</div>
          <ul class="banner-content-list">
            <li class="banner-content-item" onclick="innerHomePage();">
              Trang chủ
            </li>
            <li class="banner-content-item" onclick="innerLoginPage();">
              Đăng nhập tài khoảng
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="login">
      <div class="container" id="login-container">
        <div class="login-wrapper">
          <ul class="login-menu-list">
            <li class="login-menu-item" onclick="innerLoginPage();">
            Đăng nhập
            </li>
            <li class="login-menu-item" onclick="innerRegisterPage();">
            Đăng ký
            </li>
          </ul>
          <form action="" class="login-form">
            <div class="login-form-group">
              <label for="email" class="login-form-label">Email</label>
              <input
                type="email"
                class="login-form-input"
                id="email-login"
                required
                placeholder="Nhập địa chỉ email"
              />
              <span class="error-login-email">Email không hợp lệ</span>
            </div>
            <div class="login-form-group">
              <label for="password" class="login-form-label">Mật khẩu</label>
              <input
                type="password"
                class="login-form-input"
                id="password-login"
                required
                placeholder="Nhập mật khẩu"
              />
              <span class="error-login-pass">Sai thông tin đăng nhập</span>
            </div>
            <a href="#" class="login-form-forget">Quên mật khẩu?</a>
            <button class="login-form-submit" type="submit" id="login-form-submit">Đăng nhập</button>
          </form>
        </div>
  
         <!-- Sau khi login thành công -->
  
      </div>
    </section>
    `;
    container.innerHTML = template;
    checkLogin();
    loginForm();

    // showFormLogin();
    // closeFormSignUp();
  }
}

// kiểm tra đăng nhập
function loginForm() {
  const loginForm = document.querySelector(".login-form");
  loginForm.addEventListener("submit", login);

  function login(e) {
    e.preventDefault();
    const email = document.querySelector("#email-login").value;
    const password = document.querySelector("#password-login").value;
    const errorLoginEmail = document.querySelector(".error-login-email");
    const errorLoginPass = document.querySelector(".error-login-pass");
    let flag = false;

    // Phần kiểm tra email của người dùng
    if (email.length === 0) {
      errorLoginEmail.style.display = "block";
      email.style.border = "1px solid red";
      flag = true;
    } else {
      errorLoginEmail.style.display = "none";
      email.style.border = "1px solid #e5e5e5";
    }

    // Phần kiểm tra password của người dùng
    if (password.length === 0) {
      errorLoginPass.style.display = "block";
      password.style.border = "1px solid red";
      flag = true;
    } else if (password.length < 8) {
      errorLoginPass.style.display = "block";
      // document.getElementById('passloginerror').innerHTML = 'Mật khẩu phải đủ 8 kí tự';
      password.style.border = "1px solid red";
      flag = true;
    } else {
      errorLoginPass.style.display = "none";
      password.style.border = "1px solid #e5e5e5";
    }
    if (flag == true) {
      return false;
    }
    const userArray = JSON.parse(localStorage.getItem("user"));
    for (let i = 0; i < userArray.length; i++) {
      if (email == userArray[i].email && password == userArray[i].password) {
        // closeFormLogin();
        localStorage.setItem("userlogin", JSON.stringify(userArray[i]));
        alert("Bạn đã đăng nhập thành công !");
        window.location.reload("index.html");
        checkLogin();
        return true;
      }
    }
    document.querySelector(".error-login-pass").style.display = "block";
    // document.getElementById('passloginerror').innerHTML = 'Sai thông tin đăng nhập';
    return false;
  }
}

function logout() {
  // document.querySelector(".login-wrapper").style.display = 'block';
  // document.querySelector(".loginsuccess-wrapper").style.display='none';
  localStorage.removeItem("userlogin");
  window.location.href = "index.html";
  document.querySelector(".login-wrapper").style.display = "block";
}

function checkLogin() {
  if (localStorage.getItem("userlogin")) {
    var user = JSON.parse(localStorage.getItem("userlogin"));
    var s = "";
    if (user.email == "admin@gmail.com" && user.password == "12345678") {
      window.location.href = "Admin.html";
    } else {
      document.querySelector(".login-wrapper").style.display = "none";
      s = `<div class="loginsuccess-wrapper">
                <div class="left">
                 <img src="./images/iconlogin.jpg" alt="" class="left-image" />
                 <div class="logout-group" onclick="logout()">
                   <div class="icon-logout">
                     <i class="fa-solid fa-right-from-bracket" id="icon-logout-item"></i>
                   </div>
                   <span class="dangxuat">Đăng xuất</span>
                 </div>
                </div>
                <div class="right">
                 <!-- <div class="right-group-title">
                   <span class="title">Thông Tin Tài Khoản</span>
                 </div> -->
                 <div class="right-group">
                   <span class="hoten">Họ và tên: </span>
                   <span class="hoten-rep">${user.fullname}</span>
                 </div>
                 <div class="right-group">
                   <span class="Email">Email: </span>
                   <span class="Email-rep">${user.email}</span>
                 </div>
                 <div class="right-group">
                   <span class="sdt">Số điện thoại: </span>
                   <span class="sdt-rep">${user.phone}</span>
                 </div>
                 <div class="right-group">
                   <span class="date">Ngày đăng ký: </span>
                   <span class="date-rep">${user.datesignup}</span>
                 </div>
                 <div class="right-group">
                   <span class="matkhau">Password: </span>
                   <span class="matkhau-rep " type="password">${user.password}</span>
                 </div>
                </div>
               </div>
                `;
    }
    document.querySelector("#login-container").innerHTML = s;
    document.querySelector(".loginsuccess-wrapper").style.display = "flex";
  }
}
let cartArr = [];

function addCart() {
  // let cartArr = []
  let productarr = JSON.parse(localStorage.getItem("product6"));
  const btn = document.querySelector(".modal-add-cart");
  // console.log(btn)
  btn.addEventListener("click", function (e) {
    var btnItem = e.target;
    var product = btnItem.parentElement.parentElement.parentElement;
    var productImg = product.querySelector("img").src;
    var productName = product.querySelector(".modal-title").innerText;
    // console.log(productName==productarr[0].name)
    let productPrice;
    for (var i = 0; i < productarr.length; i++) {
      if (productName == productarr[i].name) {
        productPrice = productarr[i].price;
        cartArr.push(productarr[i]);
      }
    }
    localStorage.setItem("cart", JSON.stringify(cartArr));
    addcart(productImg, productName, productPrice);
    changeIcon();
  });

  function addcart(productImg, productName, productPrice) {
    var addtr = document.createElement("tr");
    var cartItem = document.querySelectorAll("tbody tr");
    for (var i = 0; i < cartItem.length; i++) {
      var productT = document.querySelectorAll(".tensp");
      if (productT[i].innerText == productName) {
        alert("Sản phẩm đã có trong giỏ hàng");
        return;
      }
    }

    var trcontent = `
    <tr>
      <td>
        <div style="height: 100%; display: flex; align-items: center">
          <img
            src="${productImg}"
            alt=""
            style="width: 70px; height: 100%"
          />
          <span class="tensp" style="margin-left: 3px"
            >${productName}</span
          >
        </div>
      </td>
      <td style="vertical-align: middle">
        <p><span class="gia">${productPrice}</span><sup>đ</sup></p>
      </td>
      <td style="vertical-align: middle">
        <input
          type="number"
          value="1"
          min="1"
          style="width: 30px; outline: none"
        />
      </td>
      <td style="vertical-align: middle">
        <span class="delete-cart" style="cursor: pointer">Xóa</span>
      </td>
  </tr>
 `;
    addtr.innerHTML = trcontent;
    var cartTable = document.querySelector("tbody");
    //  console.log(cartTable)
    cartTable.append(addtr);

    carttotal();
    deletecart();
  }

  //tính tổng
  function carttotal() {
    var cartItem = document.querySelectorAll("tbody tr");
    totalC = 0;
    for (var i = 0; i < cartItem.length; i++) {
      var inputValue = cartItem[i].querySelector("input").value;
      var productPrice = cartItem[i].querySelector(".gia").innerText;

      totalA = inputValue * productPrice;

      // totalB = totalA.toLocaleString('de-DE')

      totalC = totalC + totalA;
      // console.log(totalC)
      // totalD = totalC.toLocaleString('de-DE')
    }

    var cartTotalA = document.querySelector(".price-total span");
    cartTotalA.innerHTML = totalC.toLocaleString("de-DE");
    inputChange();
  }

  //delete cart
  function deletecart() {
    let cartArr = JSON.parse(localStorage.getItem("cart"));
    let productarr = JSON.parse(localStorage.getItem("product6"));
    var cartItem = document.querySelectorAll("tbody tr");
    for (var i = 0; i < cartItem.length; i++) {
      var productT = document.querySelectorAll(".delete-cart");
      productT[i].addEventListener("click", function (e) {
        const namedelete = e.target.parentNode.parentNode;
        const namedelete2 = namedelete.querySelector("span").innerText;
        // console.log(namedelete2)
        for (var i = 0; i < productarr.length; i++) {
          for (var j = 0; j < cartArr.length; j++) {
            if (
              productarr[i].name == namedelete2 &&
              productarr[i].name == cartArr[j].name
            ) {
              cartArr.splice(j, 1);
              changeIcon();
            }
          }
        }

        var cartDelete = e.target;
        var cartItemP = cartDelete.parentElement.parentElement;
        localStorage.setItem("cart", JSON.stringify(cartArr));
        cartItemP.remove();
        carttotal();
        changeIcon();
      });
    }
  }

  function inputChange() {
    // let cartArr
    // let productarr = JSON.parse(localStorage.getItem('product5'))
    // var quantity
    var cartItem = document.querySelectorAll("tbody tr");
    for (var i = 0; i < cartItem.length; i++) {
      var inputValue = cartItem[i].querySelector("input");
      inputValue.addEventListener("change", function () {
        // for(var j = 0 ; j < productarr.length ; j++){
        //       if (cartItem[i].querySelector(".tensp").innerText == productarr[j].name){
        //         productarr[j].quantity = inputValue.value
        //         cartArr.push(productarr[j])
        //         localStorage.setItem('cart',JSON.stringify(cartArr))
        //       }
        // }
        carttotal();
      });
    }
  }
}

const cartbtn = document.querySelector(".fa-circle-xmark");
const cartshow = document.querySelector(".add-item-carts");
cartshow.addEventListener("click", function () {
  document.querySelector(".cart").style.right = "0";
});
cartbtn.addEventListener("click", function () {
  document.querySelector(".cart").style.right = "-100%";
});

//mua hàng phần xử lí đơn hàng
function buy() {
  if (localStorage.getItem("userlogin") === null) {
    localStorage.removeItem("cart");
    alert("Bạn phải đăng nhập trước khi mua sản phẩm");
    return false;
  }
  var info = "";
  var totalprice = 0;
  if (
    localStorage.getItem("cart") === null ||
    localStorage.getItem("cart") == "[]" ||
    document.querySelectorAll("tbody tr").length == 0
  ) {
    alert("Không có đơn hàng nào để thanh toán");

    return false;
  }
  var cartItem = document.querySelectorAll("tbody tr");
  var cartArray = JSON.parse(localStorage.getItem("cart"));
  for (var i = 0; i < cartArray.length; i++) {
    const cartItemName = cartItem[i].querySelector(".tensp").innerText;
    // console.log(cartItem[i].querySelector(".tensp").innerText)
    console.log(cartArray[i].name);
    let sl;
    if (cartItemName == cartArray[i].name) {
      sl = cartItem[i].querySelector("input").value;
    }

    info += sl + " x " + cartArray[i].name + "; ";
    totalprice += sl * cartArray[i].price;
  }
  var customer = JSON.parse(localStorage.getItem("userlogin"));
  var date = new Date();
  var d =
    date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
  if (localStorage.getItem("bill") === null) {
    var billArray = [];
    var bill = {
      id: billArray.length,
      info: info,
      totalprice: totalprice,
      customer: customer,
      date: d,
      status: "Chưa xử lý",
    };
    billArray.unshift(bill);
    localStorage.setItem("bill", JSON.stringify(billArray));
  } else {
    var billArray = JSON.parse(localStorage.getItem("bill"));
    var bill = {
      id: billArray.length,
      info: info,
      totalprice: totalprice,
      customer: customer,
      date: d,
      status: "Chưa xử lý",
    };
    billArray.unshift(bill);
    localStorage.setItem("bill", JSON.stringify(billArray));
  }
  localStorage.removeItem("cart");
  alert("THANH TOÁN THÀNH CÔNG !");

  document.querySelector("tbody tr").remove();
  document.querySelector(".price-total span").innerHTML = "0";
}
//show hóa đơn

function showbill() {
  if (localStorage.getItem("userlogin") === null) {
    alert("Bạn phải đăng nhập trước khi xem hóa đơn");
    return false;
  }
  if (localStorage.getItem("bill") === null) {
    document.getElementById("bill").innerHTML = "Không có hóa đơn nào";
  } else {
    let user = JSON.parse(localStorage.getItem("userlogin"));
    let billArray = JSON.parse(localStorage.getItem("bill"));
    let s = "";
    let n = 0;
    for (let i = 0; i < billArray.length; i++) {
      if (user.fullname == billArray[i].customer.fullname) {
        n++;
        s +=
          '<div class="billcontent">' +
          '<div class="billcontent-name">' +
          billArray[i].info +
          "</div>" +
          '<div class="billcontent-price" style="color: #666;">' +
          billArray[i].totalprice.toLocaleString("de-DE") +
          "đ" +
          "" +
          "</div>" +
          '<div class="billcontent-date" style="color:#666">' +
          billArray[i].date +
          "</div>" +
          '<div class="billcontent-status">' +
          billArray[i].status +
          "</div>" +
          "</div>";
      }
    }
    document.getElementById("bill").innerHTML = s;
    if (n == 0) {
      document.getElementById("bill").innerHTML = "Không có hóa đơn nào";
    }
  }
}

function addCart2() {
  let cartArr = [];
  let productarr = JSON.parse(localStorage.getItem("product6"));
  const btn = document.querySelector(".modal-buy-now");
  console.log(btn);
  btn.addEventListener("click", function (e) {
    let btnItem = e.target;
    let product = btnItem.parentElement.parentElement.parentElement;
    let productImg = product.querySelector("img").src;
    let productName = product.querySelector(".modal-title").innerText;
    // console.log(productName==productarr[0].name)
    let productPrice;
    for (let i = 0; i < productarr.length; i++) {
      if (productName == productarr[i].name) {
        productPrice = productarr[i].price;
        cartArr.push(productarr[i]);
      }
    }
    localStorage.setItem("cart", JSON.stringify(cartArr));
    addcart(productImg, productName, productPrice);
  });

  function addcart(productImg, productName, productPrice) {
    let addtr = document.createElement("tr");
    let cartItem = document.querySelectorAll("tbody tr");
    for (let i = 0; i < cartItem.length; i++) {
      let productT = document.querySelectorAll(".tensp");
      if (productT[i].innerText == productName) {
        alert("Sản phẩm đã có trong giỏ hàng");
        return;
      }
    }

    let trcontent = `
   <tr>
   <td ><div style="height: 100%;display: flex; align-items:center" ><img src="${productImg}" alt="" style="width: 70px; height: 100%;  ">  <span class="tensp" style="margin-left: 3px">${productName}</span></div></td>
   <td style="vertical-align:middle; " ><p><span class="gia">${productPrice}</span><sup>đ</sup></p></td>
   <td style="vertical-align:middle; "><input type="number" value="1" min="1" style="width:30px; outline: none;"></td>
   <td style="vertical-align:middle;"  ><span class="delete-cart"  style="cursor:pointer">Xóa</span></td>
  </tr>
   `;
    addtr.innerHTML = trcontent;
    let cartTable = document.querySelector("tbody");
    //  console.log(cartTable)
    cartTable.append(addtr);

    carttotal();
    deletecart();
  }

  //tính tổng
  function carttotal() {
    let cartItem = document.querySelectorAll("tbody tr");
    totalC = 0;
    for (let i = 0; i < cartItem.length; i++) {
      let inputValue = cartItem[i].querySelector("input").value;
      let productPrice = cartItem[i].querySelector(".gia").innerText;

      totalA = inputValue * productPrice;

      // totalB = totalA.toLocaleString('de-DE')

      totalC = totalC + totalA;
      // console.log(totalC)
      // totalD = totalC.toLocaleString('de-DE')
    }
    let cartTotalA = document.querySelector(".price-total span");
    cartTotalA.innerHTML = totalC.toLocaleString("de-DE");
    inputChange();
  }
}
//thay đổi ++ trên icon
function changeIcon() {
  let cartItem = document.querySelectorAll("tbody tr");
  let icon_add = document.querySelector(".add-item-carts");
  let s = `<i class="fa fa-shopping-cart header-icon header-cart"></i>
  <span class="add-cart-plus">${cartItem.length}</span>`;
  icon_add.innerHTML = s;
}
