class Cadastro {
  nome: string;
  nascimento: Date;

  constructor(nome: string, nascimento: Date) {
    this.nome = nome;
    this.nascimento = nascimento;
  }
}

class Cliente extends Cadastro {
  email: string;
  empresa: string;

  constructor(nome: string, nascimento: Date, email: string, empresa: string) {
    super(nome, nascimento);
    this.email = email;
    this.empresa = empresa;
  }
}

const rato = new Cliente(
  "Rato",
  new Date("2000-01-01"),
  "rato@rato.com.br",
  "Rataria"
);

console.log(rato)
