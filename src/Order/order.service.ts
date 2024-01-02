import { Order } from "./entities/order";
import { Request, Response } from "express";

export class OrderService {
  async create(data: { productId: string; costumerId: string }): Promise<void> {
    const { productId, costumerId } = data;
    const order = new Order(productId, costumerId);
  }
}
