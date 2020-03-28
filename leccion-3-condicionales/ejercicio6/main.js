let avocados;
const avocadoPrice = 1.5;
const money = 0.5;

//EJERCICIO CON IF/ELSE
/* 
if (money >= avocadoPrice) {
  avocados = money / avocadoPrice;
} else {
  avocados = 0;
}
console.log(avocados); */

//EJERCICIO CON TERNARIOS
const myCart = money >= avocadoPrice ? (avocados = money / avocadoPrice) : (avocados = 0);
console.log(avocados);
