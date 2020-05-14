'strict use';

const hoursLived = document.querySelector('.hours');
let yearDays = 365;
const hoursDay = 24;
const years = 27;
const leapYear = years / 4;

const totalYearsDays = yearDays + leapYear;
console.log(totalYearsDays);

hoursLived.innerHTML = `tengo 27 años así que he vivido ${totalYearsDays * hoursDay} horas`;
