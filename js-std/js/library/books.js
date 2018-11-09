class Book {
	constructor(name){
		this._bookName = name;
		this._bookChislo = 0;
	}
	bookName(){
		return this._bookName
	}
	bookChislo(quant){
		this._bookChislo += quant 
	}
}
