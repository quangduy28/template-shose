// window.onload = innerHomePage();
const container = document.querySelector("#container");
function innerHomePage() {
  const template = `
    <!----------------------------- Slider ------------------------------->
    <section class="slider">
      <div class="slider-content">
        <img src="./images/banner3.jpg" alt="" class="slider-image" />
      </div>
    </section>

    <!----------------------------- Content ------------------------------->

    <section class="content">
      <div class="container">
        <div class="content-title">
          <span class="content-heading">Sneaker</span>
          <span class="content-desc"
            >Album feedback của khách hàng về Nike Shoes</span
          >
        </div>
        <div class="content-list">
          <div class="content-item">
            <img src="./images/shoes-1.png" alt="" class="content-image" />
          </div>
          <div class="content-item">
            <img src="./images/shoes-2.jfif" alt="" class="content-image" />
          </div>
          <div class="content-item">
            <img src="./images/shoes-3.jfif" alt="" class="content-image" />
          </div>
          <div class="content-item">
            <img src="./images/shoes-5.jfif" alt="" class="content-image" />
          </div>
          <div class="content-item">
            <img src="./images/shoes-6.jfif" alt="" class="content-image" />
          </div>
          <div class="content-item">
            <img src="./images/shoes-7.jfif" alt="" class="content-image" />
          </div>
          <div class="content-item">
            <img src="./images/shoes-8.jfif" alt="" class="content-image" />
          </div>
          <div class="content-item">
            <img src="./images/shoes-4.jfif" alt="" class="content-image" />
          </div>
        </div>
      </div>
    </section>

    <!----------------------------- News ------------------------------->
    <section class="news">
      <div class="container">
        <div class="content-title">
          <span class="content-heading">Tin Tức</span>
          <span class="content-desc">
            Tổng hợp tin tức, mẹo vặt cho bạn
          </span>
        </div>
        <div class="news-list">
          <div class="news-item">
            <img src="./images/shoes-2.jfif" alt="" class="news-image" />
            <div class="news-content">
              <h2 class="news-heading">
                King James mang đôi OFF-WHITE x Nike Air Force 1 University
                Yellow của Virgil Abloh có gì đặc biệt?
              </h2>
              <span class="news-author">Phan Quang Duy</span>
              <span class="news-date">Ngày 15/10/2022</span>
              <p class="news-desc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Maxime impedit velit suscipit quasi quos iste porro omnis
                libero magni, ut quas nisi voluptatem? Earum deserunt quaerat
                iste delectus assumenda quidem?
              </p>
            </div>
          </div>

          <div class="news-item">
            <img src="./images/shoes-2.jfif" alt="" class="news-image" />
            <div class="news-content">
              <h2 class="news-heading">
                King James mang đôi OFF-WHITE x Nike Air Force 1 University
                Yellow của Virgil Abloh có gì đặc biệt?
              </h2>
              <span class="news-author">Phan Quang Duy</span>
              <span class="news-date">Ngày 15/10/2022</span>
              <p class="news-desc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Maxime impedit velit suscipit quasi quos iste porro omnis
                libero magni, ut quas nisi voluptatem? Earum deserunt quaerat
                iste delectus assumenda quidem?
              </p>
            </div>
          </div>

          <div class="news-item">
            <img src="./images/shoes-2.jfif" alt="" class="news-image" />
            <div class="news-content">
              <h2 class="news-heading">
                King James mang đôi OFF-WHITE x Nike Air Force 1 University
                Yellow của Virgil Abloh có gì đặc biệt?
              </h2>
              <span class="news-author">Phan Quang Duy</span>
              <span class="news-date">Ngày 15/10/2022</span>
              <p class="news-desc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Maxime impedit velit suscipit quasi quos iste porro omnis
                libero magni, ut quas nisi voluptatem? Earum deserunt quaerat
                iste delectus assumenda quidem?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    `;
  container.innerHTML = template;
}

function innerIntroducePage() {
  const template = `
  <!----------------------------- Banner ------------------------------->
      <section class="banner">
        <div class="banner-top">
          <img src="./images/slider-img.jpg" alt="" class="banner-image" />
          <div class="banner-content">
            <div class="banner-content-heading">Giới thiệu</div>
            <ul class="banner-content-list">
              <li class="banner-content-item" onclick="innerHomePage();">
                Trang chủ
              </li>
              <li class="banner-content-item" onclick="innerIntroducePage();">
                Giới thiệu
              </li>
            </ul>
          </div>
        </div>
      </section>

  <!----------------------------- introduce ------------------------------->
  <section class="introduce">
    <div class="container">
      <h2 class="introduce-top">Giới thiệu</h2>
      <p class="introduce-bottom">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        et soluta accusamus, assumenda, amet nihil, consectetur doloremque
        nesciunt quas consequatur perspiciatis veritatis similique iure! Nam
        repudiandae amet blanditiis porro dolor? Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Recusandae assumenda, soluta amet
        voluptas corporis praesentium! Deserunt id, quos ex assumenda, esse
        debitis eveniet quisquam perferendis, doloribus iusto
        necessitatibus. Assumenda, beatae.
      </p>
      <p class="introduce-bottom">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        et soluta accusamus, assumenda, amet nihil, consectetur doloremque
        nesciunt quas consequatur perspiciatis veritatis similique iure! Nam
        repudiandae amet blanditiis porro dolor? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Delectus libero, ipsa labore
        voluptatum dolor velit laborum, rem a saepe iusto ab? Mollitia fuga
        harum maiores repellendus hic esse sapiente laboriosam.
      </p>
    </div>
  </section>
  `;
  container.innerHTML = template;
}

function innerProductPage() {
  const template = `
  <!----------------------------- Banner ------------------------------->
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
  <!----------------------------- Product ------------------------------->
  <section class="product">
    <div class="container">
      <div class="product-content">
        <div class="product-left">
          <div class="product">
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
            <div class="product-category-item">
              <a href="#" class="product-category-link">
                <img
                  src="./images/shoes-1.png"
                  alt=""
                  class="product-category-image"
                />
              </a>
              <div class="product-category-info">
                <h3 class="product-category-heading">
                  <a href="#" class="product-category-name"
                    >Nike Air Force 1 07 LV8</a
                  >
                </h3>
                <span class="product-category-price">3.900.000</span>
              </div>
            </div>

            <div class="product-category-item">
              <a href="#" class="product-category-link">
                <img
                  src="./images/shoes-1.png"
                  alt=""
                  class="product-category-image"
                />
              </a>
              <div class="product-category-info">
                <h3 class="product-category-heading">
                  <a href="#" class="product-category-name"
                    >Nike Air Force 1 07 LV8</a
                  >
                </h3>
                <span class="product-category-price">3.900.000</span>
              </div>
            </div>

            <div class="product-category-item">
              <a href="#" class="product-category-link">
                <img
                  src="./images/shoes-1.png"
                  alt=""
                  class="product-category-image"
                />
              </a>
              <div class="product-category-info">
                <h3 class="product-category-heading">
                  <a href="#" class="product-category-name"
                    >Nike Air Force 1 07 LV8</a
                  >
                </h3>
                <span class="product-category-price">3.900.000</span>
              </div>
            </div>

            <div class="product-category-item">
              <a href="#" class="product-category-link">
                <img
                  src="./images/shoes-1.png"
                  alt=""
                  class="product-category-image"
                />
              </a>
              <div class="product-category-info">
                <h3 class="product-category-heading">
                  <a href="#" class="product-category-name"
                    >Nike Air Force 1 07 LV8</a
                  >
                </h3>
                <span class="product-category-price">3.900.000</span>
              </div>
            </div>

            <div class="product-category-item">
              <a href="#" class="product-category-link">
                <img
                  src="./images/shoes-1.png"
                  alt=""
                  class="product-category-image"
                />
              </a>
              <div class="product-category-info">
                <h3 class="product-category-heading">
                  <a href="#" class="product-category-name"
                    >Nike Air Force 1 07 LV8</a
                  >
                </h3>
                <span class="product-category-price">3.900.000</span>
              </div>
            </div>

            <div class="product-category-item">
              <a href="#" class="product-category-link">
                <img
                  src="./images/shoes-1.png"
                  alt=""
                  class="product-category-image"
                />
              </a>
              <div class="product-category-info">
                <h3 class="product-category-heading">
                  <a href="#" class="product-category-name"
                    >Nike Air Force 1 07 LV8</a
                  >
                </h3>
                <span class="product-category-price">3.900.000</span>
              </div>
            </div>

            <div class="product-category-item">
              <a href="#" class="product-category-link">
                <img
                  src="./images/shoes-1.png"
                  alt=""
                  class="product-category-image"
                />
              </a>
              <div class="product-category-info">
                <h3 class="product-category-heading">
                  <a href="#" class="product-category-name"
                    >Nike Air Force 1 07 LV8</a
                  >
                </h3>
                <span class="product-category-price">3.900.000</span>
              </div>
            </div>

            <div class="product-category-item">
              <a href="#" class="product-category-link">
                <img
                  src="./images/shoes-1.png"
                  alt=""
                  class="product-category-image"
                />
              </a>
              <div class="product-category-info">
                <h3 class="product-category-heading">
                  <a href="#" class="product-category-name"
                    >Nike Air Force 1 07 LV8</a
                  >
                </h3>
                <span class="product-category-price">3.900.000</span>
              </div>
            </div>

            <div class="product-category-item">
              <a href="#" class="product-category-link">
                <img
                  src="./images/shoes-1.png"
                  alt=""
                  class="product-category-image"
                />
              </a>
              <div class="product-category-info">
                <h3 class="product-category-heading">
                  <a href="#" class="product-category-name"
                    >Nike Air Force 1 07 LV8</a
                  >
                </h3>
                <span class="product-category-price">3.900.000</span>
              </div>
            </div>

            <div class="product-category-item">
              <a href="#" class="product-category-link">
                <img
                  src="./images/shoes-1.png"
                  alt=""
                  class="product-category-image"
                />
              </a>
              <div class="product-category-info">
                <h3 class="product-category-heading">
                  <a href="#" class="product-category-name"
                    >Nike Air Force 1 07 LV8</a
                  >
                </h3>
                <span class="product-category-price">3.900.000</span>
              </div>
            </div>

            <div class="product-category-item">
              <a href="#" class="product-category-link">
                <img
                  src="./images/shoes-1.png"
                  alt=""
                  class="product-category-image"
                />
              </a>
              <div class="product-category-info">
                <h3 class="product-category-heading">
                  <a href="#" class="product-category-name"
                    >Nike Air Force 1 07 LV8</a
                  >
                </h3>
                <span class="product-category-price">3.900.000</span>
              </div>
            </div>

            <div class="product-category-item">
              <a href="#" class="product-category-link">
                <img
                  src="./images/shoes-1.png"
                  alt=""
                  class="product-category-image"
                />
              </a>
              <div class="product-category-info">
                <h3 class="product-category-heading">
                  <a href="#" class="product-category-name"
                    >Nike Air Force 1 07 LV8</a
                  >
                </h3>
                <span class="product-category-price">3.900.000</span>
              </div>
            </div>
          </div>
          <div class="product-category-page"></div>
        </div>
      </div>
      <i class="fa-solid fa-filter product-filter"></i>
    </div>
  </section>
  `;
  container.innerHTML = template;
}

function innerNewsPage() {
  const template = `
  <!----------------------------- Banner ------------------------------->
  <section class="banner">
    <div class="banner-top">
      <img src="./images/slider-img.jpg" alt="" class="banner-image" />
      <div class="banner-content">
        <div class="banner-content-heading">Tin tức</div>
        <ul class="banner-content-list">
          <li class="banner-content-item" onclick="innerHomePage();">
            Trang chủ
          </li>
          <li class="banner-content-item" onclick="innerNewsPage();">
            Tin tức
          </li>
        </ul>
      </div>
    </div>
  </section>
  <!----------------------------- New ------------------------------->
  <section class="news">
    <div class="container">
      <div class="news-list">
        <div class="news-item">
          <img src="./images/shoes-2.jfif" alt="" class="news-image" />
          <div class="news-content">
            <h2 class="news-heading">
              King James mang đôi OFF-WHITE x Nike Air Force 1 University
              Yellow của Virgil Abloh có gì đặc biệt?
            </h2>
            <span class="news-author">Phan Quang Duy</span>
            <span class="news-date">Ngày 15/10/2022</span>
            <p class="news-desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Maxime impedit velit suscipit quasi quos iste porro omnis
              libero magni, ut quas nisi voluptatem? Earum deserunt quaerat
              iste delectus assumenda quidem?
            </p>
          </div>
        </div>

        <div class="news-item">
          <img src="./images/shoes-2.jfif" alt="" class="news-image" />
          <div class="news-content">
            <h2 class="news-heading">
              King James mang đôi OFF-WHITE x Nike Air Force 1 University
              Yellow của Virgil Abloh có gì đặc biệt?
            </h2>
            <span class="news-author">Phan Quang Duy</span>
            <span class="news-date">Ngày 15/10/2022</span>
            <p class="news-desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Maxime impedit velit suscipit quasi quos iste porro omnis
              libero magni, ut quas nisi voluptatem? Earum deserunt quaerat
              iste delectus assumenda quidem?
            </p>
          </div>
        </div>

        <div class="news-item">
          <img src="./images/shoes-2.jfif" alt="" class="news-image" />
          <div class="news-content">
            <h2 class="news-heading">
              King James mang đôi OFF-WHITE x Nike Air Force 1 University
              Yellow của Virgil Abloh có gì đặc biệt?
            </h2>
            <span class="news-author">Phan Quang Duy</span>
            <span class="news-date">Ngày 15/10/2022</span>
            <p class="news-desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Maxime impedit velit suscipit quasi quos iste porro omnis
              libero magni, ut quas nisi voluptatem? Earum deserunt quaerat
              iste delectus assumenda quidem?
            </p>
          </div>
        </div>

        <div class="news-item">
          <img src="./images/shoes-2.jfif" alt="" class="news-image" />
          <div class="news-content">
            <h2 class="news-heading">
              King James mang đôi OFF-WHITE x Nike Air Force 1 University
              Yellow của Virgil Abloh có gì đặc biệt?
            </h2>
            <span class="news-author">Phan Quang Duy</span>
            <span class="news-date">Ngày 15/10/2022</span>
            <p class="news-desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Maxime impedit velit suscipit quasi quos iste porro omnis
              libero magni, ut quas nisi voluptatem? Earum deserunt quaerat
              iste delectus assumenda quidem?
            </p>
          </div>
        </div>

        <div class="news-item">
          <img src="./images/shoes-2.jfif" alt="" class="news-image" />
          <div class="news-content">
            <h2 class="news-heading">
              King James mang đôi OFF-WHITE x Nike Air Force 1 University
              Yellow của Virgil Abloh có gì đặc biệt?
            </h2>
            <span class="news-author">Phan Quang Duy</span>
            <span class="news-date">Ngày 15/10/2022</span>
            <p class="news-desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Maxime impedit velit suscipit quasi quos iste porro omnis
              libero magni, ut quas nisi voluptatem? Earum deserunt quaerat
              iste delectus assumenda quidem?
            </p>
          </div>
        </div>

        <div class="news-item">
          <img src="./images/shoes-2.jfif" alt="" class="news-image" />
          <div class="news-content">
            <h2 class="news-heading">
              King James mang đôi OFF-WHITE x Nike Air Force 1 University
              Yellow của Virgil Abloh có gì đặc biệt?
            </h2>
            <span class="news-author">Phan Quang Duy</span>
            <span class="news-date">Ngày 15/10/2022</span>
            <p class="news-desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Maxime impedit velit suscipit quasi quos iste porro omnis
              libero magni, ut quas nisi voluptatem? Earum deserunt quaerat
              iste delectus assumenda quidem?
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  `;
  container.innerHTML = template;
}

function innerContactPage() {
  const template = `
  <!----------------------------- Banner ------------------------------->
  <section class="banner">
    <div class="banner-top">
      <img src="./images/slider-img.jpg" alt="" class="banner-image" />
      <div class="banner-content">
        <div class="banner-content-heading">Liên hệ</div>
        <ul class="banner-content-list">
          <li class="banner-content-item">
            <a href="index.html" class="banner-content-link">Trang chủ</a>
          </li>
          <li class="banner-content-item">
            <a href="contact.html" class="banner-content-link">Liên hệ</a>
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
