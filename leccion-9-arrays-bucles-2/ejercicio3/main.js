'use strict';
const lostNumbers = [4, 8, 15, 16, 23, 42];
const evenNumbers = [];
const mutipleThree = [];

function getEvenNumbers() {
  for (const evenNumber of lostNumbers) {
    if (evenNumber % 2 === 0) {
      evenNumbers.push(evenNumber);
    }
  }
}
function multipleOfThree() {
  for (const number of lostNumbers) {
    if (number % 3 === 0) {
      mutipleThree.push(number);
    }
  }
}

getEvenNumbers();
multipleOfThree();

let resultArray = evenNumbers.concat(mutipleThree);

console.log(evenNumbers);
console.log(mutipleThree);
console.log(resultArray);
