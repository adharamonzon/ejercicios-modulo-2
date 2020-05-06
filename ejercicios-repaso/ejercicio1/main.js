// solicita un nombre, edad que muestre en consola "Hola, ___, tienes ___años y el año que viene tendrás ___ años"
//usar prompt(mensaje)
'use strict';

let name = prompt('introduzce tu nombre');
let age = parseInt(prompt('introduce tu edad')); //parseInt para convertirlo a número sino será un string

console.log(`Hola ${name}, tienes ${age} años y el año que viene tendrás ${age + 1} años`);
