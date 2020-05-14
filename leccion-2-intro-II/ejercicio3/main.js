'use strict';
//tu compra en la frutería
const market = document.querySelector('p');
const kiwis = 5;
const peras = 2;
const uvas = 4;

market.innerHTML = `el precio de tu compra es ${kiwis * 2}€ de kiwis, ${peras * 3}€ de peras y ${uvas / 2}€ de uvas. En total ${kiwis * 2 + peras * 3 + uvas / 2}€`;
