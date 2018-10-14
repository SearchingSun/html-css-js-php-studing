//Задача 1 
console.log ("Задача №1");
let a, b, c, x1=0 , x2=-4 , x3=0 , y1=0 , y2=0 , y3=-3 ;
a = Math.sqrt(Math.pow((Math.abs(x1-x2)),2)+Math.pow((Math.abs(y1-y2)),2));
b = Math.sqrt(Math.pow((Math.abs(x3-x2)),2)+Math.pow((Math.abs(y3-y2)),2));
c = Math.sqrt(Math.pow((Math.abs(x1-x3)),2)+Math.pow((Math.abs(y1-y3)),2));
if ( Math.pow(a , 2) === Math.pow(b , 2) + Math.pow(c , 2) ||
	 Math.pow(b , 2) === Math.pow(a , 2) + Math.pow(c , 2) ||
	 Math.pow(c , 2) === Math.pow(b , 2) + Math.pow(a , 2) ) {
	console.log("Данный треугольник прямоугольный")
} else console.log("Данный треугольник не прямоугольный")

//Задача 2
console.log ("Задача №2");
let mNum = new Date().getMonth();
if (mNum === 0 || mNum === 1 || mNum === 11) {
	console.log ("За окном зима");
} else if (mNum === 2 || mNum === 3 || mNum === 4 ) {
	console.log ("За окном весна");
} else if (mNum === 5 || mNum === 6 || mNum === 7 ) {
	console.log ("За окном лето");
} else if (mNum === 8 || mNum === 9 || mNum === 10) {
	console.log ("За окном осень");
} else {
	console.log ("Кажется, произошёл сбой, или за окном апокалипсис (‡▼益▼) ");
}

//Задача 3
console.log ("Задача №3");
int[][] a = {
      {1, 2, 3}, 
      {4, 5, 6, 9}, 
      {7}, 
};

int[][] a = new int[3][4];


for (int i = 0; i < 2; i++) {
    for (int j = 0; j < 3; j++) {
        System.out.print(matrixA[i][j] + "\t");
    }
    System.out.println();
}





//Задача 4
console.log ("Задача №4");














console.log ("Задача №5");
console.log ("Задача №6");
console.log ("Задача №7");
console.log ("Задача №8");
