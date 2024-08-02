"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/context/authContext";
import IregisterUser from "../../interfaces/IRegister";

export default function Profile() {
  const { userId } = useAuth();
  const [profileData, setProfileData] = useState<IregisterUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (userId) {
      fetch(`http://localhost:5000/users/${userId}`)
        .then((response) => response.json())
        .then((data: IregisterUser) => {
          setProfileData(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching profile data:", error);
          setLoading(false);
        });
    }
  }, [userId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!profileData) {
    return <p>Error loading profile data.</p>;
  }

  return (
    <div className="max-w-screen-md mx-auto my-10">
      <h1 className="text-3xl font-bold mb-6">Mi Perfil</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <p>
          <strong>Nombre:</strong> {profileData.first_name}{" "}
          {profileData.last_name}
        </p>
        <p>
          <strong>Email:</strong> {profileData.email}
        </p>
        <p>
          <strong>Dirección:</strong> {profileData.address}
        </p>
        <p>
          <strong>Teléfono:</strong> {profileData.phone}
        </p>
      </div>
    </div>
  );
}
