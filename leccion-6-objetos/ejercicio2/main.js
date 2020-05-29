'use strict';

const adalaberInfo = document.querySelector('.text1');

const runMarathon = (marathon) => {
  return ` ${adalaber.name} está corriendo una maratón de ${marathon}`;
};

const adalaber = {};
adalaber.name = ' Susana';
adalaber.age = 34;
adalaber.profession = 'periodista';
adalaber.run = runMarathon('50Km');

console.log(adalaber.run);
