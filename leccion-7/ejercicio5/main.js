'use strict';

const numbers = [13, 8, 29, 56, 3];

numbers[5] = 5;

function average(numbers) {
  let media = 0;
  for (let i = 0; i < numbers.length; i++) {
    media += numbers[i];
  }
  return media / numbers.length;
}
console.log(average(numbers));

/* 
EJERCICIO A Y B
for (let i = 0; i < numbers.length; i++) { 
  media += numbers[i];
}
media = media / numbers.length;
console.log('eres una puta mierda ' + media); */
