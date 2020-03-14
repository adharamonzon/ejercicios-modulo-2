'use strict';
//OPCIÓN 1:
/* const button = document.querySelector('.js-btn');
const newInput = document.querySelector('.js-name');

function changeMessage() {
  newInput.value = `Hola ${newInput.value}`;
  console.dir(newInput.value);
}
button.addEventListener('click', changeMessage); */

//OPCCIÓN 2:
/* const button = document.querySelector('.js-btn');
function changeMessage() {
  const newInput = document.querySelector('.js-name');
  newInput.value = `Hola ${newInput.value}`;
}
button.addEventListener('click', changeMessage); */

//OPCIÓN 3¿? ARROW??
const button = document.querySelector('.js-btn');

const changeMessage = () => {
  const newInput = document.querySelector('.js-name');
  newInput.value = `Hola ${newInput.value}`;
};

button.addEventListener('click', changeMessage);
