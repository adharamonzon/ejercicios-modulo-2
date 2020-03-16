'use strict';

const btn = document.querySelector('.js-btn');

function handleBtn() {
  btn.classList.toggle('newbtn');
}

btn.addEventListener('click', handleBtn);
