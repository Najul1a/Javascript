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
        console.log(
            `sabor = ${this.sabor}, preco = ${this.getpreco()}, tamanho = ${this.tamanho}`
        );
    }
    setpreco(novopreco){
this.preco = novopreco
    }

  }
  const morango = new sorvete("morango", 12, "G");
morango.sorvete
const Chocolate = new sorvete("chocolate", 10, "P");
Chocolate.sorvete
const Melancia = new sorvete("melancia", 10, "M");
Melancia.sorvete