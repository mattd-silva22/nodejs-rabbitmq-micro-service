import express, { Request, Response } from "express";
import cors from "cors";

export class Server {
  private app = express();

  private init(): void {
    console.log("Server is starting...");
    this.setupExpress();
    this.setupControllers();
  }

  private setupExpress(): void {
    console.log("Setting up express...");
    this.app.use(express.json());
    this.app.use(cors());
  }

  private setupControllers(): void {
    console.log("Setting up controllers...");
    this.app.get("/", (req: Request, res: Response) => {
      res.send("Hello World!");
    });
  }

  public start(port: number) {
    this.init();
    this.app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  }
}
