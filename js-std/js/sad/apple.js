class apple{
	constructor(name){
		let garden_age = 0
		this._age = this.startAge(1,31) + garden_age;
		this._color = this.color(this._age);
		this._size = this.size(this._color);
		this._GB = this.GB(this._age);
		this._floorBranch = this.floorBranch(this._age);
	};
	set sAppleAge(_age){
		setAppleAge = this._age
	}
	get gAppleAge(){
		return this._age
	}



	startAge(min,max){
	return Math.round(Math.random() * (max - min) + min);
	}
	color(age){
		if (age <= 13 ){
			return 'Зелёное'
		}else if ( 13 < age && age < 22 ){
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
			if (Math.round(age*Math.random()) < 25){
			return "Свежак"
		}else return "Стухло"
		}else return "Стухло"
	}
	floorBranch(age){
		if (this._floorBranch === "На ветке" || this._floorBranch === undefined){
			if (age >= 28 && age != 31){
				if((Math.round(age*Math.random()) < 18)){
					return "На ветке"
				}else return "На земле"

			}else if (age === 31){
				return "На земле"
			}
		}else return "На земле"
	}



}



/*
Яблоки должны иметь определяться: 
-возрастом 
-цветом 
-размером 
-флаг испорченности (0 - свежее, 1 - испорченное) 
-флаг упавшего с дерева (0 - на дереве, 1 - упало) 

Яблоки имею методы: 
-упасть с дерева 
-испортиться 
*/