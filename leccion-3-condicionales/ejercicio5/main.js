'use strict';

const message = document.querySelector('.message');
const title = document.querySelector('.title');
const text = document.querySelector('.text');

if (message.classList.contains('warning')) {
  title.innerHTML = 'AVISO';
  text.innerHTML = 'Tenga cuidado';
  message.classList.remove('success', 'error');
} else if (message.classList.contains('error')) {
  title.innerHTML = 'ERROR';
  text.innerHTML = 'Ha surgido un error';
  message.classList.remove('success', 'warning');
} else {
  title.innerHTML = 'CORRECTO';
  Text.innerHTML = 'Los datos son correctos';
  message.classList.remove('error', 'warning');
}
console.log();
