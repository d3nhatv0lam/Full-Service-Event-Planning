const database_template =
{
    login: false,

    product: {
        imgPath: "./assets/images/product",
        rankDescription: {
            silver: [
                "Tư vấn và lên kế hoạch sự kiện cơ bản",
                "Thiết kế, bố trí không gian tiêu chuẩn",
                "In ấn thiệp mời hoặc standee đơn giản"
            ],
            gold: [
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
                image: "sanpham1.jpg",
                description: "Tổ chức hội thảo chuyên nghiệp với không gian sang trọng, thiết bị hiện đại và đội ngũ điều phối giàu kinh nghiệm. Phù hợp với các buổi tọa đàm, đào tạo nội bộ hay hội nghị quy mô lớn.",
                rank: {
                    silver: {
                        price: 15000000
                    },
                    gold: {
                        price: 25000000
                    }
                }
            },
            sp002:{
                name: "Lễ Kỷ Niệm",
                image: "sanpham2.jpg",
                description: "Đánh dấu các cột mốc đáng nhớ bằng những buổi lễ kỷ niệm trang trọng, ấm cúng và đầy ý nghĩa - từ sinh nhật công ty, lễ thành lập, đến các ngày lễ tri ân đối tác và nhân viên.",
                rank: {
                    silver: {
                        price: 10000000
                    },
                    gold: {
                        price: 20000000
                    }
                }
            },
            sp003:{
                name: "Sự Kiện Khai Trương",
                image: "sanpham2.jpg",
                description: "Gây ấn tượng ngay từ ngày đầu với lễ khai trương được thiết kế chỉn chu, mang bản sắc thương hiệu. Kết hợp truyền thông, nghệ thuật biểu diễn và trải nghiệm khách mời đẳng cấp.",
                rank: {
                    silver: {
                        price: 20000000
                    },
                    gold: {
                        price: 30000000
                    }
                }
            },
            sp003:{
                name: "Sự Kiện Âm Nhạc",
                image: "sanpham2.jpg",
                description: "Biến mỗi sân khấu thành một bữa tiệc âm thanh và ánh sáng - từ concert ngoài trời đến mini show trong nhà. Âm thanh, ánh sáng, nghệ sĩ và cảm xúc - tất cả hòa quyện trong một đêm đáng nhớ.",
                rank: {
                    silver: {
                        price: 25000000
                    },
                    gold: {
                        price: 35000000
                    }
                }
            },
        }
    },
    cart: [
        {
            productID: "sp001",
            rank: "silver"
        },
        {
            productID: "sp001",
            rank: "gold"
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

const DATABASE_NAME = 'database';
const DATABASE = getOrInitDatabase();

document.addEventListener("DOMContentLoaded", function () {
    loadCartPage();
});


function removeCartItem(productId,rank) {
    DATABASE.cart = DATABASE.cart.filter(item => {
        return !(item.productID === productId && item.rank === rank);
    });
    console.log(DATABASE.cart);
    saveDatabase(DATABASE_NAME,DATABASE);
    // xóa xong thì load lại
    loadCartItem();
}

function castCartItemFromTemplate(item) {
    var sp = DATABASE.product.list[item.productID];
    var price = parseInt(sp.rank[item.rank].price);
    return `<form class="booking-item">
                        <div class="item-infomation-container">
                            <img src="${sp.image}" alt="placeholder">
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
                                <input type="time" name="time" class="booking-time"></select>
                            </div>

                            <div class="item-date">
                                <label>Ngày tổ chức:</label>
                                <input name="date" type="date">
                            </div>

                            <div class="item-request">
                                <label>Yêu cầu đặc biệt/Ghi chú:</label>
                                <textarea placeholder="Ghi chú của bạn"></textarea>
                            </div>

                            <p class="item-price">${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price)}</p>
                            <div class="item-button-container">
                                <button class="btn-remove">Hủy</button>
                                <button class="btn-buy">Đặt</button>
                            </div>
                        </div>
                    </form>`;
}

function loadCartItem() {
    var $giohangList = $("#giohangList");
    if ($giohangList.length === 0) return;
    // load gio hang
    DATABASE.cart.forEach(item => {
        // get element from localstorage
        if (typeof DATABASE.product.list[item.productID] === "undefined") return;

        var $li = $("<li>")
            .addClass("giohang-item")
            .data("productid",item.productID)
            .data("rank",item.rank);

        $li.html(castCartItemFromTemplate(item));

        $li.find(".btn-remove").click(function(e){
            removeCartItem($li.data("productid"),$li.data("rank"));
        });
        $li.find(".btn-buy").click(function(e){
            alert("Đã đặt thành công.\nChúng tôi sẽ sớm liên hệ với bạn để lấy thêm thông tin!");
        });

        $giohangList.append($li);
    });


}

function loadCartPage() {
    // trang giỏ hàng
    if (document.getElementById("giohang") == null) return;
    loadCartItem();
}


