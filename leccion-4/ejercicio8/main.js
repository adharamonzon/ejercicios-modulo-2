'use strict';

// modificamos una variable de ámbito global
let secretLetter = 'y';
function mySecretLetter() {
  secretLetter = 'x';
  return secretLetter;
}
console.log(secretLetter); // devuelve y, la constante se cambia dentro de la f(x) y no fuera?
console.log(mySecretLetter()); // devuelve "x"
