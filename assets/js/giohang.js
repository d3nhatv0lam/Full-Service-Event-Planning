var database_template =
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
    ]

    ,
    giohang: [
        {
            productID: "sp001",
            lvlID: "03"
        },
        {
            productID: "sp001",
                lvlID: "02"
        },
    ]
}



