'use strict';

const btn1 = document.querySelector('.js-btn1');
const btn2 = document.querySelector('.js-btn2');

function handleBtn(ev) {
  const selectedBtn = ev.currentTarget;
  selectedBtn.classList.toggle('newbtn');
}

btn1.addEventListener('click', handleBtn);
btn2.addEventListener('click', handleBtn);
