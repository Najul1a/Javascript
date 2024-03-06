var País = 100003;
var pais = 300004;
var ano = 0;
while (País < pais) {
  pais += pais * 0.015;
  País += País * 0.03;
  ano++;
}
console.log(
  `O numero de anos necessario para que a população do País ultrapassa ou igule a população do pais é de ${ano} anos`
);

Criar um "jogo da velha" que mostre as informações dentro da imagem abaixo. inserir as informações de forma randomica.Informar ao final quem ganhou x ou O

const tabuleiro = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "],
];
let jogadorX = "X";
let jogadorO = "O";

function jogar(jogador) {
  let linha, coluna;
  do {
    linha = Math.floor(Math.random() * 3);
    coluna = Math.floor(Math.random() * 3);
  } while (tabuleiro[linha][coluna] !== " ");

  tabuleiro[linha][coluna] = jogador;

}
for (let i = 0; i < 3; i++) { 
    if ( 
        tabuleiro[i][0] == tabuleiro[i][1]
    ) {
        
    }
}


jogar(jogadorO);
jogar(jogadorX);

console.table(tabuleiro);
// SENHOR ME AJUDA 
