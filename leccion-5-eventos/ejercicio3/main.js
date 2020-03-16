'use strict';

const text = document.querySelector('.text');
const text2 = 'Amatomaa jarl va usté muy cargadoo qué dise usteer a gramenawer no te digo trigo por no llamarte Rodrigor';

function extraText() {
  text.innerHTML += text2;
}

text.addEventListener('mouseover', extraText);
