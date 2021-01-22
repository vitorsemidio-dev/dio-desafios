<!-- @format -->

# Desafio - Dividindo X por Y

Você terá o desafio de escrever um algoritmo que leia 2 números e imprima o resultado da divisão do primeiro pelo segundo. Caso não for possível, mostre a mensagem “divisao impossivel” para os valores em questão.

# Entrada

A entrada contém um número inteiro **N**. Este **N** será a quantidade de pares de valores inteiros (X e Y) que serão lidos em seguida.

# Saída

Para cada caso mostre o resultado da divisão com um dígito após o ponto decimal, ou “divisao impossivel” caso não seja possível efetuar o cálculo.

| Exemplo de Entrada | Exemplo de Saída   |
| ------------------ | ------------------ |
| 3                  | -1.5               |
| 3 -2               | divisao impossivel |
| -8 0               | 0.0                |
| 0 8                |                    |

## Solução entregue

```js
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
```
