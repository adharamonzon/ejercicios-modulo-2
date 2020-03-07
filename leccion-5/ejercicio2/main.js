'use strict';

const button = document.querySelector('.js-btn');
const newInput = document.querySelector('.js-name');

function changeMessage() {
  newInput.value = `Hola ${newInput.type}`;
  console.dir(`Hola ${newInput.type}`);
}
button.addEventListener('click', changeMessage);
