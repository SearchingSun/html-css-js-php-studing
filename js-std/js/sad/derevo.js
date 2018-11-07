class Derevo{
	constructor(name){
		this._derevoName = name
		this._derevoAge = this.randomizer(1,30);
		this._apples = this.apples()
	};
	randomizer(min,max){
	return Math.round(Math.random() * (max - min) + min);
	}
	apples(){
		let apples = [];
		let z = this.randomizer(12,30)
		for (let i = 0; i < z; i++) {
			apples[i] = new Apple("Яблоко № " + (apples.length+1))
		}
		return apples;
	}
	addAples(quantity){
		for (let k = 1; k <= quantity; k++) {
			let p = this._apples.length + 1
			this._apples[this._apples.length] = new Apple("Яблоко № "+p);
		}
		console.log("На дерево добавлены яблоки в количестве " + quantity+ " штук")
		return this._apples
	}
	passDays(){
		console.log("Дерево постарело на сутки")
		if ((this._derevoAge % 30) === 0)
			console.log("+яблоко")
		return this._derevoAge += 1
	}
}