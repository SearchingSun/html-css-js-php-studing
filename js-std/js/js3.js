'use strict';
//Задача №1
console.log("Задача №1")
let days = 24 ;
if (days === 0 || 5<= days && days % 10 != 1 && days % 10 != 2 && days % 10 != 3 && days % 10 != 4){
    function dayZ() {
        console.log(days + " Дней");
    }
    dayZ();
}else if (days % 10 === 1 && days != 11){
    function dayZ() {
        console.log(days + " День");
    }
    dayZ();
}else if ( 2 <= days <= 4 || days % 10 === 2 || days % 10 === 3 || ays % 10 === 4){
    function dayZ() {
        console.log(days + " Дня");
    }
    dayZ();
}

//Задача №2
console.log(" ")
console.log("Задача №2")
let arr = [1, 3, 4, 5, 7, 9];
function square(x){
    return x*x
}
function obrabotkaArr(func, array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = func(array[i]);
    }
    return array;
}
console.log(obrabotkaArr(square, arr));

//Задача №3
// Задача 3 
// Написать функцию клонирующую (создающую копию) массива. 
console.log(" ")
console.log("Задача №3")
let arro = [2, 4, 8];
function retX(x){
    return x = x
}
function clon (y,x) { 
    var newArray = new Array(y.length);
    for(let i=0; i < y.length; i++ ){
        newArray[i] = x(y[i]);
   }
    return newArray;
};
console.log(clon(arro, retX))
let newArray = clon(arro, retX)
console.log("А теперь проверка того, что это 2 независимых массива")
newArray[0] = 100;
arro[0] = 0;
console.log(arro);
console.log(newArray);


//Задача №4
console.log(" ")
console.log("Задача №4")
let n = 1, m = 10;
//Рекурсия
function summ(n, m) {
if (n==m) {
return m;
}
return n+summ(n+1, m);
}
console.log("сумма от "+n+ " до " +m+ " равна " +summ(n, m));

//Цикл
let d = 0, k;
k=n;
for (let i = 0 ; i <= Math.abs(n-m) ; i++ ){
	d = d+k;
	k = k+1;
}
console.log("Сумма от " +n+ " до " + m + " равна "+ d)


//Задача №5
console.log(" ")
console.log("Задача №5")
function plus(a,b){
    return a+b;
}
let plusDva = plus.bind(null, 2)
let p = 7;
console.log(plusDva(p))

// Доп функции. Факториал.
console.log(" ")
console.log("Доп")
function factorial(l) {
    if(l==1) {
    return 1;
    }
return l*factorial(l-1);
}
console.log(factorial(5))