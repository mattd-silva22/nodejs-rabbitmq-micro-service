import { v4 as uuidv4 } from "uuid";

interface IOrder {
  id: string;
  productId: string;
  costumerId: string;
  status: string;
}

export class Order implements IOrder {
  id: string;
  productId: string;
  status: string;
  costumerId: string;

  constructor(productId: string, costumerId: string) {
    this.productId = productId;
    this.costumerId = costumerId;
    this.status = "pending";
    this.id = uuidv4();
  }
}
