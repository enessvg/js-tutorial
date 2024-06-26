// let customers1 = ["enes", ["asus", "monster", "dell", [10,20,30] ]]

// console.log(`Ürün: ${customers1[1][0]} fiyatı: ₺${customers1[1][3][0]}`);

let customers1 = {
//   key : value
    "ad": "enes",
    "soyad": "sevga",
    "sehir" : "istanbul",
    "yas" : 18,
    "products" : {
        "phone" : "Iphone13",
        "price" : 45000
    }
};

let customers2 = {
    //   key : value
        "ad": "taha",
        "soyad": "asg",
        "sehir" : "istanbul",
        "yas" : 17,
        "products" : [
        "laptop", "telephone", "printer"
    ]
};

let customers3 = {
    //   key : value
        "ad": "efe",
        "soyad": "asdad",
        "sehir" : "istanbul",
        "yas" : 17,
        "products" : [
        "laptop", "telephone", "printer"
    ]
};


let musteriler = [
    customers1,
    customers2,
    customers3
];

let urunler = [
    {
        "id" : 1,
        "title" : "iphone",
        "price" : 10,
    },
    {
        "id" : 2,
        "title" : "samsung",
        "price" : 20,
    },
    {
        "id" : 3,
        "title" : "vestel",
        "price" : 30,
    },
]

//console.log(urunler[0].title);
console.log(urunler);
