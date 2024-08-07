"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { IProduct } from "../../interfaces/IProduct";
import { IoAlertCircleOutline } from "react-icons/io5";
import Link from "next/link";

function PurchaseConfirmation() {
  const [purchasedItems, setPurchasedItems] = useState<IProduct[]>([]);

  useEffect(() => {
    const items = localStorage.getItem("purchasedItems");
    if (items) {
      setPurchasedItems(JSON.parse(items));
    }
  }, []);

  return (
    <div className="max-w-screen-md mx-auto my-10 bg-gray-200 p-6 rounded-xl shadow-lg">
      {purchasedItems.length > 0 ? (
        <>
          <h1 className="text-3xl font-bold mb-6 text-gray-700">
            ¡Gracias por tu compra!
          </h1>
          <p className="mb-4 text-lg text-gray-700">
            Tu compra se ha procesado con éxito. Aquí están los detalles de los
            productos que has adquirido:
          </p>
          <div className="bg-gray-50 shadow-md rounded-lg p-6">
            <h2 className="text-2xl mb-4 text-gray-700">
              Productos Comprados:
            </h2>
            <ul>
              {purchasedItems.map((item) => (
                <li
                  key={item.id}
                  className="mb-4 flex items-center justify-between text-gray-700 border-b border-gray-300 pb-4"
                >
                  <div className="flex items-center space-x-4">
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                    )}
                    <span className="flex-1">{item.name}</span>
                  </div>
                  <span>${item.price.toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-gray-700">
              * Recibirás un correo electrónico de confirmación con los detalles
              de tu pedido y el estado del envío.
            </p>
          </div>
        </>
      ) : (
        <div className="text-center">
          <IoAlertCircleOutline className="w-20 h-20 font-bold text-blue-600 mx-auto" />
          <p className="text-lg text-gray-600 font-bold ">
            Tu carrito está vacío por ahora. ¡Descubre nuestros productos y
            comienza a comprar!
          </p>
        </div>
      )}
      <div className="flex justify-center mt-6">
        <Link
          href="/home"
          className="bg-purple-500 text-white font-bold py-2 px-4 rounded hover:bg-purple-600 transition duration-300"
        >
          Seguir comprando
        </Link>
      </div>
    </div>
  );
}

export default PurchaseConfirmation;
