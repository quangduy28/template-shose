window.onload = innerHomePage();
function innerHomePage() {
  const container = document.querySelector("#container");
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
