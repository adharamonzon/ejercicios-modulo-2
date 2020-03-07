'use strict';

// modificamos una variable de ámbito global
let secretLetter = 'y';
function mySecretLetter() {
  secretLetter = 'x';
  return secretLetter;
}
console.log(secretLetter); // devuelve "x" AHORA DEVUELVE Y PORQUE AL ESTAR ENCIMA DE LA F(X) ESTA VARIABLE NO HA SIDO DEFINIDA?
console.log(mySecretLetter()); // devuelve "x"
