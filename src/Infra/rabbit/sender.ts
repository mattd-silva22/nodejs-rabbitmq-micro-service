import amqp from "amqplib";

interface ISender {
  exchangeName: string;
  message: string;
}

export class Rabbit {
  constructor() {}

  static async connect() {
    const connection = await amqp.connect("amqp://localhost");
    const channel = await connection.createChannel();
    return channel;
  }
}

export class Sender implements ISender {
  readonly exchangeName: string;
  readonly message: string;

  constructor(exchangeName: string, message: string) {
    this.exchangeName = exchangeName;
    this.message = message;
  }

  static send(message: string) {
    console.log(`Sending message: ${message}`);
  }
}
