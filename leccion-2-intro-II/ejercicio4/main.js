'strict use';

const people = 9;
const total = 128;
const sake = 2;

const pricePerson = document.querySelector('.individualBill');
pricePerson.innerHTML = total / people - sake;
