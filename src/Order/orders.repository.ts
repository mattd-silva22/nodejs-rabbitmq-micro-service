import { PrismaClient } from "@prisma/client";
import { type Prisma } from "@prisma/client";
import { MysqlConnector } from "../shared/database/mysql/MysqlConnector";
import { Order } from "./entities/order";

export class OrderRepository {
  connector: MysqlConnector;
  constructor() {
    this.connector = new MysqlConnector();
  }

  async findUnique(id: string) {
    const queryString = "SELECT * FROM orders WHERE order_id = ? ;";
    const queryResult = await this.connector.query(queryString, [id]);
    const { success, data } = queryResult;
    if (success) {
      return data[0];
    }
  }

  async findMany(findManyDto: Prisma.OrdersFindManyArgs) {}

  async update(updateDto: Prisma.OrdersUpdateArgs) {}

  async create(order: Order) {
    const queryString =
      "INSERT INTO orders (order_id, product_id, customer_id, status) VALUES (?, ?, ?, ?)";
    const queryResult = await this.connector.query(queryString, [
      order.id,
      order.productId,
      order.costumerId,
      order.status,
    ]);
    return queryResult.success;
  }
}
