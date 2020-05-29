'use strict';

const adalaberInfo = document.querySelector('.text1');

const adalaber = {
  name: 'María ',
  age: 32,
  profession: 'fonambulista',
  bio: function () {
    return 'Mi nombre es ' + this.name + 'tengo ' + this.age + ' y soy ' + this.profession;
  },
};

adalaberInfo.innerHTML = adalaber['bio']();

const adalaberInfo2 = document.querySelector('.text2');
let result;
const adalaber2 = {};
adalaber2.name = ' Rocío ';
adalaber2.age = 25;
adalaber2.profession = 'actriz';
adalaber2.bio = function () {
  return (result = 'Mi nombre es ' + this.name + ' tengo ' + this.age + ' y soy ' + this.profession);
};
adalaberInfo2.innerHTML = adalaber2.bio(result);
