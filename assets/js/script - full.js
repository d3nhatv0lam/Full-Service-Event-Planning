// hàm dùng chung //
const database_template =
{
    product: {
        imgPath: "./assets/images/product/",
        rank: {
            standard: {
                name: "Gói tiêu chuẩn",
                description:[
                "Tư vấn và lên kế hoạch sự kiện cơ bản",
                "Thiết kế, bố trí không gian tiêu chuẩn",
                "In ấn thiệp mời hoặc standee đơn giản"
                ]
            },
            advance: {
                name: "Gói nâng cao",
                description:[
                "Bao gồm toàn bộ dịch vụ trong gói Bạc",
                "DJ / nghệ sĩ / MC chuyên nghiệp",
                "Thiết kế concept - chủ đề riêng theo yêu cầu",
                "Hệ thống âm thanh - ánh sáng cao cấp",
                "Quay phim - chụp ảnh sự kiện (full gói + hậu kỳ)",
                ]
            }
        },
        list:{
            sp001:{
                name: "Hội thảo",
                image: "hoi-thao.jpg",
                description: "Tổ chức hội thảo chuyên nghiệp với không gian sang trọng, thiết bị hiện đại và đội ngũ điều phối giàu kinh nghiệm. Phù hợp với các buổi tọa đàm, đào tạo nội bộ hay hội nghị quy mô lớn.",
                rank: {
                    standard: {
                        price: 15000000
                    },
                    advance: {
                        price: 25000000
                    }
                }
            },
            sp002:{
                name: "Lễ Kỷ Niệm",
                image: "le-ky-niem.jpg",
                description: "Đánh dấu các cột mốc đáng nhớ bằng những buổi lễ kỷ niệm trang trọng, ấm cúng và đầy ý nghĩa - từ sinh nhật công ty, lễ thành lập, đến các ngày lễ tri ân đối tác và nhân viên.",
                rank: {
                    standard: {
                        price: 10000000
                    },
                    advance: {
                        price: 20000000
                    }
                }
            },
            sp003:{
                name: "Sự Kiện Khai Trương",
                image: "su-kien-khai-truong.jpg",
                description: "Gây ấn tượng ngay từ ngày đầu với lễ khai trương được thiết kế chỉn chu, mang bản sắc thương hiệu. Kết hợp truyền thông, nghệ thuật biểu diễn và trải nghiệm khách mời đẳng cấp.",
                rank: {
                    standard: {
                        price: 20000000
                    },
                    advance: {
                        price: 30000000
                    }
                }
            },
            sp004:{
                name: "Sự Kiện Âm Nhạc",
                image: "su-kien-am-nhac.jpg",
                description: "Biến mỗi sân khấu thành một bữa tiệc âm thanh và ánh sáng - từ concert ngoài trời đến mini show trong nhà. Âm thanh, ánh sáng, nghệ sĩ và cảm xúc - tất cả hòa quyện trong một đêm đáng nhớ.",
                rank: {
                    standard: {
                        price: 25000000
                    },
                    advance: {
                        price: 35000000
                    }
                }
            },
        }
    },
    cart: []
}

const DATABASE_NAME = 'database';
var DATABASE = getOrInitDatabase();

function getOrInitDatabase(database = DATABASE_NAME) {
    // không có trong localStorage thì thêm vào
    if (typeof localStorage[database] === "undefined")
        localStorage.setItem(database, JSON.stringify(database_template));
    return JSON.parse(localStorage.getItem(database));
}

function saveDatabase(databaseName = DATABASE_NAME,database) {
    localStorage.setItem(databaseName, JSON.stringify(database));
}

function resetDatabase(databaseName = DATABASE_NAME) {
    localStorage.setItem(databaseName, JSON.stringify(database_template));
    DATABASE = getOrInitDatabase(databaseName);
}

// toggle menu
var toggle = document.getElementById("toggle");
var mainnav = document.getElementById("mainnav");
toggle.onclick = function(){
    mainnav.classList.toggle('active');
    document.querySelector('.inner-logo').classList.toggle('hide-when-menu-open');
    document.querySelector('.inner-shopping-cart').classList.toggle('hide-when-menu-open');
    document.querySelector('.inner-wrap').classList.toggle('inner-wrap-change');
    document.querySelector('.inner-header-btn').classList.toggle('inner-header-btn-change');
    document.querySelector('.fa-bars').classList.toggle('exchange-after-click');
    document.querySelector('.fa-x').classList.toggle('exchange-after-click');
    document.querySelector('.header').classList.toggle('active');
}

// hàm kiểm tra của riêng Liên hệ
function isValidLienHeName(inputName) {
    return /^[A-Za-zÀ-Ỹà-ỹ\s]+$/.test(inputName.trim());
}

// Đảm bảo sđt có 10 chữ số 
function isValidPhone(phone) {
    return /^(0|\+84)\d{9}$/.test(phone.trim());
}

//Email có format là abc@xyz.tmn
function isValidGmail(email) {
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email.trim());
}

// Đảm bảo không bỏ trống Nội dung
function isValidMessage(msg) {
    return msg.trim().length > 10;
}

//Chỉ cho phép chữ cái tiếng Anh thường và chữ số, tối thiểu 4 ký tự
function isValidName(inputName) {
    return /^[a-z0-9]{4,}$/.test(inputName.trim());
}

//Ít nhất có 1 chữ cái in hoa,1 chữ thường 1 chữ số, không khoảng trắng và tối thiểu 8 ký tự
function isValidPass(pass) {
    return /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])\S{8,}$/.test(pass.trim());
}


// lời gọi tổng quát
document.addEventListener("DOMContentLoaded", function() {
    loadCartPage();
    loadSanPhamPage();
    loadLienHePage();
    loadDangNhapPage();
    loadDangKyPage();
});

// giohang
function loadCartPage() {
    // trang giỏ hàng
    if (document.getElementById("giohang") == null) return;
    loadCartItem();
}

function removeCartItem(productId,rank) {
    DATABASE.cart = DATABASE.cart.filter(item => {
        return !(item.productID === productId && item.rank === rank);
    });
    saveDatabase(DATABASE_NAME,DATABASE);
    // xóa xong thì load lại
    loadCartPage();
}

function castCartItemFromTemplate(item) {
    var smImgPath = DATABASE.product.imgPath;
    var sp = DATABASE.product.list[item.productID];
    var rankName = DATABASE.product.rank[item.rank].name;
    var price = parseInt(sp.rank[item.rank].price);
    var today = new Date().toISOString().split('T')[0];

    return `<form class="booking-item">
                        <div class="item-infomation-container">
                            <img src="${smImgPath+sp.image}" alt="placeholder">
                            <div>
                                <h3>Gói tổ chức ${sp.name}</h3>
                                <p><a href="sanpham.html">${rankName}</a></p>
                            </div>
                        </div>

                        <div class="item-input-container">
                            <div class="item-address">
                                <label>Địa chỉ tổ chức sự kiện:</label>
                                <input type="text" name="address" class="booking-address"
                                    placeholder="Nhập địa chỉ tổ chức sự kiện">
                            </div>

                            <div class="item-time">
                                <label>Thời gian:</label>
                                <input type="time" name="time">
                            </div>

                            <div class="item-date">
                                <label>Ngày tổ chức:</label>
                                <input name="date" type="date" min="${today}">
                            </div>

                            <div class="item-request">
                                <label>Yêu cầu đặc biệt/Ghi chú:</label>
                                <textarea placeholder="Ghi chú của bạn"></textarea>
                            </div>

                            <p class="item-price">Giá: ${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price)}</p>
                            <div class="item-button-container">
                                <button type="button" class="btn-remove">Hủy</button>
                                <button type="submit" class="btn-buy">Đặt</button>
                            </div>
                        </div>
                    </form>`;
}

function loadCartItem() {
    var $giohangList = $("#giohangList");
    if ($giohangList.length === 0) return;

    $giohangList.html("");
    // load gio hang
    DATABASE.cart.forEach(item => {
        // get element from localstorage
        if (typeof DATABASE.product.list[item.productID] === "undefined") return;

        var $section = $("<section>")
            .addClass("giohang-item")
            .data("productid",item.productID)
            .data("rank",item.rank);

        $section.html(castCartItemFromTemplate(item));

        $section.find(".btn-remove").click(function(){
            removeCartItem($section.data("productid"),$section.data("rank"));
            alert("Đã xóa gói bạn chọn ra khỏi giỏ hàng!");
        });
        $section.find(".booking-item").on("submit",function(e){
            var address = $section.find(".item-address input").val();
            var time = $section.find(".item-time input").val();
            var date = $section.find(".item-date input").val();

            if (!address) {
                alert("Địa chỉ sự kiện không được để trống!");
                e.preventDefault();
                return;
            }
            if (!time) {
                alert("Thời gian bắt đầu sự kiện không được để trống!");
                e.preventDefault();
                return;
            }
            if (!date) {
                alert("Ngày tổ chức sự kiện không được để trống!");
                e.preventDefault();
                return;
            }
            
            alert("Đã đặt gói thành công.\nChúng tôi sẽ sớm liên hệ với bạn để lấy thêm thông tin!");
            removeCartItem($section.data("productid"),$section.data("rank"));
        });
        $giohangList.append($section);
    });
}

// sanpham
function loadSanPhamPage() 
{ 
    if (document.getElementById('sanpham') == null) return;

    const goiButtons = document.querySelectorAll('.sanpham-goi');
    goiButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productID = button.dataset.productid;
            const rank = button.dataset.rank;
            addToCart(productID, rank);
        });
    });
}

function addToCart(productID, rank) {
    // kiểm tra xem đã có trong giỏ hàng chưa
    var found = DATABASE.cart.find(item => item.productID === productID && item.rank === rank);
    if (found) {
        alert("Gói này đã có trong giỏ hàng!");
        return;
    }

    var productName = DATABASE.product.list[productID].name;
    var rankName = DATABASE.product.rank[rank].name;
    
    if (!confirm(`Bạn có muốn thêm "${productName} - ${rankName}" vào giỏ hàng không?`)) {
        return;
    }
    // thêm vào giỏ hàng
    DATABASE.cart.push({ "productID": productID, "rank": rank });
    saveDatabase(DATABASE_NAME, DATABASE);
    alert("Đã thêm gói vào giỏ hàng!");
    loadCartPage();
}

function zoomImage(img) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = lightbox.querySelector("img");
    lightboxImg.src = img.src;
    lightbox.style.display = "flex";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}
// Liên hệ
function loadLienHePage() {
    // Chỉ thực hiện khi form phản hồi có tồn tại
    if (document.getElementById('lh-fb-form') == null) return;

    document.getElementById("lh-fb-form").addEventListener("submit", function(e) {
        const inputName = document.getElementById("inputName").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const message = document.getElementById("message").value;

        let errors = [];

        if (!isValidLienHeName(inputName)) {
            errors.push("Họ và tên không được chứa số và ký tự đặc biệt");
        }

        if (!isValidGmail(email)) {
            errors.push("Email không hợp lệ");
        }

        if (!isValidPhone(phone)) {
            errors.push("Số điện thoại không hợp lệ");
        }

        if (!isValidMessage(message)) {
            errors.push("Nội dung phản hồi quá ngắn!");
        }

        if (errors.length > 0) {
            alert("Vui lòng kiểm tra lại:\n- " + errors.join("\n- "));
            e.preventDefault();
        } else {
            alert("Gửi phản hồi thành công!");
        }
    });
}
// Đăng Nhập
function loadDangNhapPage() {
    // Chỉ thực hiện khi form phản hồi có tồn tại
    if (document.getElementById('dn-form') == null) return;

    document.getElementById("dn-form").addEventListener("submit", function (e) {
        const inputName = document.getElementById("inputName").value;
        const pass = document.getElementById("password").value;

        let errors = [];

        if (inputName.length < 4) {
            errors.push("Tên tài khoản phải có ít nhất 4 ký tự!");

        } else if (!isValidName(inputName)) {
            errors.push("Tên tài khoản không hợp lệ");
        }

        if (pass.length < 8) {
            errors.push("Mật khẩu phải có ít nhất 8 ký tự!")
        }
        else if (!isValidPass(pass)) {
            errors.push("Mật khẩu không hợp lệ");
        }

        if (errors.length > 0) {
            alert("Vui lòng kiểm tra lại: \n- " + errors.join("\n- "));
            e.preventDefault();
        }

        else {
            alert("Đăng nhập thành công!");
        }
    });
}
// Đăng Ký
function loadDangKyPage() {
    if (document.getElementById('dk-form') == null) return;

    document.getElementById("dk-form").addEventListener("submit", function (e) {
        const inputName = document.getElementById("inputName").value;
        const pass = document.getElementById("password").value;
        const phone = document.getElementById("phone").value;
        const email = document.getElementById("email").value;

        let errors = [];

        if (inputName.length < 4) {
            errors.push("Tên tài khoản phải có ít nhất 4 ký tự!");

        } else if (!isValidName(inputName)) {
            errors.push("Tên tài khoản không được chứa ký tự đặt biệt hoặc khoảng trắng!");
        }

        if (!isValidGmail(email)) {
            errors.push("Gmail không hợp lệ!");
        }

        if (!isValidPhone(phone)) {
            errors.push("Số điện thoại không hợp lệ!");
        }

        if (pass.length < 8) {
            errors.push("Mật khẩu phải có ít nhất 8 ký tự!")
        }
        else if (!isValidPass(pass)) {
            errors.push("Mật khẩu không có khoảng trắng, phải chứa ít 1 ký tự in hoa, 1 ký tự đặt biệt và 1 chữ số!");
        }

        if (errors.length > 0) {
            alert("Vui lòng kiểm tra lại: \n- " + errors.join("\n- "));
            e.preventDefault();
        }

        else {
            alert("Đăng ký thành công!");
        }
    });
}