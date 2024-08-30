"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";
import AuthContextType from "@/interfaces/IAuthContextType";
import IUser from "@/interfaces/IUser";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        const parsedData: IUser = JSON.parse(storedUser);
        if (parsedData && parsedData.id && parsedData.email) {
          setUser(parsedData);
        } else {
          console.warn(
            "El usuario almacenado no tiene la estructura correcta."
          );
        }
      }
    } catch (error) {
      console.error("Error al parsear el usuario almacenado:", error);
      localStorage.removeItem("user");
    }
  }, []);

  const login = async (data: {
    email: string;
    password: string;
  }): Promise<string> => {
    try {
      const { email, password } = data;
      console.log("Datos enviados:", { email, password });
      const response = await fetch(
        "https://pm4fsdeploy-7.onrender.com/users/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: data.email, password: data.password }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Email o contraseña incorrectos.");
      }

      const { user, token }: { user: IUser; token: string } =
        await response.json();
      console.log("Usuario autenticado:", user);

      setUser(user);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);

      return "Inicio de sesión exitoso.";
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error durante el inicio de sesión:", error.message);
        return (
          error.message || "Error al iniciar sesión. Verifica tus credenciales."
        );
      } else {
        console.error("Error desconocido durante el inicio de sesión:", error);
        return "Error desconocido durante el inicio de sesión.";
      }
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout }}>
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
