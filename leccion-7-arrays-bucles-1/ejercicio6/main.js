'use strict';
//OPCIÓN 1: DOS F(X), UNA PARA LEER Y OTRA PINTAR, CON F(X) MADRE ;)

/* const btn = document.querySelector('.js-btn');

function updateBooks() {
  book1();
  book2();
}
function book1() {
  const srcBook1 = document.querySelector('.js-first-choice');
  const destBook1 = document.querySelector('.js-first-book');
  return (destBook1.innerHTML = srcBook1.value);
}

function book2() {
  const srcBook2 = document.querySelector('.js-second-choice');
  const destBook2 = document.querySelector('.js-second-book');
  return (destBook2.innerHTML = srcBook2.value);
}
console.log(updateBooks());

btn.addEventListener('click', updateBooks); */

//OPCIÓN 2: FUNCIÓN CON SELECTOR

/* const btn = document.querySelector('.js-btn');
const title1 = document.querySelector('.js-first-book');
const title2 = document.querySelector('.js-second-book');

function updateBook(ev) {
  const selector = ev.currentTarget.value;
  const src = document.querySelector('.js-imput-value' + selector);
  const srcValue = src.value;
  title1.innerHTML = 'tu libro favorito es: ' + srcValue;
  title2.innerHTML = 'tu segundo libro favorito es: ' + srcValue;
}

btn.addEventListener('click', updateBook); */

//OPCIÓN 3: FOR... OF?
const btn = document.querySelector('.js-btn');

function updateBook() {
  /*   debugger; */
  const books = [document.querySelector('.js-first-choice').value, document.querySelector('.js-second-choice').value];
  for (const book of books) {
    console.log(`estas ${book[1]} y ${book[2]} a mi también me gustaron`);
  }
}

btn.addEventListener('click', updateBook);
