'use strict';

const choose = document.querySelector('.teacher');
const chooseTeacehr = choose.querySelectorAll('.favorite');

function handleClick(ev) {
  /*   debugger; */
  let favouriteTeacher = ev.currentTarget;
  favouriteTeacher.classList.add('teacher--selected');
}
handleClick();
choose.addEventListener('click', handleClick);
