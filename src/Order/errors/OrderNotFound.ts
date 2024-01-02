export class OrderNotFound extends Error {
  constructor() {
    super("Order not found");
    this.name = "OrderNotFound";
    this.message = "Order not found in database";
  }
}
