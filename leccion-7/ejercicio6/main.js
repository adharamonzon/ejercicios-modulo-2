'use strict';

const btn = document.querySelector('.btn');

function chosenBook(ev) {
  debugger;
  let favoriteBook = [ev.currentTarget.value];
  for (const book of favoriteBook) {
    console.log('a mi también me gusto' + book);
  }
}

btn.addEventListener = ('click', chosenBook);
