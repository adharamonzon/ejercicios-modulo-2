'use strict';

// modificamos una variable de ámbito global
let secretLetter = 'y';
function mySecretLetter() {
  secretLetter = 'x';
  return secretLetter;
}
console.log(secretLetter); // devuelve y xq la f(x) aún no ha sido
//ejecutada, y machaca el valor de la variable fuera de la f(x).
console.log(mySecretLetter()); // devuelve "x"
