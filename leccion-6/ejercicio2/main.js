'use strict';

const adalaberInfo = document.querySelector('.text1');

const adalaber = {};
adalaber.name = ' Susana';
adalaber.age = 34;
adalaber.profession = 'periodista';
const runMarathon = marathon => {
  return `estoy corriendo una maratón de ${marathon}`;
};
console.log(runMarathon('50km'));
