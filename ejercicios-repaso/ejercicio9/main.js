//solicitar una palabar, mostrar en consola en número de consonantes, vocales y longitud de la palabra

'use strict';

let word = prompt('escribe una palabra');
let consonantes = 0;
let vocales = 0;

for (const letter of word) {
  if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
    vocales++;
  } else {
    consonantes++;
  }
}
console.log(`Tu palabra tiene ${vocales} vocales, ${consonantes} consonantes y tiene un total de ${word.length} letras`);
