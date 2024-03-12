// class Pessoa {
//   constructor(pNome, pIdade) {
//     this.nome = pNome;
//     this.idade = pIdade;
//   }
//   apresentarSe() {
//     console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
//   }
//   envelhecer() {
//     this.idade++;
//   }
// }

// //Criando objeto do " tipo" pessoa
// var pessoa1 = new Pessoa("Dienifer", 52);
// var P2 = new Pessoa("taldo pedrin", 18);

// pessoa1.apresentarSe();
// P2.apresentarSe();

// pessoa1.envelhecer();
// pessoa1.apresentarSe();

// P2.envelhecer();
// P2.apresentarSe();

// console.log("---------------------------Abstração--------------------------");

// //------------------------------------------------------------------------------
// //Abstração - abstraindo as caracteristicas mais importantes e descartando detalhes irrelevantes !

// class Pet {
//   constructor(nome, idade, tipo) {
//     this.nome = nome;
//     this.idade = idade;
//     this.tipo = tipo;
//   }
//   alimentar() {
//     console.log(`${this.nome} foi alimentado!`);
//   }
//   apresentar() {}
// }
// const Meupet = new Pet("Rex", 2, "cachorro");

// console.log(
//   `Meu pet é um ${Meupet.tipo}, chamado ${Meupet.nome} e tem ${Meupet.idade} anos!`
// );

// Meupet.alimentar();

// console.log("-----------------------------Herança---------------------------");
// class Animal {
//   constructor(nome, idade, tipoalimentacao) {
//     this.nome = nome;
//     this.idade = idade;
//     this.tipoalimentacao = tipoalimentacao;
//   }
//   alimentar() {
//     console.log(`O animal ${this.nome} foi alimentado!`);
//   }
//   emitirsom() {
//     console.log(`Barulho padrão do animal`);
//   }
// }
// class Catioro extends Animal {
//   alimentar() {
//     console.log(`O catioro ${this.nome} foi alimentado`);
//   }
//   emitirsom() {
//     console.log(`🐕 au au!🐕`);
//   }
// }

// const pet = new Animal(`Carlos`, 10, `Comida especial`);
// const meucachorro = new Catioro(`Rex`, 3, `Ração`);

// pet.alimentar();
// pet.emitirsom();
// console.log("");
// meucachorro.alimentar();
// meucachorro.emitirsom();

// console.log(`------------------------Encapsulamento--------------------------`)

// class Petzinho {
//     constructor(nome, idade, tipo) {
//         this.nome = nome
//         this.idade = idade
//         this.tipo = tipo
//     }

//     getNome(){
//         return this.nome;
//     }
//     setNome(novoNome) {
//         this.nome = novoNome
//     }
// }
// const novoPetzinho = new Petzinho("Bob", 3, "cachorro");

// console.log(novoPetzinho.getNome()); //"Bob"
// novoPetzinho.setNome("Rex")
// console.log(novoPetzinho.getNome());  //"Rex"


console.log("--------------------Polimorfismo--------------------");
class Animal {
  constructor(nome) {
    this.nome = nome;
  }


  fazerBarulho() {
    console.log("O animal faz um barulho genérico.");
  }
}


class Cachorro extends Animal {
  constructor(nome) {
    super(nome);
  }


  fazerBarulho() {
    console.log("O cachorro late!");
  }
}


class Gato extends Animal {
  constructor(nome) {
    super(nome);
  }


  fazerBarulho() {
    console.log("O gato mia!");
  }
}


// Exemplo de uso
const animais = [
  new Cachorro("Rex"),
  new Gato("Mia"),
  new Animal("Bob"), // Animal genérico
];


for (const animal of animais) {
  animal.fazerBarulho();
}


