export class CreateOrderFail extends Error {
  message: string;
  erros: string[];
  constructor(message: string, erros: string[]) {
    super("Create order fail");
    this.name = "CreateOrderFail";
    this.message = `Order creation failed`;
    this.erros = erros ? erros : [];
  }
}
