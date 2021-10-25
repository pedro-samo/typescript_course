"use strict";
class Pedido {
    produto;
    valorTotal;
    previsaoEntrega;
    id = "";
    constructor(produto, valorTotal, previsaoEntrega) {
        this.produto = produto;
        this.valorTotal = valorTotal;
        this.previsaoEntrega = previsaoEntrega;
    }
}
const meuPedido = new Pedido("Televisão", 1200, new Date("2022-01-01"));
console.log(meuPedido);
//# sourceMappingURL=classe_construtor.js.map