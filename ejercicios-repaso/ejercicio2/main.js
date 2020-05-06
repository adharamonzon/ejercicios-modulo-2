//calcular el área de 3 figuras gemétricas: triángulo, rectángulo y círculo.
//de que figura se quiere calcular el área? solicitar los datos
//triángulo= b*h/2 rectángulo = b*h círculo = pi*r2

'use strict';

const figure = prompt('introduce the figure: trinagle, rectangle or circle');

let base;
let height;
let radius;

if (figure === 'triangle') {
  base = prompt('introduce la base');
  height = prompt('introduce la altura');
  console.log(`el área del triángulo es ${(base * height) / 2}`);
} else if (figure === 'rectangle') {
  base = prompt('introduce la base');
  height = prompt('introduce la altura');
  console.log(`el área del rectángulor es ${base * height}`);
} else if (figure === 'circle') {
  radius = prompt('introduce el radio del círculo');
  console.log(`el área del círculo es ${Math.PI * Math.pow(radius, 2)}`);
} else {
  console.log('no se puede calcular el área de esa figura geométrica');
}
