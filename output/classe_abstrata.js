"use strict";
class Notificacao {
}
class Email extends Notificacao {
    nome;
    email;
    constructor(usuario) {
        super();
        this.nome = usuario.nome;
        this.email = usuario.email;
    }
    enviar() {
        console.log(`Enviando e-mail para o usuário ${this.email} ...`);
        return true;
    }
}
class Sms extends Notificacao {
    numero;
    constructor(usuario) {
        super();
        this.numero = usuario.telefone;
    }
    enviar() {
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
//# sourceMappingURL=classe_abstrata.js.map