"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const applyMixins_1 = __importDefault(require("./applyMixins"));
class ProdutoFinal {
    vender(quantidade) {
        return `Foram vendidos ${quantidade} deste produto`;
    }
    comprar(quantidade) {
        return `Foram  comprados ${quantidade} deste produto`;
    }
}
class Movel {
    sentar() {
        return "Você sentou no móvel";
    }
    empurrar(metros) {
        return `O móvel foi empurrado por ${metros} metros`;
    }
}
class Sofa {
    nome;
    constructor(nome) {
        this.nome = nome;
    }
}
(0, applyMixins_1.default)(Sofa, [ProdutoFinal, Movel]);
const produto = new Sofa("Meu sofa");
console.log(produto.vender(25));
console.log(produto.empurrar(50));
//# sourceMappingURL=mixins.js.map