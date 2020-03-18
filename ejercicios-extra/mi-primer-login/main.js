'use strict';

const btn = document.querySelector('.js-btn');

const inputName = document.querySelector('#input-name');
const inputPassword = document.querySelector('#input-password');
const error = document.querySelector('.js-message');
const userInfo = { name: 'front23', password: 'bicicleta' };
let attemps = 0;

function increaseAttempts() {
  /* debugger */ if (attemps <= 3) {
    attemps += 1;
  } else {
    alert('estás bloqueado!');
  }
}

function login() {
  if (inputName.value === userInfo.name && inputPassword.value === userInfo.password) {
    alert('estás dentro');
  } else {
    increaseAttempts();
  }
}

login();
btn.addEventListener('click', login);
