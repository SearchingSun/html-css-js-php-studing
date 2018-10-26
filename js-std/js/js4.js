'use strict';
//Задача №1
console.log("Задача №1")
let city1 = {
	name: "Hell",
	population: 10000000000,
	mayor: "Satana ┌∩┐(◣_◢)┌∩┐",
	//Метод
	grehopadenie: function(p){
		if (p <= city2.population) {
		this.population += p;
		city2.population -= p;
		}
	} 
};

let city2 = {};
	city2.name = "Paradise";
	city2.population = 200;
	city2.mayor = "God (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧";

//Забрать часть населения города 2 в город 1. (Введите то, сколько жителей надо перевезти)
city1.grehopadenie(123)

function showMayor(x){
	if(x == city1){
		return city1.mayor
	}else if (x == city2){
		return city2.mayor
	}else if (x != city1, x != city2)
	return "Запрос неверен, уточните, что вам нужно."
}
console.log(city1)
console.log(city2)

//Введите city1, если хотите узнать, кто мэр первого города, и city2, если нужен мэр второго города.
console.log("Мэр выбранного города:>    " + showMayor(city1))

let VladimirPutin = {
	president: function changeCountryMayor(city, newMayor){
	if(city == city1){
		return city1.mayor = newMayor
	}else if (city == city2){
		return city2.mayor = newMayor
	}else if (city != city1, x != city2)
	return "Запрос неверен, уточните, что вам нужно."
	}
}
//Введите city1, и нового мера, если хотите поменять мэра первого
//города, и city2, с новым мером если нужно поменять мэра второго города.
VladimirPutin.president(city1, "Medvedka")
console.log("Мэром города "+ city1.name +" является " + city1.mayor)
console.log("Мэром города "+ city2.name +" является " + city2.mayor)

//Задача №2
console.log(" ")
console.log("Задача №2")
function searchPodstrok(glStroka, vhogdenia){
	let pos = 0;
	while (true) {
		let foundPos = glStroka.indexOf(vhogdenia, pos);
		if (foundPos == -1) break;
		pos = foundPos + 1; // продолжить поиск со следующей
		console.log(pos)
	}
}
let mainStroka = "ole gole ole gogole gle ole"
let podStroka = "ole"
console.log(searchPodstrok(mainStroka, podStroka))

//Задача №3
console.log(" ")
console.log("Задача №3")
function registr(reg, stroka){
	if (reg === verhniy){
		return stroka.toUpperCase()
	}else if (reg === nizniy){
		return stroka.toLowerCase()
	}else if (reg !=1 && reg !=2){
		return "Уточните, правильно ли вы ввели значения регистра - verhniy, для верхнего и - nizniy, для нижнего"
	}
}
	let verhniy, nizniy;
	//verhniy-верхний регистр.   nizniy - ниэний регистр.
console.log(registr(verhniy, "I go drunk, like valking dead"))

//Задача №4
console.log(" ")
console.log("Задача №4")
let date = '30-11-2017'
let arr = date.split('-')
arr.reverse()
date = arr.join('.')
console.log(date)

//Задача №5
console.log(" ")
console.log("Задача №5")
let goroda = "Псков Алма-Ата Москва Бишкек Мухосранск"
let massiv = goroda.split(' ');
massiv.sort();
massiv = massiv.join(', ')
console.log(massiv)
