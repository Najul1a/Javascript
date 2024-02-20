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

dinos.unshift("Tricerátops"); //adiciona itens no inicio do array
console.table(dinos);

//Alterando elementos com base no indici (posicao)
dinos[3]= "Tiranossauro";
console.table(dinos);

//Obtendo um elemento com base em seu indiciclg
("primeiro posição:", dinos[0]);
console.log("segunda posição:", dinos[1]);
console.log("Item da posição 20:", dinos[20]); //retorno indefinido

//removendo elementos do vetor
dinos.pop() //remover o ultimo elemeto do vetor
console.table(dinos);

dinos.shift(); //remove o primeiro elemeto do vetor 
console.table(dinos);

dinos.splice(1, 1); //remove o elemento a partir do indice 1, contando 1.
console.table(dinos);
