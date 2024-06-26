meyve = ["Elma", "Armut", "Çilek", "Karpuz", "Muz"]


//   kaçtan                     1er 1er
//  başlayacak                 arttırma
for(let i = 0; i < meyve.length; i++){
    // console.log(meyve[i]);
}

//! 0'dan 100'e kadar sayıları yazdırma
for(let i = 0; i <= 100; i++){
    // console.log(i);
}

//! 0'dan 100'e kadar çift sayıları yazdırma
for(let i = 0; i <= 100; i = i + 2){
    // console.log(i);
}

//kısayol index
let sayilar = [10, 20, 5, 30, 100, 200]
toplam = 0;
for(let i in sayilar){ //in diyince 0,1,2.. şeylerini veriyor
    // console.log(sayilar[i]);
}

for(let index of sayilar){ // ama of diyince normal sayıları alıyor 10,20,5 ...
    // console.log(index);
}

for(let index of sayilar){ //toplama
    // console.log(toplam += index);
}

//object ile döngü

// const user = {
//     "ad" : "Enes",
//     "soyad" : "Sevga",
//     "email" : "enessvg@gmail.com",
//     "yas" : 18,
// }
// for(let key in user){
//     console.log(user.soyad);
// }

//çoklu kullanıcı
const users = [
    {
        "id" : "1",
        "ad" : "Enes",
        "soyad" : "Sevga",
        "email" : "enessvg@gmail.com",
        "yas" : 18,
    },
    {
        "id" : "2",
        "ad" : "taha",
        "soyad" : "adsads",
        "email" : "SADFSAF@gmail.com",
        "yas" : 18,
    },
    {
        "id" : "3",
        "ad" : "efe",
        "soyad" : "asdfas",
        "email" : "SAFDSAF@gmail.com",
        "yas" : 18,
    }
]
// console.log(users);
for(let i = 0; i < users.length; i++){
    console.log(users[i].ad);
}