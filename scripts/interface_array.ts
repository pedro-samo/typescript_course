interface ICategoria {
  nome: string;
  id: number;
  categoriaPai?: ICategoria;
}

const frontEnd: ICategoria = {
  nome: "FrontEnd",
  id: 1,
};

const backEnd: ICategoria = {
  nome: "BackEnd",
  id: 2,
};

interface IMenu {
  categorias: ICategoria[];
}

let menu: IMenu = {
  categorias: [frontEnd, backEnd],
};

interface ITodo {
  [indice: number]: string | number;
}

let minhasTarefas: ITodo;

minhasTarefas = ["Estudar TypeScript", "Estudar JavaScript", "PHP 8", 20];

console.log(minhasTarefas[0]);
