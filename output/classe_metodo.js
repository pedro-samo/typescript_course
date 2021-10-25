"use strict";
class Professor {
    nome;
    idade;
    materia;
    constructor(nome, idade, materia) {
        this.nome = nome;
        this.idade = idade;
        this.materia = materia;
    }
    seApresentar() {
        return `Meu nome é ${this.nome}, tenhos ${this.idade} e vou lecionar ${this.materia}`;
    }
    dizerNotas(...notas) {
        const notasTotal = notas.reduce((total, notaAtual) => total + notaAtual, 0);
        return notasTotal / notas.length;
    }
}
const glaucio = new Professor("Glaucio", 45, "DBA");
console.log(glaucio.seApresentar());
console.log("------------------------------------------");
const pedro = new Professor("Pedro", 22, "Typescript");
console.log(pedro.seApresentar());
console.log(pedro.dizerNotas(8, 10, 5.5, 7.5));
//# sourceMappingURL=classe_metodo.js.map