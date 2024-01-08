import { Request, Response } from "express";
import { OrderNotCreated } from "./errors/OrderNotCreated";
import { OrderService } from "./order.service";
import { CreateOrderFail } from "./errors/CreateOrderFail";
import { OrderNotFound } from "./errors/OrderNotFound";
import { HttpStatusCode } from "axios";

const orderService = new OrderService();
export class OrderController {
  orderService: OrderService;

  constructor() {
    this.orderService = new OrderService();
  }

  hello(req: Request, res: Response) {
    return res
      .status(HttpStatusCode.Ok)
      .send("Hello World! from order controller");
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
      return res
        .status(HttpStatusCode.BadRequest)
        .json(new OrderNotCreated("Not able to create new order", errors));
    } else {
      orderService
        .create({
          productId: productId,
          costumerId: costumerId,
        })
        .then((newOrder) => {
          console.log(newOrder);

          return res.status(HttpStatusCode.Created).send(newOrder);
        })
        .catch((err) => {
          return res
            .status(HttpStatusCode.BadGateway)
            .send(new CreateOrderFail("Order creation failed", [err]));
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
      res
        .status(HttpStatusCode.BadRequest)
        .send(new OrderNotFound("Order not found", erros));
    } else {
      return res.status(HttpStatusCode.NotFound).send("fail");
    }
  }
}
