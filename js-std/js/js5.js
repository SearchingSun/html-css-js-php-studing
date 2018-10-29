"use strict"

/*

//Задача №1
console.log(" ")
console.log("Задача №1")
let cells;
cells = prompt("Задайте размер игрового поля N x N - введите N", );
cells = Number.parseInt(cells);
console.log(cells)
let mainDiv = document.getElementById("mainDiv");
(function (){
	for (var i = 0; i < cells; i++) {
		let div = document.createElement("div");
		mainDiv.appendChild(div);
		for (var k = 0; k < cells; k++) {
			let div2 = document.createElement("div");
			div2.classList.add('div2')
			div.appendChild(div2);
		}
	}
}())


//Задача №2
console.log(" ")
console.log("Задача №2")
let time = document.getElementById("time");
function timeMonitor(){
let Data = new Date();
let Hour = Data.getHours();
let Minutes = Data.getMinutes();
if (Minutes<10){
	Minutes = "0"+Minutes
}
let Seconds = Data.getSeconds();
if (Seconds<10){
	Seconds = "0"+Seconds
}
let content = ("Текущее время: "+Hour+":"+Minutes+":"+Seconds);
time.innerHTML = content;
}
setTimeout ( timeMonitor, 1 );
setInterval( timeMonitor,1000 );

*/

//Задача №3
console.log(" ")
console.log("Задача №3")
function createUserArr() {
   let arr = [];
   for (let i = 1; i <= 100; ++i){
       arr.push(
           {
               id: i,
               name: "Какое-то имя",
               email: "Email",
               phone: "+79991112233",
               position: "Должность"
           }
       )
   }
   return arr;
}
let arr = createUserArr()
let table = document.getElementById("table");
table.innerHTML = "<tr><th>№</th><th>Имя</th><th>Email</th><th>Номер телефона</th><th>Должность</th></tr>";
function tableCreate() {
	for (let i = 0; i < arr.length; i++) {
		let tableContent = arr[i];
		let tr =  document.createElement("tr")
		let td1 = document.createElement("td").setAttribute('id', tableContent.id)
		let td2 = document.createElement("td").setAttribute('name', tableContent.name)
		let td3 = document.createElement("td").setAttribute('email', tableContent.email)
		let td4 = document.createElement("td").setAttribute('phone', tableContent.phone)
		let td5 = document.createElement("td").setAttribute('position', tableContent.position)
				console.log(td1)
				console.log(td1+td2)

	}
} 

setTimeout ( tableCreate, 1 );


