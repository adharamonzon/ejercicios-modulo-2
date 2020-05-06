// crea 3 arrays: 1º tiene 5 números, 2º se llamará pares y el 3º impares (ambos vacíos).
// multiplicar cada número del 1º array por un número aleatorio entre 1 y 10, si el resultado es par se guarda
//en el 2º array y si es impar en el 3º.
//consola muestra la multiplicación junto con el resultado.

'use strict';

const numbers = [13, 54, 21, 36, 8];
const even = [];
const odd = [];
let randomNumber = Math.floor(Math.random() * 10 + 1);

for (const number of numbers) {
  let result = number * randomNumber;
  console.log(`${number} x ${randomNumber} = ${result}`);

  if (result % 2 === 0) {
    even.push(result);
  } else {
    odd.push(result);
  }
}

console.log(`Estos resultados ${even} son pares`);
console.log(`Estos resultados ${odd} son impares`);
