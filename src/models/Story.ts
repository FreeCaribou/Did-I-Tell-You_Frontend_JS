import { User } from "./User";
import { Relationship } from "./Relationship";

export class Story {
  id: number;
  text: string;
  user: User;
  relationships: Array<Relationship>;

  constructor(id: number, text: string, user: User, relationships: Array<Relationship>) {
    this.id = id;
    this.text = text;
    this.user = user;
    this.relationships = relationships;
  }
}