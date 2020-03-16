'use strict';

const button = document.querySelector('.btn');

button.addEventListener('click', function changeMessage() {
  button.innerHTML = 'Mi primer click, ¡ole yo y la mujer que me parió!';
});
