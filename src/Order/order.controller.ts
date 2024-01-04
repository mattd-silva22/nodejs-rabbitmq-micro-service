import { Request, Response } from "express";
import { OrderNotCreated } from "./errors/OrderNotCreated";
import { OrderService } from "./order.service";

const orderService = new OrderService();
export class OrderController {
  orderService: OrderService;

  constructor() {
    this.orderService = new OrderService();
  }

  hello(req: Request, res: Response) {
    return res.status(200).send("Hello World! from order controller");
  }
  async create(req: Request, res: Response) {
    const { productId, costumerId } = req.body;
    const errors = [];

    if (!productId) {
      errors.push("Product id is required");
    }
    if (!costumerId) {
      errors.push("Costumer id is required");
    }
    if (errors.length > 0) {
      const err = new OrderNotCreated("Not able to create new order", errors);
      return res.status(400).json(err);
    } else {
      const newOrder = await orderService.create({
        productId: productId,
        costumerId: costumerId,
      });

      console.log(newOrder);

      return res.status(201).send(newOrder);
    }
  }
}
