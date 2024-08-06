"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";
import AuthContextType from "@/interfaces/IAuthContextType";
import { IRegisterUser } from "@/interfaces/IRegister";
import IUser from "@/interfaces/IUsers";
import ILoginUser from "@/interfaces/ILogin";
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IRegisterUser | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsedData = JSON.parse(storedUser);
        console.log("Datos almacenados:", parsedData);

        // Puedes añadir validaciones adicionales aquí si es necesario
        if (
          parsedData &&
          parsedData.user &&
          parsedData.user.id &&
          parsedData.user.email
        ) {
          setUser(parsedData.user);
        } else {
          console.warn(
            "El usuario almacenado no tiene la estructura correcta."
          );
        }
      } catch (error) {
        console.error("Error al parsear el usuario almacenado:", error);
      }
    }
  }, []);

  const login = (userData: IRegisterUser) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
