"use strict";
const texto = {
    valor: "hcode",
    realizarProcessamento(argumento) {
        return argumento.toUpperCase();
    },
};
console.log(texto.valor);
console.log(texto.realizarProcessamento("hcode treinamentos"));
const numero = {
    valor: 10,
    realizarProcessamento(argumento) {
        return argumento + 2;
    },
};
console.log(numero.valor);
console.log(numero.realizarProcessamento(12));
//# sourceMappingURL=interfaces_genericas.js.map