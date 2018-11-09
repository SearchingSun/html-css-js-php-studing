class Apple{
	constructor(name){

		this._appleName = name
		this._age = this.age();
		this._color = this.color(this._age);
		this._size = this.size(this._color);
		this._GB = this.GB(this._age);
		this._floorBranch = this.floorBranch(this._age);
		this._daysOnFloor = 0;
	};
	set sAppleAge(_age){
		setAppleAge = this._age
	}
	get gAppleAge(){
		return this._age
	}
	age(){
		if (this._age === undefined){
			return this.randomizer(1,31);
		}else return this._age            //????? а надо ли это ????
	}
	randomizer(min,max){
	return Math.round(Math.random() * (max - min) + min);
	}
	color(age){
		if (this._age <= 13 ){
			return 'Зелёное'
		}else if ( 13 < this._age && this._age < 22 ){
			return 'Красно-зелёное'
		}else return 'Красное'
	}
	size(color){
		if (color === 'Зелёное'){
			return "Маленькое"
		}else if (color === 'Красно-зелёное'){
			return "Среднее"
		}else return "Большое"
	}
	GB(age){
		if (this._GB === "Свежак" || this._GB === undefined){
			if (Math.round(this._age*Math.random()) < 27){
			return "Свежак"
		}else return "Стухло"
		}else return "Стухло"
	}
	floorBranch(age){
		if (this._floorBranch === "На ветке" || this._floorBranch === undefined){
			if (this._age >= 28 && this._age != 31){
				if((Math.round(this._age*Math.random()) < 22)){
					return "На ветке"
				}else return "На земле"
			}else if (this._age < 28){
				return 'На ветке'
			}else if (this._age === 31){
				return "На земле"
		}else return "На земле"
	}
}
	daysOnFloor(){
		if(this._floorBranch === "На земле"){
			return this._daysOnFloor +=0.5;
			//Задать, через сколько дней испорченные яблоки на земле исчезнут
		}else if (this._daysOnFloor === 5){
			return true
		}
	}
	newApple(derevoname) {
		console.log("Ликуйте, смерды!!! У нас новое яблочко на "+ derevoname)
		this._age = 0;

	}
	passAppleDay(){
		this._age += 1
		this._color = this.color(this._age);
		this._size = this.size(this._color);
		this._GB = this.GB(this._age);
		this._floorBranch = this.floorBranch(this._age);

}
}


