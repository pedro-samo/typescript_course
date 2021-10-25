"use strict";
class Veiculo {
    cor;
    constructor(cor) {
        this.cor = cor;
    }
    abrirPorta() {
        return `O carro de cor ${this.cor} abriu Porta`;
    }
}
const carro = new Veiculo("Branco");
carro.cor = "preto";
console.log(carro.abrirPorta());
//# sourceMappingURL=classe_public.js.map