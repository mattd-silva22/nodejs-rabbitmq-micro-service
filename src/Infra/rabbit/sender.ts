import amqp from "amqplib";

interface ISender {
  exchangeName: string;
  message: string;
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
