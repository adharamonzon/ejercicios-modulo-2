'use strict';

function changeBackground(ev) {
  const key = ev.key;
  if (key === 'r') {
    document.body.style.backgroundColor = 'red';
  } else if (key === 'm') {
    document.body.style.backgroundColor = 'purple';
  } else {
    document.body.style.backgroundColor = 'orange';
  }
}
document.addEventListener('keydown', changeBackground);
