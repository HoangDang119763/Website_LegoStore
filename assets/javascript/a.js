let Order = [];

Order.push({
    UserID: "Cus 1",
    OrderID: "Ord 1",
    OrderDate: "2024-10-01",
    Address: "Quận 3",
    Bill: "Naruto x2",
    TotalMoney: 10000,
    Status: "Đơn bị từ chối"
});
Order.push({
    UserID: "Cus 2",
    OrderID: "Ord 2",
    OrderDate: "2024-10-05",
    Address: "Quận 1",
    Bill: "Naruto x2",
    TotalMoney: 20000,
    Status: "Đã xác nhận"
});
Order.push({
    UserID: "Cus 3",
    OrderID: "Ord 3",
    OrderDate: "2024-10-07",
    Address: "Quận 2",
    Bill: "Naruto x2",
    TotalMoney: 30000,
    Status: "Chưa xử lí"
});
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
    if (start.value == '') {
        start.value = '2000-01-01';
    }
    if (end.value == '') {
        end.value = '2100-01-01';
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
    if (start.value == '2000-01-01') {
        start.value = '';
    }
    if (end.value == '2100-01-01') {
        end.value = '';
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
    if (sort.value == "Địa chỉ"){
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
        id_order.forEach(id => {
            order_output(container, id);
        });
    }
    else {
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
        const ordDiv = document.createElement("div");
        ordDiv.className = "screen-bright";
        ordDiv.innerHTML = `
            <div id="order-detail">
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
            </div<
            `;
        document.body.appendChild(ordDiv);
        const screenBright = document.querySelector('.screen-bright');
        //
        //đóng chi tiết order
        document.getElementById("exit0").addEventListener("click", () => {
            screenBright.remove();
        });
        //Tự động đóng modal khi click ngoài order-detail
        window.addEventListener("click", (event) => {
            if (event.target === screenBright) {
                screenBright.remove();
            }
        });
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
        reader.onload = function(e) {
            img.src = e.target.result;
        }
        reader.readAsDataURL(file);
    }
    return img.src;
}

///kiểm tra tên nhập vào có hợp lệ khônng
function checkname(s) {
    for (let j = 0; j < Product.length; j++) {
        if (s == Product[j].name)
            return 0;
    }
    return 1;
}

//kiểm tra giá tiền nhập vào có phải số không
function checkprice(s) {
    let temp = new String(s);
    for (let j = 0; j < s.length; j++) {
        if (temp[j] < '0' || temp[j] > '9')
            return 0;
    }
    return 1;
}

//tạo chi tiết sản phẩm
function create_product_detail(temp) {
    document.getElementById("product-" + temp).addEventListener("click", () => {
        const productDIV = document.createElement("div");
        productDIV.className = "screen-bright";
        productDIV.innerHTML = `
        <div id="product-detail">
            <button id="exit1" style="font-size: 16px; position: absolute; top: 0px; right: 0px; border: none; border-radius: 0px 18px 0px 0px; padding: 10px;">
                <i class="fa-regular fa-x"></i>
            </button>
            <div>
                <form name="changes" id="thaydoi">
                    
                    <img src="${productArray[temp].imgSrc}" alt="Mô tả sản phẩm" id="thayanh"> 
                    <button class="remove-img"><i class="fa-solid fa-trash" aria-hidden="true"></i></button>
                    <input type="file" accept="image/*" id="canh" value="Chọn ảnh">
                    <label>
                        Tên sản phẩm:
                        <input type="text" name="cten" placeholder="${productArray[temp].name}">
                    </label> 

                    <label>
                        Mã sản phẩm: 
                        <input type="text" name="cma" placeholder="${productArray[temp].code}">
                    </label>

                    <label>
                        Danh mục: 
                        <input type="text" name="cdanhmuc" placeholder="${productArray[temp].quantiny}">
                    </label> 

                    <label>
                        Chủ đề: 
                        <input type="text" name="cchude" placeholder="${productArray[temp].topic}">
                    </label>
                    <label>
                        Giá tiền: 
                        <input type="text" name="cgia" placeholder="${productArray[temp].price}">
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
        `
        document.body.appendChild(productDIV);
        document.getElementById("change-infor").style.width = "300px";
        const screenBright = document.querySelectorAll('.screen-bright');
        //đóng chi tiết sản phẩm
        document.getElementById("exit1").addEventListener("click", () => {
            screenBright.forEach(item => {
                item.remove();
            });
        });
        // Tự động đóng modal khi click ngoài modal
        window.addEventListener("click", (event) => {
            screenBright.forEach(item => {
                if (event.target === item) {
                    item.remove();
                }
            });
        });

        //thay ảnh
        const cimageInput = document.getElementById("canh");
        let cimg = document.createElement("img");
        document.getElementById('canh').addEventListener('change', function(event) {
            const file = event.target.files[0]; // Lấy file ảnh đầu tiên mà người dùng chọn
            if (file) {
              const reader = new FileReader();
              
              // Khi FileReader đã đọc xong ảnh
              reader.onload = function(e) {
                // Đặt link ảnh vào thẻ img để hiển thị
                document.getElementById('thayanh').src = e.target.result;
                cimg.src = e.target.result;
              }
              
              // Đọc file ảnh dưới dạng data URL (base64)
              reader.readAsDataURL(file);
            }
          });
          
        //xóa ảnh
        const imgdelete = document.querySelectorAll('.remove-img');
        imgdelete.forEach(item => {
            item.addEventListener("click", (e) => {
                e.preventDefault();
                document.getElementById("thayanh").src = "./assets/img/blank_img.png";
            });
        });

        ////thay đổi thông tin
        document.getElementById("thaydoi").addEventListener("submit", (event) =>{
            event.preventDefault();
            if (cimg.src != "")
              productArray[temp].imgSrc = cimg.src;
            if (document.changes.cten.value != "")
              productArray[temp].name = document.changes.cten.value;
            if (document.changes.cma.value != "")
              productArray[temp].code = document.changes.cma.value;
            if (document.changes.cdanhmuc.value != "")
              productArray[temp].quantiny = document.changes.cdanhmuc.value;
            if (document.changes.cchude.value != "")
              productArray[temp].topic = document.changes.cchude.value;
            if (document.changes.cgia.value != "") {
                if (checkprice(document.changes.cgia.value) == 1) {
                  productArray[temp].price = document.changes.cgia.value;
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
                    `
                    screenBright.forEach(item => {
                        item.remove();
                    });
                    localStorage.setItem("inventory", JSON.stringify(Product));

                }
                else {
                    alert("Giá tiền phải là số");
                    document.changes.cgia.focus();
                }
            }
            
        });
        //
        ///xóa sản phẩm
        document.getElementById("delete").addEventListener("click", (event) => {
            event.preventDefault();
            document.getElementById("confirmModal").style.display = "block";
        });
        document.getElementById("confirmBtn").addEventListener("click", ()=>{
            alert("Xóa thành công");
            for (let j = temp; j < productArray.length - 1; j++) {
                [productArray[j], productArray[j+1]] = [productArray[j+1], productArray[j]];
                document.getElementById("product-" + j).innerHTML = `
                <p><img src="${productArray[j].imgSrc}" alt="Mô tả sản phẩm"></p>
                    <div class ="product-info">
                        <div class="product-info-detail">
                            <strong>Tên sản phẩm:</strong> ${productArray[j].name}
                        </div>
                        <div class="product-info-detail">
                            <strong>Mã sản phẩm:</strong> ${productArray[j].code}
                        </div>
                        <div class="product-info-detail">
                            <strong>Chủ đề:</strong> ${productArray[j].topic}
                        </div>
                    </div>
            `
            }
            let delete_element = productArray.length - 1;
            document.getElementById("product-" + delete_element).remove();
            document.getElementById("confirmModal").style.display = "none";
            document.getElementById("product-detail").remove();
            document.getElementById("addProduct").style.pointerEvents = "all";
            productArray.splice(delete_element, 1);
            localStorage.setItem("inventory", JSON.stringify(Product));

            const screenBright=document.querySelectorAll('.screen-bright');
            screenBright.forEach(item => {
                item.remove();
            });
        });
        document.getElementById("cancelBtn").addEventListener("click", ()=>{
            document.getElementById("confirmModal").style.display = "none";
        });
    }); 
}

//xuất sản phẩm
document.getElementById("product-button").addEventListener("click", () =>{
    document.getElementById("content").remove();
    const section = document.createElement("section");
    section.id = "content";
    section.innerHTML = `
        <div class="product-grid">
            <div id ="product">
            </div>
        </div>
    `
    document.getElementById("main").appendChild(section);
    const container = document.getElementById("product");
    const quantiny = productArray.length;
    for (let i = 0; i < quantiny; i++) {
        const productDiv = document.createElement("div");
        productDiv.className = "product-data";
        productDiv.id = "product-" + i;
        productDiv.innerHTML = `
            <p><img src="${productArray[i].imgSrc}" alt="Mô tả sản phẩm"></p>
            <div class ="product-info">
                <div class="product-info-detail">
                    <strong>Tên sản phẩm:</strong> ${productArray[i].name}
                </div>
                <div class="product-info-detail">
                    <strong>Mã sản phẩm:</strong> ${productArray[i].code}
                </div>
                <div class="product-info-detail">
                    <strong>Chủ đề:</strong> ${productArray[i].topic}
                </div>
            </div>
        `
        container.appendChild(productDiv);
        create_product_detail(i);  
    }
    const add_button = document.createElement("div");
    add_button.id = "addProduct";
    add_button.innerHTML = `<i class="fa-solid fa-plus"></i>`
    section.appendChild(add_button);
    document.getElementById("addProduct").addEventListener("click", choose_addProduct);

});

//thêm, xóa, chỉnh sửa sản phẩm
function choose_addProduct(){

    //mở thẻ thêm sản phẩm
    const ADD = document.createElement("div");
    ADD.className = "screen-bright";
    ADD.innerHTML = `
    <div id="add-product-input">
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
    </div>
    `
    document.body.appendChild(ADD);
    document.getElementById("add-infor").style.width = "300px";
    const screenBrighta = document.querySelectorAll('.screen-bright');
    //đóng thẻ thêm sản phẩm
    document.getElementById("exita").addEventListener("click", (e) =>{
        e.preventDefault();
        screenBrighta.forEach(item => {
            item.remove();
        });
    });
    // Tự động đóng modal khi click ngoài modal
    window.addEventListener("click", (event) => {
        screenBrighta.forEach(item => {
            if (event.target === item) {
                item.remove();
            }
        });
    });
    //thêm lựa chọn cho chủ đề sau khi chọn danh mục
    document.getElementById("iddanhmuc").addEventListener("change", () => {
        let addchude = ``;
        switch (iddanhmuc.value){
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
    
    //
    //lấy đường link của ảnh
    const imageInput = document.getElementById("anh");
    let img = document.createElement("img");
    imageInput.addEventListener("change",() => {
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
        }
        else if (document.addInput.ten.value == "") {
            alert("Bạn chưa nhập tên");
            document.getElementById("idten").focus();
        }
            
        else if (document.addInput.ma.value == "") {
            alert("Bạn chưa nhập mã");
            document.getElementById("idma").focus();
        }
            
        else if (document.addInput.gia.value == "") {
            alert("Bạn chưa nhập giá");
            document.getElementById("idgia").focus();
        }

        else {        
            if (checkname(document.addInput.ten.value) == 0) {
                alert("Tên bạn nhập đã tồn tại");
                document.getElementById("idten").focus();
            }
            else {
                if (checkprice(document.addInput.gia.value) == 0) {
                    alert("Giá tiền phải là số");
                    document.getElementById("idgia").focus();
                }
                else {
                    const temp_product = {
                        name: document.addInput.ten.value,
                        code: document.addInput.ma.value,
                        price: document.addInput.gia.value,
                        imgSrc: img.src,
                        topic: idchude.value,
                    };
                    productArray.push(temp_product);
                    localStorage.setItem("inventory", JSON.stringify(Product));
                    let temp = Product.length - 1;
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
                    `
                    container.appendChild(productDiv);
                    //mở chi tiết sản phẩm
                    create_product_detail(temp);
                    //
                    screenBrighta.forEach(item => {
                        item.remove();
                    });
                }
            }
        }
    });
}
/////////////////////phan account
function create_detail_account(i, userList) {
    document.getElementById("user-" + i).addEventListener("click", () => {
        const userDiv = document.createElement("div");
        userDiv.className = "screen-bright";
        userDiv.innerHTML = `
            <div id="account-detail">
                <p id="ade" style="display: inline-block; float: right; margin-top:0%">
                    <button style="border: none; border-radius: 0px 18px 0px 0px; font-size: 16px; padding: 10px;">
                        <i class="fa-regular fa-x"></i>
                    </button>
                </p>
                <h2 style="padding-top:40px">Tài khoản</h2>
                <section>
                    <form name="account-form" id="account-edit" class="form-detail">
                        <div class="form-detail-content">
                            <div>ID</div>
                            <input type="text" name="aID" placeholder="${userList[i].id}">
                        </div>

                        <div class="form-detail-content">
                            <div>Tên đăng nhập</div>
                            <input type="text" name="aUsername" placeholder="${userList[i].username}">
                        </div>

                        <div class="form-detail-content">
                            <div>Mật khẩu</div>
                            <input type="text" name="aPassword" placeholder="${userList[i].password}">
                        </div>

                        <div class="form-detail-content">
                            <div>Email</div>
                            <input type="text" name="aEmail" placeholder="${userList[i].email}">
                        </div>

                        <div class="form-detail-content">
                            Trạng thái: 
                            <select id="aLock">
                                <option value="1">Kích hoạt</option>
                                <option value="0">Tạm khóa</option>
                            </select>
                        </div>

                        <div class="form-detail-content">
                            <div style="margin:10px 0px">Ngày tạo: ${userList[i].dateSignUp}</div>
                        </div>

                        <div class="form-detail-content">
                            <input type="submit" value="Thay đổi">
                        </div>
                
                    </form>
                </section>
            </div>
        `;
        document.body.appendChild(userDiv);
        ///đóng account form
        const screenBright = document.querySelectorAll('.screen-bright');
        document.getElementById("ade").addEventListener("click", () => {
            screenBright.forEach(item => {
                item.remove();
            });
        });

        window.addEventListener("click", (event) => {
            screenBright.forEach(item => {
                if (event.target === item) {
                    item.remove();
                }
            });
        });
        ////
        /////thay đổi thông tin account
        let form = document.getElementById("account-edit");
        document.getElementById("account-edit").addEventListener("submit", (e) => {
            e.preventDefault();
            edit_account(form, i);
            
        });
    });
}
function edit_account(form, i) {
    if (form.aID.value == "") {
        form.aID.value = userList[i].id;
    }
    
    if (form.aUsername.value == "") {
        form.aUsername.value = userList[i].username;
    }

    if (form.aPassword.value == "") {
        form.aPassword.value = userList[i].password;
    }

    if (form.aEmail.value == "") {
        form.aEmail.value = userList[i].email;
    }

    userList[i].ban = form.aLock.value;
    alert("Thay đổi thành công");

}

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
        </table>
    `
    document.getElementById("main").appendChild(section);
    //
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
        `
        document.querySelector(".manage_data").appendChild(tbody);
        create_detail_account(i, userList);
    }
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
    `
    contain.appendChild(totalDiv);
});