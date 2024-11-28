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
    adminInfor.innerHTML = `<p id="admin-name">Tên tài khoản quản trị: ${user.username}</p>
        <p id="admin-email">Email: ${user.email}</p>
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
        <div id="content-admin"></div>
      </main>`;
    document
      .getElementById("account-button")
      .addEventListener("click", displayPageAccountManagement);
    document
      .getElementById("product-button")
      .addEventListener("click", displayPageProductManagement);
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
    adminInfor.innerHTML = `<p id="admin-name">Tên tài khoản quản trị: ${user.username}</p>
        <p id="admin-email">Email: ${user.email}</p>
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
        <div id="content-admin"></div>
      </main>`;
    document
      .getElementById("account-button")
      .addEventListener("click", displayPageAccountManagement);
    document
      .getElementById("product-button")
      .addEventListener("click", displayPageProductManagement);
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
            <button class="exit" style="font-size: 16px; position: absolute; top: 0px; right: 0px; border: none; border-radius: 0px 18px 0px 0px; padding: 10px;">
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
            
            <input type="submit" value="Thêm sản phẩm" id="add-infor">
        </form>
    </div>
    `;
  document.body.appendChild(ADD);
  document.getElementById("add-infor").style.width = "300px";
  //đóng thẻ thêm sản phẩm
  detail_exit1();
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
    } else {
      if (checkname(document.addInput.ten.value) == 0) {
        alert("Tên bạn nhập đã tồn tại");
        document.getElementById("idten").focus();
      } else {
        if (checkprice(document.addInput.gia.value) == 0) {
          alert("Giá tiền phải là số");
          document.getElementById("idgia").focus();
        } else {
          let temp_product = {
            name: document.addInput.ten.value,
            code: document.addInput.ma.value,
            price: document.addInput.gia.value,
            imgSrc: img.src,
            topic: idchude.value,
          };

          temp_product.code = setCode(document.addInput.danhmuc.value);
          productArray.push(temp_product);
          localStorage.setItem(listProducts, JSON.stringify(productArray));
          let temp = productArray.length - 1;
          ///////////////////////////
          alert("thêm thành công");
          //
          let container = document.getElementById("product");
          let productDiv = document.createElement("div");
          productDiv.className = "product-data";
          productDiv.id = "product-" + temp;
          productDiv.innerHTML = `
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

          container.appendChild(productDiv);
          //mở chi tiết sản phẩm
          create_product_detail(temp);
          //
          document.querySelector(".screen-bright").remove();
        }
      }
    }
  });
}
// Phần quản lý đơn hàng

// Phần thống kê

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
