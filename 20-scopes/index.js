//TODO: Fonksiyonlar kendi scope alanlarını oluşturabilirler
//! var ile if block içerisinde scope sıkıntı yapar.
//! let ve const ile block içi scope oluşumunu sağlayabiliriz.


// var'lı olan
/*
var kullanici = "globel scope: Enes";

function isimYazdir(){
    var kullanici = "function scope: Taha"
    console.log(kullanici);
}

if(true){
    var kullanici = "if scope: Efe"
    console.log(kullanici);
}

console.log(kullanici);

isimYazdir();
*/

//let'li olan

let kullanici = "globel scope: Enes";

function isimYazdir(){
    var kullanici = "function scope: Taha"
    console.log(kullanici);
}

if(true){
    let kullanici = "if scope: Efe"
    console.log(kullanici);
}

console.log(kullanici);

isimYazdir();