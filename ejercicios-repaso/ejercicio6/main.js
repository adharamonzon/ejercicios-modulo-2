//al introducir una serie determinada de númres mientras su suma no supere 50
// si la suma supera 50 ese número se multiplicará por sus anteriores hasta la unidad

'use strict';

let sum = parseInt(prompt('introduce un número incial'));
let cont = 0;

while (sum < 50) {
  sum += parseInt(prompt('introduce un número para añadir a la suma'));
  cont++;
}

console.log(`la suma total es de: ${sum}`);
console.log(`el total de números introducidos es: ${cont}`);
