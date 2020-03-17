'use strict';

const numbers = [1, 2, 3];

const item1 = document.createElement('li');
const item2 = document.createElement('li');
const item3 = document.createElement('li');

const newtext1 = document.createTextNode(numbers[0]);
const newtext2 = document.createTextNode(numbers[1]);
const newtext3 = document.createTextNode(numbers[2]);

item1.appendChild(newtext1);
item2.appendChild(newtext2);
item3.appendChild(newtext3);

const text = document.querySelector('.js-ul');
text.appendChild(item1);
text.appendChild(item2);
text.appendChild(item3);
