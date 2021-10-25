class Veiculo {
  public cor: string;

  constructor(cor: string) {
    this.cor = cor;
  }

  public abrirPorta(): string {
    return `O carro de cor ${this.cor} abriu Porta`;
  }
}

const carro = new Veiculo("Branco");

carro.cor = "preto";

console.log(carro.abrirPorta());
