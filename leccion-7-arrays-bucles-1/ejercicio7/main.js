'use strict';

const adalabers = [
  {
    name: 'María',
    age: 29,
    profession: 'diseñadora',
  },
  {
    name: 'Lucía',
    age: 31,
    profession: 'Ingeniera química',
  },
  {
    name: 'Susana',
    age: 34,
    profession: 'periodista',
  },
  {
    name: 'Rocío',
    age: 25,
    profession: 'actriz',
  },
  {
    name: 'Inmaculada',
    age: 21,
    profession: 'diseñadora',
  },
];

//EJERCICIO 7.1: número de adalabers
function countAdalabers() {
  let numbAdalabers = adalabers.length;
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

const theYoungest = () => {
  let youngest = 100;
  for (let i = 0; i < adalabers.length; i++) {
    if (adalabers[i].age < youngest) {
      youngest = adalabers[i].age;
    } else {
      youngest = youngest;
    }
  }

  let name;
  for (let i = 0; i < adalabers.length; i++) {
    if (adalabers[i].age === youngest) {
      name = adalabers[i].name;
    }
  }
  console.log(`La adalaber más joven tiene ${youngest} años y es ${name}`);
};

theYoungest();

//EJERCICIO: devuelve en número de adalabers que son diseñadoras

function countDesigners() {
  console.log(adalabers);
  let designers = [];

  for (let i = 0; i < adalabers.length; i++) {
    debugger;
    if (adalabers[i].profession.includes('diseñadora')) {
      designers.push = adalabers[i].name;
    }
  }
  console.log(designers);
}

countDesigners();
