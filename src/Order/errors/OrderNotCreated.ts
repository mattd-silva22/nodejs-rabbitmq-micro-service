export class OrderNotCreated extends Error {
  erros: string[];
  constructor(message: string, erros: string[]) {
    super("Order not created");
    this.name = "OrderNotCreated";
    this.message = message;
    this.erros = erros;
  }
}
