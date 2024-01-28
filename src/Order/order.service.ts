import { getRandomNumber } from "../utils/getRandomNumber.utils";
import { Order } from "./entities/order";
import { Request, Response } from "express";
import { OrderStatus } from "./types/OrdersStatus.type";
import { OrderRepository } from "./orders.repository";
import { ErrorsTypes } from "../Core/errors/types/errors.type";

export class OrderService {
  orderRepository = new OrderRepository();

  async create(data: { productId: string; costumerId: string }): Promise<any> {
    const { productId, costumerId } = data;
    const order = new Order(productId, costumerId);

    const erros = [];

    const insetResult = await this.orderRepository.create(order);

    return new Promise(async (resolve, reject) => {
      if (insetResult) {
        try {
          const response = await this.publishToOrderQueue(order);
          resolve(response);
        } catch (err) {
          reject(err);
        }
      } else {
        reject(ErrorsTypes.UNKOOWN_ERROR);
      }
    });
  }

  // fake in queue

  async findUnique(id: string): Promise<Order> {
    const result = await this.orderRepository.findUnique(id);
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

  private async publishToOrderQueue(order: Order): Promise<Order> {
    return new Promise((resolve, reject) => {
      const timer = getRandomNumber(15, 250);
      setTimeout(() => {
        if (timer < 235) {
          resolve({ ...order });
        } else {
          reject(ErrorsTypes.SERVICE_UNAVAILABLE);
        }
      }, timer);
    });
  }
}
