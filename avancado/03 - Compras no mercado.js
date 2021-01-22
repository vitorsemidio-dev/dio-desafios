/** @format */

function removerDuplicado(listaAlimento) {
  const conjuntoAlimento = [];
  let ultimoItemAdicionado;
  for (let i = 0; i < listaAlimento.length; i++) {
    const alimentoAtual = listaAlimento[i];
    if (alimentoAtual === ultimoItemAdicionado) {
      continue;
    }
    ultimoItemAdicionado = alimentoAtual;
    conjuntoAlimento.push(ultimoItemAdicionado);
  }

  return conjuntoAlimento;
}

const quantidadeLinhas = parseInt(gets());

for (let i = 0; i < quantidadeLinhas; i++) {
  const alimentos = gets().split(' ');
  alimentos.sort();
  const alimentosUnicos = removerDuplicado(alimentos);
  console.log(alimentosUnicos.join(' '));
}
