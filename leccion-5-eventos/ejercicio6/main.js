'use strict';

const textInput = document.querySelector('.js-container-text');

function writeText() {
  const text = document.querySelector('.js-text');
  text.innerHTML = textInput.value;
}

textInput.addEventListener('keyup', writeText);
console.log(writeText());
