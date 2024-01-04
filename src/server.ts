import express, { Request, Response } from "express";
import cors from "cors";
import { OrderRouter } from "./Order/order.router";
import { OrderController } from "./Order/order.controller";

export class Server {
  private app = express();

  private init(): void {
    console.log("Server is starting...");
    this.setupExpress();
    this.setupRouters();
  }

  private setupExpress(): void {
    console.log("Setting up express...");
    this.app.use(express.json());
    this.app.use(cors());
  }

  private setupRouters(): void {
    console.log("Setting up routers...");
    this.app.get("/", (req: Request, res: Response) => {
      res.send("Hello World!");
    });
    const orderRouter = new OrderRouter();
    this.app.use("/order", orderRouter.getRouter());
  }

  public start(port: number) {
    this.init();
    this.app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  }
}
