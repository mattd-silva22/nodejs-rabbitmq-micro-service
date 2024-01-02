import { Router } from "express";
import { OrderController } from "./order.controller";
class OrderRouter {
  public router = Router();
  private orderController = new OrderController();

  constructor() {
    this.setupRoutes();
  }

  private setupRoutes(): void {
    this.router.post("/", this.orderController.create);
  }
}
