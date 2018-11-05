

//Задача 1
console.log(" ")
console.log("Задача 1")
class Circle {
    constructor (radius) {
        this._radius=radius;
    }

    perimetr(){
        return 2*Math.PI*this._radius;
    }
    ploshad(){
        return Math.PI*Math.pow(this._radius, 2);
    }


}
let cir = new Circle(5);
cir.perimetr();
cir.ploshad();
console.log("Длинна окружности = "+cir.perimetr()+ " Площадь круга = "+cir.ploshad() )


class Rectangle {
	constructor (visota, shirina){
		this._visota = visota;
		this._shirina = shirina;
	}

	ploshad(){
		return this._visota*this._shirina
	}
	perimetr(){
		return (this._visota + this._shirina)*2
	}
}
let rec = new Rectangle(3, 4);
console.log("Площаль равна = "+rec.ploshad()+", периметр равен = " +rec.perimetr())


class Triangle {
	constructor(a,b,c){
		this._a = a;
		this._b = b;
		this._c = c;
	}

	ploshad(){
		let p = (this._a + this._b + this._c)/2
		return Math.sqrt(p*(p-this._a)*(p-this._b)*(p-this._c))
	}
	perimetr(){
		return this._a + this._b + this._c
	}
}

let tr = new Triangle(5,4,3)
console.log("Площаль равна = "+tr.ploshad()+", периметр равен = " +tr.perimetr())
