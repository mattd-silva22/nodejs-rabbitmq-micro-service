import { Order } from "../../Order/entities/order";

class RabbitmqService {
  addOrderToQueue(order: Order) {
    console.log("Order added to queue");
  }
}
