import { Router } from "express";
import { OrderController } from "./order.controller";

interface IOrderRouter {
  getRouter(): Router;
}
export class OrderRouter implements IOrderRouter {
  private router: Router;
  private orderController: OrderController;

  constructor() {
    this.router = Router();
    this.orderController = new OrderController();
    this.setupRoutes();
  }

  private setupRoutes(): void {
    this.router.post("/create", this.orderController.create);
    this.router.get("/", this.orderController.hello);
  }

  public getRouter(): Router {
    return this.router;
  }
}
