'use strict';
const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';
const btn = document.querySelector('.js-btn');
const container = document.querySelector('.js-list');

function showMovies() {
  container.innerHTML = `<li>${inception}</li><li>${theButterFlyEffect}</li><li>${eternalSunshineOfTheSM}</li><li>${blueVelvet}</li><li>${split}</li>`;
}

function handleList(ev) {
  const movie = ev.target;
  console.log(movie.innerHTML);
}
btn.addEventListener('click', showMovies);
container.addEventListener('click', handleList);
