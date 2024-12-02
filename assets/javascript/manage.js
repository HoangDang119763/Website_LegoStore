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
  for (let i = 0; i < userList.length; i++) {
    if (userList[i].id == id) {
      return userList[i];
    }
  }
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
var productArray = JSON.parse(localStorage.getItem(listProducts));
var userList = JSON.parse(localStorage.getItem(ListUsers));
const productsPerPageAdmin = 8; // Số sản phẩm trên mỗi trang
let currentPageAdmin = 1; // Trang hiện tại
const headerAdmin = document.querySelector(".header-admin");
const inputSignUpAdmin = document.getElementsByClassName(
  "auth-form__inputAdmin"
);

const adminLogin = inputSignUpAdmin[0];
const adminPasswordLogin = inputSignUpAdmin[1];

document
  .getElementById("login-formAdmin")
  .addEventListener("click", loginAdmin);
function checkloginAdmin() {
  const userLoginData = localStorage.getItem("adminLogin");

  if (userLoginData) {
    const user = JSON.parse(userLoginData);

    // Kiểm tra trạng thái tài khoản
    if (user.status === 0) {
      alert("Tài khoản đã bị vô hiệu hóa !!!");
      // Có thể thêm điều hướng đến trang đăng nhập ở đây
      return false;
    }

    let modalAdmin = document.getElementById("myModalLoginAdmin");
    modalAdmin.style.display = "none";
    headerAdmin.innerHTML = `<h1>Admin Dashboard</h1>
    <div class="admin-info"></div>`;
    headerAdmin.style.display = "flex";
    let adminInfor = document.querySelector(".admin-info");
    adminInfor.innerHTML = `
        <p id="admin-logout">Đăng xuất </p>`;
    let adminLogout = document.querySelector("#admin-logout");
    let manageBody = document.querySelector("#manage-body");
    manageBody.innerHTML = `<div class="sidebar-admin">
        <a href="#" id="account-button">Quản lý tài khoản</a>
        <a href="#" id="product-button">Quản lý sản phẩm</a>
        <a href="#" id="order-button">Quản lý đơn hàng</a>
        <a href="#" id="sell-button">Thống kê</a>
      </div>
      <main id="main">
        <div id="content-admin">
        <div style="border: 2px solid var(--primary-color); border-radius: 10px; padding: 20px; background-color: #ffffff; width: 100%; margin: 0 auto; text-align: left;">
      <h1 style="text-align: center; color: var(--border-color); font-size: 24px; margin-bottom: 20px;">TRANG QUẢN LÝ WEBSITE BÁN LEGO</h1>

      <div style="display: flex; align-items: center; margin-bottom: 15px; color: var(--border-color-1)">
        <i class="fa-solid fa-user" style="font-size: 20px; margin-right: 10px;"></i>
        <p style="margin: 0; font-size: 16px; color: #00695c;">
          <strong>Tên tài khoản quản trị:</strong> ${user.username}
        </p>
      </div>

      <div style="display: flex; align-items: center; margin-bottom: 15px;">
        <i class="fa-solid fa-envelope" style="font-size: 20px; margin-right: 10px; color: var(--border-color-1)"></i>
        <p style="margin: 0; font-size: 16px; color: #00695c;">
          <strong>Email:</strong> ${user.email}
        </p>
      </div>
    </div></div>
      </main>`;
    document
      .getElementById("account-button")
      .addEventListener("click", displayPageAccountManagement);
    document
      .getElementById("product-button")
      .addEventListener("click", displayPageProductManagement);
    document
      .getElementById("order-button")
      .addEventListener("click", displayPagepOrderManament);
    document
      .getElementById("sell-button")
      .addEventListener("click", displayPageSellManagement);
    adminLogout.addEventListener("click", () => {
      localStorage.removeItem("adminLogin");
      alert("Đăng xuất thành công!");
      location.href = "manage.html"; // Điều hướng đến trang chính
    });
    return true;
  } else {
  }
}

function loginAdmin(event) {
  event.preventDefault();

  const adminLoginValue = adminLogin.value.trim();
  const adminPasswordLoginValue = adminPasswordLogin.value.trim();
  const userList = JSON.parse(localStorage.getItem(ListUsers)) || [];

  // Kiểm tra thông tin đăng nhập
  if (!adminLoginValue || !adminPasswordLoginValue) {
    alert("Vui lòng nhập tên đăng nhập và mật khẩu.");
    return false;
  }

  // Tìm kiếm người dùng
  const user = userList.find((user) => user.username === adminLoginValue);

  if (!user) {
    alert("Tên đăng nhập hoặc mật khẩu không chính xác.");
    return false;
  }

  // Kiểm tra mật khẩu
  if (user.password !== adminPasswordLoginValue) {
    alert("Tên đăng nhập hoặc mật khẩu không chính xác.");
    return false;
  }

  // Kiểm tra trạng thái tài khoản
  if (user.status === 0) {
    alert("Tài khoản đã bị vô hiệu hóa !!!");
    return false;
  }

  // Đăng nhập thành công

  if (user.role === 0) {
    alert("Truy cập trang quản trị!");
    localStorage.setItem("adminLogin", JSON.stringify(user));
    let modalAdmin = document.getElementById("myModalLoginAdmin");
    modalAdmin.style.display = "none";
    headerAdmin.innerHTML = `<h1>Admin Dashboard</h1>
    <div class="admin-info"></div>`;
    headerAdmin.style.display = "flex";
    let adminInfor = document.querySelector(".admin-info");
    adminInfor.innerHTML = `
        <p id="admin-logout">Đăng xuất </p>`;
    let adminLogout = document.querySelector("#admin-logout");
    let manageBody = document.querySelector("#manage-body");
    manageBody.innerHTML = `<div class="sidebar-admin">
        <a href="#" id="account-button">Quản lý tài khoản</a>
        <a href="#" id="product-button">Quản lý sản phẩm</a>
        <a href="#" id="order-button">Quản lý đơn hàng</a>
        <a href="#" id="sell-button">Thống kê</a>
      </div>
      <main id="main">
        <div id="content-admin">
        <div style="border: 2px solid var(--primary-color); border-radius: 10px; padding: 20px; background-color: #ffffff; width: 100%; margin: 0 auto; text-align: left;">
      <h1 style="text-align: center; color: var(--border-color); font-size: 24px; margin-bottom: 20px;">TRANG QUẢN LÝ WEBSITE BÁN LEGO</h1>

      <div style="display: flex; align-items: center; margin-bottom: 15px; color: var(--border-color-1)">
        <i class="fa-solid fa-user" style="font-size: 20px; margin-right: 10px;"></i>
        <p style="margin: 0; font-size: 16px; color: #00695c;">
          <strong>Tên tài khoản quản trị:</strong> ${user.username}
        </p>
      </div>

      <div style="display: flex; align-items: center; margin-bottom: 15px;">
        <i class="fa-solid fa-envelope" style="font-size: 20px; margin-right: 10px; color: var(--border-color-1)"></i>
        <p style="margin: 0; font-size: 16px; color: #00695c;">
          <strong>Email:</strong> ${user.email}
        </p>
      </div>
    </div></div>
      </main>`;
    document
      .getElementById("account-button")
      .addEventListener("click", displayPageAccountManagement);
    document
      .getElementById("product-button")
      .addEventListener("click", displayPageProductManagement);
    document
      .getElementById("order-button")
      .addEventListener("click", displayPagepOrderManament);
    document
      .getElementById("sell-button")
      .addEventListener("click", displayPageSellManagement);
    adminLogout.addEventListener("click", () => {
      localStorage.removeItem("adminLogin");
      alert("Đăng xuất thành công!");
      location.href = "manage.html"; // Điều hướng đến trang chính
    });
    return true;
  } else {
    alert("Đăng nhập thất bại");

    return false;
  }

  return true;
}
checkloginAdmin();
const ADMINLOGIN = JSON.parse(localStorage.getItem("adminLogin")) ?? [];
// Status = 0 thì chưa đi qua, 1 là đã đi qua và 2 là cuối cùng

// Quản lý người dùng
function create_detail_account(i, userList) {
  document.getElementById("user-" + i).addEventListener("click", () => {
    const userDiv = document.createElement("div");
    userDiv.className = "screen-bright";
    userDiv.innerHTML = `
            <div id="account-detail">
                <p class="exit" style="display: inline-block; float: right; margin-top:0%">
                    <button style="border: none; border-radius: 0px 18px 0px 0px; font-size: 16px; padding: 10px;">
                        <i class="fa-regular fa-x"></i>
                    </button>
                </p>
                <h2 style="padding-top:40px">Tài khoản</h2>
                <section>
                    <form name="account-form" id="account-edit" class="form-detail">
                        <div class="form-detail-content">
                            <div style = "margin-bottom: 10px;"><strong>ID: </strong> ${userList[i].id}</div>
                        </div>

                        <div class="form-detail-content">
                            <div style = "margin-bottom: 10px;"><strong>Tên đăng nhập: </strong> ${userList[i].username}</div>
                        </div>

                        <div class="form-detail-content">
                            <div><strong>Mật khẩu</strong></div>
                            <input type="text" name="aPassword" id ="aPassword" placeholder="${userList[i].password}">
                            <span style = "margin-bottom: 5px;" class="form-messageAdmin"></span>
                        </div>

                        <div class="form-detail-content">
                            <div><strong>Email</strong></div>
                            <input type="text" name="aEmail" id ="aEmail" placeholder="${userList[i].email}">
                            <span class="form-messageAdmin"></span>
                        </div>

                        <div class="form-detail-content">
                            <strong>Trạng thái</strong>: 
                            <select id="aLock">
                                <option value="1">Kích hoạt</option>
                                <option value="0">Tạm khóa</option>
                            </select>
                        </div>

                        <div class="form-detail-content">
                            <div style="margin:10px 0px"><strong>Ngày tạo:</strong> ${userList[i].dateSignUp}</div>
                        </div>

                        <div class="form-detail-content">
                            <input type="submit" value="Thay đổi">
                        </div>
                
                    </form>
                </section>
            </div>
        `;
    document.body.appendChild(userDiv);
    if (userList[i].status === 1) {
      document.getElementById("aLock").value = 1;
    } else {
      document.getElementById("aLock").value = 0;
    }

    let aPasswordInput = document.getElementById("aPassword");
    let aEmailInput = document.getElementById("aEmail");
    aPasswordInput.addEventListener("blur", checkInputFromEditAccount);
    aEmailInput.addEventListener("blur", checkInputFromEditAccount);
    ///đóng account form
    detail_exit1();
    detail_exit2();
    ////
    /////thay đổi thông tin account
    let form = document.getElementById("account-edit");
    document.getElementById("account-edit").addEventListener("submit", (e) => {
      e.preventDefault();
      edit_account(form, i);
    });
  });
}

function checkInputFromEditAccount(event) {
  let inputElement = event.target.value.trim();
  let errorElement =
    event.target.parentElement.querySelector(".form-messageAdmin");

  if (
    event.target.id === "aPassword" &&
    inputElement.length < 6 &&
    inputElement.length != 0
  ) {
    errorElement.innerHTML = "Mật khẩu phải có ít nhất 6 kí tự.";
  } else if (
    event.target.id === "aEmail" &&
    !validateEmail(inputElement) &&
    inputElement.length != 0
  ) {
    errorElement.innerHTML = "Địa chỉ email không hợp lệ.";
  } else {
    errorElement.innerHTML = "";
  }
}

function edit_account(form, i) {
  if (form.aPassword.value == "") {
    form.aPassword.value = getPasswordUserInList(i);
  } else {
    if (form.aPassword.value.length < 6) {
      alert("Thay đổi thất bại! Mật khẩu phải có ít nhất 6 kí tự.");
      return false;
    } else {
      userList[i].password = form.aPassword.value;
    }
  }

  if (form.aEmail.value == "") {
    form.aEmail.value = getEmailUserInList(i);
  } else {
    if (!validateEmail(form.aEmail.value)) {
      alert("Thay đổi thất bại! Địa chỉ email không hợp lệ.");
      return false;
    } else {
      userList[i].email = form.aEmail.value;
    }
  }

  userList[i].status = parseInt(form.aLock.value);
  let check = JSON.parse(localStorage.getItem("userLogin"));
  if (check && check.id === userList[i].id && userList[i].status == 0) {
    // Nếu có, xóa dữ liệu đó khỏi localStorage
    localStorage.removeItem("userLogin");
  }
  alert("Thay đổi thành công");
  document.querySelector(".screen-bright").remove();
  localStorage.setItem(ListUsers, JSON.stringify(userList));
}

function displayPageAccountManagement() {
  const section = document.getElementById("content-admin");
  section.innerHTML = `
          <table class="manage_data">
              <thead>
                  <tr>
                      <td>User ID</td>
                      <td>User Name</td>
                      <td>Total Spent</td>
                      <td>Join Date</td>
                  </tr>
              </thead>
          </table>
          <div id="addAccount"><i class="fa-solid fa-plus"></i></div>
      `;

  for (i = 0; i < userList.length; i++) {
    const tbody = document.createElement("tbody");
    tbody.id = "user-" + i;
    tbody.innerHTML = `
              <tr>
                  <td>${userList[i].id}</td>
                  <td>${userList[i].username}</td>
                  <td>0</td>
                  <td>${userList[i].dateSignUp}</td>
              </tr>
          `;
    document.querySelector(".manage_data").appendChild(tbody);
    create_detail_account(i, userList);
  }
  //mở form thêm acc
  document.getElementById("addAccount").addEventListener("click", () => {
    const userDiv = document.createElement("div");
    userDiv.className = "screen-bright";
    userDiv.innerHTML = `
            <div id="account-detail">
                <p class="exit" style="display: inline-block; float: right; margin-top:0%">
                    <button style="border: none; border-radius: 0px 18px 0px 0px; font-size: 16px; padding: 10px;">
                        <i class="fa-regular fa-x"></i>
                    </button>
                </p>
                <h2 style="padding-top:40px">Thêm tài khoản</h2>
                <section>
                    <form name="account-form" id="account-create" class="form-detail">
                        <div class="form-detail-content">
                            <div><strong>Tên đăng nhập</strong></div>
                            <input type="text" name="aUsername" id ="aUsername" placeholder="">
                            <span class="form-messageAdmin"></span>
                        </div>

                        <div class="form-detail-content">
                            <div><strong>Mật khẩu</strong></div>
                            <input type="password" name="aPassword" id ="aPassword" placeholder="">
                            <span class="form-messageAdmin"></span>
                        </div>

                        <div class="form-detail-content">
                            <div><strong>Nhập lại mật khẩu</strong></div>
                            <input type="password" name="aRePassword" id ="aRePassword" placeholder="">
                            <span class="form-messageAdmin"></span>
                        </div>

                        <div class="form-detail-content">
                            <div><strong>Email</strong></div>
                            <input type="text" name="aEmail" id ="aEmail" placeholder="">
                            <span class="form-messageAdmin"></span>
                        </div>

                        <div class="form-detail-content">
                            <strong>Vai trò</strong>: 
                            <select id="aRole">
                                <option value="0">Quản trị</option>
                                <option value="1">Nhân viên</option>
                                <option value="2">Khách hàng</option>
                            </select>
                        </div>

                        <div class="form-detail-content">
                            <input type="submit" value="Thêm">
                        </div>
                
                    </form>
                </section>
            </div>
        `;
    document.body.appendChild(userDiv);

    let aUsernameInput = document.getElementById("aUsername");
    let aPasswordInput = document.getElementById("aPassword");
    let aRePasswordInput = document.getElementById("aRePassword");
    let aEmailInput = document.getElementById("aEmail");
    aPasswordInput.addEventListener("blur", checkInputFromCreateAccount);
    aEmailInput.addEventListener("blur", checkInputFromCreateAccount);
    aUsernameInput.addEventListener("blur", checkInputFromCreateAccount);
    aRePasswordInput.addEventListener("blur", checkInputFromCreateAccount);
    ///đóng account form
    // detail_exit1();
    detail_exit2();
    ////add account
    document
      .getElementById("account-create")
      .addEventListener("submit", (e) => {
        e.preventDefault();
        create_account(document.getElementById("account-create"));
      });
  });
}

// Phần quản lý sản phẩm
function deleteProductByIndex(indexToDelete) {
  // Lấy danh sách sản phẩm từ localStorage
  let tempList = JSON.parse(localStorage.getItem(listProducts));

  // Lọc danh sách để xóa sản phẩm tại chỉ số indexToDelete
  tempList = tempList.filter((item, index) => index !== indexToDelete);

  // Cập nhật lại danh sách sản phẩm trong localStorage
  localStorage.setItem(listProducts, JSON.stringify(tempList));
}
//hàm lấy link ảnh
function imglink(img, imageInput) {
  let file = imageInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
  return img.src;
}

///kiểm tra tên nhập vào có hợp lệ khônng
function checkname(s) {
  for (let j = 0; j < productArray.length; j++) {
    if (s == productArray[j].name) return 0;
  }
  return 1;
}

//kiểm tra giá tiền nhập vào có phải số không
function checkprice(s) {
  let temp = new String(s);
  for (let j = 0; j < s.length; j++) {
    if (temp[j] < "0" || temp[j] > "9") return 0;
  }
  return 1;
}

function checkquantity(s) {
  // Kiểm tra xem s có phải là một số và lớn hơn 0
  const num = Number(s);

  // Kiểm tra điều kiện: là số và lớn hơn 0
  if (!isNaN(num) && num > 0) {
    return 1; // Hợp lệ
  }

  return 0; // Không hợp lệ
}

///set mã sản phẩm
function setCode(pcode) {
  let i = productArray.length - 1;
  while (i >= 0 && productArray[i].code.substr(0, 2) != pcode) {
    i--;
  }
  if (i < 0) {
    return pcode + "0001";
  } else {
    let temp;
    try {
      temp = (parseInt(productArray[i].code.substr(2, 4)) + 1).toString();
      while (temp.length < 4) {
        temp = "0" + temp;
      }
    } catch {
      alert("Lỗi không thể tạo mã sản phẩm");
    }
    return pcode + temp;
  }
}
//set danh muc
function setDanhmuc(productArray) {
  switch (productArray.code.substr(0, 2)) {
    case "LM": {
      return "Lego Minifigure";
      break;
    }
    case "MO": {
      return "Lego Moc";
      break;
    }
    case "LR": {
      return "Lego chính hãng";
      break;
    }
    case "LP": {
      return "Phụ kiện Lego";
      break;
    }
  }
}

//tạo chi tiết sản phẩm
function create_product_detail(temp) {
  document.getElementById("product-" + temp).addEventListener("click", () => {
    const productDIV = document.createElement("div");
    productDIV.className = "screen-bright";
    productDIV.innerHTML = `
        <div id="product-detail">
            <button class="exit" style="font-size: 14px; position: absolute; top: 0px; right: 0px; border: none; border-radius: 0px 18px 0px 0px; padding: 10px;">
                <i class="fa-regular fa-x"></i>
            </button>
            <div>
                <form name="changes" id="thaydoi">
                    
                    <img src="${
                      productArray[temp].imgSrc
                    }" alt="Mô tả sản phẩm" id="thayanh"> 
                    <button class="remove-img"><i class="fa-solid fa-trash" aria-hidden="true"></i></button>
                    <input type="file" accept="image/*" id="canh" value="Chọn ảnh">
                    <label>
                        Tên sản phẩm:
                        <input type="text" name="cten" placeholder="${
                          productArray[temp].name
                        }">
                    </label> 

                    <label>
                        Giá tiền: 
                        <input type="text" name="cgia" placeholder="${
                          productArray[temp].price
                        }">
                    </label>

                    <label>
                        Chủ đề: 
                        <select id="product-detail-topic"></select>
                    </label>

                    <label>
                        <p>Mã sản phẩm: ${productArray[temp].code}</p>
                    </label>

                    <label>
                        <p>Danh mục: ${setDanhmuc(productArray[temp])}</p>
                    </label> 
                    <label>
                        <p>Số lượng trong kho: ${
                          productArray[temp].quantity
                        }</p>
                    </label> 
                    <div id="edit-space">
                      <button type="submit" value="Thay đổi thông tin" id="change-infor">Thay đổi thông tin</button>
                      <button id="delete">Xóa sản phẩm</button>
                    </div>                   
                </form>    
                <div id="confirmModal">
                    <div class="modal-content">
                        <p>Xác nhận xóa sản phẩm</p>
                        <button id="confirmBtn">Ok</button>
                        <button id="cancelBtn">Hủy</button>
                    </div> 
                </div>         
            </div>
        `;
    document.body.appendChild(productDIV);
    switch (productArray[temp].code.substr(0, 2)) {
      case "LM": {
        document.getElementById("product-detail-topic").innerHTML = `
                    <option value="Naruto">Naruto</option>
                    <option value="Dragon Ball">Dragon Ball</option>
                    <option value="Kimetsu No Yaiba">Kimetsu No Yaiba</option>
                    <option value="Marvel">Marvel</option>
                `;
        break;
      }
      case "MO": {
        document.getElementById("product-detail-topic").innerHTML = `
                    <option value="Army">Army</option>
                    <option value="Technic">Technic</option>
                `;
        break;
      }
      case "LR": {
        document.getElementById("product-detail-topic").innerHTML = `
                    <option value="Technic">Technic</option>
                    <option value="Ninjago">Ninjago</option>
                `;
        break;
      }
      default: {
        document.getElementById("product-detail-topic").innerHTML = `
              <option value="Technic">Technic</option>
              <option value="Food/Tool">Food/Tool</option>
              <option value="Weapon">Weapon</option>
          `;
        break;
      }
    }
    document.getElementById("product-detail-topic").value =
      productArray[temp].topic;
    //đóng chi tiết sản phẩm
    // Tự động đóng modal khi click ngoài modal
    detail_exit1();
    detail_exit2();

    //thay ảnh
    const cimageInput = document.getElementById("canh");
    let cimg = document.createElement("img");
    document
      .getElementById("canh")
      .addEventListener("change", function (event) {
        const file = event.target.files[0]; // Lấy file ảnh đầu tiên mà người dùng chọn
        if (file) {
          const reader = new FileReader();

          // Khi FileReader đã đọc xong ảnh
          reader.onload = function (e) {
            // Đặt link ảnh vào thẻ img để hiển thị
            document.getElementById("thayanh").src = e.target.result;
            cimg.src = e.target.result;
          };

          // Đọc file ảnh dưới dạng data URL (base64)
          reader.readAsDataURL(file);
        }
      });

    //xóa ảnh
    const imgdelete = document.querySelectorAll(".remove-img");
    imgdelete.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        document.getElementById("thayanh").src = "./assets/img/blank_img.png";
        cimg.src = "./assets/img/blank_img.png";
      });
    });

    ////thay đổi thông tin
    document.getElementById("thaydoi").addEventListener("submit", (event) => {
      event.preventDefault();
      let count = 0;
      if (document.changes.cten.value != "") {
        if (checkname(document.changes.cten.value)) {
          count++;
        } else {
          alert("Tên bạn nhập không hợp lệ");
          document.changes.cten.focus();
        }
      } else {
        count++;
      }

      if (document.changes.cgia.value != "") {
        if (checkprice(document.changes.cgia.value) != 1) {
          alert("Giá tiền phải là số");
          document.changes.cgia.focus();
        } else {
          count++;
        }
      } else {
        count++;
      }
      if (count == 2) {
        if (cimg.src != "") productArray[temp].imgSrc = cimg.src;
        if (document.changes.cgia.value != "")
          productArray[temp].price = document.changes.cgia.value;
        if (document.changes.cten.value != "")
          productArray[temp].name = document.changes.cten.value;
        productArray[temp].topic = document.getElementById(
          "product-detail-topic"
        ).value;
        alert("thay đổi thành công");
        document.getElementById("product-" + temp).innerHTML = `
                        <p><img src="${productArray[temp].imgSrc}" alt="Mô tả sản phẩm"></p>
                        <div class ="product-info">
                            <div class="product-info-detail">
                                <strong>Tên sản phẩm:</strong> ${productArray[temp].name}
                            </div>
                            <div class="product-info-detail">
                                <strong>Mã sản phẩm:</strong> ${productArray[temp].code}
                            </div>
                            <div class="product-info-detail">
                                <strong>Chủ đề:</strong> ${productArray[temp].topic}
                            </div>
                        </div>
                    `;
        document.querySelector(".screen-bright").remove();
        localStorage.setItem(listProducts, JSON.stringify(productArray));
      }
    });
    //
    ///xóa sản phẩm
    document.getElementById("delete").addEventListener("click", (event) => {
      event.preventDefault();
      document.getElementById("confirmModal").style.display = "block";
    });
    document.getElementById("confirmBtn").addEventListener("click", () => {
      alert("Xóa thành công");
      productArray = productArray.filter((item, index) => index !== temp);
      document.getElementById("confirmModal").style.display = "none";
      document.getElementById("product-detail").remove();
      document.getElementById("addProduct").style.pointerEvents = "all";
      currentPageAdmin = 1;
      displayPageProductAdmin(productArray, productArray.length);
      displayProductsAdmin(productArray, productArray.length);
      localStorage.setItem(listProducts, JSON.stringify(productArray));

      document.querySelector(".screen-bright").remove();
    });
    document.getElementById("cancelBtn").addEventListener("click", () => {
      document.getElementById("confirmModal").style.display = "none";
    });
  });
}

// //xuất sản phẩm
function displayPageProductManagement() {
  const section = document.getElementById("content-admin");
  // section.className = "content-admin";
  section.innerHTML = `
        <div class="product-grid">
            <div id ="product">
            </div>
            <div class="pagenumber"></div>
        </div>
    `;
  document.getElementById("main").appendChild(section);
  currentPageAdmin = 1;
  displayProductsAdmin(productArray, productArray.length);
  displayPageProductAdmin(productArray, productArray.length);

  const add_button = document.createElement("div");
  add_button.id = "addProduct";
  add_button.innerHTML = `<i class="fa-solid fa-plus"></i>`;
  section.appendChild(add_button);
  document
    .getElementById("addProduct")
    .addEventListener("click", choose_addProduct);
}

function createProductAdmin(product) {
  return `
    <p><img src="${product.imgSrc}" alt="Mô tả sản phẩm"></p>
          <div class ="product-info">
              <div class="product-info-detail">
                  <strong>Tên sản phẩm:</strong> ${product.name}
              </div>
              <div class="product-info-detail">
                  <strong>Mã sản phẩm:</strong> ${product.code}
              </div>
              <div class="product-info-detail">
                  <strong>Chủ đề:</strong> ${product.topic}
              </div>
          </div>
  `;
}

function displayProductsAdmin(productArray, length) {
  const container = document.getElementById("product");
  container.innerHTML = "";
  let beginProduct = (currentPageAdmin - 1) * productsPerPageAdmin;
  let endProduct = beginProduct + productsPerPageAdmin;
  let pageBtn = document.querySelectorAll(".product-btn_pageAdmin");
  pageBtn.forEach((button) => {
    if (button.textContent == currentPageAdmin) {
      button.style.color = "#fff";
      button.style.backgroundColor = "var(--primary-color)";
    } else {
      button.style.color = "var(--primary-color)";
      button.style.backgroundColor = "#fff";
    }
  });
  for (let i = beginProduct; i < endProduct; i++) {
    if (productArray[i] && !productArray[i].isDeleted) {
      const productDiv = document.createElement("div");
      container.appendChild(productDiv);
      productDiv.className = "product-data";
      productDiv.id = "product-" + i;
      productDiv.innerHTML = createProductAdmin(productArray[i]);

      create_product_detail(i);
    }
  }
}

function displayPageProductAdmin(productList, length) {
  totalPages = Math.ceil(length / productsPerPageAdmin);
  pageNumber = document.querySelector(".pagenumber");
  pageNumber.innerHTML = ""; // Xóa nội dung cũ

  // Chỉ hiển thị nút nếu có hơn 1 trang
  if (totalPages <= 1) return;

  // Thêm nút "Prev"
  pageNumber.innerHTML += `<button class="product-btn product-btn_prevAdmin">&lt;</button>`;

  // Hiển thị nút phân trang
  if (totalPages <= 5) {
    // Hiển thị tất cả các nút nếu tổng số trang <= 5
    for (let i = 1; i <= totalPages; i++) {
      pageNumber.innerHTML += `<button class="product-btn product-btn_pageAdmin" id="page-${i}">${i}</button>`;
    }
  } else {
    // Hiển thị với cấu trúc: < 1 2 ... totalPages-1 totalPages >
    pageNumber.innerHTML += `<button class="product-btn product-btn_pageAdmin" id="page-1">1</button>`;
    pageNumber.innerHTML += `<button class="product-btn product-btn_pageAdmin" id="page-2">2</button>`;
    if (currentPageAdmin > 3 && currentPageAdmin < totalPages - 2) {
      // Hiển thị dạng: 1 2 ... currentPage ... totalPages-1 totalPages
      pageNumber.innerHTML += `<span class="ellipsis">...</span>`;
      pageNumber.innerHTML += `<button class="product-btn product-btn_pageAdmin" id="page-${currentPageAdmin}">${currentPageAdmin}</button>`;
      pageNumber.innerHTML += `<span class="ellipsis">...</span>`;
    } else if (currentPageAdmin <= 3) {
      // Nếu đang ở đầu: 1 2 3 ... totalPages-1 totalPages
      pageNumber.innerHTML += `<button class="product-btn product-btn_pageAdmin" id="page-3">3</button>`;
      pageNumber.innerHTML += `<span class="ellipsis">...</span>`;
    } else {
      // Nếu đang ở cuối: 1 2 ... totalPages-2 totalPages-1 totalPages
      pageNumber.innerHTML += `<span class="ellipsis">...</span>`;
      pageNumber.innerHTML += `<button class="product-btn product-btn_pageAdmin" id="page-${
        totalPages - 2
      }">${totalPages - 2}</button>`;
    }
    pageNumber.innerHTML += `<button class="product-btn product-btn_pageAdmin" id="page-${
      totalPages - 1
    }">${totalPages - 1}</button>`;
    pageNumber.innerHTML += `<button class="product-btn product-btn_pageAdmin" id="page-${totalPages}">${totalPages}</button>`;
  }

  // Thêm nút "Next"
  pageNumber.innerHTML += `<button class="product-btn product-btn_nextAdmin">&gt;</button>`;

  // Xử lý sự kiện
  updatePageButtonStylesAdmin();
  handlePageButtonEventsAdmin(productList, length);
}

function updatePageButtonStylesAdmin() {
  let pageBtn = document.querySelectorAll(".product-btn_pageAdmin");
  pageBtn.forEach((button) => {
    if (parseInt(button.textContent) === currentPageAdmin) {
      button.style.color = "#fff";
      button.style.backgroundColor = "var(--primary-color)";
    } else {
      button.style.color = "var(--primary-color)";
      button.style.backgroundColor = "#fff";
    }
  });
}

function handlePageButtonEventsAdmin(productList, length) {
  let pageBtn = document.querySelectorAll(".product-btn_pageAdmin");
  let prevBtn = document.querySelector(".product-btn_prevAdmin");
  let nextBtn = document.querySelector(".product-btn_nextAdmin");

  // Xử lý sự kiện click cho từng nút trang
  pageBtn.forEach((button) => {
    button.addEventListener("click", () => {
      currentPageAdmin = parseInt(button.textContent);
      displayProductsAdmin(productList, length);
      displayPageProductAdmin(productList, length); // Cập nhật giao diện nút
    });
  });

  // Xử lý nút "Prev"
  prevBtn.addEventListener("click", (event) => {
    event.preventDefault();
    if (currentPageAdmin > 1) {
      currentPageAdmin--;
      displayProductsAdmin(productList, length);
      displayPageProductAdmin(productList, length); // Cập nhật giao diện nút
    }
  });

  // Xử lý nút "Next"
  nextBtn.addEventListener("click", (event) => {
    event.preventDefault();
    if (currentPageAdmin < totalPages) {
      currentPageAdmin++;
      displayProductsAdmin(productList, length);
      displayPageProductAdmin(productList, length); // Cập nhật giao diện nút
    }
  });
}

//thêm, xóa, chỉnh sửa sản phẩm
function choose_addProduct() {
  //mở thẻ thêm sản phẩm
  const ADD = document.createElement("div");
  ADD.className = "screen-bright";
  ADD.innerHTML = `
    <div id="add-product-input">
        <form name="addInput"  id= "adp">
            <button class="exit" style="font-size: 16px; position: absolute; top: 0px; right: 0px; border: none; border-radius: 0px 18px 0px 0px; padding: 10px;">
                <i class="fa-regular fa-x"></i>
            </button>
            <div><b>Thêm sản phẩm</b></div>
            <label>
                Tên sản phẩm
                <input type="text" placeholder="Tên sản phẩm" name="ten" id="idten">            
            </label>

            <label>
                Giá
                <input type="text" placeholder="Giá" name="gia" id="idgia">
            </label>

            <label>
                Danh mục
                <select placeholder="Danh mục" name="danhmuc" id="iddanhmuc">
                    <option value="LM" selected>Lego Minifigure</option>
                    <option value="MO">Lego MOC</option>
                    <option value="LR">Lego chính hãng</option>
                    <option value="LP">Phụ kiện Lego</option>
                </select>
            </label>
            
            <label>
                Chủ đề
                <select placeholder="Chủ đề" name="chude" id="idchude">
                    <option value="Naruto" selected>Naruto</option>
                    <option value="Dragon Ball">Dragon Ball</option>
                    <option value="Kimetsu No Yaiba">Kimetsu No Yaiba</option>
                    <option value="Marvel">Marvel</option>
                </select>
            </label>
            
            <label>
                Chọn ảnh
                <input type="file" accept="image/*" id="anh">
            </label>

            <label>
                Số lượng
                <input type="text" placeholder="Số lượng" name="soluong" id="idsoluong">
            </label>
            
            <input type="submit" value="Thêm sản phẩm" id="add-infor">
        </form>
    </div>
    `;
  document.body.appendChild(ADD);
  document.getElementById("add-infor").style.width = "300px";
  //đóng thẻ thêm sản phẩm
  // detail_exit1();
  detail_exit2();
  //thêm lựa chọn cho chủ đề sau khi chọn danh mục
  document.getElementById("iddanhmuc").addEventListener("change", () => {
    let addchude = ``;
    switch (iddanhmuc.value) {
      case "LM": {
        addchude = `
                    <option value="Naruto">Naruto</option>
                    <option value="Dragon Ball">Dragon Ball</option>
                    <option value="Kimetsu No Yaiba">Kimetsu No Yaiba</option>
                    <option value="Marvel">Marvel</option>
                `;
        break;
      }
      case "MO": {
        addchude = `
                    <option value="Army">Army</option>
                    <option value="Technic">Technic</option>
                `;
        break;
      }
      case "LR": {
        addchude = `
                    <option value="Technic">Technic</option>
                    <option value="Ninjago">Ninjago</option>
                `;
        break;
      }
      default: {
        addchude = `
              <option value="Technic">Technic</option>
              <option value="Food/Tool">Food/Tool</option>
              <option value="Weapon">Weapon</option>
          `;
        break;
      }
    }
    document.getElementById("idchude").innerHTML = addchude;
  });
  //

  //
  //lấy đường link của ảnh
  const imageInput = document.getElementById("anh");
  let img = document.createElement("img");
  imageInput.addEventListener("change", () => {
    img.src = imglink(img, imageInput);
  });
  //
  //bắt đầu thêm sản phẩm khi người dùng submit
  document.getElementById("adp").addEventListener("submit", (e) => {
    e.preventDefault();
    ///////////////////////////
    if (img.src == "") {
      alert("Bạn chưa chọn ảnh");
      document.getElementById("anh").focus();
    } else if (document.addInput.ten.value == "") {
      alert("Bạn chưa nhập tên");
      document.getElementById("idten").focus();
    } else if (document.addInput.gia.value == "") {
      alert("Bạn chưa nhập giá");
      document.getElementById("idgia").focus();
    } else if (document.addInput.soluong.value == "") {
      alert("Bạn chưa số lượng muốn bán");
      document.getElementById("idsoluong").focus();
    } else {
      if (checkname(document.addInput.ten.value) == 0) {
        alert("Tên bạn nhập đã tồn tại");
        document.getElementById("idten").focus();
      } else {
        if (checkprice(document.addInput.gia.value) == 0) {
          alert("Giá tiền phải là số");
          document.getElementById("idgia").focus();
        } else if (checkquantity(document.addInput.soluong.value) == 0) {
          alert("Số lượng muốn bán phải là số và lớn hơn 0");
          document.getElementById("idsoluong").focus();
        } else {
          let temp_product = {
            name: document.addInput.ten.value,
            code: setCode(document.addInput.danhmuc.value),
            price: document.addInput.gia.value,
            imgSrc: img.src,
            topic: idchude.value,
            quantity: 100,
          };

          productArray.push(temp_product);
          localStorage.setItem(listProducts, JSON.stringify(productArray));
          let temp = productArray.length - 1;
          ///////////////////////////
          alert("thêm thành công");
          displayPageProductAdmin(productArray, productArray.length);
          displayProductsAdmin(productArray, productArray.length);
          document.querySelector(".screen-bright").remove();
        }
      }
    }
  });
}
// Phần quản lý đơn hàng
// Status = 0 thì chưa đi qua, 1 là đã đi qua và 2 là cuối cùng
const listStatus = [
  { idStatus: 1, nameStatus: "Chờ xác nhận" },
  { idStatus: 2, nameStatus: "Đã xác nhận" },
  { idStatus: 3, nameStatus: "Đã giao" },
  { idStatus: 4, nameStatus: "Đã hủy" },
];

const Order = JSON.parse(localStorage.getItem(listOrders));
/////
function getOrderStatus(id) {
  for (let i = 0; i < 4; i++) {
    if (listStatus[i].idStatus == id) {
      return listStatus[i].nameStatus;
    }
  }
}
function getIdStatus(status) {
  for (let i = 0; i < 4; i++) {
    if (listStatus[i].nameStatus == status) {
      return listStatus[i].idStatus;
    }
  }
}
function formatDate(inputDate) {
  // Tách các phần ngày, tháng, năm từ chuỗi đầu vào
  const [day, month, year] = inputDate.split("/");

  // Trả về định dạng yyyy-mm-dd
  return `${year}-${month}-${day}`;
}

//hàm xuất đơn hàng
function order_output(container, i) {
  //lấy ngày tháng năm để xuất ngày dạng date/month/year
  const orderdate = new Intl.DateTimeFormat("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(new Date(formatDate(Order[i].orderDate)));

  //
  //hiển thị order
  const ordTr = document.createElement("tr");
  ordTr.className = "order-data";
  ordTr.id = "ord-" + i;
  ordTr.innerHTML = `
          <td>${Order[i].orderId}</td>
          <td>${Order[i].userId}</td>
          <td>${orderdate}</td>
          <td>${Order[i].address.houseNumber}, ${Order[i].address.ward}, ${Order[i].address.district}, ${Order[i].address.city}.</td>
          <td>${Order[i].totalPrice}</td>
          <td>${Order[i].status}</td>
      `;
  container.appendChild(ordTr);
  //tạo chi tiết order
  create_order_detail(i);
}
let id_order = [];
for (let i = 0; i < Order.length; i++) {
  id_order.push(i);
}
//hàm lọc theo ngày và tình trạng đơn hàng
function filter() {
  id_order = [];
  const start = document.getElementById("start");
  const end = document.getElementById("end");
  const container = document.getElementById("order");
  const status = document.getElementById("status");
  const temp = document.getElementsByClassName("order-data");
  const count = temp.length;
  const sort = document.getElementById("sort");
  //nếu người dùng bỏ trống phần start/end,
  //nghĩa là điều kiện bắt đầu/ kết thúc sẽ ko xét,
  //ta đặt start/end là ngày nhỏ nhất/lớn nhất
  if (start.value == "") {
    start.value = "2000-01-01";
  }

  if (end.value == "") {
    end.value = "2100-01-01";
  }
  //
  for (let i = 1; i <= count; i++) {
    container.removeChild(temp[0]);
  }
  for (let i = 0; i < Order.length; i++) {
    if (
      formatDate(Order[i].orderDate) >= start.value &&
      formatDate(Order[i].orderDate) <= end.value
    ) {
      if (status.value == getIdStatus(Order[i].status) || status.value == "0") {
        order_output(container, i);
        id_order.push(i);
        if (sort.value == "Địa chỉ") order_sort_address();
      }
    }
  }
  //hoàn trả lại giá trị rỗng cho start, end nếu người dùng ko nhập
  if (start.value == "2000-01-01") {
    start.value = "";
  }
  if (end.value == "2100-01-01") {
    end.value = "";
  }
}

//hàm sắp xếp đơn theo địa chỉ
function order_sort_address() {
  const sort = document.getElementById("sort");
  const container = document.getElementById("order");
  const temp = document.getElementsByClassName("order-data");
  const status = document.getElementById("status");
  const count = temp.length;
  ///

  ////////
  if (sort.value == "Địa chỉ") {
    for (let i = 0; i < count; i++) {
      container.removeChild(temp[0]);
    }
    /////
    for (let i = 0; i < id_order.length - 1; i++) {
      for (let j = i + 1; j < id_order.length; j++) {
        if (
          Order[id_order[i]].address.district >
          Order[id_order[j]].address.district
        ) {
          let k = id_order[i];
          id_order[i] = id_order[j];
          id_order[j] = k;
        }
      }
    }
    //////
    id_order.forEach((id) => {
      order_output(container, id);
    });
  } else {
    filter();
  }
}

//tạo chi tiết order
//tạo chi tiết order
function create_order_detail(i) {
  document.getElementById("ord-" + i).addEventListener("click", () => {
    let temp = JSON.parse(localStorage.getItem(listOrders));
    const orderdate = new Intl.DateTimeFormat("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(new Date(formatDate(temp[i].orderDate)));
    //mở chi tiết order
    const ordDiv = document.createElement("div");
    let a = ``;
    for (let j = 0; j < temp[i].items.length; j++) {
      a += `<div>${temp[i].items[j].name} x ${temp[i].items[j].quantity} - ${temp[i].items[j].price}VNĐ/1</div>`;
    }
    ordDiv.className = "screen-bright";
    ordDiv.innerHTML = `
          <div id="order-detail">
              <button class="exit" style="font-size: 16px; position: absolute; top: 0px; right: 0px; border: none; border-radius: 0px 18px 0px 0px; padding: 10px;">
                  <i class="fa-regular fa-x"></i>
              </button>
              <p><b>Chi tiết đơn hàng</b></p><br>
              <div class="data"><b>OrderID: </b>${temp[i].orderId}</div>
              <div class="data"><b>UserID: </b>${temp[i].userId}</div>           
              <div class="data"><b>Date: </b>${orderdate}</div>
             
              <div class="data"> <b>Address: </b>${temp[i].address.houseNumber}, ${temp[i].address.ward}, ${temp[i].address.district}, ${temp[i].address.city}.</div>
              <div class="data"> <b>Payment Method: </b>${temp[i].paymentMethod}</div>
              <div>
              <b>Status:</b>
              <select class="data" id="order-status">
              </select>
              </div>
              <b>Infor:</b>
              <div class="data">${a}</div>
              
              <div class="data"><b>Total Money: </b>${temp[i].totalPrice}</div>
              
          </div<
          `;
    document.body.appendChild(ordDiv);
    //
    // thêm thay đổi cho status
    switch (getIdStatus(Order[i].status)) {
      case 1: {
        document.getElementById("order-status").innerHTML = `
                <option value="1">Chờ xác nhận</option>
                <option value="2">Đã xác nhận</option>

                <option value="4">Đã hủy</option>
                `;
        break;
      }
      case 2: {
        document.getElementById("order-status").innerHTML = `
                <option value="2">Đã xác nhận</option>
                <option value="3">Đã giao</option>
                <option value="4">Đã hủy</option>
                `;
        break;
      }
      case 3: {
        document.getElementById("order-status").innerHTML = `
                  <option value="3">Đã giao</option>
                  `;
        break;
      }
      case 4: {
        document.getElementById("order-status").innerHTML = `
                  <option value="4">Đã hủy</option>
                  `;
        break;
      }
    }
    document.getElementById("order-status").value = getIdStatus(
      Order[i].status
    );
    //
    //đóng chi tiết order
    detail_exit1();
    detail_exit2();

    ////////////thay đổi status
    document.getElementById("order-status").addEventListener("change", () => {
      Order[i].status = getOrderStatus(
        parseInt(document.getElementById("order-status").value)
      );
      localStorage.setItem(listOrders, JSON.stringify(Order));
      subQuantityProductInOrderInListProducts(Order[i]);
      document.getElementById("ord-" + i).innerHTML = `
          <td>${Order[i].orderId}</td>
          <td>${Order[i].userId}</td>
          <td>${Order[i].orderDate}</td>
          <td>${Order[i].address.houseNumber}, ${Order[i].address.ward}, ${Order[i].address.district}, ${Order[i].address.city}.</td>
          <td>${Order[i].totalPrice}</td>
          <td>${Order[i].status}</td>
      `;
    });
  });
}

function checkInputFromCreateAccount(event) {
  let inputElement = event.target.value.trim();
  let pass = document.getElementById("aPassword").value;
  let errorElement =
    event.target.parentElement.querySelector(".form-messageAdmin");

  if (
    event.target.id === "aUsername" &&
    inputElement.length < 6 &&
    inputElement.length != 0
  ) {
    errorElement.innerHTML = "Tài khoản phải có ít nhất 6 kí tự.";
  } else if (
    event.target.id === "aPassword" &&
    inputElement.length < 6 &&
    inputElement.length != 0
  ) {
    errorElement.innerHTML = "Mật khẩu phải có ít nhất 6 kí tự.";
  } else if (event.target.id === "aRePassword" && inputElement != pass) {
    errorElement.innerHTML = "Mật khẩu không trùng khớp";
  } else if (
    event.target.id === "aEmail" &&
    !validateEmail(inputElement) &&
    inputElement.length != 0
  ) {
    errorElement.innerHTML = "Địa chỉ email không hợp lệ.";
  } else {
    errorElement.innerHTML = "";
  }
}
function create_account(form) {
  if (form.aUsername.value.length < 6) {
    alert("Thêm thất bại! Tên đăng nhập phải có ít nhất 6 kí tự.");
    return false;
  }

  if (form.aPassword.value.length < 6) {
    alert("Thêm thất bại! Mật khẩu phải có ít nhất 6 kí tự.");
    return false;
  }

  if (form.aPassword.value != form.aRePassword.value) {
    alert("Thêm thất bại! Mật khẩu nhập lại không trùng khớp");
    return false;
  }

  if (!validateEmail(form.aEmail.value)) {
    alert("Thêm thất bại! Địa chỉ email không hợp lệ.");
    return false;
  }
  let temp = {
    id: userList.length,
    username: document.getElementById("aUsername").value,
    email: document.getElementById("aEmail").value,
    address: [],
    password: document.getElementById("aPassword").value,
    cart: [],
    dateSignUp: new Intl.DateTimeFormat("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(new Date(formatDate("" + new Date()))),
    status: 1,
    role: parseInt(document.getElementById("aRole").value),
  };
  // let temp = {
  //   address: [],
  //   cart: [],
  //   dateSignUp: new Intl.DateTimeFormat("vi-VN", {
  //     day: "2-digit",
  //     month: "2-digit",
  //     year: "numeric",
  //   }).format(new Date(formatDate("" + new Date()))),
  //   email: document.getElementById("aEmail").value,
  //   id: userList.length,
  //   password: document.getElementById("aPassword").value,
  //   role: document.getElementById("aRole").value,
  //   status: 1,
  //   username: document.getElementById("aUsername").value,
  // };

  userList.push(temp);
  alert("Thêm thành công");
  document.querySelector(".screen-bright").remove();
  localStorage.setItem(ListUsers, JSON.stringify(userList));
}

function subQuantityProductById(productId, num) {
  let tempProducts = JSON.parse(localStorage.getItem(listProducts));
  let index = tempProducts.findIndex((product) => product.code === productId);

  if (index !== -1) {
    // Kiểm tra xem số lượng có đủ để trừ không
    if (tempProducts[index].quantity >= num) {
      tempProducts[index].quantity -= num;
      localStorage.setItem(listProducts, JSON.stringify(tempProducts));
    } else {
      console.warn(`Không đủ số lượng sản phẩm ${productId} để trừ.`);
    }
  } else {
    console.warn(`Sản phẩm với ID ${productId} không được tìm thấy.`);
  }
}

function subQuantityProductInOrderInListProducts(orderS) {
  alert(orderS);
  // Kiểm tra trạng thái đơn hàng
  if (orderS.status === "Đã giao") {
    // Duyệt qua từng item trong đơn hàng
    orderS.items.forEach((item) => {
      alert(item.quantity);
      // Tích lũy số lượng cần trừ cho mỗi sản phẩm
      subQuantityProductById(item.code, item.quantity);
    });
  }

  // Thực hiện việc trừ số lượng cho từng sản phẩm trong quantityMap
}

//xuất thông tin
function displayPagepOrderManament() {
  ////thêm phần head của order table
  const section = document.querySelector("#content-admin");
  section.className = "content-admin";
  section.innerHTML = `
      <div id="order-filter">
          <section id="search_date">
              <div>Lọc theo ngày:</div>
              <input type="date" id="start" onchange="filter()">
              <div>-</div>
              <input type="date" id="end" onchange="filter()">
          </section>
          <select name="choose_status" id="status" onchange="filter()">
              <option value="0">Trạng thái</option>
              <option value="1">Chờ xác nhận</option>
              <option value="2">Đã xác nhận</option>
              <option value="3">Đã giao</option>
              <option value="4">Đã hủy</option>
          </select>
          <select name="sort_address" id="sort" onchange="order_sort_address()">
              <option value="Sắp xếp">Sắp xếp</option>
              <option value="Địa chỉ">Địa chỉ</option>
          </select>
      </div>
      <table class="manage_data">
          <thead>
              <tr>
                  <td>Mã đơn hàng</td>
                  <td>Mã khách hàng</td>
                  <td>Ngày tạo đơn</td>
                  <td>Địa chỉ</td>
                  <td>Tổng tiền</td>
                  <td>Trạng thái</td>
              </tr>
          </thead>
          <tbody id="order"></tbody>
      </table>
  `;
  document.getElementById("main").appendChild(section);
  //
  //thêm phần body của table
  const container = document.getElementById("order");
  for (let i = 0; i < Order.length; i++) {
    order_output(container, i);
  }
}

// Phần thống kê
///////////lấy đơn hàng theo ngày, đã giao
function time_confirm_order(dateStart, dateEnd) {
  if (dateStart == "") {
    dateStart = "2000-01-01";
  }
  if (dateEnd == "") {
    dateEnd = "2100-01-01";
  }
  const search_order = Order;
  let filter_order = [];
  search_order.forEach((item) => {
    if (
      item.status === "Đã giao" &&
      formatDate(item.orderDate) >= dateStart &&
      formatDate(item.orderDate) <= dateEnd
    ) {
      filter_order.push(item);
    }
  });
  if (dateStart == "2000-01-01") {
    dateStart = "";
  }
  if (dateEnd == "2100-01-01") {
    dateEnd = "";
  }
  return filter_order;
}
/////vào thống kê
function displayPageSellManagement() {
  const addfilter = document.querySelector("#content-admin");

  addfilter.innerHTML = `
      <div id="order-filter">
          <section id="search_date">
                <div>Lọc theo ngày:</div>
                <input type="date" id="sstart">
                <div>-</div>
                <input type="date" id="eend">
          </section>
        </div>
        <section class = "content-admin">
        <h1>Thống kê sản phẩm</h1>
        <table class="manage_data statpro">
            <thead>
                <td>Mã</td>
                <td>Tên sản phẩm</td>
                <td>Đơn giá</td>
                <td>Số lượng bán ra</td>
                <td>Tổng doanh thu</td>
            </thead>
        </table>
        </section>
        <section class = "content-admin">
        </section>
        <h1>Thống kê khách hàng</h1>
        <table class="manage_data cus">
            <thead>
                <td>Mã</td>
                <td>Tên khách hàng</td>
                <td>Số đơn hàng</td>
                <td>Tổng doanh thu</td>
            </thead>
        </table>
    `;
  document.getElementById("main").appendChild(addfilter);
  statistic_load("", "");
  document.getElementById("search_date").addEventListener("change", () => {
    const contentAdmin = document.querySelectorAll(".content-admin");
    contentAdmin[1].remove();
    contentAdmin[2].remove();
    statistic_load(
      document.getElementById("sstart").value,
      document.getElementById("eend").value
    );
  });
}

function statistic_load(start, end) {
  let orders = time_confirm_order(start, end);
  let total = 0;
  let bestSellid = 0;
  let worstSellid = 0;
  let quantitySell = [];
  //xét từng order
  for (let i = 0; i < orders.length; i++) {
    ///lấy cart trong orders
    for (j = 0; j < orders[i].items.length; j++) {
      //cập nhật danh sách số lượng bán ra
      let k = 0;
      while (
        k < quantitySell.length &&
        quantitySell[k].code != orders[i].items[j].code
      ) {
        k++;
      }
      if (k == quantitySell.length) {
        quantitySell.push(orders[i].items[j]);
      } else {
        quantitySell[k].quantity += orders[i].items[j].quantity;
      }
    }
  }

  ////xuất danh sách số lượng bán ra
  if (quantitySell.length > 0) {
    for (let i = 0; i < quantitySell.length; i++) {
      const totalprice = quantitySell[i].price * quantitySell[i].quantity;
      total += totalprice;
      ////bestsell, worstsell
      if (quantitySell[i].quantity > quantitySell[bestSellid].quantity) {
        bestSellid = i;
      } else if (
        quantitySell[i].quantity < quantitySell[worstSellid].quantity
      ) {
        worstSellid = i;
      }
      ///////////////////
      const sellBody = document.createElement("tbody");
      sellBody.id = "sell-" + i;
      sellBody.innerHTML = `
          <td>${quantitySell[i].code}</td>
          <td>${quantitySell[i].name}</td>
          <td>${quantitySell[i].price}</td>
          <td>${quantitySell[i].quantity}</td>
          <td>${totalprice}</td>
        `;
      document.querySelector(".manage_data").appendChild(sellBody);
      document.getElementById("sell-" + i).addEventListener("click", () => {
        create_statistic_pro(i, orders, quantitySell);
        detail_exit1();
      });
    }
    const thongke = document.createElement("div");
    thongke.style = "margin-bottom: 50px";
    thongke.innerHTML = `
        <p><b>Tổng doanh thu: ${total}</b></p>
        <p><b>Sản phẩm bán chạy: ${quantitySell[bestSellid].name}</b></p>
        <p><b>Sản phẩm bán ế: ${quantitySell[worstSellid].name}</b></p>
      `;
    document.querySelector(".statpro").appendChild(thongke);
  }

  /////////thong ke nguoi dung
  let userorder = [];
  //xét từng order
  for (let i = 0; i < orders.length; i++) {
    ///lấy id user trong orders
    let k = 0;
    while (k < userorder.length && orders[i].userId != userorder[k].id) {
      k++;
    }
    if (k == userorder.length) {
      userorder.push({
        id: orders[i].userId,
        quantity: 1,
        totalPrice: orders[i].totalPrice,
      });
    } else {
      userorder[k].quantity += 1;
      userorder[k].totalPrice += orders[i].totalPrice;
    }
  }

  for (let i = 0; i < userorder.length; i++) {
    const sellbd = document.createElement("tbody");
    sellbd.id = "cus-" + i;
    sellbd.innerHTML = `
        <td>${userorder[i].id}</td>
        <td>${getUserById(userorder[i].id).username}</td>
        <td>${userorder[i].quantity}</td>
        <td>${userorder[i].totalPrice}</td>
      `;
    document.querySelector(".cus").appendChild(sellbd);

    document.getElementById("cus-" + i).addEventListener("click", () => {
      create_statistic_cus(i, orders, userorder);
      detail_exit1();
    });
  }
}
function create_statistic_pro(i, orders, quantitySell) {
  let add = document.createElement("div");
  add.className = "screen-bright";
  let add1 = ``;
  for (let j = 0; j < orders.length; j++) {
    for (let k = 0; k < orders[j].items.length; k++) {
      if (orders[j].items[k].code == quantitySell[i].code) {
        add1 += `
                <div id="sellOrd-${j}" class="form-detail-content show-cus-ord" style="margin: 10px 0px">> Mã đơn hàng: ${orders[j].orderId}</div>
                <div id="sshow-${j}"></div>
            `;
      }
    }
  }
  add.innerHTML = `
        <div id="stat-detail">
          <h2 style="padding-top:40px">${quantitySell[i].name}</h2>
          <div class="form-detail">
            ${add1}
          </div>
        </div>
      `;
  document.body.appendChild(add);
  for (let j = 0; j < orders.length; j++) {
    for (let k = 0; k < orders[j].items.length; k++) {
      if (orders[j].items[k].code == quantitySell[i].code) {
        //////////
        let temp = JSON.parse(localStorage.getItem(listOrders));
        document
          .getElementById("sellOrd-" + j)
          .addEventListener("click", () => {
            const orderdate = new Intl.DateTimeFormat("vi-VN", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            }).format(new Date(formatDate(temp[j].orderDate)));

            let a = ``;

            for (let q = 0; q < temp[j].items.length; q++) {
              a += `<div>${temp[j].items[q].name} x ${temp[j].items[q].quantity} - ${temp[j].items[q].price}VNĐ/1</div>`;
            }
            if (document.getElementById("sshow-" + j).innerHTML == "") {
              document.getElementById("sshow-" + j).innerHTML = `
                      <div class="stat-order">
                        <div class="data-stat"><b>Chi tiết đơn hàng</b></div>
                        <div class="data-stat"><b>OrderID: </b>${temp[j].orderId}</div>
                        <div class="data-stat"><b>UserID: </b>${temp[j].userId}</div>
                        
                        <div class="data-stat"><b>Date: </b>${orderdate}</div>
                        <div class="data-stat" ><b>Address: </b>${temp[j].address.houseNumber}, ${temp[j].address.ward}, ${temp[j].address.district}, ${temp[j].address.city}.</div>
                        <div class="data-stat" ><b>Payment Method: </b>${temp[j].paymentMethod}</div>
                        <div class="data-stat"><b>Status: </b>${temp[j].status}</div>
                        <div class="data-stat"><b>Infor</b></div>
                        <div class="data-stat">${a}</div>
                        <div class="data-stat"><b>Total Money: </b>${temp[j].totalPrice}</div>
                      </div>
                `;
            } else {
              document.getElementById("sshow-" + j).innerHTML = "";
            }
          });
      }
    }
  }
}

function create_statistic_cus(i, orders, userorder) {
  let add = document.createElement("div");
  add.className = "screen-bright";
  let add1 = ``;
  for (let j = 0; j < orders.length; j++) {
    if (orders[j].userId == userorder[i].id) {
      add1 += `
            <div id="cusOrd-${j}" class="form-detail-content show-cus-ord" style="margin: 10px 0px">> Mã đơn hàng: ${orders[j].orderId}</div>
            <div id="show-${j}"></div>
        `;
    }
  }
  add.innerHTML = `
      <div id="stat-detail">
        <h2 style="padding-top:40px">${
          getUserById(userorder[i].id).username
        }</h2>
        <div class="form-detail">
          ${add1}
        </div>
      </div>
    `;
  document.body.appendChild(add);
  for (let j = 0; j < orders.length; j++) {
    if (orders[j].userId == userorder[i].id) {
      //////////
      let temp = JSON.parse(localStorage.getItem(listOrders));
      document.getElementById("cusOrd-" + j).addEventListener("click", () => {
        const orderdate = new Intl.DateTimeFormat("vi-VN", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        }).format(new Date(formatDate(temp[j].orderDate)));

        let a = ``;
        for (let k = 0; k < temp[j].items.length; k++) {
          a += `<div>${temp[j].items[k].name} x ${temp[j].items[k].quantity} - ${temp[j].items[k].price}VNĐ/1</div>`;
        }
        if (document.getElementById("show-" + j).innerHTML == "") {
          document.getElementById("show-" + j).innerHTML = `
                <div stlye="margin-left: 100px">
                  <div class="stat-order">
                        <div class="data-stat"><b>Chi tiết đơn hàng</b></div>
                        <div class="data-stat"><b>OrderID: </b>${temp[j].orderId}</div>
                        <div class="data-stat"><b>UserID: </b>${temp[j].userId}</div>
                        <div class="data-stat"><b>Date: </b>${orderdate}</div>
                        <div class="data-stat"><b>Address: </b>${temp[i].address.houseNumber}, ${temp[i].address.ward}, ${temp[i].address.district}, ${temp[i].address.city}.</div>
                        <div class="data-stat"><b>Payment Method: </b>${temp[i].paymentMethod}</div>
                        <div class="data-stat"><b>Status: </b>${temp[j].status}</div>
                        <div class="data-stat"><b>Infor</b></div>
                        <div class="data-stat">${a}</div>
                        <div class="data-stat"><b>Total Money: </b>${temp[j].totalPrice}</div>
                  </div>
                </div>
            `;
        } else {
          document.getElementById("show-" + j).innerHTML = "";
        }
      });
    }
  }
}
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
// tool
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
