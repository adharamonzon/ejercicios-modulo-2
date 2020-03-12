'use strict';

const movies = ['once', 'origen', 'tristan e isolda'];
console.log(movies);
function workWithMovies() {
  return movies;
}

movies[3] = 'la vida de brian';
console.log(movies);

movies[1] = 'Harry Potter';
console.log(movies);

movies[2] = 'Erase una vez el cuerpo humano';
console.log(movies);
// donde tengo que poner la función para encapsular los cambios de la array??
