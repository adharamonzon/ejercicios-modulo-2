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
//EJERCICIO 7.1: número de adalabers
function countAdalabers() {
  /* debugger */ let numbAdalabers = adalabers.length;
  console.log(`el número de adalabers es ${numbAdalabers}`);
}
countAdalabers();

//EJERCICIO 2: media de la edad de las adalabers

function averageAge() {
  let adalaberAge = 0;
  for (let i = 0; i < adalabers.length; i++) {
    adalaberAge += adalabers[i].age;
  }

  let mediaAge = adalaberAge / adalabers.length;
  console.log(mediaAge);
}
averageAge();

//EJERCICIO 3: devuelve el nombre de la adalaber más joven

/* function theYoungest() {
  debugger;
  let adalaberAge = 0;
  for (let i = 0; i < adalabers.length; i++) {
    if ((adalaberAge = adalaber[i].age)) {
          adalaberAge > ????
    }
  }

  return youngestAdalaber.name;
}
theYoungest(); */

//EJERCICIO: devuelve en número de adalabers que son diseñadoras

function countDesigners() {
  debugger;
  let designers = 0;

  for (let i = 0; i < adalabers.length; i++) {
    designers = adalabers[i].profession = 'diseñadora';
  }
  console.log(designers);
}

countDesigners();
