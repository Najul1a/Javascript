console.log("----------------Atividade01---------------"); 
 var matriz = [
  [1, 6, 7],
  [3, 4, 5],
  [10, 3, 9],
];
console.table(matriz);

console.log(matriz[0][0], matriz[1][1], matriz[2][2]);
console.log(matriz[2][2], matriz[1][1], matriz[0][0]);
console.log(matriz[0][2], matriz[1][1], matriz[2][0]);
console.log(matriz[2][0], matriz[1][1], matriz[0][2]);

console.log("--------------------Atividade 02--------------------");

var usuario = ["Anna", 17, "Azul", "Lichia", "Pedro Ometto", "Romeu"];

console.table(usuario);

console.log("Olá", usuario[0], "seja bem-vinda ao nosso sistema!");
console.log("você mora no enedereço", usuario[4], "e tem um pet chamado", usuario[5]);
console.log("sua idade é", usuario [1], "e gosta muito da fruta", usuario [3]);
console.log("sua cor favorita é", usuario[2]);
