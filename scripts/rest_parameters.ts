const somarRenda = (...meses: number[]): number => {
  return meses.reduce((rendaTotal, rendaAtual) => rendaTotal + rendaAtual, 0);
};

console.log(somarRenda(250, 780, 600, 1230, 1241));
