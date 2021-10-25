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
    atenderInterfone(mensagem) {
        return mensagem;
    }
}
const casaDoHomer = new Casa("Rosa", { cidade: "Spingfield" });
console.log(casaDoHomer.tocarInterfone());
//# sourceMappingURL=classe_proteced.js.map