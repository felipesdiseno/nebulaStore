"use client";

import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useAuth } from "@/context/authContext";
import { PiShoppingCartSimpleBold } from "react-icons/pi";

export default function Navbar() {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [user]);

  return (
    <nav className="bg-white border-b border-gray-200 shadow-md sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 py-2">
        <Link href="/">
          <div className="flex items-center p-1 rounded-md space-x-4 text-gray-500 hover:cursor-pointer  hover:text-gray-300 transition duration-300">
            <Image
              src="/icons/nebula3.png"
              alt="nebula"
              width={80}
              height={80}
            />
            <h3 className="text-3xl font-bold">Nebula Store</h3>
          </div>
        </Link>

        <div className="flex items-center space-x-4">
          <Link
            href="/home"
            className="p-1 text-gray-500 rounded-md text-2xl hover:text-blue-500 hover:bg-gray-300 transition duration-300"
          >
            Catalogo
          </Link>
          <Link
            href="/about"
            className="p-1 text-gray-500 rounded-md text-2xl hover:text-blue-500 hover:bg-gray-300 transition duration-300"
          >
            Acerca de
          </Link>
          {user && (
            <Link
              href="/shoppingCart"
              className="p-1   text-2xl  transition duration-300"
            >
              <PiShoppingCartSimpleBold className="h-10 w-10  text-blue-400 rounded-xl p-1 hover:text-blue-500  hover:bg-gray-200 transition duration-300" />
            </Link>
          )}
          <div className="  p-2 rounded-full flex flex-row items-center">
            <div ref={menuRef} className="relative">
              <button onClick={toggleMenu} className="focus:outline-none">
                <FaUserCircle
                  className={`h-7 w-7 mt-2 ml-2 ${
                    user ? "text-blue-500" : "text-gray-400"
                  } hover:text-blue-500`}
                />
              </button>
              {isMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white  shadow-lg rounded-lg py-1">
                  {user ? (
                    <>
                      <Link
                        href="/myProfile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Mi Perfil
                      </Link>
                      <Link
                        href="/purchaseConfirmation"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Mis Órdenes
                      </Link>
                      <button
                        onClick={logout}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Cerrar Sesión
                      </button>
                    </>
                  ) : (
                    <Link
                      href="/authentication"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Iniciar Sesión
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
