import { v4 as uuidv4 } from "uuid";
import { OrderStatus } from "../types/OrdersStatus.type";
interface IOrder {
  productId: string;
  costumerId: string;
  id: string;
  status: OrderStatus;
}

export class Order implements IOrder {
  id: string;
  status: OrderStatus;
  costumerId: string;
  productId: string;

  constructor(productId: string, costumerId: string) {
    this.productId = productId;
    this.costumerId = costumerId;
    this.status = OrderStatus.PENDING;
    this.id = uuidv4();
  }
}
