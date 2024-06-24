//https://www.w3schools.com/jsref/jsref_obj_string.asp

let youtube = "Axect Design";
let result;

result = youtube.toLowerCase(); //büyük harfleri küçültür
result = youtube.toUpperCase(); //küçük harfleri büyütür
result = youtube.length //kaç harf olduğunu sayıyor
result = youtube.trim(); //başındaki boşluğu siler
result = youtube.slice(0,5); //istenilen yerden istenilen yere kadar alıyor
result = youtube.split(" "); //Boşluktan(istenilen yerin harfide yazılabilir. mesela .split("c")) itibaren ayır

console.log(result);