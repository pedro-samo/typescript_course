interface IEmail {
  nome: string;
  email: string;
}

interface ITelefone {
  numero: string;
}

interface INotificacao {
  enviar(usuario: IMeuUsuario): boolean;
}

interface IMeuUsuario {
  nome: string;
  email: string;
  telefone: string;
  idAndroid?: string;
}

abstract class Notificacao {
  abstract enviar(): boolean;
}

class Email extends Notificacao implements INotificacao, IEmail {
  nome: string;
  email: string;

  constructor(usuario: IMeuUsuario) {
    super();
    this.nome = usuario.nome;
    this.email = usuario.email;
  }

  enviar(): boolean {
    console.log(`Enviando e-mail para o usuário ${this.email} ...`);
    return true;
  }
}

class Sms extends Notificacao implements INotificacao, ITelefone {
  numero: string;

  constructor(usuario: IMeuUsuario) {
    super();
    this.numero = usuario.telefone;
  }

  enviar(): boolean {
    console.log(`Enviando sms para o usuário ${this.numero} ...`);
    return true;
  }
}

new Email({
  nome: "Pedro",
  email: "pedro.s.morais@gmail.com",
  telefone: "112391239123",
}).enviar();

new Sms({
  nome: "Pedro",
  email: "pedro.s.morais@gmail.com",
  telefone: "112391239123",
}).enviar();
