"use client";

import Link from "next/link";
import Image from "next/image";
import { BsCart4 } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
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
      "contains" in menuRef.current &&
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
    <nav className="bg-white border-b-2">
      <div className="max-w-screen-xl flex items-center justify-between mx-1 px-6 py-2">
        <div className="flex items-center space-x-6">
          <Image src="/icons/nebula.png" alt="nebula" width={50} height={50} />
          <h3 className="text-3xl text-gray-500">Nebula Store</h3>
        </div>

        <div className="flex items-center space-x-6 ml-auto">
          <Link
            href="/home"
            className="text-gray-500 text-2x1 hover:text-blue-500 "
          >
            Home
          </Link>
          <Link href="/about" className="text-gray-500 hover:text-blue-500">
            About
          </Link>
          <Link
            href="/authentication"
            className="text-gray-500 hover:text-blue-500"
          >
            Ingresar
          </Link>
          <Link href="/shoppingCart" className="">
            <BsCart4 className="h-7 w-7 text-blue-400 hover:text-blue-500 bg-blue" />
          </Link>
          <div ref={menuRef} className="relative">
            <button onClick={toggleMenu} className="focus:outline-none">
              <FaUserCircle className="h-7 w-7 text-gray-400 hover:text-blue-500 bg-blue" />
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
                  href="/orders"
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
