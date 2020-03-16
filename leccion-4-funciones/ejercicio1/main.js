'use strict';
const a = 2;
const b = 7;
//función normal:
/* function operation(a, b) {
  return a * b;
} 
console.log('número', operation(a, b));
 */

//arrow function
const sum = (a, b) => {
  return a * b;
};
console.log('número', sum(a, b));
