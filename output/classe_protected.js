"use strict";
class Domicilio {
    cor;
    endereco;
    constructor(cor, endereco) {
        this.cor = cor;
        this.endereco = endereco;
    }
    tocarInterfone() {
        return "Interfone tocado";
    }
}
class Casa extends Domicilio {
    entrarNaCasa() {
        return this.atenderInterfone("Oi, quem é?");
    }
    atenderInterfone(mensagem) {
        return mensagem;
    }
}
const casaDoHomer = new Casa("Rosa", { cidade: "Spingfield" });
console.log(casaDoHomer.entrarNaCasa());
//# sourceMappingURL=classe_protected.js.map