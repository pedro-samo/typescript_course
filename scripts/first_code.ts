const nome = 'João';

class Produto {
    nome: string;
    valor: number;
    
    constructor(produtoNome: string, produtoValor: number) {
        this.nome = produtoNome;
        this.valor = produtoValor
    }
}

const playstation5 = new Produto("Playstation 5", 5000);