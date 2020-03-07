'use strict';
/* 
const textRainbow = document.querySelector('.text');
function changeBackground() {
  if (window.scrollY <= 20) {
    textRainbow.classListadd = '.color1';
  } else {
    textRainbow.classListadd = '.color2';
  }
}

textRainbow.addEventListener('scroll', changeBackground); */

const textRainbow = document.querySelector('.text');
function changeBackground() {
  if (window.scrollY >= 10) {
    textRainbow.style = 'background-color: powderblue;';
  } else {
    textRainbow.style = 'background-color: palevioletred;';
  }
}
window.addEventListener('scroll', changeBackground);
