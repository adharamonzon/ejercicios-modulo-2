let avocados;
const avocadoPrice = 1.5;
const money = 20;
/* 
if (money >= avocadoPrice) {
  avocados = money / avocadoPrice;
} else {
  avocados = 0;
}
console.log(avocados); */

money >= avocadoPrice ? (avocados = money / avocadoPrice) : (avocados = 0);
console.log(avocados);
