"use client";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IProduct } from "../../interfaces/IProduct";

function PurchaseConfirmation() {
  const router = useRouter();
  const [purchasedItems, setPurchasedItems] = useState<IProduct[]>([]);

  useEffect(() => {
    if (router.query.items) {
      const items = JSON.parse(router.query.items as string);
      setPurchasedItems(items);
    }
  }, [router.query.items]);

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
    </div>
  );
}

export default PurchaseConfirmation;
