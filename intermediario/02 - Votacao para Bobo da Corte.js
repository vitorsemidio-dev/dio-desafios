/** @format */
let counter = 0;

function gets() {
  const entradas = [7, 1, 8, 1, 1];
  return entradas[counter++];
}

const quantidadeParticipantes = 5;

const votos = [];

for (let i = 0; i < quantidadeParticipantes; i++) {
  const voto = parseInt(gets());
  votos.push(voto);
}

const [votosRafael, ...restoVotos] = votos;

const rafaelGanhou = restoVotos.every((voto) => {
  return votosRafael >= voto;
});

console.log(rafaelGanhou ? 'S' : 'N');
