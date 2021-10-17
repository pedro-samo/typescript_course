"use strict";
let primeiraSoma;
primeiraSoma = (num1, num2) => {
    return num1 + num2;
};
let calculadora;
function adicao(a, b) {
    return a + b;
}
const subtrair = (n1, n2) => {
    return n1 - n2;
};
calculadora = {
    dividir: (numero1, numero2) => {
        return numero1 / numero2;
    },
    multiplicar: function (numero1, numero2) {
        return numero1 * numero2;
    },
    somar: adicao,
    subtrair: subtrair,
};
//# sourceMappingURL=interface_funcoes.js.map