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
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const response = await fetch(
            "https://pm4fsdeploy-7.onrender.com/users",
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            }
          );

          if (response.ok) {
            const userData: IUser = await response.json();
            setUser(userData);
          } else {
            console.warn("No se pudo verificar el usuario.");
          }
        }
      } catch (error) {
        console.error("Error al verificar la autenticación:", error);
      }
    };

    checkAuth();
  }, []);

  const login = async (data: {
    email: string;
    password: string;
  }): Promise<string> => {
    try {
      const response = await fetch("pm4fsdeploy-7.onrender.com/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Email o contraseña incorrectos.");
      }

      const { user, token }: { user: IUser; token: string } =
        await response.json();
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
