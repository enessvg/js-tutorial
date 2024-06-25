let products = ["iphone13", "samsung", "huawei"];
let result;
result = products;
result = products.length;

//! array to string
// result = products.toString(); //stringe çevirir
// result = products.join("//"); //virgüllerin yerine konulabilecek şeyi belirler

//! Diziden eleman silme
// result = products.shift(); //ilk elemanı siler geri döndürür
// result = products.pop(); //son elemanı siler geri döndürür

//! Diziye eleman ekleme
// result = products.push("xiaomi"); // dizi sonuna eleman ekler
// result = products.unshift("xiaomi"); // dizi başına eleman ekler

//! Dizi birleştirme
let urunler1 = ["apple", "iphone"];
let urunler2 = ["samsung", "s23"];
let urunler3 = ["xiaomi", "note 8"];

// result = urunler1.concat(urunler2, urunler3);

result = urunler1.splice(0,1)

console.log(result);
// console.log(products);