/** @format */

function imprimirNumeros(numeros) {
  for (numero of numeros) {
    console.log(numero);
  }
}

const quantidadeEntradas = parseInt(gets());

const pares = [];
const impares = [];

for (let i = 0; i < quantidadeEntradas; i++) {
  const entrada = parseInt(gets());

  if (entrada % 2 === 0) {
    pares.push(entrada);
  } else {
    impares.push(entrada);
  }
}

pares.sort((a, b) => a - b);
impares.sort((a, b) => b - a);

imprimirNumeros(pares);
imprimirNumeros(impares);
