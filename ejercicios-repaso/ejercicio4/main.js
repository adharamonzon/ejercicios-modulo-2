// pedir un número entero mayor que 1 y escribir si el numero primo o no. Número primo sólo es divisible por sí mismo y la unidad

let num = parseInt(prompt('introduce un número sin decimales mayor que 1'));

for (let i = 2; i < num; i++) {
  if (num % i === 0) {
    console.log(`${num} / ${i} = ${num / i} no es primo`);
  } else {
    console.log(`${num} es primo`);
  }
}
