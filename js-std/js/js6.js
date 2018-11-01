"use strict"

//Задача №1
let knopka = document.getElementById('knopka');
function showHd(id){
	if (document.getElementById(id)){
		let object = document.getElementById(id)
			if (object.style.display != "block"){
				object.style.display = "block";
			}else object.style.display = "none";
	}
}


//Задача №2
document.addEventListener('submit', sendData);
function sendData(event) {
	event.preventDefault();
	let comment = document.getElementById("area").value;
    addComment(comment)
    document.getElementById("area").value = '';
    function addComment(x){
    	let div = document.getElementById("comments");
    	let p = document.createElement("p");
    	p.appendChild(document.createTextNode(comment))
    	div.appendChild(p)
    }
}


//Задача №3
function createUserArr() {
   let arr = [];
   for (let k = 1; k <= 100; ++k){
   	function okruglenieZp (min, max){
   		let z = getRandomArbitrary(min, max)
   		z = Math.round(z)
   		return z
   	}
			function getRandomArbitrary(min, max) {
				return Math.random() * (max - min) + min;
			}
       arr.push(
           {
               id: k,
               name: "Какое-то имя",
               email: "Email",
               phone: "+79991112233",
               position: "Должность",
               zp:okruglenieZp(20000, 50000)
           }
       )
   }
   return arr;
}
let arr = createUserArr()
let thead = document.getElementById("table");
table.innerHTML = "<tr><th>№</th><th>Имя</th><th>Email</th><th>Номер телефона</th><th>Должность</th><th>Зарплата</th></tr>";
let tbody = document.getElementById("table1");
function tableCreate() {
	for (let i = 0; i < arr.length; i++) {
		let tableContent = arr[i];
		let tr =  document.createElement("tr")
		let td1 = document.createElement("td")//.appendChild(document.createTextNode(tableContent.id))
		let td2 = document.createElement("td")//.appendChild(document.createTextNode(tableContent.name))
		let td3 = document.createElement("td")//.appendChild(document.createTextNode(tableContent.email))
		let td4 = document.createElement("td")//.appendChild(document.createTextNode(tableContent.phone))
		let td5 = document.createElement("td")//.appendChild(document.createTextNode(tableContent.position))
		let td6 = document.createElement("td")
		td1.appendChild(document.createTextNode(tableContent.id))
		td2.appendChild(document.createTextNode(tableContent.name))
		td3.appendChild(document.createTextNode(tableContent.email))
		td4.appendChild(document.createTextNode(tableContent.phone))
		td5.appendChild(document.createTextNode(tableContent.position))
		td6.appendChild(document.createTextNode(tableContent.zp))
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		tr.appendChild(td4);
		tr.appendChild(td5);
		tr.appendChild(td6);
		tbody.appendChild(tr);  
	}
} 
setTimeout ( tableCreate, 1 );

let grid = document.getElementById('grid');
grid.addEventListener('click', vizov);
function vizov(point){
	if(point.target.tagName != 'TH')
		return;
	console.log(point)
}


