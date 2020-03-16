//f(x) get100Numbers, devuelve un array con los nº del 1 al 100
//usar el bucle y método push para ir guardandolos

function get100Numbers() {
  let numbers = [];
  for (let index = 0; index <= 100; index++) {
    numbers.push(index);
  }
  return numbers;
}

console.log(get100Numbers());
