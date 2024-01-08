import { PrismaClient } from "@prisma/client";
import { type Prisma } from "@prisma/client";

export class OrderRepository {
  prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }

  findUnique(findFirstDto: Prisma.OrdersFindUniqueArgs) {
    return this.prisma.orders.findFirst(findFirstDto);
  }

  findMany(findManyDto: Prisma.OrdersFindManyArgs) {
    return this.prisma.orders.findMany(findManyDto);
  }

  update(updateDto: Prisma.OrdersUpdateArgs) {
    return this.prisma.orders.update(updateDto);
  }

  create(createDto: Prisma.OrdersCreateArgs) {
    return this.prisma.orders.create(createDto);
  }
}
