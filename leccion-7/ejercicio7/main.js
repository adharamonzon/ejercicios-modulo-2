'use strict';

const adalabers = [
  {
    name: 'María',
    age: 29,
    profession: 'diseñadora'
  },
  {
    name: 'Lucía',
    age: 31,
    profession: 'Ingeniera química'
  },
  {
    name: 'Susana',
    age: 34,
    profession: 'periodista'
  },
  {
    name: 'Rocío',
    age: 25,
    profession: 'actriz'
  },
  {
    name: 'Inmaculada',
    age: 21,
    profession: 'diseñadora'
  }
];
//EJERCICIO 7.1:
function countAdalabers() {
  /* debugger */ let numbAdalabers = adalabers.length;
  console.log(`el número de adalabers es ${numbAdalabers}`);
}
countAdalabers();

//EJERCICIO 2:

function averageAge() {
  debugger;
  let adalaberAge = 0;
  for (i = 0; i <= adalabers.length; i++) {
    adalaberAge += adalabers[i].age / adalabers.length;
  }
}
averageAge();
console.log(adalaberAge);
