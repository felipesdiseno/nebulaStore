"use client";

import React, { useState, FormEvent } from "react";
import ILoginUser from "../../interfaces/ILogin";
import { useAuth } from "@/context/authContext";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

function Login() {
  const [formData, setFormData] = useState<ILoginUser>({
    email: "",
    password: "",
  });

  const { login } = useAuth(); // Usamos el hook de autenticación para acceder a la función login
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();

        // Aquí asumimos que el backend devuelve un objeto con los datos del usuario o un token
        // Ajusta esto según la estructura de respuesta de tu backend
        if (data.user) {
          login(data.user); // Si el backend devuelve el objeto del usuario
        } else if (data.token) {
          // Si el backend devuelve un token, podrías necesitar decodificarlo o guardarlo en el contexto
          login({ token: data.token });
        }

        Swal.fire({
          title: "Bienvenido!",
          text: "Inicio de sesión exitoso con: " + formData.email,
          icon: "success",
        });

        router.push("/home");
      } else {
        const errorData = await response.json();

        Swal.fire({
          title: "Oops!",
          text:
            errorData.message ||
            "No se pudo iniciar sesión. Usuario o contraseña incorrectos.",
          icon: "warning",
        });
      }
    } catch (error) {
      console.error("Error durante el inicio de sesión:", error);
      Swal.fire({
        title: "Error",
        text: "Error durante el inicio de sesión. Por favor, intenta nuevamente.",
        icon: "error",
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <h1 className="text-3xl pb-2 text-gray-500">Iniciar sesión</h1>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="email"
          name="email"
          id="floating_email"
          className="block py-2.5 px-0 w-full text-sm text-gray-600 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=""
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label
          htmlFor="floating_email"
          className="peer-focus:font-medium absolute text-sm text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Email
        </label>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="password"
          name="password"
          id="floating_password"
          value={formData.password}
          onChange={handleChange}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=""
          required
        />
        <label
          htmlFor="floating_password"
          className="peer-focus:font-medium absolute text-sm text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Password
        </label>
      </div>

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      >
        Iniciar sesión
      </button>
    </form>
  );
}

export default Login;
