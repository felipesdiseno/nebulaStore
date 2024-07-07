"use client";

import IregisterUser from "@/interfaces/IRegister";
import { useEffect, useState } from "react";

function MyProfile() {
  const [userData, setUserData] = useState<IregisterUser>();

  useEffect(() => {
    fetch("http://localhost:5000/users/register", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener los datos del perfil");
        }
        return response.json();
      })
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => {
        console.error("Error al obtener los datos del perfil:", error);
      });
  }, []);

  if (!userData) {
    return <p>Cargando perfil...</p>;
  }

  return (
    <div>
      <h1>Perfil de Usuario</h1>
      <p>Nombre: {userData.first_name}</p>
      <p>Nombre: {userData.last_name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default MyProfile;
