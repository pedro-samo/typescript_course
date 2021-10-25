"use strict";
class BancoDeDados {
    ip;
    usuario;
    senha;
    tipoBanco;
    static LOCAL = "127.0.0.1";
    static TIPO_MYSQL = "MySQL";
    static TIPO_SQLSERVER = "SQL Server";
    constructor(ip, usuario, senha, tipoBanco) {
        this.ip = ip;
        this.usuario = usuario;
        this.senha = senha;
        this.tipoBanco = tipoBanco;
    }
    static factory(parametros) {
        if (![BancoDeDados.TIPO_MYSQL, BancoDeDados.TIPO_SQLSERVER].includes(parametros.tipoBanco)) {
            throw new Error("Tipo de Banco Incorreto");
        }
        return new BancoDeDados(parametros.ip, parametros.usuario, parametros.senha, parametros.tipoBanco);
    }
}
const conexaoBanco = BancoDeDados.factory({
    tipoBanco: BancoDeDados.TIPO_MYSQL,
    senha: "root",
    usuario: "root",
    ip: BancoDeDados.LOCAL,
});
console.log(conexaoBanco);
//# sourceMappingURL=classe_prop_metodo_estatico.js.map