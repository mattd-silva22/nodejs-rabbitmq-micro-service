import { Request, Response } from "express";
import { OrderNotCreated } from "./errors/OrderNotCreated";
import { OrderService } from "./order.service";
import { CreateOrderFail } from "./errors/CreateOrderFail";
import { OrderNotFound } from "./errors/OrderNotFound";

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
      orderService
        .create({
          productId: productId,
          costumerId: costumerId,
        })
        .then((newOrder) => {
          console.log(newOrder);

          return res.status(201).send(newOrder);
        })
        .catch((err) => {
          const error = new CreateOrderFail("Order creation failed", [err]);
          return res.status(400).send(error);
        });
    }
  }

  async findOne(req: Request, res: Response) {
    const { id } = req.params;
    const erros = [];
    if (!id) {
      erros.push("Id is required");
    }

    if (erros.length > 0) {
      const err = new OrderNotFound("Order not found", erros);
      res.status(404).send(err);
    } else {
      orderService
        .findOne(id)
        .then((order) => {
          return res.status(200).send(order);
        })
        .catch((err) => {
          return res.status(400).send(err);
        });
    }
  }
}
