import { PrismaClient } from "@prisma/client";
import { type Prisma } from "@prisma/client";

export class OrderRepository {
  prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }

  async findUnique(findFirstDto: Prisma.OrdersFindUniqueArgs) {
    return await this.prisma.orders.findFirst(findFirstDto);
  }

  async findMany(findManyDto: Prisma.OrdersFindManyArgs) {
    return await this.prisma.orders.findMany(findManyDto);
  }

  async update(updateDto: Prisma.OrdersUpdateArgs) {
    return await this.prisma.orders.update(updateDto);
  }

  async create(createDto: Prisma.OrdersCreateArgs) {
    return await this.prisma.orders.create(createDto);
  }
}
