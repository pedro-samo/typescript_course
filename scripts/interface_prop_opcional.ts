interface IProduto {
  nome: string;
  preco: number;
  descricao?: string;
  dataValidade: Date;
}

const produtoDados: IProduto = {
  nome: "Notebook",
  preco: 3000,
  descricao: "Notebook Positivo Aspire4",
  dataValidade: new Date(2022, 11, 1)
};
