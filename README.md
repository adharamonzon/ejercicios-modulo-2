# ejercicios-modulo-2

Ejercicios del módulo de JavaScript. El **objetivo** es aprender las bases de JS.

### Tema 1. Intro a la programación:

Qué es programar, qué es JavaScript.
Cómo enlazar el documento main.js al index.html
variables y constantes, cómo asignarles un valor
Obtener una etiqueta, elemento del html (selector de etiqueta, selector de clase y selector de id + getElementById). Modificar su contenido con .innerHTML
Obtener información sobre las clases y añadir o quitar clases.

### Tema 2. Intro a la programación II

Consola de JS
Tipos de datos: number (suma, resta,multiplicación y división), string + concatenación e interpolación de cadenas, propiedad .length, undefined, cornvertir string a números, typeOf, NaN

### Tema 3. Condicionales

Booleanos, truthy y falsy
Operadores de comparación. Igualdad (== / ===), desigualdad (!= / !==).
Operadores lógicos. Negación (!expresión), y (&&), o (||).
Condicionales if...else
classList.contains
Condicional ternario

### Tema 4. Funciones

Declaración y uso de funciones.
Parámetros y valores de retorno.
querySelector('').
Ámbito de las variables.
Arrow functions.

### Tema 5. Eventos

Cómo escuchar eventos desde JS
addEventListener / Callbacks
tipos de eventos, información sobre el evento
event.currentTarget / event.target / event.preventDefault()
removeEventListener
Burbujeo de eventos: event bubbling

### Tema 6. Objetos

Los objetos son un tipo de dato, permiten agrupar varios datos de forma estructurada.
Objetos literales, crear objetos a partir de objetos vacíos
Métodos: funciones (arrow functions) asociadas a la propiedad de un objeto.
Introducción a this (this = yo mismo).
Objetos del navegador (ej. console, document).
Elementos del HTML: es un objeto que nos permite interactuar con ellos a través de .innerHTML, .value, .querySelector, .classList /.contains
null: objeto nulo, se suele usar de forma intencionada para indicar que esta variable debería contener un objeto (puede rellenarse en el futuro)

### Tema 7. Arrays y Bucles

**Arays** permiten guardar una lista de datos ordenada en JS.
**Bucles** estructuras de control que permiten repetir un código un número determinado de veces en función de si cumple una condición

_Array_ Puede contener cualquier tipo de dato (string, number, boolean, object e incluso otro array). El índice de los Arrays comienza por 0.
Declaración de un array / Obtener un información de un Array / Añadir un elemento / Modificar un valor.
Propiedad length.
Función isArray() (devuelve true/false) indicando si es un array o no

_bucles_ permite realizar una acción X veces
Iterar sobre los elementos de un array.
Bucles: for / for...of (arrays) / for...in (objetos)
querySelectorAll()

### Tema 8. Trabajo colaborativo en git

Objetivo es poder tener varias verrsiones paralelas donde apliacr nuevas secciones, características y probar funcionalidades.
Flujo con ramas, ramas permanentes, ramas puntuales, pull request y revisión del código.

### Tema 9. Arrays y bucles II

Métodos de array:

**push** agrega uno o más elementos al final de un array. devuelve otro array.
**reverse** invierte el orden de un array. Modifica directamente el array sobre el que se ha utilizado y devuelve el array atualizado.
**concat** se obtine a partir de dos o más arrays una combinación de ellos. No modifica ninguno de los arrays utilizados, devuelve un array nuevo.
**slice** devuelve el array sin modificar el originarl. Recibe 2 parámetros (posición-inicial, posición-final).
**splice** cambia el contenido de un array eliminando elementos ya existentens y/o agregando nuevos.
**indexOf** busca el elemento dentro de un array y devuelve su ponsición / índice. Si no encuentra la posición devuelve -1.

### Tema 10. Peticiones al servidor

con AJAX: puentre entre el navegador y el servidor.
**Peticiones AJAX** nos permiten acceder y manipular datos en el servidor. (AJAX = Asynchronous JavaScript And XML). A través de una **API** (url)

## Fetch

Manera estandar de acceder a los datos del servidor.

## Promesas

Es necesario gestionar la asincronía, y que realizar con la información que nos devuelve la api.

## Formato JSON

(JavaScript Object Notation)
Muy habitual para el intercambio de información en la web.

## Peticiones encadenadas
