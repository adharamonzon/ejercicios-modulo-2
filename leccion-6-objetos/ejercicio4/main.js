'use strict';

const btn = document.querySelector('.button');

function handleBtn(ev) {
  console.log(ev);
}

handleBtn();

btn.addEventListener('click', handleBtn);
