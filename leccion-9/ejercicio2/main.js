'use strict';
let numbers = [];
function getReversed100Numbers() {
  for (let index = 1; index <= 100; index++) {
    numbers.push(index);
    numbers.reverse(index);
  }
  return numbers;
}

console.log(getReversed100Numbers());
