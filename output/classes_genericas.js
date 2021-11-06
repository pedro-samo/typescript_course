"use strict";
class CadastroBasico {
    criar(dados) {
        console.log("Criando novo registro");
        return dados;
    }
    selecionar(id) {
        console.log("Dados do registro de ID" + id);
        return {};
    }
    editar(id, dadosAtualizacao) {
        console.log("Editando dados do ID" + id);
        return dadosAtualizacao;
    }
    excluir(id) {
        console.log("Excluindo registro do ID" + id);
        return true;
    }
}
class UsuarioModelo extends CadastroBasico {
}
const novoUsuario = new UsuarioModelo();
console.log(novoUsuario.criar({
    id: 1,
    nome: "Pedro",
    email: "pedro@gmail.com",
    senha: "12345",
    created_at: new Date("2015-06-01"),
    updated_at: new Date("2021-01-01"),
}));
class CategoriaModelo extends CadastroBasico {
}
const novoCategoria = new CategoriaModelo();
console.log(novoCategoria.criar({
    id: 1,
    nome: "Roupa",
    created_at: new Date("2015-06-01"),
    updated_at: new Date("2021-01-01"),
}));
//# sourceMappingURL=classes_genericas.js.map