/** @format */

let counter = 0;

function gets() {
  const valores = ['3', '40.0', '200.0', '300.0'];
  return valores[counter++];
}
let quantidadeCasosTestes = parseInt(gets());

function calcularDias(quantidadeComida) {
  if (quantidadeComida <= 1.0) {
    return 0;
  }

  const metadeComida = quantidadeComida / 2.0;

  return 1 + calcularDias(metadeComida);
}

while (quantidadeCasosTestes-- > 0) {
  const quantidadeComida = parseFloat(gets());
  const diasAteAcabar = calcularDias(quantidadeComida);
  console.log(diasAteAcabar, 'dias');
}
