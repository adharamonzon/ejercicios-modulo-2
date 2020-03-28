const year = 2021;

//EJERCICIO CON IF/ELSE

/* if (year % 4 === 0) {
  console.log(`${year} es un año bisiesto`);
} else if ((year + 1) % 4 != 0) {
  console.log(`${year} no es un año bisiesto`);
} */

//EJERCICIO CON TERNARIOS

const actualYear = year % 4 === 0 ? console.log(`${year} es un año bisiesto`) : console.log(`${year} no es un año bisiesto`);
