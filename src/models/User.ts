export class User {
  id: number;
  name: string;
  email: string;
  authId: string;

  constructor(  id: number, name: string, email: string, authId: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.authId = authId;
  }

}