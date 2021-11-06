interface IProcessamento<TipoInterface> {
  valor: TipoInterface;
  realizarProcessamento(arg: TipoInterface): TipoInterface;
}

const texto: IProcessamento<string> = {
  valor: "hcode",
  realizarProcessamento(argumento: string): string {
    return argumento.toUpperCase();
  },
};

console.log(texto.valor);
console.log(texto.realizarProcessamento("hcode treinamentos"));

const numero: IProcessamento<number> = {
  valor: 10,
  realizarProcessamento(argumento: number): number {
    return argumento + 2;
  },
};

console.log(numero.valor);
console.log(numero.realizarProcessamento(12));
