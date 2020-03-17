'use strict';

const userinfo = [
  {
    name: 'Sandra',
    surname: 'García',
    phone: '665896471'
  },
  {
    name: 'Pablo',
    surname: 'Sánchez',
    phone: '619235869'
  },
  {
    name: 'María',
    surname: 'Jiménez',
    phone: '653214560'
  }
];
//la montiaga las options las ha metido en un magnifico bucle!
const selectInput = document.querySelector('.js-select');
const option1 = document.querySelector('.option1');
const option2 = document.querySelector('.option2');
const option3 = document.querySelector('.option3');
let inputName = document.querySelector('.input1');
let inputSurname = document.querySelector('.input2');
let inputPhone = document.querySelector('.input3');

function handleInfo() {
  /*   debugger; */
  if (selectInput.value === option1.value) {
    inputName.value = userinfo[0].name;
    inputSurname.value = userinfo[0].surname;
    inputPhone.value = userinfo[0].phone;
  } else if (selectInput.value === option2.value) {
    inputName.value = userinfo[1].name;
    inputSurname.value = userinfo[1].surname;
    inputPhone.value = userinfo[1].phone;
  } else {
    inputName.value = userinfo[2].name;
    inputSurname.value = userinfo[2].surname;
    inputPhone.value = userinfo[2].phone;
  }
}
handleInfo();

selectInput.addEventListener('change', handleInfo);
