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

function createCartItem() {

}

function removeCartItem() {

}

function loadCartItem() {
    var giohang = document.getElementById("giohangList");
    if (giohang == null) return;
    // load gio hang
    DATABASE.cart.forEach(item => {
        // get element from localstorage
        if (typeof DATABASE.product.list[item.productID] === "undefined") return;


        var li = document.createElement("li");
    });


}

function loadCartPage() {
    // trang giỏ hàng
    if (document.getElementById("giohang") == null) return;
    loadCartItem();
}


