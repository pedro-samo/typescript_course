"use strict";
class Banco {
    cofreQtd = 10000;
    debitarCofre(quantidade) {
        if (this.cofreQtd >= quantidade) {
            return (this.cofreQtd -= quantidade);
        }
        else {
            return "O cofre não possui a quantidade requisitada";
        }
    }
    sacarDoCaixa(quantidade) {
        return this.debitarCofre(quantidade);
    }
    sacarDoCaixaEletronico(quantidade) {
        return this.debitarCofre(quantidade);
    }
}
class Banco24Horas extends Banco {
    sacar(qtd) {
        return this.sacarDoCaixa(qtd);
    }
}
const nubank = new Banco();
const banco43horas = new Banco24Horas();
nubank.sacarDoCaixaEletronico(200);
banco43horas.sacar(2500);
//# sourceMappingURL=classe_private.js.map