function innerPage() {
  const product = [
    {
      id: 1,
      image: "./images/shoes-1.png",
      title: "Giày Adidas Ultraboost DNA SEA CITY PACK THAILAND",
      price: "3.900.000",
    },
    {
      id: 2,
      image: "./images/shoes-2.jfif",
      title: "Giày Adidas Ultraboost DNA SEA CITY PACK THAILAND",
      price: "3.900.000",
    },
    {
      id: 3,
      image: "./images/shoes-3.jfif",
      title: "Giày Adidas Ultraboost DNA SEA CITY PACK THAILAND",
      price: "3.900.000",
    },
    {
      id: 4,
      image: "./images/shoes-4.jfif",
      title: "Giày Adidas Ultraboost DNA SEA CITY PACK THAILAND",
      price: "3.900.000",
    },
    {
      id: 5,
      image: "./images/shoes-5.jfif",
      title: "Giày Adidas Ultraboost DNA SEA CITY PACK THAILAND",
      price: "3.900.000",
    },
    {
      id: 6,
      image: "./images/shoes-6.jfif",
      title: "Giày Adidas Ultraboost DNA SEA CITY PACK THAILAND",
      price: "3.900.000",
    },
    {
      id: 7,
      image: "./images/shoes-7.jfif",
      title: "Giày Adidas Ultraboost DNA SEA CITY PACK THAILAND",
      price: "3.900.000",
    },
    {
      id: 8,
      image: "./images/shoes-8.jfif",
      title: "Giày Adidas Ultraboost DNA SEA CITY PACK THAILAND",
      price: "3.900.000",
    },
    {
      id: 9,
      image: "./images/shoes-1.png",
      title: "Giày Adidas Ultraboost DNA SEA CITY PACK THAILAND",
      price: "3.900.000",
    },
    {
      id: 10,
      image: "./images/shoes-1.png",
      title: "Giày Adidas Ultraboost DNA SEA CITY PACK THAILAND",
      price: "3.900.000",
    },
    {
      id: 11,
      image: "./images/shoes-1.png",
      title: "Giày Adidas Ultraboost DNA SEA CITY PACK THAILAND",
      price: "3.900.000",
    },
    {
      id: 12,
      image: "./images/shoes-1.png",
      title: "Giày Adidas Ultraboost DNA SEA CITY PACK THAILAND",
      price: "3.900.000",
    },
  ];
  let perPage = 9;
  let currentPage = 1;
  let start = 0;
  let end = perPage;

  function renderProduct() {
    if (index >= start && index < end) {
      product.forEach((item, index) => {
        const template = `
        <div class="product-category-item">
        <img
        src="${item.image}"
        alt=""
        class="product-category-image"
        />
        <div class="product-category-info">
        <h3 class="product-category-heading">${item.title}</h3>
        <span class="product-category-price">${item.price}</span>
        </div>
        </div>
        `;
        console.log(template);
        const productCategoryList = document.querySelector(
          ".product-category-list"
        );
        productCategoryList.innerHTML = template;
      });
    }
  }
  renderProduct();
}
