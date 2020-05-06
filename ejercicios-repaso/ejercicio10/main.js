//dado un arry colores determinar si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no

'use strict';

const colors = ['azul', 'amarillo', 'rojo', 'verde', 'rosa'];

let color = prompt('escribe aquí el color que quieras').toLocaleLowerCase();

if (colors.indexOf(color) !== -1) {
  console.log('Tu color existe');
} else {
  console.log('tu color no existe');
}
