/** @format */

let counter = 0;

function gets() {
  const entradas = ['25', '100', '5.50'];
  return entradas[counter++];
}
let valor1 = parseInt(gets());
let valor2 = parseInt(gets());
let valor3 = parseFloat(gets());
let salary = parseFloat(valor2 * valor3).toFixed(2);
console.log('NUMBER = ' + valor1);
console.log('SALARY = U$ ' + salary);
