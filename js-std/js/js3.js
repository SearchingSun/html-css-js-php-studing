'use strict';
//Задача №1
console.log("Задача №1")
let days = 2 ;
if (days === 0 || days > 4){
    function dayZ() {
        console.log(days + " Дней");
    }
    dayZ();
}else if (days === 1 ){
    function dayZ() {
        console.log(days + " День");
    }
    dayZ();
}else if (days === 2 || days === 3 || days === 4){
    function dayZ() {
        console.log(days + " Дня");
    }
    dayZ();
}

//Задача №2
console.log(" ")
console.log("Задача №2")

//как обработать каждый элемент массива переданной функцией (fn), возвращая новый массив. 

//Задача №3
console.log(" ")
console.log("Задача №3")

//Задача №4
console.log(" ")
console.log("Задача №4")
function summ(n,m) {
    for (var i = 0; n <= m; ) {
    	i += n;
    	n += 1;
    }
    console.log("Сумма от m до n = " + i)
}
summ(4, 6);

let z = 4 , x = 6, d = 0, k;
k=z;
for (let i = 0 ; i <= Math.abs(z-x) ; i++ ){
	d = d+k;
	k = k+1;
}
console.log("Сумма от m до n = "+ d)
//Задача №5
console.log(" ")
console.log("Задача №5")
/*
Задача 3 
Написать функцию клонирующую (создающую копию) массива. 

Задача 5 
Написать функцию, которая возвращает новую функцию, 
которая увеличивает/уменьшает переданное число на указанный при карировании шаг (задача на замыкание). 
Карирование в javascript - прием, позволяющий преобразовать функцию так, на выходе образуется функция, обладающая возможностью частичного применения...
*/