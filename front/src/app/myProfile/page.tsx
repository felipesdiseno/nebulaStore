"use client";
import React from "react";
import { useAuth } from "@/context/authContext";

const ProfilePage = () => {
  const { user } = useAuth();

  if (!user) {
    return <p>No estás autenticado</p>;
  }

  return (
    <div className="bg-gray-400 max-w-md mx-auto p-6 mt-10 rounded-xl shadow-lg">
      <div className="flex justify-center">
        <h1 className="text-3xl font-bold text-white mb-6">
          Perfil de Usuario
        </h1>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-md">
        <p className="text-lg">
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
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Editar Perfil
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
