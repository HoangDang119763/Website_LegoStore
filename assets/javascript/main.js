const ListUsers = "list-users";
const listProducts = "list-products";
const listProductCatogrey = "list-product-catogrey";
const listOrders = "list-orders";
function validateEmail(email) {
  let regex = /^\w+@[a-zA-Z_]+?(\.[a-zA-Z]{2,3}){1,3}$/;
  return regex.test(email);
}
function validateUser(user) {
  let regex = /^[a-zA-Z0-9._-]{3,}$/;
  return regex.test(user);
}

function getUserById(id) {
  let tempUserList = JSON.parse(localStorage.getItem(ListUsers));
  let index = tempUserList.findIndex((user) => user.id === id);
  let user;
  // Kiểm tra xem người dùng có tồn tại không
  if (index !== -1) {
    // Cập nhật giỏ hàng của người dùng
    user = tempUserList[index];
  } else {
    user = [];
  }
  return user;
}

function getCartUserInList(id) {
  // Lấy danh sách người dùng từ localStorage
  let tempUserList = JSON.parse(localStorage.getItem(ListUsers));

  // Tìm chỉ số của người dùng cần cập nhật
  let index = tempUserList.findIndex((user) => user.id === id);
  let cart;
  // Kiểm tra xem người dùng có tồn tại không
  if (index !== -1) {
    // Cập nhật giỏ hàng của người dùng
    cart = tempUserList[index].cart;
  } else {
    cart = [];
  }
  return cart;
}

function updateCartUserInList(id, cartUser) {
  // Lấy danh sách người dùng từ localStorage
  let tempUserList = JSON.parse(localStorage.getItem(ListUsers));

  // Tìm chỉ số của người dùng cần cập nhật
  let index = tempUserList.findIndex((user) => user.id === id);

  // Kiểm tra xem người dùng có tồn tại không
  if (index !== -1) {
    // Cập nhật giỏ hàng của người dùng
    tempUserList[index].cart = cartUser;

    // Lưu lại danh sách người dùng đã cập nhật vào localStorage
    localStorage.setItem(ListUsers, JSON.stringify(tempUserList));
  }
}

function numQuantitySoldInListOrder(productID) {
  // Lấy danh sách đơn hàng từ localStorage
  let tempOrderList = JSON.parse(localStorage.getItem(listOrders));

  // Biến để lưu tổng số lượng
  let totalQuantity = 0;

  // Kiểm tra nếu tempOrderList không phải là null và là một mảng
  tempOrderList.forEach((order) => {
    // Kiểm tra trạng thái đơn hàng
    if (order.status === "Đã xác nhận" || order.status === "Chờ xác nhận") {
      // Duyệt qua từng item trong đơn hàng
      order.items.forEach((item) => {
        // Kiểm tra mã sản phẩm
        if (item.code === productID) {
          // Cộng dồn số lượng
          totalQuantity += item.quantity;
        }
      });
    }
  });

  return totalQuantity; // Trả về tổng số lượng
}

function getItemsUserByOrderId(orderId) {
  let tempOrderList = JSON.parse(localStorage.getItem(listOrders));
  let index = tempOrderList.findIndex((order) => order.orderId == orderId);
  let cart;
  // Kiểm tra xem người dùng có tồn tại không
  if (index !== -1) {
    // Cập nhật giỏ hàng của người dùng
    cart = tempOrderList[index].items;
  } else {
    cart = [];
  }
  return cart;
}

function getOrderInList(orderId) {
  let tempOrderList = JSON.parse(localStorage.getItem(listOrders));
  let index = tempOrderList.findIndex((order) => order.orderId == orderId);
  let order;
  // Kiểm tra xem người dùng có tồn tại không
  if (index !== -1) {
    // Cập nhật giỏ hàng của người dùng
    order = tempOrderList[index];
  } else {
    order = null;
  }
  return order;
}

function updateStatusOrderInList(id, status) {
  // Lấy danh sách người dùng từ localStorage
  let tempOrderList = JSON.parse(localStorage.getItem(listOrders));

  // Tìm chỉ số của người dùng cần cập nhật
  let index = tempOrderList.findIndex((order) => order.orderId == id);

  // Kiểm tra xem người dùng có tồn tại không
  if (index !== -1) {
    // Cập nhật giỏ hàng của người dùng
    tempOrderList[index].status = status;

    // Lưu lại danh sách người dùng đã cập nhật vào localStorage
    localStorage.setItem(listOrders, JSON.stringify(tempOrderList));
  } else {
    console.error("Order not found");
  }
}

function updateAddressUserInList(id, address) {
  // Lấy danh sách người dùng từ localStorage
  let tempUserList = JSON.parse(localStorage.getItem(ListUsers));

  // Tìm chỉ số của người dùng cần cập nhật
  let index = tempUserList.findIndex((user) => user.id === id);

  // Kiểm tra xem người dùng có tồn tại không
  if (index !== -1) {
    // Cập nhật giỏ hàng của người dùng
    tempUserList[index].address = address;

    // Lưu lại danh sách người dùng đã cập nhật vào localStorage
    localStorage.setItem(ListUsers, JSON.stringify(tempUserList));
  } else {
    console.error("User not found");
  }
}

function getAddressUserInList(id) {
  // Lấy danh sách người dùng từ localStorage
  let tempUserList = JSON.parse(localStorage.getItem(ListUsers));

  // Tìm chỉ số của người dùng cần cập nhật
  let index = tempUserList.findIndex((user) => user.id === id);
  let address;
  // Kiểm tra xem người dùng có tồn tại không
  if (index !== -1) {
    // Cập nhật giỏ hàng của người dùng
    address = tempUserList[index].address;
  } else {
    console.error("User not found");
    address = [];
  }
  return address;
}

function deleteAddress(index) {
  const addresses = getAddressUserInList(USERLOGIN.id);

  // Sử dụng splice để xóa địa chỉ tại vị trí index
  addresses.splice(index, 1);

  // Cập nhật lại danh sách địa chỉ
  updateAddressUserInList(USERLOGIN.id, addresses);

  // Thông báo cho người dùng
  alert("Đã xóa địa chỉ khỏi danh sách!");
  displayCartPage();
}

function getListOrderUSerByID(id) {
  let tempOrderList = JSON.parse(localStorage.getItem(listOrders));

  // Tìm chỉ số của người dùng cần cập nhật
  let orderList = tempOrderList.filter((order) => order.userId === id);
  return orderList;
}

// Lấy trạng thái
function getStatusUserInList(id) {
  let tempUserList = JSON.parse(localStorage.getItem(ListUsers));
  let index = tempUserList.findIndex((user) => user.id === id);
  let status;
  if (index !== -1) {
    status = tempUserList[index].status;
  } else {
    console.error("User not found");
    status = -1;
  }
  return status;
}

function updateStatusUserInList(id, status) {
  let tempUserList = JSON.parse(localStorage.getItem(ListUsers));
  let index = tempUserList.findIndex((user) => user.id === id);
  if (index !== -1) {
    // Cập nhật giỏ hàng của người dùng
    tempUserList[index].status = status;
    localStorage.setItem(ListUsers, JSON.stringify(tempUserList));
  } else {
    console.error("User not found");
  }
}

function getPasswordUserInList(id) {
  let tempUserList = JSON.parse(localStorage.getItem(ListUsers));
  let index = tempUserList.findIndex((user) => user.id === id);
  let passsword;
  if (index !== -1) {
    passsword = tempUserList[index].passsword;
  } else {
    console.error("User not found");
    passsword = "";
  }
  return passsword;
}

function updatePasswordUserInList(id, password) {
  let tempUserList = JSON.parse(localStorage.getItem(ListUsers));
  let index = tempUserList.findIndex((user) => user.id === id);
  if (index !== -1) {
    // Cập nhật giỏ hàng của người dùng
    tempUserList[index].password = password;
    localStorage.setItem(ListUsers, JSON.stringify(tempUserList));
  } else {
    console.error("User not found");
  }
}

function getEmailUserInList(id) {
  let tempUserList = JSON.parse(localStorage.getItem(ListUsers));
  let index = tempUserList.findIndex((user) => user.id === id);
  let email;
  if (index !== -1) {
    email = tempUserList[index].passsword;
  } else {
    console.error("User not found");
    email = "";
  }
  return email;
}

function updateEmaildUserInList(id, email) {
  let tempUserList = JSON.parse(localStorage.getItem(ListUsers));
  let index = tempUserList.findIndex((user) => user.id === id);
  if (index !== -1) {
    // Cập nhật giỏ hàng của người dùng
    tempUserList[index].email = email;
    localStorage.setItem(ListUsers, JSON.stringify(tempUserList));
  } else {
    console.error("User not found");
  }
}
//

if (!window.location.pathname.endsWith("manage.html")) {
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
  const bodyTop = document.querySelector(".bodytop");
  const productContainerMain = document.querySelector(".product_container");
  const productContainter = document.querySelector(".product-containter");
  const verticalmenu = document.getElementsByClassName("verticalmenu");
  const producttype__name = document.querySelector(".producttype__name");
  const producttype = document.querySelector(".producttype");
  const pageNumber = document.querySelector(".pagenumber");
  const header__cart = document.querySelector(".header__cart-icon");
  const removeAllCart = document.querySelector(".removeAllCart");
  // Modal
  const inputUsernameSignUp = document.querySelector(".input-username_signup");
  const inputPasswordSignup = document.querySelector(".input-password_signup");
  const inputEmailSignUp = document.querySelector(".input-email_signup");
  const fillPassSignup = document.querySelector("#fillpassword");
  // Address
  const locations = [
    {
      city: "Hà Nội",
      districts: [
        {
          district: "Quận Ba Đình",
          wards: [
            "Cống Vị",
            "Điện Biên",
            "Đội Cấn",
            "Giảng Võ",
            "Kim Mã",
            "Liễu Giai",
            "Ngọc Hà",
            "Ngọc Khánh",
            "Nguyễn Trung Trực",
            "Phúc Xá",
            "Quán Thánh",
            "Thành Công",
            "Trúc Bạch",
            "Vĩnh Phúc",
          ],
        },
        {
          district: "Quận Hoàn Kiếm",
          wards: [
            "Chương Dương Độ",
            "Cửa Đông",
            "Cửa Nam",
            "Đồng Xuân",
            "Hàng Bạc",
            "Hàng Bài",
            "Hàng Bồ",
            "Hàng Bông",
            "Hàng Buồm",
            "Hàng Đào",
            "Hàng Gai",
            "Hàng Mã",
            "Hàng Trống",
            "Lý Thái Tổ",
            "Phan Chu Trinh",
            "Phúc Tân",
            "Tràng Tiền",
            "Trần Hưng Đạo",
          ],
        },
        {
          district: "Quận Đống Đa",
          wards: [
            "Cát Linh",
            "Giảng Võ",
            "Hàng Bột",
            "Khâm Thiên",
            "Khương Thượng",
            "Kim Liên",
            "Láng Hạ",
            "Láng Thượng",
            "Nam Đồng",
            "Ngã Tư Sở",
            "Ô Chợ Dừa",
            "Phương Liên",
            "Phương Mai",
            "Quang Trung",
            "Quốc Tử Giám",
            "Thịnh Quang",
            "Thổ Quan",
            "Trung Liệt",
            "Trung Phụng",
            "Trung Tự",
            "Văn Chương",
            "Văn Miếu",
          ],
        },
        {
          district: "Quận Hai Bà Trưng",
          wards: [
            "Bạch Đằng",
            "Bách Khoa",
            "Bạch Mai",
            "Cầu Dền",
            "Đống Mác",
            "Đồng Nhân",
            "Đồng Tâm",
            "Đồng Xuân",
            "Lê Đại Hành",
            "Minh Khai",
            "Nguyễn Du",
            "Phạm Đình Hổ",
            "Phố Huế",
            "Quỳnh Lôi",
            "Quỳnh Mai",
            "Thanh Lương",
            "Thanh Nhàn",
            "Trương Định",
            "Vĩnh Tuy",
          ],
        },
        {
          district: "Quận Thanh Xuân",
          wards: [
            "Hạ Đình",
            "Khương Đình",
            "Khương Mai",
            "Khương Trung",
            "Nhân Chính",
            "Phương Liệt",
            "Thanh Xuân Bắc",
            "Thanh Xuân Nam",
            "Thanh Xuân Trung",
            "Thượng Đình",
          ],
        },
        {
          district: "Quận Tây Hồ",
          wards: [
            "Bưởi",
            "Nhật Tân",
            "Phú Thượng",
            "Quảng An",
            "Thụy Khuê",
            "Tứ Liên",
            "Xuân La",
            "Yên Phụ",
          ],
        },
        {
          district: "Quận Cầu Giấy",
          wards: [
            "Dịch Vọng",
            "Dịch Vọng Hậu",
            "Mai Dịch",
            "Nghĩa Đô",
            "Nghĩa Tân",
            "Quan Hoa",
            "Trung Hòa",
            "Yên Hòa",
          ],
        },
        {
          district: "Quận Hoàng Mai",
          wards: [
            "Đại Kim",
            "Định Công",
            "Giáp Bát",
            "Hoàng Liệt",
            "Hoàng Văn Thụ",
            "Lĩnh Nam",
            "Mai Động",
            "Tân Mai",
            "Thanh Trì",
            "Thịnh Liệt",
            "Trần Phú",
            "Tương Mai",
            "Vĩnh Hưng",
            "Yên Sở",
          ],
        },
        {
          district: "Quận Long Biên",
          wards: [
            "Bồ Đề",
            "Cự Khối",
            "Đức Giang",
            "Gia Thụy",
            "Giang Biên",
            "Long Biên",
            "Ngọc Lâm",
            "Ngọc Thụy",
            "Phúc Đồng",
            "Phúc Lợi",
            "Sài Đồng",
            "Thạch Bàn",
            "Thượng Thanh",
            "Việt Hưng",
          ],
        },
        {
          district: "Quận Nam Từ Liêm",
          wards: [
            "Cầu Diễn",
            "Đại Mỗ",
            "Mễ Trì",
            "Mỹ Đình 1",
            "Mỹ Đình 2",
            "Phú Đô",
            "Phương Canh",
            "Tây Mỗ",
            "Trung Văn",
            "Xuân Phương",
          ],
        },
        {
          district: "Quận Bắc Từ Liêm",
          wards: [
            "Cổ Nhuế 1",
            "Cổ Nhuế 2",
            "Đông Ngạc",
            "Đức Thắng",
            "Liên Mạc",
            "Minh Khai",
            "Phú Diễn",
            "Phúc Diễn",
            "Tây Tựu",
            "Thượng Cát",
            "Thụy Phương",
            "Xuân Đỉnh",
            "Xuân Tảo",
          ],
        },
        {
          district: "Huyện Gia Lâm",
          wards: [
            "Cát Quế",
            "Đặng Xá",
            "Đa Tốn",
            "Đình Xuyên",
            "Dương Hà",
            "Dương Quang",
            "Dương Xá",
            "Kim Lan",
            "Kim Sơn",
            "Lệ Chi",
            "Ninh Hiệp",
            "Phù Đổng",
            "Phú Thị",
            "Trâu Quỳ",
            "Yên Thường",
            "Yên Viên",
          ],
        },
        {
          district: "Huyện Đông Anh",
          wards: [
            "Bắc Hồng",
            "Cổ Loa",
            "Dục Tú",
            "Đại Mạch",
            "Đông Hội",
            "Hải Bối",
            "Kim Chung",
            "Kim Nỗ",
            "Liên Hà",
            "Mai Lâm",
            "Nguyên Khê",
            "Tàm Xá",
            "Thụy Lâm",
            "Tiên Dương",
            "Uy Nỗ",
            "Vân Hà",
            "Vân Nội",
            "Việt Hùng",
            "Vĩnh Ngọc",
            "Võng La",
            "Xuân Canh",
            "Xuân Nộn",
          ],
        },
        {
          district: "Huyện Sóc Sơn",
          wards: [
            "Bắc Sơn",
            "Đông Xuân",
            "Hiền Ninh",
            "Hồng Kỳ",
            "Kim Lũ",
            "Mai Đình",
            "Minh Phú",
            "Minh Trí",
            "Nam Sơn",
            "Phù Linh",
            "Phú Cường",
            "Phú Minh",
            "Phủ Lỗ",
            "Quang Tiến",
            "Tân Dân",
            "Tân Hưng",
            "Thụy Hương",
            "Tiên Dược",
            "Trung Giã",
            "Việt Long",
            "Xuân Giang",
            "Xuân Thu",
          ],
        },
        {
          district: "Huyện Thanh Trì",
          wards: [
            "Đại Áng",
            "Đông Mỹ",
            "Duyên Hà",
            "Hữu Hòa",
            "Liên Ninh",
            "Ngọc Hồi",
            "Tả Thanh Oai",
            "Tam Hiệp",
            "Tân Triều",
            "Thanh Liệt",
            "Tứ Hiệp",
            "Vạn Phúc",
            "Vĩnh Quỳnh",
            "Yên Mỹ",
          ],
        },
        {
          district: "Huyện Thường Tín",
          wards: [
            "Dũng Tiến",
            "Hà Hồi",
            "Hiền Giang",
            "Hòa Bình",
            "Hồng Vân",
            "Khánh Hà",
            "Liên Phương",
            "Minh Cường",
            "Nghiêm Xuyên",
            "Nguyễn Trãi",
            "Nhị Khê",
            "Ninh Sở",
            "Quất Động",
            "Thắng Lợi",
            "Thống Nhất",
            "Thư Phú",
            "Tô Hiệu",
            "Tự Nhiên",
            "Vạn Điểm",
            "Vân Tảo",
            "Văn Bình",
            "Văn Phú",
            "Văn Tự",
            "Vân Tử",
            "Vũ Lăng",
            "Xà Cầu",
            "Duyên Thái",
          ],
        },
      ],
    },
    {
      city: "Hồ Chí Minh",
      districts: [
        {
          district: "Quận 1",
          wards: [
            "Bến Nghé",
            "Bến Thành",
            "Cầu Kho",
            "Cầu Ông Lãnh",
            "Cô Giang",
            "Nguyễn Thái Bình",
            "Phạm Ngũ Lão",
          ],
        },
        {
          district: "Quận 2",
          wards: [
            "Thảo Điền",
            "An Phú",
            "An Khánh",
            "Bình An",
            "Bình Trưng Đông",
            "Bình Trưng Tây",
            "Cát Lái",
            "Thạnh Mỹ Lợi",
          ],
        },
        {
          district: "Quận 3",
          wards: [
            "Phường 1",
            "Phường 2",
            "Phường 3",
            "Phường 4",
            "Phường 5",
            "Phường 6",
            "Phường 7",
            "Phường 8",
            "Phường 9",
            "Phường 10",
          ],
        },
        {
          district: "Quận 4",
          wards: [
            "Phường 1",
            "Phường 2",
            "Phường 3",
            "Phường 4",
            "Phường 5",
            "Phường 6",
            "Phường 8",
            "Phường 9",
          ],
        },
        {
          district: "Quận 5",
          wards: [
            "Phường 1",
            "Phường 2",
            "Phường 3",
            "Phường 4",
            "Phường 5",
            "Phường 6",
            "Phường 7",
            "Phường 8",
          ],
        },
        {
          district: "Quận 6",
          wards: [
            "Phường 1",
            "Phường 2",
            "Phường 3",
            "Phường 4",
            "Phường 5",
            "Phường 6",
            "Phường 7",
            "Phường 8",
          ],
        },
        {
          district: "Quận 7",
          wards: [
            "Tân Thuận Đông",
            "Tân Thuận Tây",
            "Tân Kiểng",
            "Tân Hưng",
            "Bình Thuận",
            "Phú Mỹ",
            "Tân Phong",
            "Tân Quy",
          ],
        },
        {
          district: "Quận 8",
          wards: [
            "Phường 1",
            "Phường 2",
            "Phường 3",
            "Phường 4",
            "Phường 5",
            "Phường 6",
            "Phường 7",
            "Phường 8",
          ],
        },
        {
          district: "Quận 9",
          wards: [
            "Long Bình",
            "Long Phước",
            "Long Thạnh Mỹ",
            "Long Trường",
            "Phước Bình",
            "Phước Long A",
            "Phước Long B",
          ],
        },
        {
          district: "Quận 10",
          wards: [
            "Phường 1",
            "Phường 2",
            "Phường 3",
            "Phường 4",
            "Phường 5",
            "Phường 6",
            "Phường 7",
            "Phường 8",
          ],
        },
        {
          district: "Quận 11",
          wards: [
            "Phường 1",
            "Phường 2",
            "Phường 3",
            "Phường 4",
            "Phường 5",
            "Phường 6",
            "Phường 7",
            "Phường 8",
          ],
        },
        {
          district: "Quận 12",
          wards: [
            "Thạnh Xuân",
            "Thạnh Lộc",
            "Thới An",
            "Tân Chánh Hiệp",
            "An Phú Đông",
            "Tân Thới Hiệp",
            "Tân Hưng Thuận",
          ],
        },
        {
          district: "Tân Bình",
          wards: [
            "Phường 1",
            "Phường 2",
            "Phường 3",
            "Phường 4",
            "Phường 5",
            "Phường 6",
            "Phường 7",
            "Phường 8",
          ],
        },
        {
          district: "Tân Phú",
          wards: [
            "Hiệp Tân",
            "Hòa Thạnh",
            "Phú Thọ Hòa",
            "Phú Thạnh",
            "Phú Trung",
            "Sơn Kỳ",
            "Tân Qúy",
            "Tân Sơn Nhì",
          ],
        },
        {
          district: "Bình Thạnh",
          wards: [
            "Phường 1",
            "Phường 2",
            "Phường 3",
            "Phường 4",
            "Phường 5",
            "Phường 6",
            "Phường 7",
            "Phường 8",
          ],
        },
        {
          district: "Gò Vấp",
          wards: [
            "Phường 1",
            "Phường 2",
            "Phường 3",
            "Phường 4",
            "Phường 5",
            "Phường 6",
            "Phường 7",
            "Phường 8",
          ],
        },
        {
          district: "Phú Nhuận",
          wards: [
            "Phường 1",
            "Phường 2",
            "Phường 3",
            "Phường 4",
            "Phường 5",
            "Phường 6",
            "Phường 7",
            "Phường 8",
          ],
        },
        {
          district: "Thủ Đức",
          wards: [
            "Bình Chiểu",
            "Bình Thọ",
            "Hiệp Bình Chánh",
            "Hiệp Bình Phước",
            "Linh Chiểu",
            "Linh Đông",
            "Linh Tây",
            "Linh Trung",
          ],
        },
      ],
    },
  ];

  // Onload
  const currentPath = window.location.pathname; // Đường dẫn hiện tại (vd: /index.html)
  const currentQuery = window.location.search; // Query string hiện tại (vd: ?tc)

  // Kiểm tra nếu đang ở index.html và chưa có query string
  if (currentPath.endsWith("index.html") && currentQuery === "") {
    const newUrl = currentPath + "?tc"; // Thêm ?tc vào URL
    window.location.replace(newUrl); // Chuyển hướng tới index.html?tc
  }

  // Tạo Admin
  function createUsers() {
    if (localStorage.getItem(ListUsers) === null) {
      let users = [
        {
          id: 0,
          username: "admin",
          email: "admin@gmail.com",
          address: [],
          password: "admin",
          cart: [],
          dateSignUp: "18/11/2024",
          status: 1,
          role: 0,
        },
        {
          id: 1,
          username: "hoang123",
          email: "admin@gmail.com",
          address: [],
          password: "admin123",
          cart: [],
          dateSignUp: "18/11/2024",
          status: 1,
          role: 1,
        },
        {
          id: 2,
          username: "hien123",
          email: "admin@gmail.com",
          address: [],
          password: "admin123",
          cart: [],
          dateSignUp: "18/11/2024",
          status: 1,
          role: 1,
        },
        {
          id: 3,
          username: "hien1234",
          email: "admin@gmail.com",
          address: [],
          password: "admin0",
          cart: [],
          dateSignUp: "18/11/2024",
          status: 0,
          role: 1,
        },
      ];
      localStorage.setItem(ListUsers, JSON.stringify(users));
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
          quantity: 99,
        },
        {
          name: "Naruto - 02",
          code: "LM0002",
          price: 25000,
          imgSrc: "./assets/img/lego-minifigure/mini-02.png",
          topic: "Naruto",
          quantity: 99,
        },
        {
          name: "Minato - 03",
          code: "LM0003",
          price: 29500,
          imgSrc: "./assets/img/lego-minifigure/mini-03.png",
          topic: "Naruto",
          quantity: 99,
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
          quantity: 99,
        },
        {
          name: "AWM - 08",
          code: "MO0008",
          price: 1879000,
          imgSrc: "./assets/img/lego-moc/moc-08.png",
          topic: "Army",
          quantity: 99,
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
      localStorage.setItem(
        listProductCatogrey,
        JSON.stringify(productCatogrey)
      );
    }
  }

  function renderProductCategories() {
    const productCatogrey = JSON.parse(
      localStorage.getItem(listProductCatogrey)
    );
    const menuList = document.querySelector(".topmenu__info-option");

    productCatogrey.forEach((category) => {
      const categoryItem = document.createElement("li");
      categoryItem.className =
        "topmenu__info-option-item topmenu__info-option-item-select";

      categoryItem.innerHTML = `
            <a href="" class="topmenu__info-option-item-link">
                ${category.brandname}
                <i class="fa-solid fa-chevron-right"></i>
            </a>
            <ul class="topmenu__info-option-1">
                ${category.subcategories
                  .map(
                    (sub) => `
                    <li class="topmenu__info-option-item-1">
                        <a href="" class="topmenu__info-option-item-link-1">${sub.name}</a>
                    </li>
                `
                  )
                  .join("")}
            </ul>
        `;

      menuList.appendChild(categoryItem);
    });

    // document.querySelector(".topmenu__info-option").appendChild(menuList); // Hoặc chèn vào phần tử cụ thể nếu cần
  }

  // Gọi hàm để render HTML

  function createOrders() {
    if (localStorage.getItem(listOrders) === null) {
      const orders = [
        // {
        //   userId: 1,
        //   orderId: 1,
        //   orderDate: "29/11/2024",
        //   address: {
        //     houseNumber: "270/6",
        //     ward: "Phường 2",
        //     district: "Phú Nhuận",
        //     city: "Hồ Chí Minh",
        //   },
        //   paymentMethod: "Thanh toán khi nhận hàng",
        //   items: [
        //     {
        //       name: "Naruto - 01",
        //       code: "LM0001",
        //       price: 30000,
        //       imgSrc: "./assets/img/lego-minifigure/mini-01.png",
        //       topic: "Naruto",
        //       quantity: 1,
        //     },
        //     {
        //       name: "Naruto - 02",
        //       code: "LM0002",
        //       price: 25000,
        //       imgSrc: "./assets/img/lego-minifigure/mini-02.png",
        //       topic: "Naruto",
        //       quantity: 1,
        //     },
        //     {
        //       name: "Minato - 03",
        //       code: "LM0003",
        //       price: 29500,
        //       imgSrc: "./assets/img/lego-minifigure/mini-03.png",
        //       topic: "Naruto",
        //       quantity: 1,
        //     },
        //   ],
        //   totalPrice: 84500,
        //   status: "Đã giao",
        // },
        // {
        //   userId: 1,
        //   orderId: 2,
        //   orderDate: "29/11/2024",
        //   address: {
        //     houseNumber: "270/6",
        //     ward: "Phường 2",
        //     district: "Phú Nhuận",
        //     city: "Hồ Chí Minh",
        //   },
        //   paymentMethod: "Thanh toán Online",
        //   items: [
        //     {
        //       name: "AWM - 07",
        //       code: "MO0007",
        //       price: 1929000,
        //       imgSrc: "./assets/img/lego-moc/moc-07.png",
        //       topic: "Army",
        //       quantity: 1,
        //     },
        //     {
        //       name: "AWM - 08",
        //       code: "MO0008",
        //       price: 1879000,
        //       imgSrc: "./assets/img/lego-moc/moc-08.png",
        //       topic: "Army",
        //       quantity: 1,
        //     },
        //   ],
        //   totalPrice: 3808000,
        //   status: "Đã giao",
        // },
      ];
      localStorage.setItem(listOrders, JSON.stringify(orders));
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
          <strong>Chủ đề:</strong> ${product.topic}
        </div>
        <div class="item__info-detail">
          <strong>Giá:</strong> ${product.price} VNĐ
        </div>

        <div class="item__info-detailend">
          <a href="#" class="item__info-link buy-btn" id ="${product.code}">Mua</a>
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
          <button class="quantity-btn btn-des">-</button>
          <input type="number" value="1" id="quantity-input" min="1">
          <button class="quantity-btn btn-ins">+</button>
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

      // Lâm
      let quantity = document.querySelector("#quantity-input");
      document.querySelector(".btn-des").addEventListener("click", () => {
        if (quantity.value > 1) quantity.value--;
      });
      document.querySelector(".btn-ins").addEventListener("click", () => {
        quantity.value++;
      });
      quantity.addEventListener("input", () => {
        if (parseInt(quantity.value) < 1 || isNaN(quantity.value)) {
          quantity.value = 1; // Gán lại giá trị hợp lệ
        }
      });
      document
        .querySelector(".add-to-cart")
        .addEventListener("click", () =>
          addProductToCart1(product.id, quantity.value)
        );
    } else {
      // Nếu không tìm thấy sản phẩm
      alert("Product not found");
    }
  }

  // Hiển thị Menu tổng
  function displayMenu() {
    var url = window.location.href;
    var bien = url.split("?");

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
    let tempCatogreyList = JSON.parse(
      localStorage.getItem(listProductCatogrey)
    );
    let s1 = "";
    tempCatogreyList.forEach((item) => {
      s1 += `<option value="${item.brandid}">${item.brandname}</option>`;
    });
    let s2 =
      `<div class="verticalmenu"> <div class="verticalmenu_title">
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
              <option value="">Tất cả</option>` +
      s1 +
      ` 
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
    return s2;
  }

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
    let selectedCategoryValue = selectedCategory.value; // Lấy giá trị được chọn từ dropdown category
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
      let matchesCategory =
        selectedCategoryValue === "" || // Nếu chọn "Tất cả", không lọc theo category
        product.code.substring(0, 2) === selectedCategoryValue; // Khớp category với giá trị được chọn

      return (
        matchesName && matchesMinPrice && matchesMaxPrice && matchesCategory
      );
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

  createProductCatogrey();
  renderProductCategories();
  verticalMenu();
  createProducts();
  createUsers();
  createOrders();
  displayMenu();

  const searchNameProduct = document.getElementById("search-name");
  const searchMinPriceProduct = document.getElementById("search-price-min");
  const searchMaxPriceProduct = document.getElementById("search-price-max");
  const selectedCategory = document.getElementById("search-category");

  searchNameProduct.addEventListener("input", filterProducts);
  searchMinPriceProduct.addEventListener("input", filterProducts);
  searchMaxPriceProduct.addEventListener("input", filterProducts);
  selectedCategory.addEventListener("change", filterProducts);

  function clearSearchAdvance() {
    searchNameProduct.value = null;
    searchMinPriceProduct.value = null;
    searchMaxPriceProduct.value = null;
    selectedCategory.value = "";
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
      <h1 style="line-height: 30px;color: var(--border-color); font-size: 28px; margin-bottom: 10px; ">Chào mừng bạn đến với cửa hàng LEGO của chúng tôi!</h1>
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
      <h1 style="line-height: 30px;color: var(--border-color); font-size: 28px; margin-bottom: 10px;">Giới thiệu về cửa hàng LEGO của chúng tôi</h1>
      
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

    let buyButtons = document.querySelectorAll(".buy-btn");
    buyButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        addProductToCart1(button.id, 1);
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
      document.querySelectorAll(".form-message").forEach((item) => {
        item.innerHTML = "";
      });
      document.querySelectorAll(".auth-form__input").forEach((item) => {
        item.value = ""; // Đặt giá trị của từng ô nhập liệu thành rỗng
      });
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

  function checkInputFromSignup(event) {
    let inputElement = event.target.value.trim();
    let errorElement =
      event.target.parentElement.querySelector(".form-message");

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

  document
    .getElementById("register-form")
    .addEventListener("click", createUser);
  document.getElementById("login-form").addEventListener("click", login);

  // Thêm sự kiện lắng nghe cho modal
  document
    .getElementById("myModalLogin")
    .addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        login(); // Gọi hàm đăng nhập khi nhấn Enter
      }
    });

  document
    .getElementById("myModalRegister")
    .addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        createUser(); // Gọi hàm đăng nhập khi nhấn Enter
      }
    });

  function createUser() {
    userList = JSON.parse(localStorage.getItem(ListUsers));
    let username = inputSignUp[0].value.trim();
    let email = inputSignUp[1].value.trim();
    let password = inputSignUp[2].value.trim();
    let passwordAgain = inputSignUp[3].value.trim();
    let id = userList.length;
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
      id: id,
      username: username,
      email: email,
      address: [],
      password: password,
      cart: [],
      dateSignUp: "",
      status: 1,
      role: 0,
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
    const userLoginData = localStorage.getItem("userLogin");

    if (userLoginData) {
      const user = JSON.parse(userLoginData);

      // Kiểm tra trạng thái tài khoản
      if (user.status === 0) {
        alert("Tài khoản đã bị vô hiệu hóa !!!");
        // Có thể thêm điều hướng đến trang đăng nhập ở đây
        return;
      }

      // Cập nhật giao diện người dùng
      const headerAccount = document.querySelectorAll(
        ".header__navbar-item--strong"
      );
      headerAccount.forEach((item) => {
        item.style.display = "none"; // Ẩn các mục không cần thiết
      });

      const loginStatusElement = document.querySelector(".loginStatus");
      loginStatusElement.innerHTML = `
      <li class="header__navbar-item2 header__navbar-item--strong accountLogin"> |${user.username}| </li>
      <li class="header__navbar-item header__navbar-item--strong userLogout">Đăng xuất</li>
    `;

      const userLogout = document.querySelector(".userLogout");
      userLogout.addEventListener("click", () => {
        localStorage.removeItem("userLogin");
        alert("Đăng xuất thành công!");
        location.href = "index.html?tc"; // Điều hướng đến trang chính
      });
    }
  }

  function login() {
    const userLoginValue = userLogin.value.trim();
    const passLoginValue = passLogin.value.trim();
    const userList = JSON.parse(localStorage.getItem(ListUsers)) || [];

    // Kiểm tra thông tin đăng nhập
    if (!userLoginValue || !passLoginValue) {
      alert("Vui lòng nhập tên đăng nhập và mật khẩu.");
      return false;
    }

    // Tìm kiếm người dùng
    const user = userList.find((user) => user.username === userLoginValue);

    if (!user) {
      alert("Tên đăng nhập hoặc mật khẩu không chính xác.");
      return false;
    }

    // Kiểm tra mật khẩu
    if (user.password !== passLoginValue) {
      alert("Tên đăng nhập hoặc mật khẩu không chính xác.");
      return false;
    }

    // Kiểm tra trạng thái tài khoản
    if (user.status === 0) {
      alert("Tài khoản đã bị vô hiệu hóa !!!");
      return false;
    }

    // Đăng nhập thành công
    localStorage.setItem("userLogin", JSON.stringify(user));
    alert("Đăng nhập thành công");
    window.location.reload();

    return true;
  }
  checklogin();
  const USERLOGIN = JSON.parse(localStorage.getItem("userLogin")) ?? [];
  cartList();

  var filterProductList = JSON.parse(localStorage.getItem(listProducts));

  // Phần cart
  function addProductToCart1(productID, quantity) {
    if (!localStorage.getItem("userLogin")) {
      alert("Vui lòng đăng nhập để thêm sản phẩm !!!!");
      productLayout.style.display = "none";
      return;
    }
    let cartArray = getCartUserInList(USERLOGIN.id);
    let tempList = JSON.parse(localStorage.getItem(listProducts));
    let productItem = tempList.find((product) => product.code === productID);

    if (!productItem) {
      alert("Sản phẩm không tồn tại");
      return;
    }

    // Kiểm tra số lượng sản phẩm muốn thêm vào giỏ hàng
    let availableQuantity =
      productItem.quantity - numQuantitySoldInListOrder(productID);
    let totalQuantityInCart =
      cartArray.find((item) => item.code === productItem.code)?.quantity || 0;
    let totalQuantity = totalQuantityInCart + parseInt(quantity);

    if (totalQuantity <= availableQuantity) {
      let existProduct = cartArray.findIndex(
        (item) => item.code === productItem.code
      );

      if (existProduct !== -1) {
        // Cập nhật số lượng nếu sản phẩm đã có trong giỏ
        cartArray[existProduct].quantity += parseInt(quantity);
        cartArray[existProduct].price = productItem.price;
      } else {
        // Thêm sản phẩm mới vào giỏ
        cartArray.push({
          name: productItem.name,
          code: productItem.code,
          price: productItem.price,
          imgSrc: productItem.imgSrc,
          topic: productItem.topic,
          quantity: parseInt(quantity),
        });
      }

      // Cập nhật giỏ hàng của người dùng trong localStorage
      updateCartUserInList(USERLOGIN.id, cartArray); // Truyền vào giỏ hàng đã cập nhật

      alert("Thêm sản phẩm thành công");
      cartList();
      productLayout.style.display = "none";
    } else {
      alert(
        `Không thể thêm sản phẩm. Số lượng tối đa có thể thêm là ${
          availableQuantity - totalQuantityInCart
        }.`
      );
    }
  }

  function removeFromCart(code) {
    updateCartUserInList(
      USERLOGIN.id,
      getCartUserInList(USERLOGIN.id).filter((item) => item.code !== code)
    );
    alert("Sản phẩm đã được xóa khỏi giỏ hàng");
    cartList();
    displayCartPage();
  }

  function deleteAllFromCart() {
    let cartArray = getCartUserInList(USERLOGIN.id);
    let length = cartArray.length;
    if (length == 0) {
      alert("Giỏ hàng đang trống");
      return;
    }
    updateCartUserInList(USERLOGIN.id, []);
    alert("Toàn bộ Sản phẩm đã được xóa khỏi giỏ hàng");
    cartList();
    displayCartPage();
  }

  removeAllCart.addEventListener("click", deleteAllFromCart);

  function cartList() {
    let cartList_ = document.querySelector(".header__cart-list");
    let cartArray = getCartUserInList(USERLOGIN.id);
    let length = cartArray.length;
    cartList_.innerHTML = `<div class="cartTittle"><h5>Sản phẩm thêm vào</h5></div>`;

    let header__cartquantity = document.querySelector(".header__cart-quantity");
    header__cartquantity.textContent = cartArray.length;

    if (length == 0) {
      cartList_.innerHTML = `<div class="cartTittle"><h5>Giỏ hàng của bạn trống</h5></div>`;
      return;
    }

    cartArray.forEach((product) => {
      cartList_.innerHTML += `<div class="cartItem">
                          <div class="cart-item-img"><img src="${product.imgSrc}" alt="${product.name}"></div>
                          <div class="cart-item-name"><strong>Tên:</strong> ${product.name}</div>
                          <div class="cart-item-price"><strong>Giá:</strong> ${product.price} VNĐ</div>
                          <div class="cart-item-quantity"><strong>SL:</strong> ${product.quantity}</div>
                          <i class="cart-item-remove fa-solid fa-x header__cart-remove" data="${product.code}"></i>
                        </div>`;
    });

    document.querySelectorAll(".header__cart-remove").forEach((button) => {
      button.addEventListener("click", function () {
        let productCode = this.getAttribute("data");
        removeFromCart(productCode);
      });
    });
  }

  function updateQuantity() {
    let quantityInputs = document.querySelectorAll(".inputQuantityCart");
    let tempList = JSON.parse(localStorage.getItem(listProducts));
    let cartArray = getCartUserInList(USERLOGIN.id);

    // Lặp qua các ô nhập số lượng
    quantityInputs.forEach((input, index) => {
      let productCode = cartArray[index].code;
      let productItem = tempList.find(
        (product) => product.code === productCode
      );
      let availableQuantity =
        productItem.quantity - numQuantitySoldInListOrder(productCode);

      // Kiểm tra giá trị nhập
      let value = parseInt(input.value);
      if (isNaN(value) || value < 1) {
        alert(
          `Số lượng sản phẩm "${productItem.name}" phải lớn hơn hoặc bằng 1.`
        );
        input.value = 1;
        input.focus();
        return;
      }

      // Cập nhật số lượng trong giỏ hàng
      if (value <= availableQuantity) {
        cartArray[index].quantity = value;
      } else {
        alert(
          `Không thể cập nhật sản phẩm "${productItem.name}". Số lượng tối đa có thể thêm là ${availableQuantity}.`
        );
      }
    });

    // Cập nhật giỏ hàng trong localStorage
    updateCartUserInList(USERLOGIN.id, cartArray);

    displayCartPage(); // Hiển thị lại trang giỏ hàng
    cartList();
  }
  function deleteItem(code) {
    updateCartUserInList(
      USERLOGIN.id,
      getCartUserInList(USERLOGIN.id).filter((item) => item.code !== code)
    );
    alert("Xóa sản phẩm thành công");
    displayCartPage();
    cartList();
  }

  function displayPaymentPage() {
    let s = `
    <div class="auth-form" style="width:100%;">
        <div class="auth-form__container">
            <div class="auth-form__header" style="justify-content: center;">
                <h3 class="auth-form__heading">Thanh toán online</h3>
            </div>
            <div class="auth-form__form">
                <div class="auth-form__group">
                    <label for="cardNumber">Mã số thẻ:</label>
                    <input type="text" id="cardNumber" class="auth-form__input" placeholder="Nhập mã số thẻ" />
                    <span class="form-message"></span>
                </div>
                <div class="auth-form__group" style="margin-top:10px">
                    <label for="bankName">Chọn ngân hàng:</label>
                    <input type="text" id="bankName" class="auth-form__input" placeholder="Nhập tên ngân hàng" oninput="suggestBanks()" />
                    <span class="form-message"></span>
                    <ul id="bank-suggestions" class="suggestions-list"></ul>
                </div>
                <div class="auth-form__group">
                    <label for="cardHolder">Tên chủ thẻ:</label>
                    <input type="text" id="cardHolder" class="auth-form__input" placeholder="Nhập tên chủ thẻ" />
                    <span class="form-message"></span>
                </div>
            </div>

            <!-- Footer -->
            <div class="auth-form__controls" style="display:flex; justify-content:space-between;">
                <button class="btn btn--primary" id = "submitPaymentBtn">Thanh toán</button>
            </div>
        </div>
    </div>
    `;
    productContainerMain.innerHTML = s;

    // Gán sự kiện blur cho các input
    document
      .getElementById("cardNumber")
      .addEventListener("blur", validateInput);
    document.getElementById("bankName").addEventListener("blur", validateInput);
    document
      .getElementById("cardHolder")
      .addEventListener("blur", validateInput);
  }

  // Hàm để xác thực và hiển thị thông báo nếu không hợp lệ
  function validateInput(event) {
    const input = event.target;
    const value = input.value.trim();
    const messageElement = input.nextElementSibling; // Phần tử form-message

    // Kiểm tra mã số thẻ
    if (input.id === "cardNumber") {
      if (value === "" || !/^\d{16}$/.test(value)) {
        messageElement.textContent = "Mã số thẻ không hợp lệ (16 chữ số).";
      } else {
        messageElement.textContent = ""; // Xóa thông báo nếu hợp lệ
      }
    }

    // Kiểm tra tên ngân hàng
    if (input.id === "bankName") {
      if (value === "") {
        messageElement.textContent = "Tên ngân hàng không được để trống.";
      } else {
        messageElement.textContent = ""; // Xóa thông báo nếu hợp lệ
      }
    }

    // Kiểm tra tên chủ thẻ
    if (input.id === "cardHolder") {
      if (value === "") {
        messageElement.textContent = "Tên chủ thẻ không được để trống.";
      } else {
        messageElement.textContent = ""; // Xóa thông báo nếu hợp lệ
      }
    }
  }

  // Hàm để xác thực tất cả các trường nhập liệu khi nhấn nút thanh toán
  function validateInputs() {
    let isValid = true;

    // Gọi hàm validateInput cho từng trường
    document.querySelectorAll(".auth-form__input").forEach((input) => {
      validateInput({ target: input }); // Gọi validateInput cho từng input
    });

    return isValid; // Trả về true nếu tất cả input hợp lệ
  }

  const bankList = [
    "Ngân hàng Vietcombank",
    "Ngân hàng BIDV",
    "Ngân hàng VietinBank",
    "Ngân hàng ACB",
    "Ngân hàng Techcombank",
    "Ngân hàng Sacombank",
    "Ngân hàng MB Bank",
    "Ngân hàng Agribank",
  ];

  function displayCartPage() {
    if (!localStorage.getItem("userLogin")) {
      alert("Vui lòng đăng nhập để xem giỏ hàng !!!!");
      productLayout.style.display = "none";
      return;
    }
    bodytop__left.style.display = "block";
    bodytop__left.style.width = "calc(20% - 5px)";
    bodytop__right.style.width = "calc(80% - 5px)";
    applyResponsiveStyles();
    window.addEventListener("resize", applyResponsiveStyles);
    pageNumber.style.display = "none";
    let cart = getCartUserInList(USERLOGIN.id);
    let totalPrice = 0;
    let s = `
    <style>
    table {
        border-collapse: collapse;
        width: 100%;
    }
    td, th {
        border: 1px solid #dddddd;
        text-align: center;
        padding: 8px;
    }
    td{
      >div{
          display: flex;
          justify-content: center;
        >div{
          width: 100px;
          height: 100px;
          img{
            width: 100%;
          }
        }
      }
    }
    tr {
      background-color: #fff;

    }
        td:nth-child(1),
        th:nth-child(1) {
          width: 15%;
        }
        td:nth-child(2),
        th:nth-child(2) {
        div{
        justify-content: flex-start;
        }
          width: 35%;
        }
        td:nth-child(3),
        th:nth-child(3) {
          width: 15%;
          input{
            text-align: center;
            max-width: 50px;
          }
        }
        td:nth-child(4),
        th:nth-child(4) {
          width: 20%;
          
        }
        td:nth-child(5),
        th:nth-child(5) {
          width: 20%;
        }
  </style>
  <div style="border: 2px solid var(--primary-color); border-radius: 10px; padding: 20px; background-color: #ffffff; width: 100%; margin: 0 auto; text-align: left;">
  <h1 style="text-align: center; color: var(--border-color); font-size: 24px; margin-bottom: 20px;">Giỏ hàng của tôi</h1>
  <table>
    <tr>
        <th>Hình ảnh</th>
        <th>Tên sản phẩm</th>
        <th>Số lượng</th>
        <th>Giá</th>
        <th>Hành động</th>
    </tr>`;

    // Duyệt qua mảng cart để thêm các dòng vào bảng
    cart.forEach((item, index) => {
      const itemTotalPrice = item.price * item.quantity; // Tính giá cho từng sản phẩm
      totalPrice += itemTotalPrice;
      s += `
    <tr>
        <td>
            <div>
                <img src="${item.imgSrc}" alt="${
        item.name
      }" style="width: 100px; height: 100px;">
            </div>
        </td>
        <td>
            <div>
                <h1 style="color: var(--border-color); font-size: 16px; width: 100%;">${
                  item.name
                }</h1>
            </div>
        </td>
        <td>
            <div>
                <button class="quantity-btn btn-des" onclick="desQuanitityIncart('${
                  item.code
                }')">-</button>
                <input type="number" value="${
                  item.quantity
                }" class = "inputQuantityCart" onchange="updateQuantity('${
        item.code
      }')" min="1" style="text-align: center; max-width: 50px;">
    <button class="quantity-btn btn-ins" onclick="insQuanitityIncart('${
      item.code
    }')">+</button>
            </div>
        </td>
        <td>
            <div>
                <span style="color: var(--border-color)">
                    ${(item.price * item.quantity).toLocaleString("vi-VN")}đ
                </span>
            </div>
        </td>
        <td>
            <div>
                <img onclick="deleteItem('${
                  item.code
                }')" style="cursor:pointer" src="./assets/img/bin.png" alt="Delete">
            </div>
        </td>
    </tr>`;
    });

    s += `
  </table>
  </div>`;

    let addresses = getAddressUserInList(USERLOGIN.id);
    let addressHTML = "";
    let addressObject;
    if (addresses.length > 0) {
      addresses.forEach(function (address, index) {
        addressHTML += `
    <p style="margin-top:5px;margin-bottom:0;">Địa chỉ ${index + 1}:</p>
    <div style="display: flex; align-items: center; gap: 5px;">
        <input style="cursor: pointer" type="radio" name="address-buy-product" value="${index}">
        <label>${address.houseNumber}, ${address.ward}, ${address.district}, ${
          address.city
        }</label>
        <button onclick="deleteAddress(${index})" style="margin-left: 10px; cursor: pointer; color: red; background: none; border: 1px solid red; font-size: 12px;">Xóa</button>
    </div>`;
        addressObject = address;
      });
    } else {
      addressHTML += `<p style="text-align: center">Không có địa chỉ có sẵn</p>`;
    }

    let s1 = `
    <style>
      #btnBuy{
          background-color: var(--primary-color-rgpa);
          margin-top: 5px;
          padding: 5px;
          list-style-type: none;
          height: 50px;
          border-radius: 10px;
          font-size: 20px;
          font-weight: 700;
          width: 100%;
          cursor: pointer;
          &:hover{
            background-color: var(--primary-color);
          }
      }
    </style>
    <div>
      <div style="border: 2px solid var(--primary-color); border-radius: 10px; padding: 20px; background-color: #ffffff; width: 100%; margin: 0 auto; text-align: left;">
        <p style="text-align: end;margin:0;color:#857070;cursor:pointer; font-size: 12px; " class="addAddress-btn">Thêm địa chỉ</p>
        <h1 style="text-align: center; color: var(--border-color); font-size: 18px; margin-bottom: 20px;">Địa chỉ nhận hàng</h1>
        ${addressHTML}
      </div>
      <div style="border: 2px solid var(--primary-color); border-radius: 10px; padding: 20px; background-color: #ffffff; width: 100%; margin: 5px auto; text-align: left;">
        <h1 style=" display: flex;justify-content: space-between;text-align: center; color: var(--border-color); font-size: 18px; margin-bottom: 20px;">Tạm tính <span style="color: var(--border-color);font-size: 12px;">${totalPrice.toLocaleString(
          "vi-VN"
        )}đ</span></h1>
        <h1 style=" display: flex;justify-content: space-between;text-align: center; color: var(--border-color); font-size: 14px; margin-bottom: 20px;">Thuế VAT <span style="color: var(--border-color);font-size: 10px;">0đ</span></h1>
        <h1 style="border-top: 1px solid;padding-top:20px; display: flex;justify-content: space-between;text-align: center; color: var(--border-color); font-size: 20px; margin-bottom: 20px;">Tổng tiền <span style="color: var(--border-color);font-size: 16px;">${totalPrice.toLocaleString(
          "vi-VN"
        )}đ</span></h1>
        <div style="border-top: 1px solid;padding-top:20px;">
          <div style="display: flex;align-items:center; gap:10px">
            <input style="cursor:pointer" type="radio" id="method-offline" name="payment method" onclick="choiceMethod()" value="offline">
            <label for="method-offline">Thanh toán khi nhận hàng</label><br>
          </div>
          <div style="display: flex;align-items:center; gap:10px;margin-top:5px;">
            <input style="cursor:pointer" type="radio" id="method-online" name="payment method" onclick="choiceMethod()" value="online">
            <label for="method-online">Thanh toán online</label><br>
          </div>
        </div>
      </div>
      <button id="btnBuy" onclick="handleSubmitBuy(${totalPrice})">Đặt hàng</button>
    </div>
    `;
    let s2 = `
        <div class="auth-form" style="width:100%;">
          <div class="auth-form__container">
            <div class="auth-form__header" style="justify-content: center">
              <h3 class="auth-form__heading">Thêm địa chỉ</h3>
            </div>
            <div class="auth-form__form">
              <label for="houseNumber">Địa chỉ:</label>
              <div class="auth-form__group">
                <input
                  type="text" id="address"
                  class="auth-form__input--address"
                  id = "houseNumber"
                  placeholder="Nhập số nhà, đường"
                />
                <div id="houseNumber-alert"></div>
              </div>
              <!--  -->
              <div class = "selected-form__group">
              <div class="auth-form__group selected-city">
                <label for="city">Chọn tỉnh/thành:</label>
                <select id="city">
                  <option value="">Chọn tỉnh/thành</option>
                </select>
                <div id="city-alert"></div>
              </div>
              <!--  -->
              <div class="auth-form__group selected-district">
                <label for="district">Chọn quận/huyện:</label>
                <select id="district">
                  <option value="">Chọn Quận/Huyện</option>
                </select>
                <div id="district-alert"></div>
              </div>
              <div class="auth-form__group selected-ward">
                <div class="auth-form__group">
                  <label for="ward">Chọn phường/Xã:</label>
                  <select id="ward">
                    <option value="">Chọn phường/Xã</option>
                  </select>
                  <div id="ward-alert"></div>
                </div>
              </div>
              </div>
            </div>
            <!-- Footer 01 -->
            <div class="auth-form__controls">
              <button class="btn btn--primary" id="save-Address">Thêm</button>
            </div>
          </div>
        </div>
  `;

    bodytop__left.innerHTML = s1;
    productContainerMain.innerHTML = s;
    producttype__name.innerHTML = `<h3>Giỏ hàng</h3>`;

    // Chức năng thêm địa chỉ
    let addAddress = document.querySelectorAll(".addAddress-btn");
    addAddress.forEach((button) => {
      button.addEventListener("click", (e) => {
        e.preventDefault();
        productLayout.style.display = "block";
        productContainter.innerHTML = s2;
        let citySelector = document.getElementById("city");
        let districtSelector = document.getElementById("district");
        let wardSelector = document.getElementById("ward");
        //
        locations.forEach((location) => {
          const option = document.createElement("option");
          option.value = location.city;
          option.textContent = location.city;
          citySelector.appendChild(option);
        });
        //
        citySelector.addEventListener("change", () => {
          districtSelector.innerHTML = '<option value="">Chọn Quận</option>'; // Xóa quận cũ
          wardSelector.innerHTML =
            '<option value="">Chọn Phường / Huyện</option>'; // Xóa phường cũ

          const selectedCity = locations.find(
            (location) => location.city === citySelector.value
          );

          if (selectedCity && selectedCity.districts) {
            selectedCity.districts.forEach((district) => {
              const option = document.createElement("option");
              option.value = district.district;
              option.textContent = district.district;
              districtSelector.appendChild(option);
            });
          }
        });

        // Cập nhật Phường khi chọn Quận
        districtSelector.addEventListener("change", () => {
          wardSelector.innerHTML =
            '<option value="">Chọn Phường / Huyện</option>'; // Xóa phường cũ

          const selectedCity = locations.find(
            (location) => location.city === citySelector.value
          );
          const selectedDistrict = selectedCity
            ? selectedCity.districts.find(
                (district) => district.district === districtSelector.value
              )
            : null;

          if (selectedDistrict && selectedDistrict.wards) {
            selectedDistrict.wards.forEach((ward) => {
              const option = document.createElement("option");
              option.value = ward;
              option.textContent = ward;
              wardSelector.appendChild(option);
            });
          }
        });

        function validateField(field, fieldName, alertElement) {
          if (!field.value || field.value.trim() === "") {
            alertElement.textContent = `${fieldName} không được để trống!`;
            alertElement.classList.add("alert");
          } else {
            alertElement.textContent = "";
            alertElement.classList.remove("alert");
          }
        }

        // Thêm sự kiện "blur" cho các trường input và select
        citySelector.addEventListener("blur", function () {
          validateField(
            this,
            "Thành Phố",
            document.getElementById("city-alert")
          );
        });

        districtSelector.addEventListener("blur", function () {
          validateField(
            this,
            "Quận",
            document.getElementById("district-alert")
          );
        });

        wardSelector.addEventListener("blur", function () {
          validateField(
            this,
            "Phường / Huyện",
            document.getElementById("ward-alert")
          );
        });
        document
          .getElementById("address")
          .addEventListener("blur", function () {
            validateField(
              this,
              "Số Nhà",
              document.getElementById("houseNumber-alert")
            );
          });
        document
          .getElementById("save-Address")
          .addEventListener("click", () => {
            let selectedCity = citySelector.value;
            let selectedDistrict = districtSelector.value;
            let houseNumber = document.getElementById("address").value;
            let wardName = document.getElementById("ward").value;
            let addressTemp = getAddressUserInList(USERLOGIN.id) || [];
            alert(addressTemp.length);
            if (addressTemp.length >= 3) {
              alert("Đã đạt tối đa 3 địa chỉ!");
              return;
            }
            // Kiểm tra nếu tất cả các trường đều có giá trị
            if (selectedCity && selectedDistrict && houseNumber && wardName) {
              // Cấu trúc lại địa chỉ theo cú pháp "số nhà, tên đường, quận/huyện, thành phố"
              addressTemp.push({
                houseNumber: houseNumber,
                ward: wardName,
                district: selectedDistrict,
                city: selectedCity,
              });

              // Lưu vào localStorage (giả sử có ID người dùng)
              updateAddressUserInList(USERLOGIN.id, addressTemp);
              alert("Đã thêm địa chỉ giao hàng");
              productLayout.style.display = "none";
              displayCartPage();
            } else {
              alert("Vui lòng điền đầy đủ thông tin.");
            }
          });
      });
    });
  }

  function desQuanitityIncart(code) {
    let cartArray = getCartUserInList(USERLOGIN.id);
    let index = cartArray.findIndex((item) => item.code === code);
    if (index !== -1) {
      if (cartArray[index].quantity > 1) {
        cartArray[index].quantity--;
        updateCartUserInList(USERLOGIN.id, cartArray);
        displayCartPage();
        cartList();
      }
    }
  }

  function insQuanitityIncart(code) {
    let cartArray = getCartUserInList(USERLOGIN.id);
    let tempList = JSON.parse(localStorage.getItem(listProducts));
    let index = cartArray.findIndex((item) => item.code === code);
    let isValid = cartArray.every((productCode) => {
      // Kiểm tra xem sản phẩm có trong danh sách không
      const productItem = tempList.find(
        (item) => item.code === productCode.code
      );

      // Nếu không có sản phẩm trong danh sách
      if (!productItem) {
        alert(
          `Có sản phẩm với mã ${productCode.code} : ${productCode.name} không còn kinh doanh nữa.`
        );
        deleteItem(productCode.code); // Gọi hàm xóa sản phẩm
        return false; // Trả về false để chỉ ra rằng có sản phẩm không hợp lệ
      }
      return true; // Trả về true nếu sản phẩm hợp lệ
    });
    if (isValid) {
      if (index !== -1) {
        let productItem = tempList.find((product) => product.code === code);
        let availableQuantity =
          productItem.quantity - numQuantitySoldInListOrder(code);

        if (cartArray[index].quantity + 1 <= availableQuantity) {
          cartArray[index].quantity++;
          updateCartUserInList(USERLOGIN.id, cartArray);
          displayCartPage();
          cartList();
        } else {
          alert(
            `Không thể cập nhật sản phẩm "${productItem.name}". Số lượng tối đa có thể thêm là ${availableQuantity}.`
          );
        }
      }
    }
  }

  // Hàm gợi ý ngân hàng
  function suggestBanks() {
    let input = document.getElementById("bankName");
    let suggestionsList = document.getElementById("bank-suggestions");
    let query = input.value.toLowerCase();
    suggestionsList.innerHTML = ""; // Clear previous suggestions

    if (query.length > 0) {
      // Lọc danh sách ngân hàng dựa trên input
      const filteredBanks = bankList.filter((bank) =>
        bank.toLowerCase().includes(query)
      );

      // Hiển thị gợi ý
      filteredBanks.forEach((bank) => {
        const li = document.createElement("li");
        li.style.cursor = "pointer"; // Hiển thị con trỏ chuột
        li.textContent = bank;

        // Gán sự kiện onclick cho mỗi gợi ý
        li.onclick = function () {
          input.value = bank; // Điền giá trị ngân hàng vào input
          suggestionsList.innerHTML = ""; // Xóa gợi ý sau khi chọn
        };

        // Thêm phần tử li vào danh sách gợi ý
        suggestionsList.appendChild(li);
      });

      // Nếu không có gợi ý nào, có thể hiển thị thông báo
      if (filteredBanks.length === 0) {
        const noResult = document.createElement("li");
        noResult.textContent = "Không tìm thấy ngân hàng nào.";
        suggestionsList.appendChild(noResult);
      }
    }
  }
  header__cart.addEventListener("click", displayCartPage);

  function applyResponsiveStyles() {
    const mediaQuery = window.matchMedia("(max-width: 1200px)");
    if (mediaQuery.matches) {
      bodyTop.style.flexDirection = "column-reverse";
      bodytop__left.style.width = "100%";
      bodytop__right.style.width = "100%";
    } else {
      bodyTop.style.flexDirection = "row-reverse";
      if (producttype__name.textContent == "Giỏ hàng") {
        bodytop__left.style.width = "calc(20% - 5px)";
        bodytop__right.style.width = "calc(80% - 5px)";
      } else if (producttype__name.textContent == "Giỏ hàng") {
        bodytop__left.style.display = "none";
        bodytop__right.style.width = "100%";
      }
    }
  }

  function choiceMethod() {
    let methodOffline = document.getElementById("method-offline");
    let methodOnline = document.getElementById("method-online");
    let btnBuy = document.getElementById("btnBuy");
    if (methodOnline.checked) {
      btnBuy.textContent = "Thanh toán online";
    } else if (methodOffline.checked) {
      btnBuy.textContent = "Đặt hàng";
    }
  }

  // Xử lý thanh toán
  function handleSubmitBuy(totalPrice) {
    let methodOffline = document.getElementById("method-offline");
    let methodOnline = document.getElementById("method-online");
    let addressRadios = document.querySelectorAll(
      'input[name="address-buy-product"]'
    );
    const selectedAddress = Array.from(addressRadios).find(
      (radio) => radio.checked
    )?.value;
    let tempList = JSON.parse(localStorage.getItem(listProducts));
    let tempCart = getCartUserInList(USERLOGIN.id);
    numProducts = tempCart.length;
    if (numProducts == 0) {
      alert("Hãy thêm sản phẩm vào giỏ trước nhé!");
      return;
    }
    let isValid = tempCart.every((productCode) => {
      // Kiểm tra xem sản phẩm có trong danh sách không
      const productItem = tempList.find(
        (item) => item.code === productCode.code
      );

      // Nếu không có sản phẩm trong danh sách
      if (!productItem) {
        alert(
          `Có sản phẩm với mã ${productCode.code} : ${productCode.name} không còn kinh doanh nữa.`
        );
        deleteItem(productCode.code); // Gọi hàm xóa sản phẩm
        return false; // Trả về false để chỉ ra rằng có sản phẩm không hợp lệ
      }
      return true; // Trả về true nếu sản phẩm hợp lệ
    });
    if (isValid) {
      if (selectedAddress) {
        if (!methodOffline.checked && !methodOnline.checked) {
          alert("Vui lòng chọn phương thức thanh toán!");
          return;
        } else {
          let listOrderTemp = JSON.parse(localStorage.getItem(listOrders));
          let newOrder = {
            userId: USERLOGIN.id,
            orderId: listOrderTemp.length + 1,
            orderDate: new Intl.DateTimeFormat("vi-VN", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            }).format(new Date()),
            address: getAddressUserInList(USERLOGIN.id)[selectedAddress],
            paymentMethod: "",
            items: getCartUserInList(USERLOGIN.id),
            totalPrice: totalPrice,
            status: "Chờ xác nhận",
          };
          if (methodOffline.checked) {
            newOrder.paymentMethod = "Thanh toán khi nhận hàng";
            displayCartPage();
            showCheckOrderModal(newOrder);
          } else if (methodOnline.checked) {
            displayPaymentPage();
            document
              .getElementById("submitPaymentBtn")
              .addEventListener("click", () => {
                if (validateInputs) {
                  newOrder.paymentMethod = "Thanh toán Online";
                  showCheckOrderModal(newOrder);
                }
              });
          }
        }
      } else {
        alert("Chưa chọn địa chỉ");
        return;
      }
    }
  }

  function showOrderModal(button) {
    // Tính toán tổng giá trị của đơn hàng từ cartArray
    let tempOrder = getOrderInList(button.id);
    //           <p><strong>Order ID:</strong> ${orderId}</p>
    let orderDetailsHTML = `
        <div>
          <p><strong>Order ID:</strong> ${tempOrder.orderId}</p>
          <p><strong>User ID:</strong> ${tempOrder.userId}</p>
          <p><strong>Phương thức thanh toán:</strong> ${tempOrder.paymentMethod}</p>
    
        </div>
        <table class="orderModalTable">
            <thead>
                <tr>
                  <th>Sản phẩm</th>
                  <th>Số lượng</th>
                  <th>Đơn giá</th>
                  <th>Tổng giá</th>
                </tr>
            </thead>
            <tbody>
    `;
    let Array = tempOrder.items;
    // Tạo danh sách các sản phẩm trong giỏ hàng
    Array.forEach((item) => {
      let itemTotal = item.price * item.quantity;

      orderDetailsHTML += `
        <tr>
          <td>${item.name}</td>
          <td>${item.quantity}</td>
          <td>${item.price.toLocaleString("vi-VN")}</td>
          <td>${itemTotal.toLocaleString("vi-VN")}</td>
        </tr>
      `;
    });

    // Thêm tổng giá trị vào chi tiết đơn hàng
    orderDetailsHTML += `
    </tbody>
  </table>
  <p style="font-weight: bold; margin-top: 10px;">
    Tổng giá: ${tempOrder.totalPrice.toLocaleString("vi-VN")}
  </p>
            <!-- Nút hủy đơn(trong truck)-->
          <button
            id="removeBtn"
            onclick="removeOrder(${tempOrder.orderId})">
          >
            Hủy đơn
          </button>
  `;

    // Cập nhật nội dung modal
    document.getElementById("orderDetails").innerHTML = orderDetailsHTML;

    // Hiển thị modal
    document.getElementById("orderModal").style.display = "block";

    if (tempOrder.status == "Chờ xác nhận" || tempOrder.status == "Đã xác nhận")
      removeBtn.style.display = "inline-block";
    else {
      removeBtn.style.display = "none"; // Ẩn nút hủy đơn
    }
  }

  function showCheckOrderModal(cart) {
    // Tính toán tổng giá trị của đơn hàng từ cartArray
    //           <p><strong>Order ID:</strong> ${orderId}</p>
    document.getElementById("orderModal").style.display = "block";
    let orderDetailsHTML = `
        <div>
          <p><strong>Order ID:</strong> ${cart.orderId}</p>
          <p><strong>User ID:</strong> ${cart.userId}</p>
          <p><strong>Phương thức thanh toán:</strong> ${cart.paymentMethod}</p>
    
        </div>
        <table class="orderModalTable">
            <thead>
                <tr>
                  <th>Sản phẩm</th>
                  <th>Số lượng</th>
                  <th>Đơn giá</th>
                  <th>Tổng giá</th>
                </tr>
            </thead>
            <tbody>
    `;
    let Array = cart.items;
    // Tạo danh sách các sản phẩm trong giỏ hàng
    Array.forEach((item) => {
      let itemTotal = item.price * item.quantity;

      orderDetailsHTML += `
        <tr>
          <td>${item.name}</td>
          <td>${item.quantity}</td>
          <td>${item.price.toLocaleString("vi-VN")}</td>
          <td>${itemTotal.toLocaleString("vi-VN")}</td>
        </tr>
      `;
    });

    // Thêm tổng giá trị vào chi tiết đơn hàng
    orderDetailsHTML += `
    </tbody>
  </table>
  <p style="font-weight: bold; margin-top: 10px;">
    Tổng giá: ${cart.totalPrice.toLocaleString("vi-VN")}
  </p>
            <!-- Nút hủy đơn(trong truck)-->
          <!-- Nút xác nhận(trong giỏ hàng) -->
          <button id="confirmBtn">
            Xác nhận mua hàng
          </button>
  `;

    // Cập nhật nội dung modal
    document.getElementById("orderDetails").innerHTML = orderDetailsHTML;
    document
      .getElementById("confirmBtn")
      .addEventListener("click", () => confirmOrder(cart));
  }

  function removeOrder(orderId) {
    let tempOrder = getOrderInList(orderId);
    if (
      tempOrder.status == "Chờ xác nhận" ||
      tempOrder.status == "Đã xác nhận"
    ) {
      // Cần hỏi trước khi hủy
      alert("Đã hủy đơn hàng thành công");
      updateStatusOrderInList(orderId, "Đã hủy");
      orderLayout();
      closeModal();
    }
  }

  // Hàm đóng Modal
  function closeModal() {
    document.getElementById("orderModal").style.display = "none";
  }

  // Hàm xác nhận mua hàng
  function confirmOrder(newOrder) {
    let listOrderTemp = JSON.parse(localStorage.getItem(listOrders));
    listOrderTemp.push(newOrder);
    localStorage.setItem(listOrders, JSON.stringify(listOrderTemp));
    updateCartUserInList(USERLOGIN.id, []);
    alert("Đặt hàng thành công!");
    cartList();
    displayCartPage();
    // Đóng modal
    closeModal();
  }

  // Xem lịch sử đơn hàng
  function showCustomerOrder() {
    let contentOrder = document.querySelector(".Customer-order .boxcontent");
    let orderArray = getListOrderUSerByID(USERLOGIN.id);
    contentOrder.innerHTML = " ";
    contentOrder.innerHTML += `
        <div class="content-order-group">
          <div class="content-order-info">MÃ ĐƠN HÀNG</div>
          <div class="content-order-info content-order-product">SẢN PHẨM</div>
          <div class="content-order-info">NGÀY ĐẶT</div>
          <div class="content-order-info">TỔNG TIỀN</div>
          <div class="content-order-info">TRẠNG THÁI</div>
          <div class="content-order-info">CHI TIẾT</div>
        </div>
      `;
    for (let i = 0; i < orderArray.length; i++) {
      let html = ``;
      html = `
          <div class="order-item-group">
            <div class="order-item id">${orderArray[i].orderId}</div>
            <div class="order-item order-item-info">${
              orderArray[i].items[0].name
            }</div>
            <div class="order-item">${orderArray[i].orderDate}</div>
            <div class="order-item">${formatTotal(
              orderArray[i].totalPrice
            )}</div>
            <div class="order-item" style="color: ${orderStatusStyle(
              orderArray[i].status
            )};font-weight: bolder;">${orderArray[i].status}</div>
            <button class="order-item orderModal" id = "${
              orderArray[i].orderId
            }" onclick="showOrderModal(this)">Chi Tiết</button>
          </div>
        `;
      if (html) contentOrder.innerHTML += html;
    }
  }

  function orderStatusStyle(status) {
    switch (status) {
      case "Chờ xác nhận":
        return "blue";
      case "Đã giao":
        return "green";
      case "Đã hủy":
        return "red";
      case "Đã xác nhận":
        return "#004e64";
      default:
        return "black";
    }
  }

  function formatTotal(total) {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(total);
  }

  function orderLayout() {
    if (!localStorage.getItem("userLogin")) {
      alert("Vui lòng đăng nhập để xem lịch sử mua hàng !!!!");
      productLayout.style.display = "none";
      return;
    }
    bodytop__right.style.width = "100%";
    pageNumber.style.display = "none";
    bodytop__left.style.display = "none";
    let html = `
  <div class="Customer-order">
  <div class="boxcontent">
  </div>
  </div>
  `;
    producttype__name.innerHTML = `<h3>Lịch sử mua hàng</h3>`;
    productContainerMain.innerHTML = html;
    // bodytop.innerHTML = html;
    showCustomerOrder();
  }
  let orderContent = document.querySelectorAll(".header__truck");
  orderContent.forEach((item) => item.addEventListener("click", orderLayout));

  //thông tin tài khoản
  const accountLoginButton = document.querySelector(".accountLogin");
  accountLoginButton.addEventListener("click", () => {
    const info = getUserById(USERLOGIN.id);
    let addressaccount;
    if (info.address.length == 0) {
      addressaccount = "Chưa cập nhật";
    } else {
      addressaccount =
        info.address[0].houseNumber +
        ", " +
        info.address[0].ward +
        ", " +
        info.address[0].district +
        ", " +
        info.address[0].city;
    }
    const userDiv = document.createElement("div");
    userDiv.className = "screen-bright";
    userDiv.innerHTML = `
      <div id="account-detail-user">
                <p class="exit" style="display: inline-block; float: right; margin-top:0%">
                    <button style="border: none; border-radius: 0px 18px 0px 0px; font-size: 16px; padding: 10px;">
                        <i class="fa-regular fa-x"></i>
                    </button>
                </p>
                <h2 style="padding-top:40px">Tài khoản</h2>
                <section>
                    <div class="form-detail">
                        <div class="form-detail-contentU" style="margin: 5px 0px">
                            <div style = "margin-bottom: 10px;"><strong>Tên đăng nhập: </strong> ${info.username}</div>
                        </div>

                        <div class="form-detail-contentU" style="margin: 5px 0px">
                            <div><strong>Email: </strong>${info.email}</div>
                        </div>

                        <div class="form-detail-contentU" style="margin: 5px 0px">
                            <div style="margin:10px 0px"><strong>Địa chỉ: </strong> ${addressaccount}</div>
                        </div>

                        <div class="form-detail-contentU" style="margin: 5px 0px">
                            <div style="margin:10px 0px"><strong>Ngày tạo:</strong> ${info.dateSignUp}</div>
                        </div>

                        <div class="form-detail-contentU" style="margin: 5px 0px">
                            <div style="margin:10px 0px"><strong>Vai trò:</strong> Khách hàng</div>
                        </div>

                    </div>
                </section>
            </div>
    `;
    document.body.appendChild(userDiv);
    detail_exit1();
    detail_exit2();
  });
  function detail_exit1() {
    window.addEventListener("click", (event) => {
      const screenBright = document.querySelector(".screen-bright");
      if (event.target === screenBright) {
        screenBright.remove();
      }
    });
  }

  function detail_exit2() {
    document.querySelector(".exit").addEventListener("click", () => {
      document.querySelector(".screen-bright").remove();
    });
  }

  // Phần ADMIN
} else {
}
