const username = "enessvg";
const yas = 18;
// const yas = Number("18");
let result;

result = 25;
result = Number("25");
result = parseInt("25.7"); //Ondalıklı sayıyı almaz düz 25 yazar
result = parseFloat("25.7"); //Ondalıklı sayıyı alır 25.7 yazar
result = parseInt("a25"); //NaN yani Not a Number dönüyor ama harfi sona koyarsak normal 25 yazıyor
result = isNaN("a25"); //Numara değilse true numaraysa false dönüyor.



let myNumber = 10.54125124;

result = myNumber.toPrecision(5); //kaç sayıyı göstereceğini ayarlıyor
result = myNumber.toFixed(5); //noktadan sonra istenilen sayı kadar sayı gelmesini sağlıyor

result = Math.round(1.6);
result = Math.round(1.4);
result = Math.ceil(1.2);
result = Math.floor(1.2);
result = Math.pow(5,3); // 5in 3ü kuvvetini alıyor karesini alma olayı yani 5x5x5
result = Math.pow(2,2); // 2in 2ü kuvvetini alıyor karesini alma olayı yani 2x2
result = Math.sqrt(100); //Karekökünü alma
result = Math.abs(-25); //Mutlak değer her zaman artı çıkacak
result = Math.max(10,2,4,57,8,6); //En büyük değeri bulur
result = Math.min(10,2,4,57,8,6); //En küçük değeri bulur


console.log(result);