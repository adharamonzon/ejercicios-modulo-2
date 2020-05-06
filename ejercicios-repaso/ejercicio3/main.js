//solicia un número e imprime todos los números pares e impares desde el número hasta el número introducido con el mensaje es par o impar
// si el número es 5 el resultado es 1 - es impar, 2 -es par, 3 -es impar, 4 -es par, 5 - es impar.

'use strict';

let num = parseInt(prompt('introduce el número que tu quieras'));

for (let i = 0; i < num; i++) {
  if (i % 2 === 0) {
    console.log(`${i} es par`);
  } else {
    console.log(`${i} es impar`);
  }
}
