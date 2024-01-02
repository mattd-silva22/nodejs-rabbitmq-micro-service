export class OrderNotCreated extends Error {
  constructor(message: string | string[]) {
    super("Order not created");
    this.name = "OrderNotFound";
    this.message = message.toString();
  }
}
