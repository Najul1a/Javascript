// let contador = 0;
// while (contador < 5) {
//     contador++;
//   console.log(contador);
// }
 
// var  x = (20)

// while (x > 10 ){ 
//     console.log(`entrei no laço while...`)
//     x --;
// }
// console.log(`terminei`)


// //contagem regressiva 

// let countdown = 5;

// while (countdown > 0) {
//     console.log(countdown);
//     countdown--;
// }
// console.log("lançamento!")

// //estourando o limite do cartão

// // let limite = 500;
// // let fatura = 0;

// while (fatura <= limite) {
//     let gasto = Math.random() * 100 //Math.random() cria valor aleatorio entre 0 e 1
//     fatura += gasto 
//     console.log(`gastei R$ ${gasto.toFixed(2)} ---------
//     fatura: R$ ${fatura.toFixed(2)}`);
//     //toFixed(2) alterando o valor mostrado para o usuario em 
//     //duas casas depois da virgula
//     fatura > limite
//     && console.log(`estourou o limite do cartão`)
//     //&& faz somente um if, sem else
// }

// //Estourando o limite do cartão - versão do while
// console.log(`-------------------------------------------------------------`)
// var limite = 500
// var fatura = 0

// do {
//     let gasto = Math.random() * 100
//     fatura += gasto;
//     console.log(`gastei R$ ${gasto.toFixed(2)} fatura: R$ ${fatura.toFixed(2)}`);
//     fatura > limite && console.log(`estourando o limite do cartão!`)
// } while (fatura <= limite)

// jogo de cara e coroa de tres tentativas 
//repetição - 3 
// variavel cara ou coroa -> aleatoria 50%
//placar - vitorias e derrotas 

var rodada = 1;
var moeda = "";
var escolhajogador = "";
var vitoria =0;
var derrota=0;

while (rodada <= 3) {
    moeda = Math.random() >= 0.5 ? "cara" : "coroa"
    escolhajogador = Math.random() >= 0.5 ? "cara" : "coroa"

    if (escolhajogador == moeda) {
        console.log(`Parabens Você ganhou!`)
        vitoria++;
        console.log(moeda)
    } else{ 
        console.log(`que pena, você perdeu!`);
        derrota++
        console.log(moeda)
    }

    rodada++;
}

console.log(`---------------------------------`)
console.log(`            placar                 `)
console.log(`-----------------------------------------`)
console.log(
     `${vitoria>derrota ? "você ganhou! 🎉" :  "você perdeu!🤣"}`
);
console.log(`-----------------------------------------`)