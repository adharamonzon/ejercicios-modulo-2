'use strict';
const textRainbow = document.querySelector('.text');
function changeBackground() {
  if (window.scrollY >= 10) {
    textRainbow.style = 'background-color: powderblue;';
  } else {
    textRainbow.style = 'background-color: palevioletred;';
  }
}
window.addEventListener('scroll', changeBackground);
