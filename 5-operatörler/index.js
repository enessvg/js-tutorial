let number1 = 10;
let number2 = 20;
let number3 = 30;
let result;


//! 1- Aritmetik Operatörleri
//?  +, -, *, % = bölümündne kalanı gösteriyor, /, ++, --

result = number1 + number3;
result = number1 - number3;
result = number1 * number3;
result = number1 / number3;
result = number3 % number1;
// result = number1++;  number1'i 1 arttırıyor.
// result = ++number1; direkt 1 arttırıyor.


// console.log(result);


//! 2- Atama Operatörleri
//? =, +=, -=,*=, /=, %=
result = number1;
result += number2 /* number2 + result */;
result -= number2 /* number2 - result */;
result *= number2 /* number2 * result */;
result /= number2 /* number2 / result */;
result %= number2 /* number2 % result */;


// console.log(result);


//! 3- Karşılaştırma Operatörleri
//? ==, !=, ===, >, <, >= , <=, 

result = number1 == number2;
result = number1 != number2;
result = 10 === "10"; //Tip kontrolü. Değer, Tip. Hem değer hemde tip aynı olacak. Tip derken birtanesi number birtanesi string.
result = number1 > number2;
result = number1 < number2;
result = number1 >= number2;
result = number1 <= number2;

// console.log(result);


//! 4- Mantıksal Operatörler
//? &&: ve, ||: veya, !: tersi,

// && ve: iki şartıda sağlaması lazım

console.log(number1 != number2 && number1 > number2);

// ||: true için bir şartı sağlaması yeterli

console.log(number1 > number3 || number1 === number1);

/* !: tersi */
//           normalde f geliyor burası burasıda t geliyor.
//?          true ise false yapıyor false ise true yapıyor.
console.log(!(number1 > number3) && number2 >= number1);