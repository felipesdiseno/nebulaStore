"use client";

import { BsCart4 } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      menuRef.current &&
      menuRef.current.contains &&
      !menuRef.current.contains(event.target as Node)
    ) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white border-b border-gray-200 shadow-md sticky top-0 z-10">
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center p-1 rounded-md bg-none space-x-4 text-gray-500 hover:cursor-pointer hover:text-white hover:bg-gray-300 transition duration-300">
          <Image src="/icons/nebula.png" alt="nebula" width={50} height={50} />
          <h3 className="text-3xl ">Nebula Store</h3>
        </div>

        <div className="flex items-center space-x-4">
          <Link
            href="/home"
            className="p-1 text-gray-500 rounded-md text-2xl hover:text-blue-500 hover:bg-gray-300 transition duration-300"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="p-1 text-gray-500 rounded-md text-2xl hover:text-blue-500 hover:bg-gray-300 transition duration-300"
          >
            About
          </Link>
          <Link
            href="/authentication"
            className="p-1 text-gray-500 rounded-md text-2xl hover:text-blue-500 hover:bg-gray-300 transition duration-300"
          >
            Ingresar
          </Link>
          <Link href="/shoppingCart" className="">
            <BsCart4 className="h-10 w-10 rounded-lg text-blue-400 p-1 hover:text-blue-500 hover:bg-gray-300 transition duration-300" />
          </Link>
          <div ref={menuRef} className="relative">
            <button onClick={toggleMenu} className="focus:outline-none">
              <FaUserCircle className="h-7 w-7 text-gray-400 hover:text-blue-500" />
            </button>
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg py-1">
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
                <Link
                  href="/logout"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Cerrar Sesión
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
