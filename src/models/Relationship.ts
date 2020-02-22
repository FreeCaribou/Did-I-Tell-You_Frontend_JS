import { User } from "./User";

export class Relationship {
  id: number;
  name: string;
  user: User;

  constructor(id: number, name: string, user: User) {
    this.id = id;
    this.name = name;
    this.user = user;
  }

}