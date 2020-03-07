'use strict';

const page = document.querySelector('.page');
function handleButtonClick(event) {
  page.style = 'background-color:blue;';
}

page.addEventListener('keydown', handleButtonClick);
