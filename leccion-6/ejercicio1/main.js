'use strict';

const adalaberInfo = document.querySelector('.text1');

const adalaber = {
  name: ' Susana',
  age: 34,
  profession: 'periodista'
};
adalaberInfo.innerHTML = 'Mi nombre es' + adalaber['name'] + ' tengo ' + adalaber['age'] + ' y soy ' + adalaber['profession'];

const adalaberInfo2 = document.querySelector('.text2');

const adalaber2 = {
  name: ' Rocío',
  age: 25,
  profession: 'actriz'
};

adalaberInfo2.innerHTML = 'Mi nombre es' + adalaber2['name'] + ' tengo ' + adalaber2['age'] + ' y soy ' + adalaber2['profession'];
