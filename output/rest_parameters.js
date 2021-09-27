"use strict";
const somarRenda = (...meses) => {
    return meses.reduce((rendaTotal, rendaAtual) => rendaTotal + rendaAtual, 0);
};
console.log(somarRenda(250, 780, 600, 1230, 1241));
//# sourceMappingURL=rest_parameters.js.map