const ListUsers = "list-users";
const listProducts = "list-products";
const listProductCatogrey = "list-product-catogrey";
const productsPerPage = 8; // Số sản phẩm trên mỗi trang
let currentPage = 1; // Trang hiện tại
// ----
const registerBtn = document.querySelector(".registerBtn");
const loginBtn = document.querySelector(".loginBtn");
const modalRegister = document.querySelector("#myModalRegister");
const modalLogin = document.querySelector("#myModalLogin");
const btnOpenRegister = document.querySelector(".register-open_btn");
const btnOpenLogin = document.querySelector(".login-open_btn");
const closeFormBtn = document.querySelectorAll(".closeForm");
const btnProductclose = document.querySelector(".product-close");
const bodytop__left = document.querySelector(".bodytop__left");
const bodytop__right = document.querySelector(".bodytop__right");
const productContainerMain = document.querySelector(".product_container");
const productContainter = document.querySelector(".product-containter");
const verticalmenu = document.getElementsByClassName("verticalmenu");
const producttype__name = document.querySelector(".producttype__name");
const producttype = document.querySelector(".producttype");
const pageNumber = document.querySelector(".pagenumber");
var userList = [];
// Modal
const inputUsernameSignUp = document.querySelector(".input-username_signup");
const inputPasswordSignup = document.querySelector(".input-password_signup");
const inputEmailSignUp = document.querySelector(".input-email_signup");
const fillPassSignup = document.querySelector("#fillpassword");
// Onload
const currentPath = window.location.pathname; // Đường dẫn hiện tại (vd: /index.html)
const currentQuery = window.location.search; // Query string hiện tại (vd: ?tc)

// Kiểm tra nếu đang ở index.html và chưa có query string
if (currentPath.endsWith("index.html") && currentQuery === "") {
  const newUrl = currentPath + "?tc"; // Thêm ?tc vào URL
  window.location.replace(newUrl); // Chuyển hướng tới index.html?tc
}
createProductCatogrey();
verticalMenu();
createProducts();
createAdmin();
displayMenu();
var filterProductList = JSON.parse(localStorage.getItem(listProducts));

// Tạo Admin
function createAdmin() {
  if (localStorage.getItem(ListUsers) === null) {
    let user = {
      username: "admin",
      email: "admin@gmail.com",
      password: "admin",
      id: 1,
      cart: [],
      dateSignUp: "18/11/2024",
    };
    userList.push(user);
    localStorage.setItem(ListUsers, JSON.stringify(userList));
  }
}

// Tạo danh sách sản phẩm
function createProducts() {
  if (localStorage.getItem(listProducts) === null) {
    var productArray = [
      {
        name: "Naruto - 01",
        code: "LM0001",
        price: 30000,
        imgSrc: "./assets/img/lego-minifigure/mini-01.png",
        topic: "Naruto",
        quantity: 100,
      },
      {
        name: "Naruto - 02",
        code: "LM0002",
        price: 25000,
        imgSrc: "./assets/img/lego-minifigure/mini-02.png",
        topic: "Naruto",
        quantity: 100,
      },
      {
        name: "Minato - 03",
        code: "LM0003",
        price: 29500,
        imgSrc: "./assets/img/lego-minifigure/mini-03.png",
        topic: "Naruto",
        quantity: 100,
      },
      {
        name: "Sasuke - 04",
        code: "LM0004",
        price: 23500,
        imgSrc: "./assets/img/lego-minifigure/mini-04.png",
        topic: "Naruto",
        quantity: 100,
      },
      {
        name: "Boruto - 05",
        code: "LM0005",
        price: 25500,
        imgSrc: "./assets/img/lego-minifigure/mini-05.png",
        topic: "Naruto",
        quantity: 100,
      },
      {
        name: "Itachi - 06",
        code: "LM0006",
        price: 29900,
        imgSrc: "./assets/img/lego-minifigure/mini-06.png",
        topic: "Naruto",
        quantity: 100,
      },
      {
        name: "Obito - 07",
        code: "LM0007",
        price: 31000,
        imgSrc: "./assets/img/lego-minifigure/mini-07.png",
        topic: "Naruto",
        quantity: 100,
      },
      {
        name: "Kakashi - 08",
        code: "LM0008",
        price: 21000,
        imgSrc: "./assets/img/lego-minifigure/mini-08.png",
        topic: "Naruto",
        quantity: 100,
      },
      {
        name: "Sasori - 09",
        code: "LM0009",
        price: 18000,
        imgSrc: "./assets/img/lego-minifigure/mini-09.png",
        topic: "Naruto",
        quantity: 100,
      },
      {
        name: "Sasuke - 10",
        code: "LM0010",
        price: 16000,
        imgSrc: "./assets/img/lego-minifigure/mini-10.png",
        topic: "Naruto",
        quantity: 100,
      },
      {
        name: "Naruto - 11",
        code: "LM0011",
        price: 15000,
        imgSrc: "./assets/img/lego-minifigure/mini-11.png",
        topic: "Naruto",
        quantity: 100,
      },
      {
        name: "Naruto - 12",
        code: "LM0012",
        price: 20000,
        imgSrc: "./assets/img/lego-minifigure/mini-12.png",
        topic: "Naruto",
        quantity: 100,
      },
      {
        name: "Jiraiya - 13",
        code: "LM0013",
        price: 19000,
        imgSrc: "./assets/img/lego-minifigure/mini-13.png",
        topic: "Naruto",
        quantity: 100,
      },
      {
        name: "Sarada - 14",
        code: "LM0014",
        price: 30000,
        imgSrc: "./assets/img/lego-minifigure/mini-14.png",
        topic: "Naruto",
        quantity: 100,
      },
      {
        name: "Naruto - 15",
        code: "LM0015",
        price: 26000,
        imgSrc: "./assets/img/lego-minifigure/mini-15.png",
        topic: "Naruto",
        quantity: 100,
      },
      {
        name: "Naruto - 16",
        code: "LM0016",
        price: 23000,
        imgSrc: "./assets/img/lego-minifigure/mini-16.png",
        topic: "Naruto",
        quantity: 100,
      },
      {
        name: "Awp Asiimov",
        code: "MO0001",
        price: 1899000,
        imgSrc: "./assets/img/lego-moc/moc-01.jpg",
        topic: "Army",
        quantity: 100,
      },
      {
        name: "HK G28",
        code: "MO0002",
        price: 1699000,
        imgSrc: "./assets/img/lego-moc/moc-02.png",
        topic: "Army",
        quantity: 100,
      },
      {
        name: "Scar-L Asiimov",
        code: "MO0003",
        price: 1698000,
        imgSrc: "./assets/img/lego-moc/moc-03.png",
        topic: "Army",
        quantity: 100,
      },
      {
        name: "Sniper XPR-50",
        code: "MO0004",
        price: 1689000,
        imgSrc: "./assets/img/lego-moc/moc-04.png",
        topic: "Army",
        quantity: 100,
      },
      {
        name: "M4A1-S",
        code: "MO0005",
        price: 1399000,
        imgSrc: "./assets/img/lego-moc/moc-05.png",
        topic: "Army",
        quantity: 100,
      },
      {
        name: "AWM - 06",
        code: "MO0006",
        price: 1999000,
        imgSrc: "./assets/img/lego-moc/moc-06.png",
        topic: "Army",
        quantity: 100,
      },
      {
        name: "AWM - 07",
        code: "MO0007",
        price: 1929000,
        imgSrc: "./assets/img/lego-moc/moc-07.png",
        topic: "Army",
        quantity: 100,
      },
      {
        name: "AWM - 08",
        code: "MO0008",
        price: 1879000,
        imgSrc: "./assets/img/lego-moc/moc-08.png",
        topic: "Army",
        quantity: 100,
      },
      {
        name: "K-98",
        code: "MO0009",
        price: 1129000,
        imgSrc: "./assets/img/lego-moc/moc-09.png",
        topic: "Army",
        quantity: 100,
      },
      {
        name: "AWm - 10",
        code: "MO0010",
        price: 1983000,
        imgSrc: "./assets/img/lego-moc/moc-10.png",
        topic: "Army",
        quantity: 100,
      },
      {
        name: "M24",
        code: "MO0011",
        price: 1340000,
        imgSrc: "./assets/img/lego-moc/moc-11.png",
        topic: "Army",
        quantity: 100,
      },
      {
        name: "AWM - 12",
        code: "MO0012",
        price: 18940000,
        imgSrc: "./assets/img/lego-moc/moc-12.png",
        topic: "Army",
        quantity: 100,
      },
      {
        name: "AWM - 13",
        code: "MO0013",
        price: 1700000,
        imgSrc: "./assets/img/lego-moc/moc-14.png",
        topic: "Army",
        quantity: 100,
      },
      {
        name: "Scar",
        code: "MO0014",
        price: 1500000,
        imgSrc: "./assets/img/lego-moc/moc-15.png",
        topic: "Army",
        quantity: 100,
      },
      {
        name: "Siêu Xe Lamborghini Sian FKP 37",
        code: "LR0001",
        price: 12240000,
        imgSrc: "./assets/img/lego-technic/technic-01.png",
        topic: "Technic",
        quantity: 100,
      },
      {
        name: "Siêu Xe Ferrari Daytona SP3",
        code: "LR0002",
        price: 14200000,
        imgSrc: "./assets/img/lego-technic/technic-02.png",
        topic: "Technic",
        quantity: 100,
      },
      {
        name: "Xe mô tô thể thao Kawasaki Ninja H2®R",
        code: "LR0003",
        price: 1984000,
        imgSrc: "./assets/img/lego-technic/technic-03.png",
        topic: "Technic",
        quantity: 100,
      },
      {
        name: "Siêu Xe Lamborghini Huracán Tecnica",
        code: "LR0004",
        price: 1393000,
        imgSrc: "./assets/img/lego-technic/technic-04.png",
        topic: "Technic",
        quantity: 100,
      },
      {
        name: "Siêu Xe Lamborghini",
        code: "LR0005",
        price: 1990000,
        imgSrc: "./assets/img/lego-technic/technic-05.png",
        topic: "Technic",
        quantity: 100,
      },
      {
        name: "Siêu Xe Juggernaut Koenigsegg",
        code: "LR0006",
        price: 1780000,
        imgSrc: "./assets/img/lego-technic/technic-06.png",
        topic: "Technic",
        quantity: 100,
      },
      {
        name: "Siêu Xe Lamborghini Urus ST-X",
        code: "LR0007",
        price: 1290000,
        imgSrc: "./assets/img/lego-technic/technic-07.png",
        topic: "Technic",
        quantity: 100,
      },
      {
        name: "Siêu Xe Thể thao",
        code: "LR0008",
        price: 1738000,
        imgSrc: "./assets/img/lego-technic/technic-08.png",
        topic: "Technic",
        quantity: 100,
      },
      {
        name: "Siêu Xe Pagani màu tím",
        code: "LR0009",
        price: 1900000,
        imgSrc: "./assets/img/lego-technic/technic-09.png",
        topic: "Technic",
        quantity: 100,
      },
      {
        name: "Siêu Xe Lamborghini Aventador",
        code: "LR0010",
        price: 2100000,
        imgSrc: "./assets/img/lego-technic/technic-10.png",
        topic: "Technic",
        quantity: 100,
      },
      {
        name: "Siêu Xe Lamborghini",
        code: "LR0011",
        price: 2000000,
        imgSrc: "./assets/img/lego-technic/technic-11.png",
        topic: "Technic",
        quantity: 100,
      },
      {
        name: "Motor H2R",
        code: "LR0012",
        price: 1450000,
        imgSrc: "./assets/img/lego-technic/technic-12.png",
        topic: "Technic",
        quantity: 100,
      },
      {
        name: "Siêu xe vượt địa hình",
        code: "LR0013",
        price: 900000,
        imgSrc: "./assets/img/lego-technic/technic-13.png",
        topic: "Technic",
        quantity: 100,
      },
      {
        name: "Siêu Xe Yamaha RIM",
        code: "LR0014",
        price: 1390000,
        imgSrc: "./assets/img/lego-technic/technic-14.png",
        topic: "Technic",
        quantity: 100,
      },
      {
        name: "Siêu Xe Ducati",
        code: "LR0015",
        price: 1500000,
        imgSrc: "./assets/img/lego-technic/technic-15.png",
        topic: "Technic",
        quantity: 100,
      },
      {
        name: "Gạch Khớp Technic 2x2 Một Đầu Cái Bóng",
        code: "LP0001",
        price: 5000,
        imgSrc: "./assets/img/lego-part/part-01.png",
        topic: "Technic",
        quantity: 100,
      },
      {
        name: "Gạch Trơn Dẹt 1x1 Khuyết Góc",
        code: "LP0002",
        price: 2000,
        imgSrc: "./assets/img/lego-part/part-02.png",
        topic: "Technic",
        quantity: 100,
      },
      {
        name: "Thùng Nước Giải Khát Nước Ngọt",
        code: "LP0003",
        price: 11000,
        imgSrc: "./assets/img/lego-part/part-03.png",
        topic: "Food/Tool",
        quantity: 100,
      },
      {
        name: "COMBO 5 Vũ Khí Đẹp Sử Dụng Trong Ne-xo",
        code: "LP0004",
        price: 5000,
        imgSrc: "./assets/img/lego-part/part-04.png",
        topic: "Weapon",
        quantity: 100,
      },
      {
        name: "Đồ chơi trẻ em",
        code: "LP0005",
        price: 4200,
        imgSrc: "./assets/img/lego-part/part-05.png",
        topic: "Weapon",
        quantity: 100,
      },
      {
        name: "Kiếm Lego - 06",
        code: "LP0006",
        price: 4500,
        imgSrc: "./assets/img/lego-part/part-06.png",
        topic: "Weapon",
        quantity: 100,
      },
      {
        name: "Kiếm lego - 07",
        code: "LP0007",
        price: 4000,
        imgSrc: "./assets/img/lego-part/part-07.png",
        topic: "Weapon",
        quantity: 100,
      },
      {
        name: "Ly uống nước",
        code: "LP0008",
        price: 3000,
        imgSrc: "./assets/img/lego-part/part-08.png",
        topic: "Weapon",
        quantity: 100,
      },
      {
        name: "Máy xúc đồ chơi",
        code: "LP0009",
        price: 15000,
        imgSrc: "./assets/img/lego-part/part-09.png",
        topic: "Weapon",
        quantity: 100,
      },
      {
        name: "Máy xúc đồ chơi - 02",
        code: "LP0010",
        price: 11000,
        imgSrc: "./assets/img/lego-part/part-10.png",
        topic: "Weapon",
        quantity: 100,
      },
      {
        name: "Sao biển lego",
        code: "LP0011",
        price: 8000,
        imgSrc: "./assets/img/lego-part/part-11.png",
        topic: "Weapon",
        quantity: 100,
      },
      {
        name: "Nhà đồ chơi",
        code: "LP0012",
        price: 52000,
        imgSrc: "./assets/img/lego-part/part-12.png",
        topic: "Weapon",
        quantity: 100,
      },
      {
        name: "Hoa quả",
        code: "LP0013",
        price: 7000,
        imgSrc: "./assets/img/lego-part/part-13.png",
        topic: "Weapon",
        quantity: 100,
      },
      {
        name: "Cối xay gió",
        code: "LP0014",
        price: 12000,
        imgSrc: "./assets/img/lego-part/part-14.png",
        topic: "Weapon",
        quantity: 100,
      },
      {
        name: "Minion",
        code: "LP0015",
        price: 50000,
        imgSrc: "./assets/img/lego-part/part-15.png",
        topic: "Weapon",
        quantity: 100,
      },
    ];
    localStorage.setItem(listProducts, JSON.stringify(productArray));
  }
}

// Tạo danh sách danh mục
// Mảng chi tiết danh mục
function createProductCatogrey() {
  if (localStorage.getItem(listProductCatogrey) === null) {
    const productCatogrey = [
      {
        brandid: "LM",
        brandname: "Lego Minifigure",
        subcategories: [
          { id: "1", name: "Naruto" },
          { id: "2", name: "Dragon Ball" },
          { id: "3", name: "Kimetsu No Yaiba" },
          { id: "4", name: "Marvel" },
        ],
      },
      {
        brandid: "MO",
        brandname: "Lego MOC",
        subcategories: [
          { id: "1", name: "Army" },
          { id: "2", name: "Technic" },
        ],
      },
      {
        brandid: "LR",
        brandname: "Lego chính hãng",
        subcategories: [
          { id: "1", name: "Technic" },
          { id: "2", name: "Ninjago" },
        ],
      },
      {
        brandid: "LP",
        brandname: "Phụ kiện Lego",
        subcategories: [
          { id: "1", name: "Weap" },
          { id: "2", name: "Food/Tool" },
        ],
      },
    ];
    localStorage.setItem(listProductCatogrey, JSON.stringify(productCatogrey));
  }
}

// Tạo format html cho sản phẩm
function createProduct(product) {
  return `
    <div class="item">
      <div class="item__image">
        <img src="${product.imgSrc}" alt="${product.name}" class="images"/>
      </div>
      <div class="item__info">
        <div class="item__info-detail">
          <strong>Tên sản phẩm:</strong> ${product.name}
        </div>
        <div class="item__info-detail">
          <strong>Mã sản phẩm:</strong> ${product.code}
        </div>
        <div class="item__info-detail">
          <strong>Giá:</strong> ${product.price} VNĐ
        </div>
        <div class="item__info-detail">
          <strong>Chủ đề:</strong> ${product.topic}
        </div>
        <div class="item__info-detailend">
          <a href="#" class="item__info-link">Mua</a>
          <a href="#" class="item__info-link detail-btn" id ="${product.code}">Chi tiết</a>
        </div>
      </div>
    </div>
  `;
}

// Tạo format html cho chi tiết sản phẩm
function createProductDetail(product) {
  return `
      <img class="img"src="${product.imgSrc}" alt="" />
      <div class="content">
        <p class="content-detail"><strong>Tên sản phẩm:</strong> ${product.name}</p>
        <p class="content-detail"><strong>Mã sản phẩm:</strong> ${product.code}</p>
        <p class="content-detail"><strong>Chủ đề:</strong> ${product.topic}</p>
        <p class="content-detail"><strong>Giá tiền:</strong> ${product.price} VNĐ</p>
        <div class="product-quantity">
          <button class="quantity-btn">-</button>
          <input type="text" value="1" min="1" class="quantity-input">
          <button class="quantity-btn">+</button>
        </div>
        
        <button class="add-to-cart">Thêm Vào Giỏ</button>
      </div>`;
}

// Hiển thị modal của chi tiết sản phẩm
function displayProductDetail(e, product) {
  e.preventDefault();
  let s = "";
  let tempList = JSON.parse(localStorage.getItem(listProducts));
  let matchedProduct = tempList.find((item) => item.code === product.id);

  if (matchedProduct) {
    // Nếu tìm thấy sản phẩm, tạo nội dung chi tiết
    s = createProductDetail(matchedProduct);
    productContainter.innerHTML = s;
    productLayout.style.display = "block";
  } else {
    // Nếu không tìm thấy sản phẩm
    alert("Product not found");
  }
}

// Hiển thị Menu tổng
function displayMenu() {
  var url = window.location.href;
  var bien = url.split("?");
  console.log(bien);
  alert(bien[1]);

  switch (bien[1]) {
    case "tc":
      producttype__name.innerHTML = `<h3>Trang chủ</h3>`;
      displayMainPage();
      break;
    case "gt":
      producttype__name.innerHTML = `<h3>Giới thiệu</h3>`;
      displayAboutPage();
      break;
    case "sp":
      producttype__name.innerHTML = `<h3>Danh mục sản phẩm</h3>`;
      verticalmenu[1].style.display = "block";
      let tempList = JSON.parse(localStorage.getItem(listProducts));
      displayPageProduct(tempList, tempList.length);
      displayProducts(tempList, tempList.length);

      break;
    case "lh":
      producttype__name.innerHTML = `<h3>Liên hệ</h3>`;
      displayContactPage();
      break;
    case "adminwebsitelego":
      producttype__name.innerHTML = `<h3>Liên hệ</h3>`;
      break;
    default:
      const newUrl = currentPath + "?tc"; // Thêm ?tc vào URL
      window.location.replace(newUrl);
      break;
  }
}

// Vertical Menu
function verticalMenu() {
  let s = "";
  let listTemp = JSON.parse(localStorage.getItem(listProductCatogrey));
  const length = listTemp.length;

  if (length === 0) {
    s = "<li>Không có danh mục sản phẩm nào.</li>"; // Thông báo nếu không có sản phẩm
  } else {
    for (let i = 0; i < length; i++) {
      // Khai báo i với let
      s += `
              <li class="verticalmenu__detail-item">
                  <img
                    src="./assets/img/lego-icon-1.jpg"
                    alt=""
                    class="verticalmenu__detail-icon"
                  />
                  <a href="#" class="verticalmenu__detail-link vertical-btn" id="${listTemp[i].brandid}">
                    ${listTemp[i].brandname}
                  </a>
              </li>`;
    }
  }

  // Gộp lại thành danh sách
  s = `<div class="verticalmenu__detail"><ul class="verticalmenu__detail-list">${s}</ul></div>`;
  let s0 = `<div class="verticalmenu"> <div class="verticalmenu_title">
                <h3>
                  <i class="verticalmenu_title-icon fa-solid fa-bars"></i>
                  <span>DANH MỤC SẢN PHẨM</span>
                </h3>
              </div>`;

  s0 += s + `</div>` + verticalMenu1();
  bodytop__left.innerHTML = s0; // Gán nội dung vào phần tử
  verticalmenu[1].style.display = "none";

  let verticalBtn = document.querySelectorAll(".vertical-btn");
  verticalBtn.forEach((button) => {
    button.addEventListener("click", () => {
      displayProductsByBrand(button);
    });
  });
}

function verticalMenu1() {
  let s1 = `<div class="verticalmenu"> <div class="verticalmenu_title">
                <h3>
                  <i class="verticalmenu_title-icon fa-solid fa-bars"></i>
                  <span>TÌM KIẾM NÂNG CAO</span>
                </h3>
              </div>
              <!-- Chi tiết Vertical Menu -->
              <div class="verticalmenu__detail">
                  <form id="advanced-search-form">
          <!-- Tên sản phẩm -->
          <div class="form-group">
            <label for="search-name">Tên sản phẩm:</label>
            <input
              type="text"
              id="search-name"
              name="name"
              placeholder="Nhập tên sản phẩm"
            />
          </div>

          <!-- Phân loại -->
          <div class="form-group">
            <label for="search-category">Phân loại:</label>
            <select id="search-category" name="category">
              <option value="">Tất cả</option>
              <option value="electronics">Điện tử</option>
              <option value="fashion">Thời trang</option>
              <option value="home">Đồ gia dụng</option>
              <option value="other">Khác</option>
            </select>
          </div>

          <!-- Khoảng giá -->
          <div class="form-group">
            <label for="search-price-min">Khoảng giá:</label>
            <div class="price-range"> Từ
              <input
                type="number"
                id="search-price-min"
                name="price_min"
                placeholder="Thấp nhất"
              />
              Đến
              <input
                type="number"
                id="search-price-max"
                name="price_max"
                placeholder="Cao nhất"
              />
            </div>
          </div>
        </form>
              </div>
            </div>`;
  return s1;
}

const searchNameProduct = document.getElementById("search-name");
const searchMinPriceProduct = document.getElementById("search-price-min");
const searchMaxPriceProduct = document.getElementById("search-price-max");
//Filter các loại
function filterProductArrayByBrand(productArray, brandID) {
  return productArray.filter((item) => item.code.slice(0, 2) === brandID);
}

function filterProductArrayByName(productArray, namex) {
  let lowerCaseName = namex.toLowerCase(); // Chuyển tên tìm kiếm về chữ thường
  return productArray.filter((item) =>
    item.name.toLowerCase().includes(lowerCaseName)
  );
}

function filterProductArrayByMinPrice(productArray, min) {
  let minPrice = min;
  return productArray.filter((item) => item.price >= minPrice);
}

function filterProductArrayByMaxPrice(productArray, max) {
  let maxPrice = max;
  return productArray.filter((item) => item.price <= maxPrice);
}

function filterProducts() {
  let nameValue = searchNameProduct.value.trim(); // Giá trị tìm kiếm theo tên
  let minPriceValue = parseFloat(searchMinPriceProduct.value) || 0; // Giá trị tìm kiếm giá tối thiểu
  let maxPriceValue = parseFloat(searchMaxPriceProduct.value) || Infinity; // Giá trị tìm kiếm giá tối đa
  let tempList = JSON.parse(localStorage.getItem(listProducts));
  // Lọc sản phẩm dựa trên các điều kiện

  let filteredProducts = tempList.filter((product) => {
    // Điều kiện tên sản phẩm
    let matchesName =
      nameValue === "" ||
      product.name.toLowerCase().includes(nameValue.toLowerCase());
    // Điều kiện giá tối thiểu
    let matchesMinPrice = product.price >= minPriceValue;
    // Điều kiện giá tối đa
    let matchesMaxPrice = product.price <= maxPriceValue;
    // Điều kiện phân loại

    return matchesName && matchesMinPrice && matchesMaxPrice;
  });
  let length = filteredProducts.length;
  currentPage = 1;
  if (length > 0) {
    producttype__name.innerHTML = `<h3>Danh mục sản phẩm theo yêu cầu</h3>`;
    productContainerMain.style.display = "flex";
    pageNumber.style.display = "block";
    displayPageProduct(filteredProducts, length);
    displayProducts(filteredProducts, length);
  } else {
    producttype__name.innerHTML = `<h3>Không có sản phẩm theo yêu cầu`;
    productContainerMain.style.display = "none";
    pageNumber.style.display = "none";
  }
}

searchNameProduct.addEventListener("input", filterProducts);
searchMinPriceProduct.addEventListener("input", filterProducts);
searchMaxPriceProduct.addEventListener("input", filterProducts);

function clearSearchAdvance() {
  searchNameProduct.value = null;
  searchMinPriceProduct.value = null;
  searchMaxPriceProduct.value = null;
}

// Hiển thị sản phẩm theo tên
function displayProductsByName(name) {
  let tempList = JSON.parse(localStorage.getItem(listProducts));
  currentPage = 1; // Trang hiện tại
  let result = filterProductArrayByName(tempList, name);
  if (result.length == 0) {
    producttype__name.innerHTML = `<h3>Không có sản phẩm theo yêu cầu`;
    productContainerMain.style.display = "none";
    pageNumber.style.display = "none";
  } else {
    producttype__name.innerHTML = `<h3>Danh mục sản phẩm theo yêu cầu</h3>`;
    displayPageProduct(result, result.length);
    displayProducts(result, result.length);
  }
}

// Hiển thị sản phẩm theo giá lớn hơn min
function displayProductsByMinPrice(min) {
  let tempList = JSON.parse(localStorage.getItem(listProducts));
  currentPage = 1; // Trang hiện tại
  let result = filterProductArrayByMinPrice(tempList, min);
  if (result.length == 0) {
    producttype__name.innerHTML = `<h3>Không có sản phẩm theo yêu cầu`;
    productContainerMain.style.display = "none";
    pageNumber.style.display = "none";
  } else {
    producttype__name.innerHTML = `<h3>Danh mục sản phẩm theo yêu cầu</h3>`;
    productContainerMain.style.display = "flex";
    pageNumber.style.display = "block";
    displayPageProduct(result, result.length);
    displayProducts(result, result.length);
  }
}

// Hiển thị sản phẩm theo giá nhỏ hơn max
function displayProductsByMaxPrice(max) {
  let tempList = JSON.parse(localStorage.getItem(listProducts));
  currentPage = 1; // Trang hiện tại
  let result = filterProductArrayByMaxPrice(tempList, max);
  if (result.length == 0) {
    producttype__name.innerHTML = `<h3>Không có sản phẩm theo yêu cầu`;
    productContainerMain.style.display = "none";
    pageNumber.style.display = "none";
  } else {
    producttype__name.innerHTML = `<h3>Danh mục sản phẩm theo yêu cầu</h3>`;
    productContainerMain.style.display = "flex";
    pageNumber.style.display = "block";
    displayPageProduct(result, result.length);
    displayProducts(result, result.length);
  }
}

// Hiển thị sản phẩm theo danh mục
function displayProductsByBrand(product) {
  if (window.location.href.indexOf("?sp") === -1) {
    window.location.href = "./index.html?sp";
  }
  let tempList = JSON.parse(localStorage.getItem(listProducts));
  currentPage = 1; // Trang hiện tại
  let result = filterProductArrayByBrand(tempList, product.id);
  if (result.length == 0) {
    console.log("Không có sản phẩm theo yêu cầu");
    return;
  } else {
    alert(product.id); // Hiển thị ID của sản phẩm
    producttype__name.innerHTML = `<h3>${product.textContent}</h3>`;
    productContainerMain.style.display = "flex";
    pageNumber.style.display = "block";
    displayPageProduct(result, result.length);
    displayProducts(result, result.length);
  }
  clearSearchAdvance();
}

// Hàm hiển thị trang chủ
function displayMainPage() {
  let s = `
    <div style="border: 2px solid var(--primary-color); border-radius: 10px; padding: 20px; background-color: #ffffff; width: 100%; text-align: center;">
      <h1 style="color: var(--border-color); font-size: 28px; margin-bottom: 10px;">Chào mừng bạn đến với cửa hàng LEGO của chúng tôi!</h1>
      <p style="font-size: 16px; color: #333; margin-bottom: 20px;">
        Chúng tôi chuyên cung cấp các sản phẩm LEGO chính hãng, từ những mẫu Minifigure độc đáo, đến các bộ MOC sáng tạo dành cho người chơi đam mê!
      </p>
      
      <div style="display: flex; justify-content: space-around; flex-wrap: wrap; gap: 20px; margin-bottom: 20px;">
        <!-- Section 1 -->
        <div style="flex: 1; min-width: 250px; border: 1px solid var(--primary-color); border-radius: 10px; padding: 15px; background-color: #f9f9f9;">
          <h2 style="color: var(--border-color); font-size: 20px;">LEGO Minifigures</h2>
          <p style="color: #555; font-size: 14px;">
            Khám phá bộ sưu tập LEGO Minifigures cực kỳ độc đáo và đa dạng, phù hợp cho mọi lứa tuổi.
          </p>
        </div>
        
        <!-- Section 2 -->
        <div style="flex: 1; min-width: 250px; border: 1px solid var(--primary-color); border-radius: 10px; padding: 15px; background-color: #f9f9f9;">
          <h2 style="color: var(--border-color); font-size: 20px;">LEGO MOC</h2>
          <p style="color: #555; font-size: 14px;">
            Thỏa sức sáng tạo với các mẫu LEGO MOC (My Own Creation) độc quyền tại cửa hàng của chúng tôi!
          </p>
        </div>
        
        <!-- Section 3 -->
        <div style="flex: 1; min-width: 250px; border: 1px solid var(--primary-color); border-radius: 10px; padding: 15px; background-color: #f9f9f9;">
          <h2 style="color: var(--border-color); font-size: 20px;">Phụ kiện LEGO</h2>
          <p style="color: #555; font-size: 14px;">
            Bổ sung thêm các phụ kiện LEGO cần thiết để hoàn thiện bộ sưu tập của bạn.
          </p>
        </div>
      </div>
      
      <h2 style="color: var(--border-color); font-size: 24px;">Tại sao chọn chúng tôi?</h2>
      <ul style="list-style: none; padding: 0; margin: 20px auto; max-width: 600px; text-align: left;">
        <li style="color: #555; font-size: 16px; margin-bottom: 10px;">✔ Sản phẩm LEGO chính hãng, chất lượng cao.</li>
        <li style="color: #555; font-size: 16px; margin-bottom: 10px;">✔ Chính sách đổi trả linh hoạt, minh bạch.</li>
        <li style="color: #555; font-size: 16px; margin-bottom: 10px;">✔ Hỗ trợ khách hàng tận tình, chu đáo.</li>
        <li style="color: #555; font-size: 16px;">✔ Giá cả cạnh tranh, nhiều ưu đãi hấp dẫn.</li>
      </ul>
    </div>
  `;
  productContainerMain.innerHTML = s;
}

// Hàm hiển thị giới thiệu
function displayAboutPage() {
  let s = `
    <div style="border: 2px solid var(--primary-color); border-radius: 10px; padding: 20px; background-color: #ffffff; width: 100%; text-align: center;">
      <h1 style="color: var(--border-color); font-size: 28px; margin-bottom: 10px;">Giới thiệu về cửa hàng LEGO của chúng tôi</h1>
      
      <p style="font-size: 16px; color: #333; margin-bottom: 20px; line-height: 1.8;">
        Chào mừng bạn đến với cửa hàng LEGO – nơi dành cho những người yêu thích sự sáng tạo và đam mê lắp ráp! Chúng tôi tự hào là một trong những cửa hàng hàng đầu chuyên cung cấp các sản phẩm LEGO chính hãng tại Việt Nam. Với sứ mệnh mang lại niềm vui và trí tưởng tượng vô tận cho mọi khách hàng, chúng tôi cam kết mang đến những sản phẩm chất lượng nhất.
      </p>
      
      <h2 style="color: var(--border-color); font-size: 24px; margin-bottom: 10px;">Tầm nhìn và Sứ mệnh</h2>
      <p style="font-size: 16px; color: #555; margin-bottom: 20px; line-height: 1.8;">
        Tầm nhìn của chúng tôi là trở thành địa điểm lý tưởng cho cộng đồng LEGO tại Việt Nam, từ trẻ em đến người lớn. 
        Sứ mệnh của chúng tôi là mang đến trải nghiệm mua sắm tuyệt vời, hỗ trợ khách hàng tối đa, và cung cấp những sản phẩm sáng tạo, độc đáo nhất.
      </p>
      
      <h2 style="color: var(--border-color); font-size: 24px; margin-bottom: 10px;">Chúng tôi cung cấp</h2>
      <ul style="list-style: none; padding: 0; margin: 0 auto; max-width: 600px; text-align: left; line-height: 1.8;">
        <li style="color: #555; font-size: 16px; margin-bottom: 10px;">✔ Bộ sưu tập LEGO Minifigures chính hãng.</li>
        <li style="color: #555; font-size: 16px; margin-bottom: 10px;">✔ Các bộ LEGO MOC (My Own Creation) độc quyền.</li>
        <li style="color: #555; font-size: 16px; margin-bottom: 10px;">✔ Phụ kiện LEGO đa dạng để thỏa sức sáng tạo.</li>
        <li style="color: #555; font-size: 16px;">✔ Dịch vụ tư vấn và hỗ trợ tận tình cho khách hàng.</li>
      </ul>
      
      <h2 style="color: var(--border-color); font-size: 24px; margin-top: 20px;">Về chúng tôi</h2>
      <p style="font-size: 16px; color: #555; margin-bottom: 20px; line-height: 1.8;">
        Cửa hàng LEGO của chúng tôi không chỉ là nơi mua sắm, mà còn là một cộng đồng cho những người yêu thích LEGO. Chúng tôi luôn nỗ lực xây dựng một không gian để bạn có thể tìm thấy cảm hứng, niềm vui và sự sáng tạo không giới hạn.
      </p>
    </div>
  `;
  productContainerMain.innerHTML = s;
}

// Hàm hiển thị trang liên hệ
function displayContactPage() {
  let s = `
    <div style="border: 2px solid var(--primary-color); border-radius: 10px; padding: 20px; background-color: #ffffff; width: 100%; margin: 0 auto; text-align: left;">
      <h1 style="text-align: center; color: var(--border-color); font-size: 24px; margin-bottom: 20px;">Liên hệ với chúng tôi</h1>

      <div style="display: flex; align-items: center; margin-bottom: 15px;">
        <img src="https://img.icons8.com/fluency/24/place-marker.png" alt="location icon" style="margin-right: 10px;">
        <p style="margin: 0; font-size: 16px; color: #00695c;">
          Số 30, ngõ 218/27/22 Lạc Long Quân, Tây Hồ, Hà Nội
        </p>
      </div>

      <div style="display: flex; align-items: center; margin-bottom: 15px;">
        <img src="https://img.icons8.com/fluency/24/phone.png" alt="phone icon" style="margin-right: 10px;">
        <p style="margin: 0; font-size: 16px; color: #00695c;">
          0949 854 380
        </p>
      </div>

      <div style="display: flex; align-items: center;">
        <img src="https://img.icons8.com/fluency/24/clock.png" alt="clock icon" style="margin-right: 10px;">
        <p style="margin: 0; font-size: 16px; color: #00695c;">
          Trực 8h00 - 18h00 các ngày trong tuần (trừ ngày lễ, Tết)
        </p>
      </div>
    </div>
  `;
  productContainerMain.innerHTML = s;
}

function displayProducts(productList, length) {
  productContainerMain.innerHTML = "";
  // tính vị trí sách bắt đầu để hiển thị trong từng trang
  let beginProduct = (currentPage - 1) * productsPerPage;
  let endProduct = beginProduct + productsPerPage;
  let pageBtn = document.querySelectorAll(".product-btn_page");
  pageBtn.forEach((button) => {
    if (button.textContent == currentPage) {
      button.style.color = "#fff";
      button.style.backgroundColor = "var(--primary-color)";
    } else {
      button.style.color = "var(--primary-color)";
      button.style.backgroundColor = "#fff";
    }
  });
  for (let i = beginProduct; i < endProduct; i++) {
    if (productList[i] && !productList[i].isDeleted) {
      productContainerMain.innerHTML += createProduct(productList[i]);
    }
  }
  let detailButtons = document.querySelectorAll(".detail-btn");
  detailButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      displayProductDetail(event, button);
    });
  });
}

function displayPageProduct(productList, length) {
  totalPages = Math.ceil(length / productsPerPage);
  pageNumber.innerHTML = ""; // Xóa nội dung cũ

  // Chỉ hiển thị nút nếu có hơn 1 trang
  if (totalPages <= 1) return;

  // Thêm nút "Prev"
  pageNumber.innerHTML += `<button class="product-btn product-btn_prev">&lt;</button>`;

  // Hiển thị nút phân trang
  if (totalPages <= 5) {
    // Hiển thị tất cả các nút nếu tổng số trang <= 5
    for (let i = 1; i <= totalPages; i++) {
      pageNumber.innerHTML += `<button class="product-btn product-btn_page" id="page-${i}">${i}</button>`;
    }
  } else {
    // Hiển thị với cấu trúc: < 1 2 ... totalPages-1 totalPages >
    pageNumber.innerHTML += `<button class="product-btn product-btn_page" id="page-1">1</button>`;
    pageNumber.innerHTML += `<button class="product-btn product-btn_page" id="page-2">2</button>`;
    if (currentPage > 3 && currentPage < totalPages - 2) {
      // Hiển thị dạng: 1 2 ... currentPage ... totalPages-1 totalPages
      pageNumber.innerHTML += `<span class="ellipsis">...</span>`;
      pageNumber.innerHTML += `<button class="product-btn product-btn_page" id="page-${currentPage}">${currentPage}</button>`;
      pageNumber.innerHTML += `<span class="ellipsis">...</span>`;
    } else if (currentPage <= 3) {
      // Nếu đang ở đầu: 1 2 3 ... totalPages-1 totalPages
      pageNumber.innerHTML += `<button class="product-btn product-btn_page" id="page-3">3</button>`;
      pageNumber.innerHTML += `<span class="ellipsis">...</span>`;
    } else {
      // Nếu đang ở cuối: 1 2 ... totalPages-2 totalPages-1 totalPages
      pageNumber.innerHTML += `<span class="ellipsis">...</span>`;
      pageNumber.innerHTML += `<button class="product-btn product-btn_page" id="page-${
        totalPages - 2
      }">${totalPages - 2}</button>`;
    }
    pageNumber.innerHTML += `<button class="product-btn product-btn_page" id="page-${
      totalPages - 1
    }">${totalPages - 1}</button>`;
    pageNumber.innerHTML += `<button class="product-btn product-btn_page" id="page-${totalPages}">${totalPages}</button>`;
  }

  // Thêm nút "Next"
  pageNumber.innerHTML += `<button class="product-btn product-btn_next">&gt;</button>`;

  // Xử lý sự kiện
  updatePageButtonStyles();
  handlePageButtonEvents(productList, length);
}

function updatePageButtonStyles() {
  let pageBtn = document.querySelectorAll(".product-btn_page");
  pageBtn.forEach((button) => {
    if (parseInt(button.textContent) === currentPage) {
      button.style.color = "#fff";
      button.style.backgroundColor = "var(--primary-color)";
    } else {
      button.style.color = "var(--primary-color)";
      button.style.backgroundColor = "#fff";
    }
  });
}

function handlePageButtonEvents(productList, length) {
  let pageBtn = document.querySelectorAll(".product-btn_page");
  let prevBtn = document.querySelector(".product-btn_prev");
  let nextBtn = document.querySelector(".product-btn_next");

  // Xử lý sự kiện click cho từng nút trang
  pageBtn.forEach((button) => {
    button.addEventListener("click", () => {
      currentPage = parseInt(button.textContent);
      displayProducts(productList, length);
      displayPageProduct(productList, length); // Cập nhật giao diện nút
    });
  });

  // Xử lý nút "Prev"
  prevBtn.addEventListener("click", (event) => {
    event.preventDefault();
    if (currentPage > 1) {
      currentPage--;
      displayProducts(productList, length);
      displayPageProduct(productList, length); // Cập nhật giao diện nút
    }
  });

  // Xử lý nút "Next"
  nextBtn.addEventListener("click", (event) => {
    event.preventDefault();
    if (currentPage < totalPages) {
      currentPage++;
      displayProducts(productList, length);
      displayPageProduct(productList, length); // Cập nhật giao diện nút
    }
  });
}
// Phần login / register
registerBtn.addEventListener("click", function () {
  modalRegister.style.display = "block";
  modalLogin.style.display = "none";
});

btnOpenLogin.addEventListener("click", function () {
  modalLogin.style.display = "block";
  modalRegister.style.display = "none";
});

closeFormBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    modalRegister.style.display = "none";
    modalLogin.style.display = "none";
  });
});

loginBtn.addEventListener("click", function () {
  modalRegister.style.display = "none";
  modalLogin.style.display = "block";
});

btnOpenRegister.addEventListener("click", function () {
  modalLogin.style.display = "none";
  modalRegister.style.display = "block";
});

// Book layout
btnProductclose.addEventListener("click", function () {
  productLayout.style.display = "none";
});

function validateEmail(email) {
  let regex = /^\w+@[a-zA-Z_]+?(\.[a-zA-Z]{2,3}){1,3}$/;
  return regex.test(email);
}
function validateUser(user) {
  let regex = /^[a-zA-Z0-9._-]{3,}$/;
  return regex.test(user);
}

function checkInputFromSignup(event) {
  let inputElement = event.target.value.trim();
  let errorElement = event.target.parentElement.querySelector(".form-message");

  if (inputElement === "") {
    errorElement.innerHTML = "Vui lòng nhập thông tin vào!";
  } else if (event.target.id === "username" && !validateUser(inputElement))
    errorElement.innerHTML =
      "Tài khoản đăng nhập phải có ít nhất 3 kí tự trở lên, không chứa kí tự đặc biệt";
  else if (event.target.id === "password" && inputElement.length < 6)
    errorElement.innerHTML = "Mật khẩu phải có ít nhất 6 kí tự.";
  else if (event.target.id === "email" && !validateEmail(inputElement))
    errorElement.innerHTML = "Địa chỉ email không hợp lệ.";
  else if (
    event.target.id === "fillpassword" &&
    inputElement != inputSignUp[2].value
  )
    errorElement.innerHTML = "Mật khẩu nhập lại không giống nhau";
  else errorElement.innerHTML = "";
}

function checkSignup(event) {
  let inputElement = event.value;
  if (event.id === "username" && !validateUser(inputElement)) return false;
  else if (event.id === "password" && inputElement.length < 6) return false;
  else if (event.id === "email" && !validateEmail(inputElement)) return false;
  return true;
}

const inputSignUp = document.getElementsByClassName("auth-form__input");
inputSignUp[0].addEventListener("blur", checkInputFromSignup);
inputSignUp[1].addEventListener("blur", checkInputFromSignup);
inputSignUp[2].addEventListener("blur", checkInputFromSignup);
inputSignUp[3].addEventListener("blur", checkInputFromSignup);

document.getElementById("register-form").addEventListener("click", createUser);
document.getElementById("login-form").addEventListener("click", login);

function createUser(event) {
  event.preventDefault();
  userList = JSON.parse(localStorage.getItem(ListUsers));
  let username = inputSignUp[0].value.trim();
  let email = inputSignUp[1].value.trim();
  let password = inputSignUp[2].value.trim();
  let passwordAgain = inputSignUp[3].value.trim();
  if (!username || !email || !password || !passwordAgain) {
    alert("Vui lòng nhập đủ thông tin đăng ký!");
    return false;
  }
  if (
    !checkSignup(inputSignUp[0]) ||
    !checkSignup(inputSignUp[2]) ||
    !checkSignup(inputSignUp[1])
  ) {
    alert("Vui lòng nhập đúng thông tin!!!");
    return false;
  }

  if (password != passwordAgain) {
    alert("Vui lòng nhập lại đúng mật khẩu");
    return false;
  }
  let newUser = {
    username: username,
    password: password,
    email: email,
    cart: [],
    id: userList.length + 1,
    dateSignUp: "",
  };
  // kiểm tra trùng tên đăng nhập
  for (let i = 0; i < userList.length; i++) {
    if (newUser.username == userList[i].username) {
      inputSignUp[0].parentElement.querySelector(".form-message").innerHTML =
        "Tên đăng nhập đã có người sử dụng";
      inputSignUp[0].focus();
      return false;
    }
  }
  newUser.dateSignUp = new Intl.DateTimeFormat("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(new Date());
  userList.push(newUser);
  localStorage.setItem(ListUsers, JSON.stringify(userList));
  alert("Đã đăng ký thành công");
  modalRegister.style.display = "none";
  window.location.reload();
}

let userLogin = inputSignUp[4];
let passLogin = inputSignUp[5];

function checklogin() {
  /*if (localStorage.getItem("userLogin")) {
    let user = JSON.parse(localStorage.getItem("userLogin"));

    if (user.isDeleted == true) {
      alert("Tài khoản đã bị vô hiệu hóa !!!");
    } else {
      let headerUser = document.querySelectorAll(".header-user");
      headerUser.forEach((item) => {
        item.style.display = "block";
      });
      let userName = document.querySelectorAll(".user-name");
      userName.forEach((item) => {
        item.innerHTML = user.username;
      });
      let headerAccount = document.querySelectorAll(".header__navbar-item--strong");
      headerAccount.forEach((item) => {
        item.style.display = "none";
      });
      if (user.username == "admin" && user.password == "admin")
        document.querySelector(".adminControl").style.display = "block";*/
  if (localStorage.getItem("userLogin")) {
    let user = JSON.parse(localStorage.getItem("userLogin"));
    if (user.username == "admin" && user.password == "admin") {
      // window.location.href = "index.html?adminwebsitelego";
    } else {
      let headerAccount = document.querySelectorAll(
        ".header__navbar-item--strong"
      );
      headerAccount.forEach((item) => {
        item.style.display = "none";
      });
      const temp = document.querySelectorAll(".accountLogin");
      temp.forEach((item) => {
        item.style.display = "inline-block";
        const t = document.getElementById("accountLoginName");
        t.innerHTML = `${user.username}`;
      });
    }
  }
}
const userLogout = document.querySelectorAll(".userLogout");
userLogout.forEach((item) => {
  item.addEventListener("click", () => {
    //let userLogin = JSON.parse(localStorage.getItem("userLogin"));
    //let cartCurrent = JSON.parse(localStorage.getItem("cartCustomer"));
    //let userCurrent = JSON.parse(localStorage.getItem("user"));
    //console.log(cartCurrent);
    /*for (let i = 0; i < userCurrent.length; i++) {
      if (
        userCurrent[i].username == userLogin.username &&
        userCurrent[i].password == userLogin.password
      ) {
        userCurrent[i].cart = cartCurrent;
      }
    }*/
    //localStorage.setItem("user", JSON.stringify(userCurrent));
    localStorage.removeItem("userLogin");
    //localStorage.removeItem("cartCustomer");
    location.href = "index.html";
  });
});

function login(event) {
  event.preventDefault();
  userList = JSON.parse(localStorage.getItem(ListUsers));
  if (!userLogin.value || !passLogin) {
    alert("Vui lòng nhập thông tin đăng nhập");
  }
  for (let i = 0; i < userList.length; i++) {
    if (
      userLogin.value == userList[i].username &&
      passLogin.value == userList[i].password
    ) {
      localStorage.setItem("userLogin", JSON.stringify(userList[i]));

      alert("Đăng nhập thành công");
      window.location.reload();
      return true;
    }
  }
  alert("Tên đăng nhập hoặc mật khẩu không chính xác");
}
checklogin();
