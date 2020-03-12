'use strict';

const movies = ['once', 'origen', 'tristan e isolda'];
/* console.log(movies); */
function workWithMovies() {
  movies[3] = 'la vida de brian';
  /*   console.log(movies);
   */
  movies[1] = 'Harry Potter';
  /*   console.log(movies);
   */
  movies[2] = 'Erase una vez el cuerpo humano';
  /*   console.log(movies);
   */ return movies;
}
console.log(workWithMovies());
//si meto todos los cambios del array en la f(X) encapsulo los cambios
console.log(movies);
//que modifican el array original
