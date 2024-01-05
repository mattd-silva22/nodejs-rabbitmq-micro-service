import request from "supertest";
import { Server } from "../../../server";
import supertest from "supertest";

const expressServer = new Server();

beforeAll(() => {
  expressServer.start(5500);
});

afterAll(() => {
  expressServer.stop();
});

const server = supertest(expressServer.getApp());

describe("Testing create order endpoint", () => {
  it("Should return 201 when order is created", async () => {
    const response = await server
      .post("/order/create")
      .set("Authorization", "Bearer 123")
      .send({ productId: "123", costumerId: "456" });

    expect(response.status).toBe(201);
  });

  it("Should return 400 when missing [productId]", async () => {
    const response = await server
      .post("/order/create")
      .set("Authorization", "Bearer 123")
      .send({ productId: "", costumerId: "456" });

    expect(response.status).toBe(400);
  });

  it("Should return 400 when missing [costumerId]", async () => {
    const response = await server
      .post("/order/create")
      .set("Authorization", "Bearer 123")
      .send({ productId: "123", costumerId: "" });

    expect(response.status).toBe(400);
  });
});
