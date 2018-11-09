class Derevo{
	constructor(name){
		this._derevoName = name
		this._derevoAge = this.randomizer(1,30);
		this._apples = this.apples(12,30)
	};
	randomizer(min,max){
	return Math.round(Math.random() * (max - min) + min);
	}
	apples(fst, scd){
		let apples = [];
		let z = this.randomizer(fst,scd)
		for (let i = 0; i < z; i++) {
			apples[i] = new Apple("Яблоко № " + (apples.length+1))
		}
		return apples;
	}
	addAples(quantity){
		for (let k = 1; k <= quantity; k++) {
			let p = this._apples.length + 1;
			this._apples[this._apples.length] = new Apple("Яблоко № "+p);
		}
		console.log("На дерево добавлены яблоки в количестве " + quantity+ " штук")
		return this._apples
	}
	passDays(){
		// Можно регулировать частоту появления яблок, заменяя знаение chastota !!
		console.log("Милорд, Деревья стареют")
		let chastota = 30
		if ((this._derevoAge % chastota) === 0){
			let q = this._apples.length+1;
			this._apples[this._apples.length] = new Apple("Яблоко № "+q);
			this._apples[this._apples.length-1].newApple(this._derevoName)
		}
		for (let i = 0; i < this._apples.length; i++) {
				this._apples[i].passAppleDay();
				this._apples[i].daysOnFloor();
			}
		return this._derevoAge += 1
	}
	newDerevo(){
		this._derevoAge = 1;
		this._apples = this.apples(0,0);
	}
	kolvoApples(G){
		let app = 0;
		for (let i = 0; i < this._apples.length; i++) {
			if(this._apples[i]._GB === G || this._apples[i]._size === G  || this._apples[i]._floorBranch === G || this._apples[i]._color === G){
			app += 1
			}
	}
	return app
	}
	chistka(){
		for (let i = 0; i < this._apples.length; i++) {
		if( this._apples[i].daysOnFloor() === true){
		this._apples.splice(this._apples.indexOf(this._apples[i]),1)
	}
	}
}
}