const database_template =
{
    login: false,
    imgProductPath: "./assets/images/product",

    productList:
    {
        sp001:
        {
            name: "Sản phẩm 1",
            image: "sanpham1.jpg",
            description: "Mô tả sản phẩm 1",
            level:
            {
                "01": {
                    name: "Gói 1",
                    price: 100000,
                    maxAttendee: 50,
                    feature: [
                        "đặc điểm gói 1",
                        "đặc điểm gói 2",
                        "Đặc điểm gói n"
                    ]
                },
                "02": {
                    name: "Gói 2",
                    price: 150000,
                    maxAttendee: 100,
                    feature: [
                        "Bao gồm gói 1",
                        "đặc điểm gói 1",
                        "đặc điểm gói 2",
                        "Đặc điểm gói n"
                    ]
                },
                "03": {
                    name: "Gói 3",
                    price: 150000,
                    maxAttendee: 100,
                    feature: [
                        "Bao gồm gói 1",
                        "đặc điểm gói 1",
                        "đặc điểm gói 2",
                        "Đặc điểm gói n"
                    ]
                },
            }
        },
        sp002:
        {
            name: "Sản phẩm 2",
            image: "sanpham2.jpg",
            description: "Mô tả sản phẩm 2",
            level:
            {
                "01": {
                    name: "Gói 1",
                    price: 100000,
                    maxAttendee: 50,
                    feature: [
                        "đặc điểm gói 1",
                        "đặc điểm gói 2",
                        "Đặc điểm gói n"
                    ]
                },
                "02": {
                    lvlID: "02",
                    name: "Gói 2",
                    price: 150000,
                    maxAttendee: 100,
                    feature: [
                        "Bao gồm gói 1",
                        "đặc điểm gói 1",
                        "đặc điểm gói 2",
                        "Đặc điểm gói n"
                    ]
                }
            }
        }
    }
    ,
    cart: [
        {
            productID: "sp001",
            lvlID: "03"
        },
        {
            productID: "sp001",
            lvlID: "02"
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
        if (typeof DATABASE.productList[item.productID] === "undefined") return;


        var li = document.createElement("li");
    });


}

function loadCartPage() {
    loadCartItem();
}


