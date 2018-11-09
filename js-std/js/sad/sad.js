class Sad{
	constructor(name){
		this._sadName = name
		this._sadAge = 0;
		this._derevia = this.derevia()
	};
	randomizer(min,max){
	return Math.round(Math.random() * (max - min) + min);
	}
	derevia(){
		let derevia = [];
		// Здесь можно задать количество генерируемых деревьев
		let z = this.randomizer(12,30)
		for (let i = 0; i < z; i++) {
			derevia[i] = new Derevo("Дерево № " + (derevia.length+1))
		}
		return derevia;
	}
	addDerevia(quantity){
		for (let i = 1; i <= quantity; i++) {
			let p = this._derevia.length + 1
			this._derevia[this._derevia.length] = new Derevo("Дерево № "+p);
			this._derevia[this._derevia.length-1].newDerevo()
		}
		console.log("В сад посажены яблони в количестве " + quantity+ " штук")
		return this._derevia
	}
	passDay(quantity){
		for (var l = 0; l < quantity; l++) {
			for (let i = 0; i < this._derevia.length; i++) {
				this._derevia[i].passDays();
				this._derevia[i].chistka();
			}
		}
		console.log("В саду прошли " +quantity+ " сутки(ок)")
		return this._sadAge += quantity
	}
	dereviaVSadu(){
		let iabloni = this._derevia.length;
		console.log("В саду растут "+iabloni+" яблонь");
	}
	spravkaPoSadu(G){
		let kachesto = G
		let apples = 0;
		for (let i = 0; i < this._derevia.length; i++) {
			let psiho = this._derevia[i].kolvoApples(G)
			apples += psiho	
	}
	console.log("В саду яблок заданного качества " + G +" присутствует "+ apples+" ШТ")
	}
}
