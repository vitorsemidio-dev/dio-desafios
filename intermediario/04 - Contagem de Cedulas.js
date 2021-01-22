/** @format */

let counter = 0;

function gets() {
  const entradas = ['89'];
  return entradas[counter++];
}

function formatarMoedaBR(valor) {
  return `R$ ${valor},00`;
}

function imprimirSaida(quantidadeNotas, cedula) {
  const saida = `${quantidadeNotas} nota(s) de ${formatarMoedaBR(cedula)}`;
  console.log(saida);
}

function calcularCedulas(valorSaque, cedulasPossiveis) {
  let _valor = valorSaque;
  const quantidadeCedulasSacadas = [];

  for (let i = 0; i < cedulasPossiveis.length; i++) {
    const cedula = cedulasPossiveis[i];
    const quantidadeCedulas = Math.trunc(_valor / cedula);
    _valor -= cedula * quantidadeCedulas;
    quantidadeCedulasSacadas.push(quantidadeCedulas);
  }

  return quantidadeCedulasSacadas;
}

const entrada = parseInt(gets());
const notas = [100, 50, 20, 10, 5, 2, 1];

const notasParaSaque = calcularCedulas(entrada, notas);

console.log(entrada);
for (let i = 0; i < notas.length; i++) {
  const quantidadeNotas = notasParaSaque[i];
  const cedula = notas[i];
  imprimirSaida(quantidadeNotas, cedula);
}
