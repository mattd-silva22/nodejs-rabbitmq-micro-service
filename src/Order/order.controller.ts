import { Request, Response } from "express";
import { OrderNotCreated } from "./errors/OrderNotCreated";
import { OrderService } from "./order.service";

export class OrderController {
  private readonly orderService = new OrderService();

  create(req: Request, res: Response) {
    const { productId, costumerId } = req.body;
    const errors = [];

    if (productId) {
      errors.push("Product id is required");
    }
    if (costumerId) {
      errors.push("Costumer id is required");
    }
    if (errors.length > 0) {
      const err = new OrderNotCreated(errors);
      return res.status(400).json(err);
    } else {
      return this.orderService.create({
        productId: productId,
        costumerId: costumerId,
      });
    }
  }
}
