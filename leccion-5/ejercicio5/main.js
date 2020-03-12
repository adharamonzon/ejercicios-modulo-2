'use strict';

const key = document.querySelector('document');

function changeBackground(ev) {
  key = 'background-color: red;';
}

key.addEventListener('keyup', changeBackground);
