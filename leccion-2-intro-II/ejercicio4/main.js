'strict use';

const people = 9;
const total = 128;
const sake = 2;

const result = (total - sake) / people;

const pricePerson = document.querySelector('.individualBill');
pricePerson.innerHTML = `Cada uno tiene que pagar ${result}€ y Ana tiene que pagar ${result + sake}€.`;
