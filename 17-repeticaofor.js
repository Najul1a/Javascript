//laço de repetição FOR
//escrever para o usuario 100x

//mostrando numeros pares
for (let i = 0; i < 1000; i += 2) {
  console.log(i);
}

//escreva todos os numeros de 1 a 20

for (let i = 0; i <= 20; i++) {
  console.log(i);
}

//escrever os numeros pares de 1 a 20 com FOR
// for (let i = 0; i <=20; i += 2) {
//   console.log(i);
// }

for (let n = 1; n <= 20; n++) {
  if (n % 2 == 0) console.log(n);
}

//dado um vetor com numeros 5,6,8,14,0,9,7,2.
//calcule e exiba a somatiria de seus elementos.
//FOR

//VAR = cria variavel global
//CONST = cria costante, nao muda
//LET = cria variavel funcional dentro de um grupo de codigo
// tudo que esta dentro de chaves é um grupo de codigo
const numeros = [5, 6, 8, 14, 0, 9, 7, 2];
var somar = 0;
console.log(numeros.length);

for (let i = 0; i < numeros.length; i++) {
  somar += numeros[i];
}
console.log(`A soma dos elementos do array é: ${somar}`);

//dados de vetor com numeros 5,6,8,14,0,9,7,2
//multiplique todos os seus elementospor 3  ultilizando o loop FOR
//em seguida, mostre o novo vetor

var num = [5, 6, 8, 14, 0, 9, 7, 2];

for (let i = 0; i < num.length; i++) {
  num[i] *= 3;
}
console.table(num);

//Dada a matriz 2x3 escrever para o usuario todo os seus elementos 
//com as respctivas posições da matriz
//[8,4,1]
//[3,7,8]

var matriz = [
  [8, 4, 1],
  [3, 7, 8],
]
console.table(matriz);

for (let linha = 0; linha < matriz.length; linha++) {
  for (let coluna = 0; coluna < matriz[0].length; coluna++) {
    console.log(`matriz[ ${linha},${coluna}] = ${matriz[linha][coluna]}`)
  }
  
}

