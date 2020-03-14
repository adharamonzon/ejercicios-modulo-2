'use strict';
const button = document.querySelector('js-btn');

function showAlert() {
  debugger;
  const alarm = document.querySelector('.container');
  alarm.classList.add('alarm');
  alarm.classList.remove('notalarm');
}
//what=

button.addEventListener('click', showAlert);
