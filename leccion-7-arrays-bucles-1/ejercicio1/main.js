'use strict';

const movies = ['once', 'origen', 'tristan e isolda'];

function workWithMovies() {
  movies[3] = 'la vida de brian';
  movies[1] = 'Harry Potter';
  movies[2] = 'Erase una vez el cuerpo humano';
  return movies;
}
console.log(workWithMovies());
//si meto todos los cambios del array en la f(X) encapsulo los cambios
console.log(movies);
//que modifican el array original
