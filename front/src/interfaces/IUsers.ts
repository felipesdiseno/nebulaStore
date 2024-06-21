import ICredential from "./ICredential";
interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
  role?: string;
  token?: ICredential;
}

export default IUser;
