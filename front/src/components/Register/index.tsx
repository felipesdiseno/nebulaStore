"use client";

import { useState, FormEvent } from "react";
import { useAuth } from "@/context/authContext";
import IRegisterFormData from "@/interfaces/IRegisterFormData";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

function Register() {
  const [formData, setFormData] = useState<IRegisterFormData>({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    address: "",
    phone: "",
  });

  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const fullName = `${formData.first_name} ${formData.last_name}`;

    const dataToSend = {
      ...formData,
      name: fullName,
    };

    try {
      const response = await fetch(
        "pm4fsdeploy-7.onrender.com/users/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataToSend),
        }
      );

      if (response.ok) {
        const data = await response.json();

        await login({
          email: formData.email,
          password: formData.password,
        });

        Swal.fire({
          title: "Bienvenido!",
          text: "Registro exitoso con: " + formData.email,
          icon: "success",
        }).then(() => {
          router.push("/home");
        });
      } else {
        const errorData = await response.json();

        Swal.fire({
          title: "Oops!",
          text: "El usuario ya existe",
          icon: "warning",
        });
      }
    } catch (error) {
      console.error("Error durante el registro:", error);
      Swal.fire({
        title: "Error",
        text: "Error durante el registro. Por favor, intenta nuevamente.",
        icon: "error",
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-gray-200 p-2 shadow-xl rounded-xl flex items-center justify-center">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <h1 className="text-3xl pb-2 text-gray-500">Registrarse</h1>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="first_name"
            id="floating_first_name"
            className="block py-2.5 px-0 w-full text-sm text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=""
            value={formData.first_name}
            onChange={handleChange}
            required
          />
          <label
            htmlFor="floating_first_name"
            className="peer-focus:font-medium absolute text-sm text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Nombre
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="last_name"
            id="floating_last_name"
            className="block py-2.5 px-0 w-full text-sm text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=""
            value={formData.last_name}
            onChange={handleChange}
            required
          />
          <label
            htmlFor="floating_last_name"
            className="peer-focus:font-medium absolute text-sm text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Apellido
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="tel"
            name="phone"
            id="floating_phone"
            value={formData.phone}
            onChange={handleChange}
            className="block py-2.5 px-0 w-full text-sm text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=""
            required
          />
          <label
            htmlFor="floating_phone"
            className="peer-focus:font-medium absolute text-sm text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Teléfono
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="email"
            id="floating_email"
            value={formData.email}
            onChange={handleChange}
            className="block py-2.5 px-0 w-full text-sm text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=""
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
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="address"
            id="floating_address"
            value={formData.address}
            onChange={handleChange}
            className="block py-2.5 px-0 w-full text-sm text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=""
            required
          />
          <label
            htmlFor="floating_address"
            className="peer-focus:font-medium absolute text-sm text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Dirección
          </label>
        </div>
        <button
          type="submit"
          className="block mx-auto text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Registrarse
        </button>
      </form>
    </div>
  );
}

export default Register;
