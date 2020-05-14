'strict use';

const years = document.querySelector('.years');
const result = document.querySelector('.text-result');

let yearDays = 365;
const hoursDay = 24;
const actualYears = years.textContent;
const leapYear = actualYears / 4;

const totalYearsDays = yearDays + leapYear;

result.innerHTML = `en total he vivido ${totalYearsDays * hoursDay} horas`;
