const container = document.querySelector("#container");
function innerHomePage() {
  const template = `
  <div class="image-header">
  <img src="/images/nike.png" alt="" />
</div> `;
  container.innerHTML = template;
}

function innerIntroducePage() {
  const template = `
  <section class="slider">
  <i class="fa fa-angle-left slider-prev"></i>
  <div class="slider-wrapper">
    <div class="slider-main">
      <div class="slider-item">
        <img src="./images/truot8.jpg" alt="" class="slider-image" />
      </div>
      <div class="slider-item">
        <img
          src="./images/truot7.jpg"
          alt=""
          class="slider-image"
        />
      </div>
      <div class="slider-item">
        <img src="./images/nike-banner.jfif" alt="" class="slider-image" />
      </div>
      <div class="slider-item">
        <img
          src="./images/truot6.jpg"
          alt=""
          class="slider-image"
        />
      </div>
    </div>
  </div>
  <i class="fa fa-angle-right slider-next"></i>
</section>
  <section class="content">
    <div class="container">
      <div class="content-title">
        <span class="content-heading">Sneaker</span>
        <span class="content-desc"
          >Những mẫu giày mới ra mắt</span
        >
      </div>
      <div class="content-list">
        <div class="content-item">
          <img src="./images/img/nike20.jpg" alt="" class="content-image" />
          <div class="mota">
          <h3>Nike air 01 </h3>
          <p>Hàng mới về</p>
          <p>2.000.000đ</p>
          </div>
        </div>
        <div class="content-item">
          <img src="./images/img/nike24.jpg" alt="" class="content-image" />
          <div class="mota">
          <h3>Nike air 01 </h3>
          <p>Hàng mới về</p>
          <p>2.000.000đ</p>
          </div>
        </div>
        <div class="content-item">
          <img src="./images/img/nike42.jpg" alt="" class="content-image" />
          <div class="mota">
          <h3>Nike air 01 </h3>
          <p>Hàng mới về</p>
          <p>2.000.000đ</p>
          </div>
        </div>
        <div class="content-item">
          <img src="./images/img/nike27.jpg" alt="" class="content-image" />
          <div class="mota">
          <h3>Nike air 01 </h3>
          <p>Hàng mới về</p>
          <p>2.000.000đ</p>
          </div>
        </div>
        <div class="content-item">
          <img src="./images/img/nike14.jpg" alt="" class="content-image" />
          <div class="mota">
          <h3>Nike air 01 </h3>
          <p>Hàng mới về</p>
          <p>2.000.000đ</p>
          </div>
        </div>
        <div class="content-item">
          <img src="./images/img/nike08.jpg" alt="" class="content-image" />
          <div class="mota">
          <h3>Nike air 01 </h3>
          <p>Hàng mới về</p>
          <p>2.000.000đ</p>
          </div>
        </div>
        <div class="content-item">
          <img src="./images/img/nike37.jpg" alt="" class="content-image" />
          <div class="mota">
          <h3>Nike air 01 </h3>
          <p>Hàng mới về</p>
          <p>2.000.000đ</p>
          </div>
        </div>
        <div class="content-item">
          <img src="./images/img/nike23.jpg" alt="" class="content-image" />
          <div class="mota">
          <h3>Nike air 01 </h3>
          <p>Hàng mới về</p>
          <p>2.000.000đ</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="news">
    <div class="container">
      <div class="content-title">
        <span class="content-heading">Tin Tức</span>
        <span class="content-desc">
          FEED BACK CỦA KHÁCH HÀNG
        </span>
      </div>
      <div class="news-list">
        <div class="news-item">
        <img src="./images/img/back.jpg" alt="">
        </div>

        <div class="news-item">
        <img src="./images/img/back02.jpg" alt="">
        </div>

        <div class="news-item">
        <img src="./images/img/back03.jpg" alt="">
        </div>
      </div>
    </div>
  </section>
  `;
  container.innerHTML = template;
  showSlider();
}

function innerProductPage() {
  const template = `
      <section class="banner">
        <div class="banner-top">
          <img src="./images/slider-img.jpg" alt="" class="banner-image" />
          <div class="banner-content">
            <div class="banner-content-heading">Tất cả sản phẩm</div>
            <ul class="banner-content-list">
              <li class="banner-content-item" onclick="innerHomePage();">
                Trang chủ
              </li>
              <li class="banner-content-item" onclick="innerProductPage();">
                Tất cả sản phẩm
              </li>
            </ul>
          </div>
        </div>
      </section>
  <section class="product">
    <div class="container">
      <div class="product-content">
        <div class="product-left">
          <div class="product-option">
            <div class="product-group">
              <span class="product-title">Sắp xếp</span>
              <ul class="product-sort">
                <li class="product-sort-item">
                  <a href="#" class="product-sort-link">
                    <span class="product-sort-check"></span>
                    Mặc định
                  </a>
                </li>

                <li class="product-sort-item">
                  <a href="#" class="product-sort-link">
                    <span class="product-sort-check"></span>
                    Tên A-Z
                  </a>
                </li>

                <li class="product-sort-item">
                  <a href="#" class="product-sort-link">
                    <span class="product-sort-check"></span>
                    Tên Z-A
                  </a>
                </li>

                <li class="product-sort-item">
                  <a href="#" class="product-sort-link">
                    <span class="product-sort-check"></span>
                    Giá thấp đến cao
                  </a>
                </li>

                <li class="product-sort-item">
                  <a href="#" class="product-sort-link">
                    <span class="product-sort-check"></span>
                    Giá cao xuống thấp
                  </a>
                </li>
              </ul>
            </div>

            <div class="product-group">
              <span class="product-title">Loại</span>
              <ul class="product-type">
                <li class="product-type-item">
                  <input
                    type="checkbox"
                    name=""
                    id="product-type-input"
                    class="product-type-input"
                  />
                  <label for="product-type-input" class="product-type-label"
                    >Giày bóng rổ</label
                  >
                </li>

                <li class="product-type-item">
                  <input
                    type="checkbox"
                    name=""
                    id="product-type-input"
                    class="product-type-input"
                  />
                  <label for="product-type-input" class="product-type-label"
                    >Giày bóng rổ</label
                  >
                </li>

                <li class="product-type-item">
                  <input
                    type="checkbox"
                    name=""
                    id="product-type-input"
                    class="product-type-input"
                  />
                  <label for="product-type-input" class="product-type-label"
                    >Giày bóng rổ</label
                  >
                </li>

                <li class="product-type-item">
                  <input
                    type="checkbox"
                    name=""
                    id="product-type-input"
                    class="product-type-input"
                  />
                  <label for="product-type-input" class="product-type-label"
                    >Giày bóng rổ</label
                  >
                </li>

                <li class="product-type-item">
                  <input
                    type="checkbox"
                    name=""
                    id="product-type-input"
                    class="product-type-input"
                  />
                  <label for="product-type-input" class="product-type-label"
                    >Giày bóng rổ</label
                  >
                </li>
              </ul>
            </div>

            <div class="product-group">
              <span class="product-title">Kích thước</span>
              <ul class="product-size">
                <li class="product-size-item">
                  <label for="size-35" class="product-size-label">
                    <input
                      type="checkbox"
                      name=""
                      id="size-35"
                      class="product-size-input"
                    />
                    <span class="product-size-number">35</span>
                  </label>
                </li>
                <li class="product-size-item">
                  <label for="size-36" class="product-size-label">
                    <input
                      type="checkbox"
                      name=""
                      id="size-36"
                      class="product-size-input"
                    />
                    <span class="product-size-number">36</span>
                  </label>
                </li>
                <li class="product-size-item">
                  <label for="size-37" class="product-size-label">
                    <input
                      type="checkbox"
                      name=""
                      id="size-37"
                      class="product-size-input"
                    />
                    <span class="product-size-number">37</span>
                  </label>
                </li>
                <li class="product-size-item">
                  <label for="size-37.5" class="product-size-label">
                    <input
                      type="checkbox"
                      name=""
                      id="size-37.5"
                      class="product-size-input"
                    />
                    <span class="product-size-number">37.5</span>
                  </label>
                </li>
                <li class="product-size-item">
                  <label for="size-38" class="product-size-label">
                    <input
                      type="checkbox"
                      name=""
                      id="size-38"
                      class="product-size-input"
                    />
                    <span class="product-size-number">38</span>
                  </label>
                </li>
                <li class="product-size-item">
                  <label for="size-39" class="product-size-label">
                    <input
                      type="checkbox"
                      name=""
                      id="size-39"
                      class="product-size-input"
                    />
                    <span class="product-size-number">39</span>
                  </label>
                </li>
                <li class="product-size-item">
                  <label for="size-40" class="product-size-label">
                    <input
                      type="checkbox"
                      name=""
                      id="size-40"
                      class="product-size-input"
                    />
                    <span class="product-size-number">40</span>
                  </label>
                </li>
                <li class="product-size-item">
                  <label for="size-41" class="product-size-label">
                    <input
                      type="checkbox"
                      name=""
                      id="size-41"
                      class="product-size-input"
                    />
                    <span class="product-size-number">41</span>
                  </label>
                </li>
                <li class="product-size-item">
                  <label for="size-41.5" class="product-size-label">
                    <input
                      type="checkbox"
                      name=""
                      id="size-41.5"
                      class="product-size-input"
                    />
                    <span class="product-size-number">41.5</span>
                  </label>
                </li>
                <li class="product-size-item">
                  <label for="size-42" class="product-size-label">
                    <input
                      type="checkbox"
                      name=""
                      id="size-42"
                      class="product-size-input"
                    />
                    <span class="product-size-number">42</span>
                  </label>
                </li>
                <li class="product-size-item">
                  <label for="size-42.5" class="product-size-label">
                    <input
                      type="checkbox"
                      name=""
                      id="size-42.5"
                      class="product-size-input"
                    />
                    <span class="product-size-number">42.5</span>
                  </label>
                </li>
                <li class="product-size-item">
                  <label for="size-43" class="product-size-label">
                    <input
                      type="checkbox"
                      name=""
                      id="size-43"
                      class="product-size-input"
                    />
                    <span class="product-size-number">43</span>
                  </label>
                </li>
                <li class="product-size-item">
                  <label for="size-43.5" class="product-size-label">
                    <input
                      type="checkbox"
                      name=""
                      id="size-43.5"
                      class="product-size-input"
                    />
                    <span class="product-size-number">43.5</span>
                  </label>
                </li>
                <li class="product-size-item">
                  <label for="size-44" class="product-size-label">
                    <input
                      type="checkbox"
                      name=""
                      id="size-44"
                      class="product-size-input"
                    />
                    <span class="product-size-number">44</span>
                  </label>
                </li>
                <li class="product-size-item">
                  <label for="size-45" class="product-size-label">
                    <input
                      type="checkbox"
                      name=""
                      id="size-45"
                      class="product-size-input"
                    />
                    <span class="product-size-number">45</span>
                  </label>
                </li>
                <li class="product-size-item">
                  <label for="size-45.5" class="product-size-label">
                    <input
                      type="checkbox"
                      name=""
                      id="size-45.5"
                      class="product-size-input"
                    />
                    <span class="product-size-number">45.5</span>
                  </label>
                </li>
              </ul>
            </div>

            <div class="product-group">
              <span class="product-title">Giá sản phẩm</span>
              <ul class="product-price">
                <li class="product-price-item">
                  <input
                    type="checkbox"
                    name=""
                    id="price-duoi1000000 product-price-input"
                    class="product-price-input"
                  />
                  <label
                    for="product-price-input"
                    class="product-price-label"
                    >Giá dưới 1.000.000đ</label
                  >
                </li>

                <li class="product-price-item">
                  <input
                    type="checkbox"
                    name=""
                    id="price-duoi1000000 product-price-input"
                    class="product-price-input"
                  />
                  <label
                    for="product-price-input"
                    class="product-price-label"
                    >Giá dưới 1.000.000đ</label
                  >
                </li>

                <li class="product-price-item">
                  <input
                    type="checkbox"
                    name=""
                    id="price-duoi1000000 product-price-input"
                    class="product-price-input"
                  />
                  <label
                    for="product-price-input"
                    class="product-price-label"
                    >Giá dưới 1.000.000đ</label
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="product-right">
          <div class="product-category-list">
          <!-- Hien thi san pham -->
          </div>
          <div class="product-single"></div>
          <div class="page">

          </div>
         
        </div>
      </div>



     


    </div>
  </section>
  `;
  container.innerHTML = template;
  // innerDetailProduct();
  innerPage2();
}

function innerNewsPage() {
  const template = `
  <section class="banner">
    <div class="banner-top">
      <img src="./images/slider-img.jpg" alt="" class="banner-image" />
      <div class="banner-content">
        <div class="banner-content-heading">Đơn hàng</div>
        <ul class="banner-content-list">
          <li class="banner-content-item" onclick="innerHomePage();">
            Trang chủ
          </li>
          <li class="banner-content-item" onclick="innerNewsPage();showbill()">
            Đơn hàng
          </li>
        </ul>
      </div>
    </div>
  </section>
  <!----------------------------- New ------------------------------->
  <section class="news">
    <div class="container">
    <h2 class="bill-title">DANH SÁCH ĐƠN HÀNG</h2>
    <div id="bill">
    <!--Hien thi hoa don-->
    </div>
    </div>
  </section>
  `;
  container.innerHTML = template;
}

function innerNewsPageAdmin() {
  const template = `
  <section class="banner">
    <div class="banner-top">
      <img src="./images/slider-img.jpg" alt="" class="banner-image" />
      <div class="banner-content">
        <div class="banner-content-heading">Đơn hàng</div>
        <ul class="banner-content-list">
          <li class="banner-content-item" onclick="innerHomePage();">
            Trang chủ
          </li>
          <li class="banner-content-item" onclick="innerNewsPageAdmin();showbill()">
            Đơn hàng
          </li>
        </ul>
      </div>
    </div>
  </section>
  <!----------------------------- New ------------------------------->
  <section class="news">
    <div class="container">
    <h2 class="bill-title">DANH SÁCH ĐƠN HÀNG</h2>
    <div class="bill-list-table">
    <table>
        <tr>
            <th>Mã đơn hàng</th>
            <th>Tên khách hàng</th>
            <th>Ngày xuất đơn</th>
            <th>Tình trạng</th>
        </tr>
    </table>
    <table id="bill-list-perform">
    <!--Hien thi danh sach khách hàng đặt-->
    </table>
</div>
<div class="bill-list-detail" id="bill-list-detail">
    <!-- CHI TIẾT ĐƠN HÀNG -->
</div>
    </div>
  </section>
  `;
  container.innerHTML = template;
  showBillList();
}

function innerContactPage() {
  const template = `
  <section class="banner">
    <div class="banner-top">
      <img src="./images/slider-img.jpg" alt="" class="banner-image" />
      <div class="banner-content">
        <div class="banner-content-heading">Liên hệ</div>
        <ul class="banner-content-list">
        <li class="banner-content-item" onclick="innerHomePage();">
        Trang chủ
      </li>
          <li class="banner-content-item" onclick="innerContactPage();">
          Liên hệ
          </li>
        </ul>
      </div>
    </div>
  </section>

  <!----------------------------- Contact ------------------------------->
  <section class="contact">
    <div class="container">
      <div class="contact-main">
        <h2 class="contact-heading">Liên hệ chúng tôi</h2>
        <p class="contact-desc">
          Để liên hệ và nhận các thông tin khuyến mãi sớm nhất, Chúng tôi sẽ
          liên lạc với bạn trong thời gian sớm nhất
        </p>
        <form class="contact-form">
          <div class="contact-form-group">
            <label for="name" class="contact-form-label">Họ và tên</label>
            <input
              type="text"
              class="contact-form-input"
              id="name"
              required
              placeholder="Nhập họ và tên"
            />
          </div>
          <div class="contact-form-group">
            <label for="email" class="contact-form-label">Email</label>
            <input
              type="email"
              class="contact-form-input"
              id="email"
              required
              placeholder="Nhập địa chỉ email"
            />
          </div>
          <div class="contact-form-group">
            <label for="text" class="contact-form-label">Điện Thoại</label>
            <input
              type="text"
              class="contact-form-input"
              id="text"
              required
              placeholder="Nhập số điện thoại"
            />
          </div>
          <div class="contact-form-group">
            <label for="text" class="contact-form-label">Nội dung</label>
            <input
              type="text"
              class="contact-form-input"
              id="text"
              required
              placeholder="Nhập nội dung liên hệ"
            />
          </div>
          <button class="contact-form-submit" type="submit">
            Gửi liên hệ ngay
          </button>
        </form>
      </div>
       
    </div>
  </section>
  `;
  container.innerHTML = template;
}

function innerLoginPage() {
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

  <!----------------------------- Login ------------------------------->
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
  checklogin();
  loginfrm();
}

function innerLoginPageAdmin() {
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

  <!----------------------------- Login ------------------------------->
  <section class="login">
    <div class="container" id="login-container">

    <div class="loginsuccess-wrapper">
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
       <span class="hoten-rep">ADMIN</span>
     </div>
     <div class="right-group">
       <span class="Email">Email: </span>
       <span class="Email-rep">admin@gmail.com</span>
     </div>
     <div class="right-group">
       <span class="sdt">Số điện thoại: </span>
       <span class="sdt-rep">0815147600</span>
     </div>
     <div class="right-group">
       <span class="date">Ngày đăng ký: </span>
       <span class="date-rep">20-11-2022</span>
     </div>
     <div class="right-group">
       <span class="matkhau">Password: </span>
       <span class="matkhau-rep " type="password">12345678</span>
     </div>
    </div>
   </div>

    </div>
  </section>
  `;
  container.innerHTML = template;
  document.querySelector(".loginsuccess-wrapper").style.display = "flex";
}

function innerRegisterPage() {
  const template = `
  <section class="banner">
    <div class="banner-top">
      <img src="./images/slider-img.jpg" alt="" class="banner-image" />
      <div class="banner-content">
        <div class="banner-content-heading">Đăng ký tài khoảng</div>
        <ul class="banner-content-list">
          <li class="banner-content-item" onclick="innerHomePage();">
            Trang chủ
          </li>
          <li class="banner-content-item" onclick="innerRegisterPage();">
            Đăng ký tài khoảng
          </li>
        </ul>
      </div>
    </div>
  </section>
  <section class="register">
    <div class="container">
      <div class="register-wrapper">
        <ul class="register-menu-list">
          <li class="register-menu-item" onclick="innerLoginPage();">
            Đăng nhập
          </li>
          <li class="register-menu-item" onclick="innerRegisterPage();">
            Đăng ký
          </li>
        </ul>

        <form action="" class="register-form">
          <div class="register-form-group">
            <label for="name" class="register-form-label">Họ</label>
            <input
              type="text"
              class="register-form-input"
              id="fname"
              required
              placeholder="Nhập họ"
            />
            <span class="error-fname">Họ không hợp lệ vui lòng nhập lại</span>
          </div>
          <div class="register-form-group">
            <label for="text" class="register-form-label"
              >Số điện thoại</label
            >
            <input
              type="text"
              class="register-form-input"
              id="text"
              required
              placeholder="Nhập số điện thoại"
            />
            <span class="error-phone">Số điện thoại không hợp lệ vui lòng nhập lại</span>
          </div>
          <div class="register-form-group">
            <label for="name" class="register-form-label">Tên</label>
            <input
              type="text"
              class="register-form-input"
              id="name"
              required
              placeholder="Nhập tên"
            />
            <span class="error-name">Tên không hợp lệ vui lòng nhập lại</span>
          </div>
          <div class="register-form-group">
            <label for="email" class="register-form-label">Email</label>
            <input
              type="email"
              class="register-form-input"
              id="email"
              required
              placeholder="Nhập địa chỉ email"
            />
            <span class="error-email">Email không hợp lệ vui lòng nhập lại</span>
          </div>
          <div class="register-form-group">
            <label for="password" class="register-form-label"
              >Mật khẩu</label
            >
            <input
              type="password"
              class="register-form-input"
              id="password"
              required
              placeholder="Nhập mật khẩu"
            />
            <span class="error-pass">Mật khẩu không hợp lệ vui lòng nhập lại</span>
          </div>
          <button class="register-form-submit" type="submit" id="register-form-submit">
            Tạo tài khoản
          </button>
        </form>
      </div>
    </div>
  </section>
  `;
  container.innerHTML = template;

  registerfrm();
}
