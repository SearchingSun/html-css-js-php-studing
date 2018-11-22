class skaf{
	constructor(limit){
		this._limit = limit;
		this._knigi = [];
	};
	putB(book, quant){
		if (this._knigi.length === 0){
			this._knigi[0] = book;
			this._knigi[0].bookChislo(quant)
		}else{
			for (let k = 0; k < this._knigi.length; k++) {
				if (this._knigi[k]._bookName === book._bookName){
					this._knigi[k].bookChislo(quant);
					console.log("quant");
					return
				}else if (this._knigi[k]._bookName != book._bookName && this._knigi[k] === this._knigi[this._knigi.length-1]) {
		 			this._knigi[this._knigi.length] = book;
		 			this._knigi[this._knigi.length-1].bookChislo(quant);
		 			console.log(quant);
		 			return
		}
	}
}
}
}



// Сделать библиотеку, которая ведет учет книг. 
// Должно быть как минимум две функции-конструктора: 
// Book и Library. Library имеет два метода: put(book, quantity) 
// и get( book, quantity). Каждой книге в библиотеке соответствует счетчик, 
// показывающий количество хранящихся книг, при добавлении книги - счетчик увеличивается, 
// при извлечении - уменьшается на число quantity. 
// Библиотека хранит ограниченное число книг.