'use strict';

const adalaberInfo = document.querySelector('.text1');

const adalaber = {};
adalaber.name = ' Susana';
adalaber.age = 34;
adalaber.profession = 'periodista';

adalaberInfo.innerHTML = 'Mi nombre es' + adalaber.name + ' tengo ' + adalaber.age + ' y soy ' + adalaber.profession;
console.log(adalaberInfo);

const adalaberInfo2 = document.querySelector('.text2');

const adalaber2 = {};
adalaber2.name = ' Rocío';
adalaber2.age = 25;
adalaber2.profession = 'actriz';

adalaberInfo2.innerHTML = 'Mi nombre es' + adalaber2.name + ' tengo ' + adalaber2.age + ' y soy ' + adalaber2.profession;
console.log(adalaber2);
