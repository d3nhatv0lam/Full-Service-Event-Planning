const database_template =
{
    login: false,
    imgProductPath: "./assets/images/product",

    productList: [
        {
            productID: "sp001",
            name: "Sản phẩm 1",
            image: "sanpham1.jpg",
            description: "Mô tả sản phẩm 1",
            level:
                [
                    {
                        lvlID: "01",
                        name: "Gói 1",
                        price: 100000,
                        maxAttendee: 50,
                        feature: [
                            "đặc điểm gói 1",
                            "đặc điểm gói 2",
                            "Đặc điểm gói n"
                        ]
                    },
                    {
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
                    },
                    {
                        lvlID: "03",
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
                ]
        },
        {
            name: "Sản phẩm 2",
            image: "sanpham2.jpg",
            description: "Mô tả sản phẩm 2",
            level: [
                {
                    lvlID: "01",
                    name: "Gói 1",
                    price: 100000,
                    maxAttendee: 50,
                    feature: [
                        "đặc điểm gói 1",
                        "đặc điểm gói 2",
                        "Đặc điểm gói n"
                    ]
                },
                {
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
                },
            ]
        },
    ],
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

function getOrInitDatabase(database = DATABASE_NAME) 
{
    if (typeof localStorage[database] === "undefined") 
        localStorage.setItem(database,JSON.stringify(database_template));
    return JSON.parse(localStorage.getItem(database));
}

const DATABASE_NAME = 'database';
const DATABASE = getOrInitDatabase();
const DATE_MANAGER = 
{
    date: new Date(),
    defaultDayOfMonth: 31,
    defaultMonthOfYear: 12,
    getMaxDayFromMonth: function(month) 
    {
        month = parseInt(month);
        if (month === 2)
        {
            if (this.isLeapYear(this.date.getFullYear())) return 29;
            return 28;
        }
        if ([1, 3, 5, 7, 8, 10, 12].includes(month)) return 31;
        if ([4, 6, 9, 11].includes(month)) return 30;
        return -1;
    },
    getMonthListFromDay: function(day) 
    {
        day = parseInt(day);
        if (day < 0 || day > 31) return -1;
        if (day === 31) return [1, 3, 5, 7, 8, 10, 12];
        if ((day === 29 && !this.isLeapYear(this.date.getFullYear())) || day > 29) return [1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    },
    isLeapYear: function(year) 
    {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }
}

document.addEventListener("DOMContentLoaded",function() 
{
    loadCartPage();
});

function renderMonth(select,day = 1) 
{
    var currentMonth = parseInt(select.value);
    // do change month list
    select.innerHTML = "";
    var monthList = DATE_MANAGER.getMonthListFromDay(day);
    monthList.forEach(item => 
    {
        var option = document.createElement("option");
        option.textContent = item;
        option.value = item;
        select.appendChild(option);
    });

    if (monthList.includes(currentMonth)) 
        select.value = currentMonth;
     else 
        select.value = monthList[0];
}

function renderDay(select,month = 1) {
    var selectedDay = parseInt(select.value);
    select.innerHTML = "";
    var numDay = DATE_MANAGER.getMaxDayFromMonth(month);
    for (let i = 1 ; i <= numDay ; i++) {
        var option = document.createElement("option");
        option.textContent = i;
        option.value = i;
        select.appendChild(option);
    }
    // lấy lại ngày cũ nếu hợp lệ
    if (numDay >= selectedDay) 
        select.value = selectedDay;
}

function createCartItem() 
{

}

function removeCartItem()
{

}

function loadCartItem() 
{
    var giohang = document.getElementById("giohangList");
    if (giohang == null) return;
    // load gio hang
    DATABASE.cart.map((item,index) => 
    {

    }) 
}

function loadCartPage() 
{
    loadCartItem();

    var ngay = document.getElementById("ngay");
    var thang = document.getElementById("thang");
    if (ngay == null) return;
    if (thang == null) return;

    renderDay(ngay);
    renderMonth(thang);

   ngay.addEventListener("change",function() {
        renderMonth(thang,parseInt(ngay.value));
   });

   thang.addEventListener("change",function() {
        renderDay(ngay,parseInt(thang.value));
   });
}


