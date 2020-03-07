'strict use';

const years = document.querySelector('.year');
const hoursYear = 8760;
const hoursLived = parseInt(years.innerHTML) * hoursYear;

console.log(hoursLived);
