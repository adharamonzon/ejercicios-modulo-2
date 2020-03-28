'use strict';

//EJERCICIO CON IF/ELSE

/* const number = 98;

if (number === 0) {
  console.log('el número es 0');
} else if (number <= 0) {
  console.log('el número es negativo');
} else if (number + 2 >= 13 && number <= 30) {
  console.log('el número más 2 es mayor que 13 pero menor o igual que 20');
} else if (number >= 20 && number < 50) {
  console.log('el número es mayor que 20 pero menor que 50');
} else {
  console.log('el número no es 123123125');
} */

//EJERCICIO CON TERNARIOS

let number = 12;

const winnerNumber = number === 0 ? console.log('el número es 0') : number <= 0 ? console.log('el número es negativo') : number + 2 >= 13 && number <= 30 ? console.log('el núero más 2 es mayor que 13 pero menor o igual que 30') : number >= 20 && number < 50 ? console.log('el número es mayor que 20 pero menor que 50') : console.log('el numero no es 13562489');
