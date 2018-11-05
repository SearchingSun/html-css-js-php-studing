class skaf{
	constructor(limit){
		this._limit = limit;
		this._bookName = name;
		this._Knig = 0;
		this._libName = "";
	};
	set sLimitBook(_limit){
		sLimitBook = limit
	};
	set sQuantBook(_Knig){
		sQuantBook = _Knig
	};
	set sNameBook(_bookName){
		sNameBook = _bookName
	};

	get gLimitBook(){
		return this._limit
	};
	get gQuantBook(){
		return this._Knig
	};
	get gBookName(){
		return this._bookName
	};

	checkEnoughSpace(quan) {
        return this._limit  >= quan + this._Knig;
    };
    checkBalance (book, quan) {
        if ((this._Knig - quan) >= 0){
            return true;
        }else {
            return false;
        }
    };
    putB (book, quan) {
        if (this.checkEnoughSpace(quan)) {
            this._Knig += quan;
            this._libName += "  " + book.bookName();
            console.log('Книга ' +  book.bookName() + ' помещена в библиотеку, в количестве: ' + quan + ' шт.');
        }else {
            alert('Лимит превышен');
        }

    };    
	getB (book, quan) {
        if (this.checkBalance(book, quan)){
            this._Knig -= quan;
            console.log('Книгу ' + book.bookName() + ' забрали из библиотеки, в количестве: ' + quan + ' шт.');
        }
    }


}




// Сделать библиотеку, которая ведет учет книг. 
// Должно быть как минимум две функции-конструктора: Book и Library. 
// Library имеет два метода: put(book, quantity) и get( book, quantity).
//  Каждой книге в библиотеке соответствует счетчик, показывающий количество
//   хранящихся книг, при добавлении книги - счетчик увеличивается, при извлечении 
//   - уменьшается на число quantity. 
// Библиотека хранит ограниченное число книг. 
