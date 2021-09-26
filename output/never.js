"use strict";
const showError = (message) => {
    throw new Error(message);
};
// showError('Algo deu errado')
let n = 0;
const loopInfinito = () => {
    while (true) {
        console.log(n++);
    }
};
loopInfinito();
//# sourceMappingURL=never.js.map