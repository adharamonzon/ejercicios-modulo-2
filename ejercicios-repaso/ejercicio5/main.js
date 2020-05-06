// pedir un número entero mayor que 0 y calcule su factorial
//factorial es el resultado de multiplicar ese número por sus anteriores hasta la unidad !%¡5 = 5*4*3*2*1 = 120

'use strict';

let num = parseInt(prompt('introduce un número sin decimales mayor que 0'));
let result = 1;

for (let i = 0; num > 1; i--) {
  result *= i;
}

console.log(`el factorial de ${num} = ${result}`);
