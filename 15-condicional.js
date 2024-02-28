// condição simples unica
var anoNascimento = 2007

if (anoNascimento > 2003)
console.log(`A pessoa nasceu depois de 2003`)

if (anoNascimento < 2003)
console.log(`A pessoa nasceu depois de 2003`)

if (anoNascimento == 2003)
console.log(`A pessoa nasceu depois de 2003`)

//condicional simples if-else 
var anoNascimento = 2002;
if (anoNascimento > 2000)
console.log(`A pessao nasceu depois de 2000!`)
else
console.log(`A pessoa nasceu antes de 2000!`)

//condicional composto com if
const login = "admin"; //digitando pelo usuario
var senha = "123456"; //digitando pelo usuario 
//------------------------------------------------//
const loginUser = "admin" // banco de dados
const senhaUser = "admin" // banco de dados
//------------------------------------------------//

if (login == loginUser && senha == senhaUser) // && significado E -- || significa  OU
console.log(`Acesso permitido!`)
console.log(`Acesso negado!`)

function sinaleiro(cor){
    if (cor == "vermelho")
    console.log(`pare`)

   else if (cor == "amarelo")
    console.log(`preste atenção`)

   else if (cor == "verde")
    console.log(`siga`)
else
console.log("você informou cores diferente de verde, amarelo ou vermelho")
}
sinaleiro("vermelho")

//desvio condicional if com bloco de comandos 

var idade = 17 

if (idade <=17){
console.log("entrou no if...")
idade++,
console.log("Incrementei a idade...");
console.log(`A nova idade é ${idade}`);
console.log(`Agora estou saindo do bloco de codigos if`);
}
console.log(`Terminei!`);


//desvio condicional if inline (ternario)
// validação (algo == algo) ou (algo > algumacoisa)
// (IF)
//se for verdadeiro
// : (ELSE)
//se for falso
// testedevalidacao == teste ? "Bla bla" : ("Ble ble")
var preco = 500

var resultado = preco <=100 ? "ta barato" : "vish ta caro!  "

if (preco <=100)
console.log(`ta barato!`)
else
console.log(`vish ta caro!!!`)

