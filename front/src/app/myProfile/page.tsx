"use client";
import React from "react";
import { useAuth } from "@/context/authContext";
import { useRouter } from "next/navigation";
import { IoAlertCircleOutline } from "react-icons/io5";

const ProfilePage = () => {
  const { user } = useAuth();
  const router = useRouter();

  if (!user) {
    return (
      <div className="bg-gray-200 max-w-md mx-auto p-6 mt-10 rounded-xl shadow-lg">
        <div className="flex justify-center flex flex-col bg-gray-100 p-6 rounded-xl shadow-md">
          <p className="text-xl font-bold text-gray-600 mx-auto">
            Aún no has iniciado sesión
          </p>
          <IoAlertCircleOutline className="w-20 h-20 font-bold text-gray-600 mx-auto mt-4" />
          <button
            onClick={() => router.push("/authentication")}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 mt-6"
          >
            Iniciar sesión
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-200 max-w-md mx-auto p-6 mt-10 rounded-xl shadow-lg">
      <div className="flex justify-center">
        <h1 className="text-3xl font-bold text-gray-600 mb-6">
          Perfil de Usuario
        </h1>
      </div>
      <div className="bg-gray-100 p-6 rounded-xl shadow-md text-gray-700">
        <p className="text-lg ">
          <strong>Nombre:</strong> {user.name}
        </p>
        <p className="text-lg">
          <strong>Email:</strong> {user.email}
        </p>
        <p className="text-lg">
          <strong>Dirección:</strong> {user.address}
        </p>
        <p className="text-lg">
          <strong>Teléfono:</strong> {user.phone}
        </p>
        <div className="flex justify-center">
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">
            Editar Perfil
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
