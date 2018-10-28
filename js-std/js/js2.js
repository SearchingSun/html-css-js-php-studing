'use strict';
//Задача 1 
console.log ("Задача №1");
let a, b, c, x1=0 , x2=-4 , x3=0 , y1=0 , y2=0 , y3=-3 ;
a = (Math.pow((Math.abs(x1-x2)),2)+Math.pow((Math.abs(y1-y2)),2));
b = (Math.pow((Math.abs(x3-x2)),2)+Math.pow((Math.abs(y3-y2)),2));
c = (Math.pow((Math.abs(x1-x3)),2)+Math.pow((Math.abs(y1-y3)),2));
if  (a  === b  + c  ||
	 b  === a  + c  ||
	 c  === b  + a  ) {
	console.log("Данный треугольник прямоугольный")
} else console.log("Данный треугольник не прямоугольный")

//Задача 2
console.log ("   ");
console.log ("Задача №2");
let mNum = new Date().getMonth();
if (mNum === 0 || mNum === 1 || mNum === 11) {
	console.log ("За окном зима");
} else if (mNum === 2 || mNum === 3 || mNum === 4 ) {
	console.log ("За окном весна");
} else if (mNum === 5 || mNum === 6 || mNum === 7 ) {
	console.log ("За окном лето");
} else if (mNum === 8 || mNum === 9 || mNum === 10) {
	console.log ("За окном осень");
} else {
	console.log ("Кажется, произошёл сбой, или за окном апокалипсис (‡▼益▼) ");
}

//Задача 3
console.log ("   ");
console.log ("Задача №3");
let table = new Array(10);		
for(let i = 0; i < table.length; i++)
	table[i] = new Array(10);	
for(let row = 0, str = ''; row < table.length; row++) {
	for(let col = 0; col < table[row].length; col++) {
		table[row][col] = (row+1)*(col+1);
		str += table[row][col] + '  ';
	}
	console.log(str + '\n');
	str = '';
}


//Задача 4
console.log ("   ");
console.log ("Задача №4");
let k;
let babl = [8, 46, -9, 1772, 14, 76, 15, -167];
for (let i = babl.length; i > 0 ; i--) {
	for (let j = 0 ; j < i ; j++) {
		if ( babl[j] > babl [j + 1] ) {
			k = babl[j];
			babl[j] = babl[j+1];
			babl[j+1] = k;
		}
	}
}
console.log (babl);

//Задача 5 
console.log ("   ");
console.log ("Задача №5");
let funts = new Array(10);		
for(let i = 0; i < funts.length; i++)
	funts[i] = new Array(2);	
for(let row = 0, str = ''; row < funts.length; row++) {
	for(let col = 0; col < funts[row].length; col++) {
		funts[row][0] = (row+1)*(col+1);
		funts[row][1] = (row+1)*(2.2);
		str += funts[row][col] + '  ';

	}
	console.log(str + '\n');
	str = '';
}

//Задача 6
console.log ("   ");
console.log ("Задача №6");
let tarelki = 5; 
let milo = 3;
if (tarelki || milo <= 0) {
console.log ("Кажется нам чего-то недозавезли ﴾͡๏̯͡๏﴿ O’RLY?")
}
while (tarelki && milo > 0) {
	console.log ("На начало пенной вечеринки в наличии " + tarelki + " единиц(и/а) тарелок(и/а) и " + milo + " единиц мыла");
	while (tarelki && milo > 0){
	tarelki = tarelki-1;
	milo = milo-0.5;
	console.log ("Тарелка вымыта, осталось мыла " + milo);
	if (tarelki + milo === 0) {
		console.log ("Все трюмы пусты");
	}else if (milo === 0) {
		console.log ("Упс, мыло кончилось, ещё осталось " + tarelki + " Тарелок(и/а)");
	}else if (tarelki === 0) {
		console.log ("Все тарелки вымыты, осталось "+ milo +" единиц мыла ");
	}
}
}

//Задача 7
console.log ("   ");
console.log ("Задача №7");
//OMG WhY ?!!! Закомментирую-ка я это нафиг 
/*
let pz;
for (pz = 1000; pz < 9999; ){
	console.log(pz)
	pz = pz + 3;
}
*/

//Задача 8
console.log ("   ");
console.log ("Задача №8");
let zd = 95;
for (; zd >= 0 ; ) {
	console.log(zd);
	zd = zd-5;
}

//Задача 9
console.log ("   ");
console.log ("Задача №9");
let z = 2
for ( let i = 0 ; i < 20 ; i++) {
	let k = 2;
	console.log(z);
	z = z*k;
}

//Задача 10
console.log ("   ");
console.log ("Задача №10");
let a1 = 0, a2 = 0, a3 = 0, b1 = 0, b2 = 0, b3 = 1;
let check = 0;
for (;;){
		if (b3 === 10){
			b2 = b2+1;
			b3 = 0;
		}else if (b2 === 10){
			b1 = b1+1;
			b2 = 0;
		}else if (b1 === 10){
			a3 = a3+1;
			b1 = 0;
		}else if (a3 === 10){
			a2 = a2+1;
			a3 = 0;
		}else if (a2 === 10){
			a1 = a1+1;
			a2 = 0;
		}else if(a1 === 10){
			break
		}else if (a1 + a2 + a3 != b1 + b2 + b3){
		b3 = b3 +1;
		}else if(a1 + a2 + a3 === b1 + b2 + b3){
		check = check + 1;
		b3 = b3 +1;
		}
}

console.log(check)
console.log(a1,a2,a3,b1,b2,b3)
/*
Задача 10 
В городе N проезд в трамвае осуществляется по бумажным отрывным билетам. 
Каждую неделю трамвайное депо заказывает в местной типографии рулон билетов с номерами от 000001 до 999999. 
«Счастливым» считается билетик у которого сумма первых трёх цифр номера равна сумме последних трёх цифр, 
как, например, в билетах с номерами 003102 или 567576. 
Трамвайное депо решило подарить сувенир обладателю каждого счастливого билета и теперь раздумывает, как много сувениров потребуется. 
С помощью программы подсчитайте сколько счастливых билетов в одном рулоне.


*/