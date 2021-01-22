<!-- @format -->

# Desafio - Trigo no Tabuleiro

Uma rainha requisitou os serviços de um monge e disse-lhe que pagaria qualquer preço. O monge, necessitando de alimentos, perguntou a rainha se o pagamento poderia ser feito em grãos de trigo dispostos em um tabuleiro de damas, de forma que o primeiro quadrado tivesse apenas um grão, e os quadrados subseqüentes, o dobro do quadrado anterior. A rainha considerou o pagamento barato e pediu que o serviço fosse executado, porém, um dos cavaleiros que estava presente e entendia um pouco de matemática alertou-a que seria impossível executar o pagamento, pois a quantidade de grão seria muito alta. Curiosa, a rainha solicitou então a este cavaleiro que era bom em cálculo, que fizesse um programa que recebesse como entrada o número de quadrados a serem usados em um tabuleiro de damas e apresentasse a quantidade de kg de trigo correspondente, sabendo que cada 12 grãos do cereal correspondem a uma grama. Finalmente, o cálculo da quantidade deverá caber em um valor inteiro de 64 bits sem sinal.

# Entrada

A primeira linha de entrada contem um único inteiro N (1 ≤ N ≤ 100), indicando o número de casos de teste. Cada caso de teste contém um único inteiro X (1 ≤ X ≤ 64), indicando o número de casas do tabuleiro que serão utilizadas.

# Saída

Para cada caso de teste, imprima a quantidade de kgs de trigo que o monge esperava receber.

| Exemplo de Entrada | Exemplo de Saída |
| ------------------ | ---------------- |
| 3                  | 0 kg             |
| 7                  | 43 kg            |
| 19                 | 1 kg             |
| 14                 |                  |

## Solução entregue

> Solução não aceita. Falhou em um dos testes

```js
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
```
