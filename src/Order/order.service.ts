import { getRandomNumber } from "../utils/getRandomNumber.utils";
import { Order } from "./entities/order";
import { Request, Response } from "express";

export class OrderService {
  async create(data: {
    productId: string;
    costumerId: string;
  }): Promise<Order> {
    const { productId, costumerId } = data;
    const order = new Order(productId, costumerId);

    // fake a database insert
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: order.id,
          productId: order.productId,
          costumerId: order.costumerId,
          status: order.status,
        });
      }, getRandomNumber(15, 250));
    });
  }

  private async addQueue(order: Order): Promise<void> {
    // add order to queue
    console.log("Order added to queue");
  }
}
