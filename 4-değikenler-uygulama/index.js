// typeof
/* 

    Öğrenci bilgileri 

    1- Enes SVG
        Doğum Tarihi: 2006
        Notları: 100, 90, 70

    2- Taha SVG
        Doğum Tarihi: 2007
        Notları: 75, 50, 40

    Geçer Not: 45

    Program Şartları:
        1- Yaş Hesaplanacak
        2- Ders Ortalamaları Hesaplanacak
        3- Dersten Kalıp Kalmadıkları Hesaplanacak
*/
let suankiYil = new Date().getFullYear();
let gecmenotu = 45;

let ogr1 = "Enes SVG";
let ogr1DogumYili = 2006;
let ogr1Yas = suankiYil - ogr1DogumYili;

let ogr1DersNot1 = 100;
let ogr1DersNot2 = 90;
let ogr1DersNot3 = 70;

let ogr1DersOrtalamasi = (ogr1DersNot1 + ogr1DersNot2 + ogr1DersNot3) / 3;

let kaldimi1 = ogr1DersOrtalamasi < gecmenotu;

console.log("Adı:", ogr1 , "Yaşı:",ogr1Yas , "Ders Not Ortalaması:", parseInt(ogr1DersOrtalamasi), "Dersten Geçme durumu:", kaldimi1 );
//                                                                   parseInt ondalıklı yapmamasını sağlıyor. yani 86.666666 yerine 86 yazıyor.



let ogr2 = "Taha SVG";
let ogr2DogumYili = 2007;
let ogr2Yas = suankiYil - ogr2DogumYili;

let ogr2DersNot1 = 75;
let ogr2DersNot2 = 50;
let ogr2DersNot3 = 40;

let ogr2DersOrtalamasi = (ogr2DersNot1 + ogr2DersNot2 + ogr2DersNot3) / 3;

let kaldimi2 = ogr2DersOrtalamasi < gecmenotu;

console.log("Adı:", ogr2 , "Yaşı:",ogr2Yas , "Ders Not Ortalaması:", parseInt(ogr2DersOrtalamasi), "Dersten Geçme durumu:", kaldimi2);
//                                                                   parseInt ondalıklı yapmamasını sağlıyor. yani 86.666666 yerine 86 yazıyor.