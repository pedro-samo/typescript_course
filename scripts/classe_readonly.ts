class Usuario {
  readonly id: string = "12345";
  nome: string = "Joao";
  private senha: string = "123456";
  readonly dataCadastro: Date = new Date("2021-01-01");
}

const usuario = new Usuario();

console.log(usuario.id);
