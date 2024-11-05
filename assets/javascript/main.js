// Object Constructors
var productLego = new Object();
const productContainerMain = document.querySelector(".product_container");

// Thêm sản phẩm
productLego.addProduct = function () {
  console.log("This function add product");
};

// Xóa sản phẩm
productLego.deleteProduct = function () {
  console.log("This function delete product");
};

const productCatogrey = [
  { brandid: "LM", brandname: "Lego Minifigure" },
  { brandid: "MO", brandname: "Lego MOC" },
  { brandid: "LR", brandname: "Lego chính hãng" },
  { brandid: "LP", brandname: "Phụ kiện Lego" },
];

function createMenuLeft() {
  let s = "";
  const length = productCatogrey.length;

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
                  <a href="#" class="verticalmenu__detail-link" id="${productCatogrey[i].brandid}" onclick="displayProductsByBrand(this);">
                    ${productCatogrey[i].brandname}
                  </a>
              </li>`;
    }
  }

  // Gộp lại thành danh sách
  s = `<ul class="verticalmenu__detail-list">${s}</ul>`;
  document.getElementById("danhMucSanPham").innerHTML = s; // Gán nội dung vào phần tử
}

function displayProductsByBrand(product) {
  alert(product.id); // Hiển thị ID của sản phẩm
  let s = ""; // Khởi tạo chuỗi để chứa HTML sản phẩm
  let length = productArray.length; // Lấy độ dài của mảng sản phẩm
  productContainerMain.innerHTML = ""; // Xóa nội dung trước đó trong container

  for (let i = 0; i < length; i++) {
    // Khai báo i với let
    // Lấy 2 ký tự đầu của mã sản phẩm
    if (productArray[i].code.substring(0, 2) === product.id) {
      // So sánh mã sản phẩm
      s += createProductHTML(productArray[i]); // Tạo HTML cho sản phẩm
    }
  }

  console.log(s); // In ra chuỗi HTML
  productContainerMain.innerHTML = s; // Đặt nội dung mới vào container
}

// Mảng dữ liệu sản phẩm
const productArray = [
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
    price: 25000,
    imgSrc: "./assets/img/lego-minifigure/mini-03.png",
    topic: "Naruto",
    quantity: 100,
  },
  {
    name: "Sasuke - 04",
    code: "LM0004",
    price: 25000,
    imgSrc: "./assets/img/lego-minifigure/mini-04.png",
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
    price: 1699000,
    imgSrc: "./assets/img/lego-moc/moc-03.png",
    topic: "Army",
    quantity: 100,
  },
  {
    name: "Sniper XPR-50",
    code: "MO0004",
    price: 1799000,
    imgSrc: "./assets/img/lego-moc/moc-04.png",
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
];

// Số lượng sản phẩm mỗi trang
const itemsPerPage = 12;
let currentPage = 1;

// Hàm tạo sản phẩm động
function createProductHTML(product) {
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
          <a href="#" class="item__info-link detail-btn">Chi tiết</a>
        </div>
      </div>
    </div>
  `;
}

// Hàm hiển thị sản phẩm theo trang
function displayProductsByPage(page) {
  const itemList = document.querySelector(".product_container");
  itemList.innerHTML = ""; // Xóa nội dung cũ

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const productsToDisplay = productArray.slice(startIndex, endIndex);

  productsToDisplay.forEach((product) => {
    itemList.innerHTML += createProductHTML(product);
  });

  updatePagination(page);
}

// Hàm cập nhật phân trang
function updatePagination(currentPage) {
  const pagination = document.querySelector(".pagenumber");
  pagination.innerHTML = ""; // Xóa nội dung cũ

  const totalPages = Math.ceil(products.length / itemsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement("button");
    pageButton.innerText = i;
    pageButton.className = "page-button";
    pageButton.onclick = () => {
      currentPage = i;
      displayProductsByPage(currentPage);
    };

    if (i === currentPage) {
      pageButton.disabled = true; // Vô hiệu hóa nút trang hiện tại
    }

    pagination.appendChild(pageButton);
  }
}

// Gọi hàm để hiển thị sản phẩm khi trang được tải
window.onload = () => {
  // displayProductsByPage(currentPage);
  createMenuLeft();
};

const registerBtn = document.querySelector(".registerBtn");
const modalRegister = document.querySelector("#myModalRegister");
const modalLogin = document.querySelector("#myModalLogin");
const closeFormBtn = document.querySelectorAll(".closeForm");
const btnOpenRegister = document.querySelector(".register-open_btn");
const btnOpenLogin = document.querySelector(".login-open_btn");

// Gán sự kiện onclick
registerBtn.onclick = function (event) {
  event.preventDefault(); // Ngăn không cho thẻ a chuyển hướng
  modalRegister.style.display = "block";
  modalLogin.style.display = "none";
};

closeFormBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    modalRegister.style.display = "none";
    modalLogin.style.display = "none";
  });
});

btnOpenLogin.onclick = function () {
  modalLogin.style.display = "block";
  modalRegister.style.display = "none";
};

btnOpenRegister.onclick = function (event) {
  modalRegister.style.display = "block";
  modalLogin.style.display = "none";
};

document.querySelector(".product-close").addEventListener("click", () => {
  productLayout.style.display = "none";
});
