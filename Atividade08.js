// class Aluno {
//     constructor( ra, nome, anoNascimento, curso) {
//         this.ra = ra
//         this.nome = nome
//         this.dataNascimento = anoNascimento
//         this.curso = curso
//     }
//     calcularIdade(){
//     return 2024 - this.anoNascimento
//     }
// apresentar(){
//     console.log(
//         `Olá, meu nome é ${
//             this.nome
//         } e tenho ${this.calcularIdade()}. Estou cursando o ${this.curso}`
//     );
// }
// }
// const aluno1 = new Aluno(3492,"Ana",2007,"Desenvolvimentos de sistema")
// aluno1.apresentar()

//Crie e ultilize uma classe "sorvete" contendo as propriedades: sabor, preço e tamanho (P| M| G)
//Crie um sorvete morango grande
//Crie um sorvete de chocolate pequeno
//Crie um sorvete de melancia medio
//altere o preco do sorvete de morango grande para R$10,51

class sorvete {
  constructor(sabor, preco, tamanho) {
    this.sabor = sabor;
    this.preco = preco;
    this.tamanho = tamanho;
  }
  getpreco(){
    return this.preco
  }
  sorvete(){
    console.log(`sabor = ${this.sabor}, preco = ${this.getpreco()}, tamanho = ${this.tamanho}`)
  }
  setPreco(novoPreco){
    this.preco = novoPreco;
  }
}


const morango = new sorvete("morango", 12, "G");
morango.sorvete();

const chocolate = new sorvete("chocolat", 5, "P")
chocolate.sorvete()

const Melancia = new sorvete("melancia", 10, "M");
Melancia.sorvete()

morango.setPreco(10.51);
morango.sorvete();

console.log("-------------------------------------------")


function compararStrings(str1, str2) {
    return str1.toLowerCase() === str2.toLowerCase();
}

// Exemplo de uso:
console.log(compararStrings("Hello", "hello")); 
console.log(compararStrings("JavaScript", "javascript"));
console.log(compararStrings("OpenAI", "OpenAI")); 
console.log(compararStrings("apple", "orange")); 

function extrairNumeros(str) {
    return str.match(/\d+/g).map(Number);
}

// Exemplo de uso:
console.log(extrairNumeros("Tenho 2 primos e 3 sobrinhos")); 
console.log(extrairNumeros("A temperatura é 6 graus")); 
console.log(extrairNumeros("O número de telefone é 983-236-5490")); 


function inverterOrdemPalavras(frase) {
    return frase.split(" ").reverse().join(" ");
}

// Exemplo de uso:
console.log(inverterOrdemPalavras("Este ano fiz 17")); 
console.log(inverterOrdemPalavras("Gosto muito da lua")); 
console.log(inverterOrdemPalavras("Sou linda")); 

