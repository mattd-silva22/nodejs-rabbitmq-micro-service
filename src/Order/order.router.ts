import { Router } from "express";
import { OrderController } from "./order.controller";
import { AuthorizationMiddleware } from "../middleware/authorization.middleware";

interface IOrderRouter {
  getRouter(): Router;
}
export class OrderRouter implements IOrderRouter {
  private router: Router;
  private orderController: OrderController;

  constructor() {
    this.router = Router();
    this.orderController = new OrderController();
    this.setupMiddlewares();
    this.setupRoutes();
  }

  private setupMiddlewares(): void {
    const authMiddleware = new AuthorizationMiddleware();
    this.router.use(authMiddleware.checkAuthorization);
  }

  private setupRoutes(): void {
    this.router.post("/", this.orderController.create);
    this.router.get("/", this.orderController.findOne);
    this.router.get("/hello", this.orderController.hello);
  }

  public getRouter(): Router {
    return this.router;
  }
}
