const database_template =
{
    login: false,

    product: {
        imgPath: "./assets/images/product/",
        rankDescription: {
            standard: [
                "Tư vấn và lên kế hoạch sự kiện cơ bản",
                "Thiết kế, bố trí không gian tiêu chuẩn",
                "In ấn thiệp mời hoặc standee đơn giản"
            ],
            advance: [
                "Bao gồm toàn bộ dịch vụ trong gói Bạc",
                "DJ / nghệ sĩ / MC chuyên nghiệp",
                "Thiết kế concept - chủ đề riêng theo yêu cầu",
                "Hệ thống âm thanh - ánh sáng cao cấp",
                "Quay phim - chụp ảnh sự kiện (full gói + hậu kỳ)",
            ]

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
            sp003:{
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
    cart: [
        {
            productID: "sp001",
            rank: "standard"
        },
        {
            productID: "sp001",
            rank: "advance"
        },
    ],
    userList: [
        // {
        //     userName: "",
        //     password: "",
        //     email: "",
        //     phone: ""
        // }
    ]
}

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
    loadCartPage();
}

const DATABASE_NAME = 'database';
var DATABASE = getOrInitDatabase();

document.addEventListener("DOMContentLoaded", function () {
    loadCartPage();
});


function removeCartItem(productId,rank) {
    DATABASE.cart = DATABASE.cart.filter(item => {
        return !(item.productID === productId && item.rank === rank);
    });
    saveDatabase(DATABASE_NAME,DATABASE);
    alert("đã xóa gói bạn chọn ra khỏi giỏ hàng!");
    // xóa xong thì load lại
    loadCartPage();
}

function castCartItemFromTemplate(item) {
    var smImgPath = DATABASE.product.imgPath;
    var sp = DATABASE.product.list[item.productID];
    var price = parseInt(sp.rank[item.rank].price);
    var today = new Date().toISOString().split('T')[0];

    return `<form class="booking-item">
                        <div class="item-infomation-container">
                            <img src="${smImgPath+sp.image}" alt="placeholder">
                            <div>
                                <h3>Gói tổ chức ${sp.name}</h3>
                                <p>Gói <a href="sanpham.html">${item.rank}</a></p>
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

        $section.find(".btn-remove").click(function(e){
            removeCartItem($section.data("productid"),$section.data("rank"));
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
                alert("Ngày bắt đầu sự kiện không được để trống!");
                e.preventDefault();
                return;
            }

            alert("Đã đặt gói thành công.\nChúng tôi sẽ sớm liên hệ với bạn để lấy thêm thông tin!");
        });

        $giohangList.append($section);
    });


}

function loadCartPage() {
    // trang giỏ hàng
    if (document.getElementById("giohang") == null) return;
    loadCartItem();
}


