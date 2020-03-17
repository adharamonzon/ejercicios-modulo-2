'use strict';
const items = [
  (name = 'Ada'),
  (year = 1815),
  ['Informática', 'Matemática', 'Escritora'],
  {
    mother: 'Anna Isabella',
    father: 'Lord Byron'
  }
];

for (let value of items) {
  console.log(value);
}
console.log(items.value);
