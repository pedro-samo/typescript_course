class Banco {
  private cofreQtd: number = 10000;

  private debitarCofre(quantidade: number): number | string {
    if (this.cofreQtd >= quantidade) {
      return (this.cofreQtd -= quantidade);
    } else {
      return "O cofre não possui a quantidade requisitada";
    }
  }

  protected sacarDoCaixa(quantidade: number) {
    return this.debitarCofre(quantidade);
  }

  public sacarDoCaixaEletronico(quantidade: number) {
    return this.debitarCofre(quantidade);
  }
}

class Banco24Horas extends Banco {
  sacar(qtd: number) {
    return this.sacarDoCaixa(qtd);
  }
}

const nubank = new Banco();
const banco43horas = new Banco24Horas();

nubank.sacarDoCaixaEletronico(200);
banco43horas.sacar(2500);
