'use strict';

const button = document.querySelector('.js-btn');
const newInput = document.querySelector('.js-name');

function changeMessage(ev) {
  newInput.value = `Hola ${newInput.name}`;
  console.dir(`Hola ${newInput.name}`);
}
button.addEventListener('click', changeMessage);
