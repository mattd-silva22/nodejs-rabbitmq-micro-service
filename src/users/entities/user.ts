import { v4 as uuidv4 } from "uuid";

interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
}

export class User implements IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  type: string;

  constructor(
    id: string,
    name: string,
    email: string,
    password: string,
    type: string
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.type = type;
  }
}
