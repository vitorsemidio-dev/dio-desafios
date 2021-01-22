/** @format */

let quantidadeTestes = parseInt(gets());

function somaPG(a1, q, n) {
  const numerador = a1 * (q ** n - 1);
  const denominador = q - 1;
  return numerador / denominador;
}

while (quantidadeTestes-- > 0) {
  let entrada = Number(gets());

  const quantidadeGraos = somaPG(1, 2, entrada);

  let totalKg = quantidadeGraos / 12 / 1000;
  const totalKgTruncate = Math.trunc(totalKg);
  console.log(totalKgTruncate, 'kg');
}
