
//! Basit toplama fonksiyonu
/*
function sayiToplama(sayi1, sayi2){
    let toplam = sayi1 + sayi2;
    console.log(toplam);
}
sayiToplama(10, 20);
sayiToplama(20, 30);
*/

//! Gelişmiş toplama fonksiyonu

function sayiToplami(...sayilar){
    let toplam = 0;
    for(let sayi of sayilar){
        toplam += sayi
    }
    console.log(toplam);
}
// sayiToplami(10,20,30,40,50)

//! yaş hesaplama

function yasHesapla(dogumYili){
    let yil = new Date().getFullYear();
    console.log(yil - dogumYili);
}

yasHesapla(2006);

function yasHesapla(dogumYili){
    return new Date().getFullYear() - dogumYili
}
const hesapla = yasHesapla(2006)
console.log(hesapla);
