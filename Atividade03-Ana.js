//01 adicionar array
var fruta = ["Banana", "Maçã", "Pera", "Uva", "Morango"];
console.log(fruta);
console.log(fruta[0]);
console.log("");
console.table(fruta);
//02 adicionar tangerina no final
fruta.push("Tangirina");
console.table(fruta);
//03 adicionar goiaba no comeco
fruta.unshift("goiaba");
console.table(fruta);

//05 excluir Uva
fruta.splice(4, 1);

var position = fruta.indexOf("Uva");
console.log(position, 1);
console.table(fruta);

//copia 06
var copiarray = fruta.slice(2, 5);
console.table(copiarray);

//segunda parte
var elementosnumeros = [1, 2, 3, 4, 5];
console.table(elementosnumeros);

console.log(" o terceiro elemento do vetor é: " + elementosnumeros[2]);

var copia1 = elementosnumeros.slice();
console.table(copia1);

copia1[0] = elementosnumeros[0] * 2;
copia1[1] = elementosnumeros[1] * 2;
copia1[2] = elementosnumeros[2] * 2;
copia1[3] = elementosnumeros[3] * 2;
copia1[4] = elementosnumeros[4] * 2;
 
console.table(copia1)