"use strict";
class Permissao {
    _nome;
    _nivel;
    constructor(_nome, _nivel) {
        this._nome = _nome;
        this._nivel = _nivel;
    }
    get nome() {
        return this._nome.toUpperCase();
    }
    set nome(novoNome) {
        if (novoNome.length < 5) {
            throw new Error("O nome da permissão deve ter no mínimo 5 letras");
        }
        this._nome = novoNome;
    }
}
const permissao = new Permissao("Administrador", 1);
try {
    permissao.nome = "adm";
}
catch (e) {
    // @ts-ignore: Unreachable code error
    console.log(e.message);
}
console.log(permissao.nome);
//# sourceMappingURL=classe_getters_setters.js.map