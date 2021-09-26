const showError = (message: string): never => {
  throw new Error(message);
};

// showError('Algo deu errado')

let n = 0;

const loopInfinito = (): never => {
  while (true) {
    console.log(n++);
  }
};

loopInfinito();
