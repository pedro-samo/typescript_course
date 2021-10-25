"use strict";
class Cadastro {
    nome;
    nascimento;
    constructor(nome, nascimento) {
        this.nome = nome;
        this.nascimento = nascimento;
    }
}
class Cliente extends Cadastro {
    email;
    empresa;
    constructor(nome, nascimento, email, empresa) {
        super(nome, nascimento);
        this.email = email;
        this.empresa = empresa;
    }
}
const rato = new Cliente("Rato", new Date("2000-01-01"), "rato@rato.com.br", "Rataria");
console.log(rato);
//# sourceMappingURL=classe_heranca.js.map