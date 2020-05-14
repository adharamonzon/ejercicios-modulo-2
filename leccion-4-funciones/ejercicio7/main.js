'use strict';

const getEl = function (element) {
  return document.querySelector(element);
};

const isEven = function (n) {
  if (n % 2 === 0) {
    return true;
  } else {
    return false;
  }
};
const textEl = parseInt(getEl('.js-text').innerHTML);
const titleEl = getEl('.title').innerHTML;

const evenOrOdd = isEven(textEl) ? 'este número es par' : 'esté número es impar';

console.log(evenOrOdd);
