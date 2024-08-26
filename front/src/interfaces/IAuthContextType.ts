import IUser from "@/interfaces/IUser";
interface AuthContextType {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  login: (data: { email: string; password: string }) => Promise<string>;
  logout: () => void;
}

export default AuthContextType;
