let tarih = new Date();
let result;

result = tarih.getDate(); //Ayın günü 
result = tarih.getDay(); //Haftanın günü yani salıysa 2 çarşamba-3 vb.
result = tarih.getFullYear(); //yıl

result = tarih.getHours(); //saat
result = tarih.getMinutes(); //dakika
result = tarih.getSeconds(); //saniye
result = tarih.getTime(); //milisaniye



//! Doğum tarihi
let dogumTarihi = new Date(2006, 6, 20);
result = tarih.getFullYear() - dogumTarihi.getFullYear();

// console.log(typeof result);
console.log(result);