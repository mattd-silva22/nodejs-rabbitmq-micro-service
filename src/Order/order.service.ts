import { getRandomNumber } from "../utils/getRandomNumber.utils";
import { Order } from "./entities/order";
import { Request, Response } from "express";
import { OrderStatus } from "./types/OrdersStatus.type";
import { ErrorsTypes } from "../core/errors/types/errors.type";
import { OrderRepository } from "../shared/database/repositories/orders.repository";

export class OrderService {
  orderRepository = new OrderRepository();

  async create(data: {
    productId: string;
    costumerId: string;
  }): Promise<Order> {
    const { productId, costumerId } = data;
    const order = new Order(productId, costumerId);

    const erros = [];

    await this.orderRepository.create({
      data: {
        orderId: order.id,
        productId: order.productId,
        costumerId: order.costumerId,
        status: order.status,
      },
    });

    // fake in queue
    return new Promise((resolve, reject) => {
      const timer = getRandomNumber(15, 250);

      setTimeout(() => {
        if (timer < 225) {
          resolve({
            id: order.id,
            productId: order.productId,
            costumerId: order.costumerId,
            status: order.status,
          });
        } else {
          reject(ErrorsTypes.SERVICE_UNAVAILABLE);
        }
      }, timer);
    });
  }

  async findUnique(id: string): Promise<Order> {
    return {
      id: id,
      productId: "123",
      costumerId: "456",
      status: OrderStatus.IN_PROGRESS,
    };
  }

  async cancel(id: string): Promise<void> {
    return;
  }

  private async addToOrderQueue(order: Order): Promise<void> {
    // add order to queue
    console.log("Order added to queue");
  }
}
