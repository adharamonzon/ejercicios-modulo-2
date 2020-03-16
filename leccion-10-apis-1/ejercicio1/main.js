'use strict';

function getRandomNumber() {
  fetch('https://api.rand.fun/number/integer?max=3000')
    .then(response => response.json())
    .then(data => {
      document.querySelector('.js-result').innerHTML = data.result;
    });
}
getRandomNumber();
