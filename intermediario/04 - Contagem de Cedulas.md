<!-- @format -->

# Desafio

Faça a leitura de um valor inteiro. Em seguida, calcule o menor número de notas possíveis (cédulas) onde o valor pode ser decomposto. As notas que você deve considerar são de 100, 50, 20, 10, 5, 2 e 1. Na sequência mostre o valor lido e a relação de notas necessárias.

# Entrada

Você receberá um valor inteiro N (0 < N < 1000000).

# Saída

Exiba o valor lido e a quantidade mínima de notas de cada tipo necessárias, seguindo o exemplo de saída abaixo. Após cada linha deve ser imprimido o fim de linha.

| Exemplo de Entrada | Exemplo de Saída       |
| ------------------ | ---------------------- |
| 576                | 576                    |
|                    | 5 nota(s) de R$ 100,00 |
|                    | 1 nota(s) de R$ 50,00  |
|                    | 1 nota(s) de R$ 20,00  |
|                    | 0 nota(s) de R$ 10,00  |
|                    | 1 nota(s) de R$ 5,00   |
|                    | 0 nota(s) de R$ 2,00   |
|                    | 1 nota(s) de R$ 1,00   |

| Exemplo de Entrada | Exemplo de Saída         |
| ------------------ | ------------------------ |
| 11257              | 11257                    |
|                    | 112 nota(s) de R$ 100,00 |
|                    | 1 nota(s) de R$ 50,00    |
|                    | 0 nota(s) de R$ 20,00    |
|                    | 0 nota(s) de R$ 10,00    |
|                    | 1 nota(s) de R$ 5,00     |
|                    | 1 nota(s) de R$ 2,00     |
|                    | 0 nota(s) de R$ 1,00     |

| Exemplo de Entrada | Exemplo de Saída       |
| ------------------ | ---------------------- |
| 503                | 503                    |
|                    | 5 nota(s) de R$ 100,00 |
|                    | 0 nota(s) de R$ 50,00  |
|                    | 0 nota(s) de R$ 20,00  |
|                    | 0 nota(s) de R$ 10,00  |
|                    | 0 nota(s) de R$ 5,00   |
|                    | 1 nota(s) de R$ 2,00   |
|                    | 1 nota(s) de R$ 1,00   |

## Solução desafio

```js
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
```
