"use client";
import { useState } from "react";

export default function ShoppingCart() {
  // Aquí puedes definir el estado del carrito si es necesario
  const [isOpen, setIsOpen] = useState(false);

  // Función para abrir/cerrar el modal
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center justify-center py-8">
      {/* Botón para abrir el modal */}
      <button
        onClick={toggleModal}
        className="py-2 px-10 rounded bg-indigo-600 hover:bg-indigo-700 text-white"
      >
        Open Modal
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="w-full h-full bg-black dark:bg-gray-900 bg-opacity-90 top-0 overflow-y-auto overflow-x-hidden fixed sticky-0">
          <div className="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700">
            <div
              className="flex items-end lg:flex-row flex-col justify-end"
              id="cart"
            >
              {/* Contenido del carrito aquí */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
