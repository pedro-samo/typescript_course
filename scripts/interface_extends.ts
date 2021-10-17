interface Model {
  id: number;
  created_at: number;
  updated_at: number;
}

interface Pessoa extends Model {
  nome: string;
  idade?: number;
}

interface Usuario extends Pessoa {
  email: string;
  senha: string;
}

const joao: Usuario = {
  email: "joao@hcode.com.br",
  id: 123,
  nome: "Joao",
  senha: "21423",
  created_at: new Date().getTime(),
  updated_at: new Date().getTime(),
};
