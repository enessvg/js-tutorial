let url = "https://www.bytenblade.com";
let youtube = "Axect Design";
let result;


//! 1-Karakter Sayısı bulma.
result = url.length;
result = youtube.length;
result = youtube.replace(" ", "").length; //? Burada replace kullanarak boşluğu silip boşluksuz kaç tane harf var sayıyor

// console.log(result);


//! 2-Youtube değişkeni kaç karakterden oluşuyor.
result = youtube.split(" ").length;
result = url.split(".").length;

// console.log(result);

//! 3-Kanal adı başlangıç kontrol

result = youtube.startsWith("Axect");
if(result){
    // console.log("true döndü");
}else{
    // console.log("False döndü");
}

// console.log(result);

//! 4-Kelime Kontrolü
if(youtube.indexOf("Design")> -1 ){
    // console.log("Çalıştı");
}else{
    // console.log("çalışmadı");
}

//! 5-Url ve Youtube Değişken Birleştir.
youtube = youtube.toLowerCase().replace(" ", "-");
// url = url.replace("com", "com/");

let newUrl = url.replace(url, url+youtube);
newUrl = `${url}/${youtube}`;

console.log(newUrl);