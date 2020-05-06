//dado un array de letras, solicitar un número de DNI, calcular la letra que le corresponde.
//el número no puede ser negativo ni tener más de 8 dígitos.
//la posición de la letra es el resultado del módulo introducido entre 23

'use strict';
const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

const dni = prompt('introduce su número de DNI, sin letra');

if (dni.length > 8 && parseInt(dni) > 0) {
  let letra = dni % 23;
  console.log(`Tu DNI completo es ${dni}${letras[letra]}`);
}
