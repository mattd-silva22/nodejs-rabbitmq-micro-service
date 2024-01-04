export class OrderNotFound extends Error {
  erros: string[];
  constructor(message: string, erros: string[]) {
    super("Order not found");
    this.name = "OrderNotFound";
    this.message = message;
    this.erros = erros;
  }
}
