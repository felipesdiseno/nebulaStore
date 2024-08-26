import IUser from "./IUser";

export interface IRegisterUser extends IUser {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  address: string;
  phone: string;
}
