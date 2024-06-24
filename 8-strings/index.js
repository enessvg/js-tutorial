const ad = "Enes";
const soyad = "Svg";
const yas = 18;
const sehir = "İstanbul";
const meslek = "Developer";

const bio = "Benim adım " + ad + " Soyadım "+ soyad + ". "+ "Yaşım " + yas+ " " + sehir+ "'da oturuyorum." + " Mesleğim " + meslek;

//! backtick
const newBio = `Benim adım ${ad} Soyadım ${soyad}. Yaşım ${yas} ${sehir}'da oturuyorum. Mesleğim ${meslek}`;

console.log(newBio);