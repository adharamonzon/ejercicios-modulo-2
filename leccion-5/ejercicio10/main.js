'use strict';
const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';
const btn = document.querySelector('.js-btn');

function showMovies() {
  const container = document.querySelector('js-container');
  container.innerHTML = inception + theButterFlyEffect + eternalSunshineOfTheSM + blueVelvet + split;
}
showMovies();
btn.addEventListener('click', showMovies);
