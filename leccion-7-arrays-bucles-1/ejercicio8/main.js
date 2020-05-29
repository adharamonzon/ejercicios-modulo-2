'use strict';
const buttons = document.querySelectorAll('.js-btn');

/* for (const button of buttons) {
  button.addEventListener('click', addColor);
} */

for (let index = 0; index < buttons.length; index++) {
  const button = buttons[index];
  console.log(button);
  button.addEventListener('click', addColor);
}

function addColor(ev) {
  console.log(ev.currentTarget.classList.toggle('alarm'));
}
