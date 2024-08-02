"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { IProduct } from "../../interfaces/IProduct";
import Link from "next/link";

function PurchaseConfirmation() {
  const searchParams = useSearchParams();
  const [purchasedItems, setPurchasedItems] = useState<IProduct[]>([]);

  useEffect(() => {
    const items = searchParams.get("items");
    if (typeof items === "string") {
      setPurchasedItems(JSON.parse(items));
    }
  }, [searchParams]);

  return (
    <div className="max-w-screen-md mx-auto my-10">
      <h1 className="text-3xl font-bold mb-6">Confirmación de Compra</h1>
      {purchasedItems.length > 0 ? (
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl mb-4">Productos Comprados:</h2>
          <ul>
            {purchasedItems.map((item) => (
              <li key={item.id} className="mb-2">
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No hay productos en la compra.</p>
      )}
      <div className="flex justify-center">
        <div className="  mt-6 inline-block bg-purple-500 text-white font-bold py-2 px-4 rounded hover:bg-purple-600 transition duration-300 ">
          <Link href="/home">Seguir comprando</Link>
        </div>
      </div>
    </div>
  );
}

export default PurchaseConfirmation;
