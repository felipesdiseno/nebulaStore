import IUser from "@/interfaces/IUsers";
interface AuthContextType {
  user: IUser | null;

  login: (userData: IUser) => void;
  logout: () => void;
}

export default AuthContextType;
