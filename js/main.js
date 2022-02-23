//Alisher chet elga dam olishga bormoqchi. Safar uchun ketadigan xarajatni internetdagi saytlardan qidirib chiqib, quyidagi ro'xatda berilgan ma'lumotlarni topdi. Ularning bazilari AQSH dollarida ko'rsatilgan bo'lsa, bazilari yevroda berilgan.

// borib kelish bilenti = 500$
// mehmonxona to'lovi = 250$
// Muzey ko'ngil ochar joylar uchun = 120 yevro
// 1$ = 10950 so'm
// 1 yevro = 11200 so'm

// Tuzilishi kerak bo'lgan dastur quyidagi ko'rinishda ishlaydi:

// 1. Alisher o'zida necha pul borligini so'mda prompt orqali ko'rsatadi.
// 2. Xarajatlar dollar va yevrodan so'mga o'tkaziladi
// 3. Alisherda yetarlicha pul bo'lsa. console'da "Oq yo'l, Alisher!" xabari chiqadi.
// 4. Alisherda yetarlicha pul bo'lmasa, console'da "Alisher, ozgina sabr qilish kerak bo'lar ekan." xabari chiqadi.

var Apul = prompt("Jami pulingizni kiriting"); //so'm
var dollarKursi = 10950; //so'm
var yevroKursi = 11200; //so'm
var ticket = 500; //dollar
var hotel = 250; //dollar
var museum = 120; //yevro
var ticket = ticket * dollarKursi; // so'm
var hotel = hotel * dollarKursi; // so'm
var museum = museum * yevroKursi; // so'm

var jamiXarajat = ticket + hotel + museum; //sayoxatga ketadigan jami xarajat

console.log("chipta puli " + ticket);
console.log("hotel puli " + hotel);
console.log("museum puli " + museum);
console.log("jami harajat " + jamiXarajat);

if ( Apul >= jamiXarajat){
    console.log(alert("Oq yo'l, Alisher!"))
}

else{
    console.log(alert("Alisher, ozgina sabr qilish kerak"))
}




