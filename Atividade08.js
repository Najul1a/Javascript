class Aluno {
    constructor( ra, nome, anoNascimento, curso) {
        this.ra = ra
        this.nome = nome
        this.dataNascimento = anoNascimento
        this.curso = curso
    }
    calcularIdade(){
    return 2024 - this.anoNascimento
    }
apresentar(){
    console.log(
        `Olá, meu nome é ${
            this.nome
        } e tenho ${this.calcularIdade()}. Estou cursando o ${this.curso}`
    );
}
}
const aluno1 = new Aluno(3492,"Ana",2007,"Desenvolvimentos de sistema")
aluno1.apresentar()



