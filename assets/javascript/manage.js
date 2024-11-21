let Order = [];
let Product = JSON.parse(localStorage.getItem("inventory"));
if (Product.length == 0) {
  Product = [
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
  Order.push({
    UserID: "Cus 1",
    OrderID: "Ord 1",
    OrderDate: "2024-10-01",
    Address: "Quận 3",
    Bill: "Naruto x2",
    TotalMoney: 10000,
    Status: "Đơn bị từ chối",
  });
  Order.push({
    UserID: "Cus 2",
    OrderID: "Ord 2",
    OrderDate: "2024-10-05",
    Address: "Quận 1",
    Bill: "Naruto x2",
    TotalMoney: 20000,
    Status: "Đã xác nhận",
  });
  Order.push({
    UserID: "Cus 3",
    OrderID: "Ord 3",
    OrderDate: "2024-10-07",
    Address: "Quận 2",
    Bill: "Naruto x2",
    TotalMoney: 30000,
    Status: "Chưa xử lí",
  });
}
const jsonData_sell = `
[
    {
        "LegoID": "1",
        "LegoName": "1",
        "Type": "1",
        "QuantinySold": 1
    },
    {
        "LegoID": "2",
        "LegoName": "2",
        "Type": "2",
        "QuantinySold": 2
    },
    {
        "LegoID": "3",
        "LegoName": "3",
        "Type": "3",
        "QuantinySold": 4
    }
]`;
const sells = JSON.parse(jsonData_sell);
//////////////////Phần order

//lấy biến ngày tháng năm để in ra dạng dd/mm/yyyy
let orderdate, day, month, year;

//hàm xuất đơn hàng
function order_output(container, i) {
  //lấy ngày tháng năm để xuất ngày dạng date/month/year
  orderdate = new Date(Order[i].OrderDate);
  day = orderdate.getDate();
  month = orderdate.getMonth() + 1;
  year = orderdate.getFullYear();
  //
  //hiển thị order
  const ordTr = document.createElement("tr");
  ordTr.className = "order-data";
  ordTr.id = "ord-" + i;
  ordTr.innerHTML = `
            <td>${Order[i].UserID}</td>
            <td>${Order[i].OrderID}</td>
            <td>${day}/${month}/${year}</td>
            <td>${Order[i].Address}</td>
            <td>${Order[i].TotalMoney}</td>
            <td>${Order[i].Status}</td>
        `;
  container.appendChild(ordTr);
  //tạo chi tiết order
  create_order_detail(i);
}
let id_order = [0, 1, 2];
//hàm lọc theo ngày và tình trạng đơn hàng
function filter() {
  id_order = [];
  const start = document.getElementById("start");
  const end = document.getElementById("end");
  const container = document.getElementById("order");
  const status = document.getElementById("status");
  const temp = document.getElementsByClassName("order-data");
  const count = temp.length;
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
  for (let i = 0; i < count; i++) {
    container.removeChild(temp[0]);
  }
  for (let i = 0; i < Order.length; i++) {
    if (Order[i].OrderDate >= start.value && Order[i].OrderDate <= end.value) {
      if (status.value == Order[i].Status || status.value == "Trạng thái") {
        order_output(container, i);
        id_order.push(i);
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
        if (Order[id_order[i]].Address > Order[id_order[j]].Address) {
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
function create_order_detail(i) {
  document.getElementById("ord-" + i).addEventListener("click", () => {
    const orderdate = new Date(Order[i].OrderDate);
    const day = orderdate.getDate();
    const month = orderdate.getMonth() + 1;
    const year = orderdate.getFullYear();
    //mở chi tiết order
    document.getElementById("bright").style.filter = "brightness(50%)";
    document.getElementById("bright").style.pointerEvents = "none";
    const ordDiv = document.createElement("div");
    ordDiv.id = "order-detail";
    ordDiv.innerHTML = `
            <button id="exit0" style="font-size: 16px; position: absolute; top: 0px; right: 0px; border: none; border-radius: 0px 18px 0px 0px; padding: 10px;">
                <i class="fa-regular fa-x"></i>
            </button>
            <p><b>Chi tiết đơn hàng</b></p><br>
            <b>UserID</b>
            <div class="data">${Order[i].UserID}</div>
            <b>OrderID</b>
            <div class="data">${Order[i].OrderID}</div>
            <b>Date</b>
            <div class="data">${day}/${month}/${year}</div>
            <b>Address</b>
            <div class="data">${Order[i].Address}</div>
            <b>Infor</b>
            <div class="data">${Order[i].Bill}</div>
            <b>Total Money</b>
            <div class="data">${Order[i].TotalMoney}</div>
            <b>Status</b>
            <div class="data">${Order[i].Status}</div>
            `;
    document.body.appendChild(ordDiv);

    //
    //đóng chi tiết order
    document.getElementById("exit0").addEventListener("click", () => {
      document.getElementById("order-detail").remove();
      document.getElementById("bright").style.filter = "brightness(100%)";
      document.getElementById("bright").style.pointerEvents = "all";
    });
    //
  });
}
//xuất thông tin
document.getElementById("order-button").addEventListener("click", () => {
  document.getElementById("content").remove();
  ////thêm phần head của order table
  const section = document.createElement("section");
  section.id = "content";
  section.innerHTML = `
        <div id="order-filter">
            <section id="search_date">
                <div>Lọc theo ngày:</div>
                <input type="date" id="start" onchange="filter()">
                <div>-</div>
                <input type="date" id="end" onchange="filter()">
            </section>
            <select name="choose_status" id="status" onchange="filter()">
                <option value="Trạng thái">Trạng thái</option>
                <option value="Đã xác nhận">Đã xác nhận</option>
                <option value="Chưa xử lí">Chưa xử lí</option>
                <option value="Đơn bị từ chối">Đơn bị từ chối</option>
            </select>
            <select name="sort_address" id="sort" onchange="order_sort_address()">
                <option value="Sắp xếp">Sắp xếp</option>
                <option value="Địa chỉ">Địa chỉ</option>
            </select>
        </div>
        <table class="manage_data">
            <thead>
                <tr>
                    <td>User ID</td>
                    <td>Order ID</td>
                    <td>Order Date</td>  
                    <td>Address</td>                  
                    <td>Total Money</td>
                    <td>Status</td>
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
});
/////////////////////////////////////

/////////////phần sản phẩm(product)

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
  for (let j = 0; j < Product.length; j++) {
    if (s == Product[j].name) return 0;
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

//tạo chi tiết sản phẩm
function create_product_detail(temp) {
  document.getElementById("product-" + temp).addEventListener("click", () => {
    const productDIV = document.createElement("div");
    productDIV.id = "product-detail";
    productDIV.innerHTML = `
            <button id="exit1" style="font-size: 16px; position: absolute; top: 0px; right: 0px; border: none; border-radius: 0px 18px 0px 0px; padding: 10px;">
                <i class="fa-regular fa-x"></i>
            </button>
            <div>
                <form name="changes" id="thaydoi">
                    <img src="${Product[temp].imgSrc}" alt="Mô tả sản phẩm"> 
                    <input type="file" accept="image/*" id="canh" value="Chọn ảnh">
                    <label>
                        Tên sản phẩm:
                        <input type="text" name="cten" placeholder="${Product[temp].name}">
                    </label> 

                    <label>
                        Mã sản phẩm: 
                        <input type="text" name="cma" placeholder="${Product[temp].code}">
                    </label>

                    <label>
                        Danh mục: 
                        <input type="text" name="cdanhmuc" placeholder="${Product[temp].quantiny}">
                    </label> 

                    <label>
                        Chủ đề: 
                        <input type="text" name="cchude" placeholder="${Product[temp].topic}">
                    </label>
                    <label>
                        Giá tiền: 
                        <input type="text" name="cgia" placeholder="${Product[temp].price}">
                    </label>
                    <input type="submit" value="Thay đổi thông tin" id="change-infor">
                    <button id="delete">Xóa sản phẩm</button>
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
    document.getElementById("change-infor").style.width = "300px";
    document.getElementById("bright").style.filter = "brightness(50%)";
    document.getElementById("bright").style.pointerEvents = "none";
    document.getElementById("addProduct").style.pointerEvents = "none";
    //đóng chi tiết sản phẩm
    document.getElementById("exit1").addEventListener("click", () => {
      document.getElementById("product-detail").remove();
      document.getElementById("bright").style.filter = "brightness(100%)";
      document.getElementById("bright").style.pointerEvents = "all";
      document.getElementById("addProduct").style.pointerEvents = "all";
    });

    //thay ảnh
    const cimageInput = document.getElementById("canh");
    let cimg = document.createElement("img");
    cimageInput.addEventListener("change", () => {
      cimg.src = imglink(cimg, cimageInput);
    });
    //

    ////thay đổi thông tin
    document.getElementById("thaydoi").addEventListener("submit", (event) => {
      event.preventDefault();
      alert("thay đổi thành công");
      if (cimg.src != "") Product[temp].imgSrc = cimg.src;
      if (document.changes.cten.value != "")
        Product[temp].name = document.changes.cten.value;
      if (document.changes.cma.value != "")
        Product[temp].code = document.changes.cma.value;
      if (document.changes.cdanhmuc.value != "")
        Product[temp].quantiny = document.changes.cdanhmuc.value;
      if (document.changes.cchude.value != "")
        Product[temp].topic = document.changes.cchude.value;
      if (document.changes.cgia.value != "")
        Product[temp].price = document.changes.cgia.value;
      document.getElementById("product-" + temp).innerHTML = `
                <p><img src="${Product[temp].imgSrc}" alt="Mô tả sản phẩm"></p>
                <div class ="product-info">
                    <div class="product-info-detail">
                        <strong>Tên sản phẩm:</strong> ${Product[temp].name}
                    </div>
                    <div class="product-info-detail">
                        <strong>Mã sản phẩm:</strong> ${Product[temp].code}
                    </div>
                    <div class="product-info-detail">
                        <strong>Chủ đề:</strong> ${Product[temp].topic}
                    </div>
                </div>
            `;
      document.getElementById("product-detail").remove();
      document.getElementById("bright").style.filter = "brightness(100%)";
      document.getElementById("bright").style.pointerEvents = "all";
      document.getElementById("addProduct").style.pointerEvents = "all";
      localStorage.setItem("inventory", JSON.stringify(Product));
    });
    //
    ///xóa sản phẩm
    document.getElementById("delete").addEventListener("click", (event) => {
      event.preventDefault();
      document.getElementById("confirmModal").style.display = "block";
    });
    document.getElementById("confirmBtn").addEventListener("click", () => {
      for (let j = temp; j < Product.length - 1; j++) {
        [Product[j], Product[j + 1]] = [Product[j + 1], Product[j]];
        document.getElementById("product-" + j).innerHTML = `
                <p><img src="${Product[j].imgSrc}" alt="Mô tả sản phẩm"></p>
                    <div class ="product-info">
                        <div class="product-info-detail">
                            <strong>Tên sản phẩm:</strong> ${Product[j].name}
                        </div>
                        <div class="product-info-detail">
                            <strong>Mã sản phẩm:</strong> ${Product[j].code}
                        </div>
                        <div class="product-info-detail">
                            <strong>Chủ đề:</strong> ${Product[j].topic}
                        </div>
                    </div>
            `;
      }
      let delete_element = Product.length - 1;
      document.getElementById("product-" + delete_element).remove();
      document.getElementById("product-detail").remove();
      document.getElementById("bright").style.filter = "brightness(100%)";
      document.getElementById("bright").style.pointerEvents = "all";
      document.getElementById("addProduct").style.pointerEvents = "all";
      Product.splice(delete_element, 1);
      localStorage.setItem("inventory", JSON.stringify(Product));
      document.getElementById("confirmModal").style.display = "none";
    });
    document.getElementById("cancelBtn").addEventListener("click", () => {
      document.getElementById("confirmModal").style.display = "none";
    });
  });
}

//xuất sản phẩm
document.getElementById("product-button").addEventListener("click", () => {
  document.getElementById("content").remove();
  const section = document.createElement("section");
  section.id = "content";
  section.innerHTML = `
        <div class="product-grid">
            <div id ="product">
            </div>
        </div>
    `;
  document.getElementById("main").appendChild(section);
  const container = document.getElementById("product");
  const quantiny = Product.length;
  for (let i = 0; i < quantiny; i++) {
    const productDiv = document.createElement("div");
    productDiv.className = "product-data";
    productDiv.id = "product-" + i;
    productDiv.innerHTML = `
            <p><img src="${Product[i].imgSrc}" alt="Mô tả sản phẩm"></p>
            <div class ="product-info">
                <div class="product-info-detail">
                    <strong>Tên sản phẩm:</strong> ${Product[i].name}
                </div>
                <div class="product-info-detail">
                    <strong>Mã sản phẩm:</strong> ${Product[i].code}
                </div>
                <div class="product-info-detail">
                    <strong>Chủ đề:</strong> ${Product[i].topic}
                </div>
            </div>
        `;
    container.appendChild(productDiv);
    create_product_detail(i);
  }
  const add_button = document.createElement("div");
  add_button.id = "addProduct";
  add_button.innerHTML = `<i class="fa-solid fa-plus"></i>`;
  section.appendChild(add_button);
  document
    .getElementById("addProduct")
    .addEventListener("click", choose_addProduct);
});

//thêm, xóa, chỉnh sửa sản phẩm
function choose_addProduct() {
  //mở thẻ thêm sản phẩm
  document.getElementById("bright").style.filter = "brightness(50%)";
  document.getElementById("bright").style.pointerEvents = "none";
  document.getElementById("addProduct").style.pointerEvents = "none";
  const ADD = document.createElement("div");
  ADD.id = "add-product-input";
  ADD.innerHTML = `
        <form name="addInput"  id= "adp">
            <button id="exita" style="font-size: 16px; position: absolute; top: 0px; right: 0px; border: none; border-radius: 0px 18px 0px 0px; padding: 10px;">
                <i class="fa-regular fa-x"></i>
            </button>
            <div><b>Thêm sản phẩm</b></div>
            <label>
                Tên sản phẩm
                <input type="text" placeholder="Tên sản phẩm" name="ten" id="idten">            
            </label>
            
            <label>
                Mã
                <input type="text" placeholder="Mã" name="ma" id="idma">
            </label>

            <label>
                Giá
                <input type="text" placeholder="Giá" name="gia" id="idgia">
            </label>

            <label>
                Danh mục
                <select placeholder="Danh mục" name="danhmuc" id="iddanhmuc">
                    <option value="a" selected>Lego Minifigure</option>
                    <option value="b">Lego MOC</option>
                    <option value="c">Lego chính hãng</option>
                    <option value="d">Phụ kiện Lego</option>
                </select>
            </label>
            
            <label>
                Chủ đề
                <select placeholder="Chủ đề" name="chude" id="idchude">
                    <option value="e" selected>Naruto</option>
                    <option value="f">Dragon Ball</option>
                    <option value="g">Kimetsu No Yaiba</option>
                    <option value="h">Marvel</option>
                </select>
            </label>
            
            <label>
                Chọn ảnh
                <input type="file" accept="image/*" id="anh">
            </label>
            
            <input type="submit" value="Thêm sản phẩm" id="add-infor">
        </form>
    `;
  document.body.appendChild(ADD);
  document.getElementById("add-infor").style.width = "300px";
  //thêm lựa chọn cho chủ đề sau khi chọn danh mục
  document.getElementById("iddanhmuc").addEventListener("change", () => {
    let addchude = ``;
    switch (iddanhmuc.value) {
      case "a": {
        addchude = `
                    <option value="e">Naruto</option>
                    <option value="f">Dragon Ball</option>
                    <option value="g">Kimetsu No Yaiba</option>
                    <option value="h">Marvel</option>
                `;
        break;
      }
      case "b": {
        addchude = `
                    <option value="m">Army</option>
                    <option value="n">Technic</option>
                `;
        break;
      }
      case "c": {
        addchude = `
                    <option value="x">Technic</option>
                    <option value="y">Ninjago</option>
                `;
        break;
      }
      default: {
        break;
      }
    }
    document.getElementById("idchude").innerHTML = addchude;
  });
  //
  //đóng thẻ thêm sản phẩm
  document.getElementById("exita").addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("bright").style.filter = "brightness(100%)";
    document.getElementById("bright").style.pointerEvents = "all";
    document.getElementById("addProduct").style.pointerEvents = "all";
    document.getElementById("add-product-input").remove();
  });
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
    /*
        if (img.src == "") {
            alert("Bạn chưa chọn ảnh");
            document.getElementById("anh").focus();
        }
         */
    if (document.addInput.ten.value == "") {
      alert("Bạn chưa nhập tên");
      document.getElementById("idten").focus();
    } else if (document.addInput.ma.value == "") {
      alert("Bạn chưa nhập mã");
      document.getElementById("idma").focus();
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
          const temp_product = {
            name: document.addInput.ten.value,
            code: document.addInput.ma.value,
            price: document.addInput.gia.value,
            imgSrc: img.src,
            topic: idchude.value,
          };
          Product.push(temp_product);
          localStorage.setItem("inventory", JSON.stringify(Product));
          let temp = Product.length - 1;
          ///////////////////////////
          document.getElementById("bright").style.filter = "brightness(100%)";
          document.getElementById("bright").style.pointerEvents = "all";
          alert("thêm thành công");
          //
          let container = document.getElementById("product");
          let productDiv = document.createElement("div");
          productDiv.className = "product-data";
          productDiv.id = "product-" + temp;
          productDiv.innerHTML = `
                        <p><img src="${Product[temp].imgSrc}" alt="Mô tả sản phẩm"></p>
                        <div class ="product-info">
                            <div class="product-info-detail">
                                <strong>Tên sản phẩm:</strong> ${Product[temp].name}
                            </div>
                            <div class="product-info-detail">
                                <strong>Mã sản phẩm:</strong> ${Product[temp].code}
                            </div>
                            <div class="product-info-detail">
                                <strong>Chủ đề:</strong> ${Product[temp].topic}
                            </div>
                        </div>
                    `;
          container.appendChild(productDiv);
          //mở chi tiết sản phẩm
          create_product_detail(temp);
          //
          document.getElementById("add-product-input").remove();
          document.getElementById("addProduct").style.pointerEvents = "all";
        }
      }
    }
  });
}
/////////////////////
document.getElementById("account-button").addEventListener("click", () => {
  document.getElementById("content").remove();
  const section = document.createElement("section");
  section.id = "content";
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
            <tbody>
                <tr>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                </tr>
            </tbody>
        </table>
    `;
  document.getElementById("main").appendChild(section);
});
document.getElementById("sell-button").addEventListener("click", () => {
  document.getElementById("content").remove();
  const section = document.createElement("section");
  section.id = "content";
  section.innerHTML = `
        <table class="manage_data">
            <thead>
                <td>Lego ID</td>
                <td>Lego Name</td>
                <td>Type</td>
                <td>Quantiny Sold</td>
            </thead>
            <tbody id="sell"></tbody>
        </table>
    `;
  document.getElementById("main").appendChild(section);
  const container = document.getElementById("sell");
  let total = 0;
  //in doanh thu bán hàng
  for (let i = 0; i < sells.length; i++) {
    total += sells[i].QuantinySold;
    const sellTr = document.createElement("tr");
    sellTr.innerHTML = `
            <td>${sells[i].LegoID}</td>
            <td>${sells[i].LegoName}</td>
            <td>${sells[i].Type}</td>
            <td>${sells[i].QuantinySold}</td>
        `;
    container.appendChild(sellTr);
  }
  const contain = document.getElementById("content");
  const totalDiv = document.createElement("div");
  totalDiv.innerHTML = `
        <b>Tổng sản phẩm đã bán: ${total}</b>
    `;
  contain.appendChild(totalDiv);
});

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
