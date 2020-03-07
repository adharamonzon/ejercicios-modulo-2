'use strict';

function getEl(element) {
  let result = document.querySelector(element);
  return result;
}

getEl('.title');

console.log(getEl('.title'));
