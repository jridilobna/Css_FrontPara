import { OrderCustomer } from "./OrderCustomer";

export class User {
  id: number =0;
  username: string="";
  password: string ="";
  email: string ="";
  orders!: OrderCustomer[];
}
