class Pedido {
  id: string = "";

  constructor(
    private produto: string,
    protected valorTotal: number,
    public previsaoEntrega: Date
  ) {}
}

const meuPedido = new Pedido("Televisão", 1200, new Date("2022-01-01"));

console.log(meuPedido);
