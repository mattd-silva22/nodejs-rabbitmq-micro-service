import { OrderService } from "../../order.service";
import { OrderStatus } from "../../types/OrdersStatus.type";
import { ErrorsTypes } from "../../../core/errors/types/errors.type";

describe("Testing create order", () => {
  it("Should create a new order", async () => {
    const data = {
      productId: "123",
      costumerId: "456",
    };

    const orderService = new OrderService();

    orderService
      .create(data)
      .then((returndata) => {
        expect(returndata).toStrictEqual({
          id: expect.any(String),
          productId: data.productId,
          costumerId: data.costumerId,
          status: OrderStatus.PENDING,
        });
      })
      .catch((err) => {
        expect(err).toBe(ErrorsTypes.SERVICE_UNAVAILABLE);
      });
  });
});
