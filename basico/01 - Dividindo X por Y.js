/** @format */

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
