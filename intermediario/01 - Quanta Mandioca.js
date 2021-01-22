/** @format */

let counter = 0;

function gets() {
  const entradas = [1, 1, 1, 1, 1];
  return entradas[counter++];
}

function soma(...args) {
  const somaTotal = args.reduce(
    (somaAcumulada, valorAtual) => somaAcumulada + valorAtual,
    0,
  );
  return somaTotal;
}

let chico = 300 * parseInt(gets());
let bento = 1500 * parseInt(gets());
let bernardo = 600 * parseInt(gets());
let marina = 1000 * parseInt(gets());
let iara = 150 * parseInt(gets());
let marlene = 225;
let total = soma(chico, bento, bernardo, marina, iara, marlene); // Digite aqui o calculo total
console.log(total);
