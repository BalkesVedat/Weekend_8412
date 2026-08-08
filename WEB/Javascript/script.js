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
    const kdv = 0.15; // ilk değer ataması yapılarak tanımlanır.

    // kdv = 0.3; sabitlere yeniden değer ataması yapılamaz.

    // const kdv = 0.35; const ile tanımlanan bir değişken aynı isimle tekrar tanımlanamaz.

    if (kdv>0) {
        const mesaj = "Değer doğru girildi";
    }

    console.log("Kdv oranı :" + kdv);
   // console.log(mesaj); const ile tanımlanan değişken sadece tanımlandığı aralıkta geçerlidir. IF ten çıkınca mesaj değişkeni hafızadan atılır.
}


function SwitchCase()
{
    var secim = document.getElementById("oprt").value;

    switch (secim)
    {
        case "+":
            console.log("Toplama seçildi");
            break;
        case "-":
            console.log("Çıkarma seçildi");
            break;
        case "*":
            console.log("Çarpma seçildi");
            break;
        case "/":
            console.log("Bölme seçildi");
            break;
        default:
            console.log("Hatalı Seçim.");
            break;
    }



}


function ForDongusu()
{
    var limit = prompt("Sayaç değerini giriniz:", "50");
    let toplam = 0;

    for (let i = 0; i <= limit ;i++)
    {
        toplam += i;
    }

    alert("0 ile " + limit + " arasındaki sayıların toplamı : " + toplam);
}

function WhileDongusu()
{
    var toplam = 0;
    var cevap = true;

    while (cevap) {       
        var gelenDeger = parseFloat(prompt("Toplanacak değeri girin:", "0"));

        if (gelenDeger.toString() == "NaN") {
            gelenDeger = 0;
        } 

        toplam += parseFloat(gelenDeger);
        var cevap = confirm("Devam etmek istiyor musunuz?");
    }

    alert("Toplam:"+toplam);
}

function DoWhileDongusu() {
    var toplam = 0;

    do {
        var gelenDeger = parseFloat(prompt("Toplanacak değeri girin:", "0"));

        if (gelenDeger.toString() == "NaN") {
            gelenDeger = 0;
        }

        toplam += parseFloat(gelenDeger);
        var cevap = confirm("Devam etmek istiyor musunuz?");
    } while (cevap) 

    alert("Toplam:" + toplam);
}