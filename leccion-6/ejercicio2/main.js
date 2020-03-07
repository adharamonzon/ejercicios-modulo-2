'use strict';

const adalaberInfo = document.querySelector('.text1');

const adalaber = {};
adalaber.name = ' Susana';
adalaber.age = 34;
adalaber.profession = 'periodista';
const runMarathon = marathon => {
  return `estoy corriendo una maratón de ${marathon}`;
};
const marathon = '50km';
console.log(`'estoy corriendo una maratón de' ${marathon}`);

adalaberInfo.innerHTML = 'Mi nombre es' + adalaber.name + ' tengo ' + adalaber.age + ' y soy ' + adalaber.profession;
/* console.log(adalaberInfo); */

const adalaberInfo2 = document.querySelector('.text2');

const adalaber2 = {};
adalaber.name = ' Rocío';
adalaber.age = 25;
adalaber.profession = 'actriz';

adalaberInfo2.innerHTML = 'Mi nombre es' + adalaber.name + ' tengo ' + adalaber.age + ' y soy ' + adalaber.profession;
/* console.log(adalaber); */
