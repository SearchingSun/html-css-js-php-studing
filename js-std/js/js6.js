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
table.innerHTML = "<tr><th data-type='number'>№</th><th data-type='string'>Имя</th><th data-type='string'>Email</th><th data-type='string'>Номер телефона</th><th data-type='string'>Должность</th><th data-type='number'>Зарплата</th></tr>";
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
	else sortirovkaGrid(point.target.cellIndex, point.target.getAttribute('data-type'));
};

function sortirovkaGrid(colNum, type){
	let tbody = grid.getElementsByTagName('tbody')[0];
	let rowsArray = [].slice.call(tbody.rows);
	let compare;

      switch (type) {
        case 'number':
          compare = function(rowA, rowB) {
            return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
          };
          break;
        case 'string':
          compare = function(rowA, rowB) {
            return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML;
          };
          break;
      }
      rowsArray.sort(compare);
      grid.removeChild(tbody);
      for (var i = 0; i < rowsArray.length; i++) {
      	tbody.appendChild(rowsArray[i]);
      }
      grid.appendChild(tbody);
}

/*
//Задача 4
let cells;
cells = prompt("Задайте размер игрового поля N x N - введите N", );
cells = Number.parseInt(cells);
let mainDiv = document.getElementById("mainDiv");
let z = 1;
(function (){
	let prizes = okrugleniePrizes(cells-1, (cells*cells/2));
	for (var i = 0; i < cells; i++) {
		let div = document.createElement("div");
		mainDiv.appendChild(div);
		for (var k = 0; k < cells; k++) {
			let div2 = document.createElement("div");
			div2.classList.add('div2')
			div2.id = z
			z += 1
			div.appendChild(div2);
		}
	}
}())

let prizes = okrugleniePrizes(1, (cells*cells/2));
	function okrugleniePrizes (min, max){
	let o = getRandomArbitrary(min, max)
   		o = Math.round(o)
   		return o
	function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
}


for (var i = 0; i < prizes; i++) {
	let prize = okrugleniePrizes(1, cells*cells)
	
	if (prize === )
}


let game = document.getElementById('mainDiv');
game.addEventListener('click', obrabotka);
function obrabotka(box){
	let index = box.target.id
	index = +index
	console.log(index)
	
}
*/