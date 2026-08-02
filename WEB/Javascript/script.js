function HariciMesajVer() {
    alert("Bu mesaj harici js dosyasından geldi.");
}

function BaslikAlert() {
    var metin = document.getElementById("baslik").innerHTML;
    alert(metin);
}

function BaslikDegistir() {

    var baslik = document.getElementById("baslik");

    if (baslik.innerHTML == "Javascript Nedir?") {
        baslik.innerHTML = "Vedat Gümüşkuyu";
    }
    else {
        baslik.innerHTML = "Javascript Nedir?";
    }

}


function BaslikGizleGoster() {
    var baslik = document.getElementById("baslik");

    if (baslik.style.display == "block") 
        baslik.style.display = "none";
    else 
        baslik.style.display = "block";

}

function Hesapla()
{
    let sayi1 = parseFloat(document.getElementById("s1").value);
    let sayi2 = parseFloat(document.getElementById("s2").value);
    let operator = document.getElementById("oprt").value;
    let sonuc = 0.0;

    if (operator=="+") {
        sonuc = sayi1 + sayi2;
    }
    else if (operator == "-") {
        sonuc = sayi1 - sayi2;
    }
    else if (operator == "*") {
        sonuc = sayi1 * sayi2;
    }
    else {
            if (sayi2 == 0) {
                sonuc = 0;
            }
            else {
                sonuc = parseFloat((sayi1 / sayi2)).toFixed(2);
            }     
    }

    document.getElementById("sonuc").value = sonuc;
}


function DegiskenlerLet() {

    let isim = "Ali";
    let fiyat = 35.75;

    if (isim=="Ali") {
        let kdv = 100;// bu değişken sadece burada geçerli. if ten çıkınca yok olacak.
    }

   // let fiyat = 100; // aynı değişken üstte daha önce tanımlandığı için tekrar tanımlanamaz.
   //print(); // yazdırma penceresini açar..
   // console.log("kdv:"+kdv); //Browser ekranında developer tool kısmında console ekranında bilgiyi gösterir. kdv bu scope ta geçerli olmadığı için erişilemez.
    console.log("isim:" + isim);
}

function DegiskenlerVar() {

    var isim = "Ahmet";
    var fiyat = 500;
    var fiyat = 150; // 2. kere aynı isimde tanımlama yapılabilir.

    if (isim=="Ahmet") {
        var kdv = 100;
    }

    console.log("fiyat:"+fiyat);
    console.log("kdv:"+kdv); // global tanımlama olduğu için tüm scope lardan erişilebilir.
}

function DegiskenlerConst() {



}