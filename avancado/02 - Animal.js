/** @format */

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
