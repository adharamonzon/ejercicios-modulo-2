'use strict';
const lostNumbers = [4, 8, 15, 16, 23, 42];

function bestLostNumber() {
  let numberEven = lostNumbers;
  for (let index = 0; index < lostNumbers.length; index++) {
    if (numberEven % 2 === 0) {
      numberEven.push(lostNumbers);
    }
  }
}

console.log(bestLostNumber());
