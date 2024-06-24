//Ehliyet uygulaması (Pekiştirme?)

let yas = 17;
let mezuniyet = "üniversite";

if(yas >= 18 && (mezuniyet == "lise" || mezuniyet == "üniversite")){
    console.log("Ehliyet alabilirsiniz.");
}else if(yas === 17){
    console.log("Son senen dayan!");
}else{
    console.log("Ehliyet alamazsınız.");
}