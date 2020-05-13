//crea una clase libro: esta clase tendrá: TITULO, AUTOR, AÑO Y GÉNERO.
//crea un método que devuelva toda la información del libro
//pide 3 libros y guárdalos en un array
//los libros se introducirán al arrancar el programa pidiendo los datos con prompt
//validar los campos que no se introduzcan vacíos
//validar que el año y número tenga 4 dígitos
//validor que el género sea: AVENTURAS, TERROR O FANTASÍA
//crea una función que muestre todos los libros
//crea una función que muestre los autores ordenados alfabéticamente
//crea una función que pida un género y muestre la información de los libros que pertenezcan a ese género usando,
//el método que devuelve la información

'use strict';
const bookDom = document.querySelector('.js-books');

class Books {
  constructor(title, author, year, gender) {
    (this.title = title), (this.author = author), (this.year = year), (this.gender = gender);
  }
  getAuthor() {
    return this.author;
  }
  bookinfo() {
    return `${this.title} es un libro escrito por el autor ${this.author} en el año ${this.year} y género ${this.gender}`;
  }
}
let books = [];

while (books.length < 2) {
  let title = prompt('Escribe el título del libro');
  let author = prompt('Escrible el autor');
  let year = prompt('¿de que año es el libro?');
  let gender = prompt('escrible el género').toLowerCase;

  if (title != '' && author != '' && !isNaN && year.length === 4 && (gender === 'aventura' || gender === 'terror' || gender === 'fantasía')) {
    books.push(new Book(title, author, year, gender));
  }
}

const showAuthors = () => {
  let authors = [];
  for (const book of books) {
    authors.push(book.getAuthor());
  }
  console.log(authors.sort());
};

const showAllBooks = () => {
  console.log(books);
};
showAllBooks();
