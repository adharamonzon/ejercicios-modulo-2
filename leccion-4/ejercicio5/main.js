'use strict';

const getEl = function(element) {
  return document.querySelector(element);
};

const btnEl = getEl('.btn');
const titleEl = getEl('.title');
const textEl = getEl('.text2');
const textel1 = getEl('.text1');

console.log(btnEl);
console.log(titleEl);
console.log(textEl);
console.log(textel1);
