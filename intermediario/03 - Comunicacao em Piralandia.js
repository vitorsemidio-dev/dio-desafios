/** @format */

let counter = 0;

function gets() {
  const entradas = ['1234', '9876543210'];
  return entradas[counter++];
}

function inverterNumero(numero) {
  const numeroInvertido = numero.split('').reverse().join('');
  return numeroInvertido;
}

const entrada = gets();

const numeroInvertido = inverterNumero(entrada);

console.log(numeroInvertido);
