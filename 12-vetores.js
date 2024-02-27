const numeros = [1, 2, 3, 4, 5];
console.log(numeros);
console.log(numeros[2]);

numeros[2] = 6;
console.log(numeros);
console.log(numeros[2]);

var dinos = ["tiranoussauro Rex", "Estegonossauro", "Aquilossauro"];
console.log(dinos);
console.log(dinos[0]);
console.log("");
console.table(dinos);
console.log("o vetor tem", dinos.length, "elementos!"); //mostrando quantidade de itens

//adicionando elemetos ao vetor existentes
dinos.push("Brontossauro", "velocirapido"); //array.push adiciona um item no final do vetor
console.table(dinos);

console.log("o vetor tem ", dinos.length, "elementos!");

//Alterando elementos com base no indici (posicao)
dinos[3] = "Tiranossauro";
console.table(dinos);

//Obtendo um elemento com base em seu indiciclg
"primeiro posição:", dinos[0];
console.log("segunda posição:", dinos[1]);
console.log("Item da posição 20:", dinos[20]); //retorno indefinido

//removendo elementos do vetor
dinos.pop(); //remover o ultimo elemeto do vetor
console.table(dinos);

dinos.shift(); //remove o primeiro elemeto do vetor
console.table(dinos);

dinos.splice(1, 1); //remove o elemento a partir do indice 1, contando 1.
console.table(dinos);

console.log("");
console.log("----------------continuação da Aula---------------");
var dino = [
  "Tricerátops",
  "Tiranossauro Rex",
  "Estegonossauro",
  "Aquilosauro",
  "Brotonssauro",
  "Ictiossauro",
  "Pterodáctilo",
  "Estinossauro",
];
console.table(dinos);

var elementoProcurado = "Brontossauro";
var posicao = dinos.indexOf(elementoProcurado);
console.log("o" + elementoProcurado + " está no índice " + posicao);

var elementoProcurado = "Tiranossauro";
var posicao = dinos.indexOf(elementoProcurado);
console.log("o" + elementoProcurado + " está no índice " + posicao);

var elementoProcurado = "Estegonossauro";
var posicao = dinos.indexOf(elementoProcurado);
console.log("o" + elementoProcurado + " está no índice " + posicao);

//criando copia de array (vetor)
var copia1 = dinos.slice();
console.log("vetor cópia 1");
console.table(copia1);

var copia2 = dinos.slice(1, 3);
console.log("vetor cópia 2");
