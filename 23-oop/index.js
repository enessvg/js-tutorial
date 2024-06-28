//! Object
// let araba = { 
//     renk : "siyah", //bunlara property(Özellik) deniyor
//     hiz : 10
// }

// console.log(araba.renk);

//!Method
/*
let araba2 = {
    renk: "kırmızı",
    hiz : 0,
    hizlandir : function(){
        this.hiz += 10
    }
}
araba2.hizlandir();
console.log(araba2.hiz); */

/*
let araba3 = {
    renk: "kırmızı",
    hiz : 0,
    hizlandir : function(deger){
        this.hiz += deger
    }
}
araba3.hizlandir(30);
console.log(araba3.hiz); */

//! constructor ES5 Versiyonu

function Araba4(renk){
    this.renk = renk;
    this.hiz = 0;
}
Araba4.prototype.hizlandir = function(deger){
    this.hiz += deger;
}

const araba4 = new Araba4("red");
araba4.hizlandir(100);
// console.log(araba4.renk);
// console.log(araba4.hiz);

//! constructor ES6 Versiyonu

class Araba5 {
    constructor(renk){
        this.renk = renk
    }
}
let araba5 = new Araba5("siyah");
// console.log(araba5.renk);


class Araba6 {
    constructor(renk) {
        this.renk = renk;
        this.hiz = 0;
    }
    hizlandir(deger){
        this.hiz += deger
    }
}

let araba6 = new Araba6("siyah")
// console.log(araba6.renk);
araba6.hizlandir(100)
// console.log(araba6.hiz);



//! inheritance

class Araba7{
    constructor(renk){
        this.renk = renk;
    }
}
//                         Kalıtım alınacak class
class MotorluAraba extends Araba7{
    constructor(renk, motor){
        super(renk);
        this.motor = motor;
    }
}

let araba7 = new MotorluAraba("titanyum", "1.5 DCİ");
console.log(araba7.renk);
console.log(araba7.motor);