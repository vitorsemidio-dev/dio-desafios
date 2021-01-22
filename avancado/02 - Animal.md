<!-- @format -->

# Desafio - Animal

Neste problema, você deverá ler 3 palavras que definem o tipo de animal possível segundo o esquema abaixo, da esquerda para a direita. Em seguida conclua qual dos animais seguintes foi escolhido, através das três palavras fornecidas.

![Animal](./animal.png)

# Entrada

A entrada contém 3 palavras, uma em cada linha, necessárias para identificar o animal segundo a figura acima, com todas as letras minúsculas.

# Saída

Imprima o nome do animal correspondente à entrada fornecida.

| Exemplo de Entrada | Exemplo de Saída |
| ------------------ | ---------------- |
| vertebrado         | homem            |
| mamifero           |                  |
| onivoro            |                  |
| vertebrado         | aguia            |
| ave                |                  |
| carnivoro          |                  |
| invertebrado       | minhoca          |
| anelideo           |                  |
| onivoro            |                  |

## Solução desafio

```js
function definirAnimalEscolhido(campo1, campo2, campo3) {
  const { animal } = hierarquia[campo1][campo2][campo3];
  return animal;
}
const chaveA = gets();
const chaveB = gets();
const chaveC = gets();

const hierarquia = {
  vertebrado: {
    ave: {
      carnivoro: {
        animal: 'aguia',
      },
      onivoro: {
        animal: 'pomba',
      },
    },
    mamifero: {
      onivoro: {
        animal: 'homem',
      },
      herbivoro: {
        animal: 'vaca',
      },
    },
  },
  invertebrado: {
    inseto: {
      hematofago: {
        animal: 'pulga',
      },
      herbivoro: {
        animal: 'lagarta',
      },
    },
    anelideo: {
      hematofago: {
        animal: 'sanguessuga',
      },
      onivoro: {
        animal: 'minhoca',
      },
    },
  },
};

const animalEscolhido = definirAnimalEscolhido(chaveA, chaveB, chaveC);
console.log(animalEscolhido);
```
