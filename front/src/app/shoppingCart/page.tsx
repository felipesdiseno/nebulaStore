"use client";

import { useContext } from "react";
import { IProduct } from "../../interfaces/IProduct";
import { IoAlertCircleOutline } from "react-icons/io5";
import { CartContext } from "../../context/cartContext";
import { useRouter } from "next/navigation";
const CartItem = ({
  product,
  remove,
}: {
  product: IProduct;
  remove: () => void;
}) => (
  <div className=" mt-2 flex justify-between items-center p-2 bg-gray-100 rounded-lg">
    <div className="flex items-center w-1/3 ">
      <img
        src={product.image}
        alt={product.name}
        className="w-24 h-24 mr-4 rounded-lg"
      />
      <div className="text-bold ml-2">{product.name}</div>
    </div>
    <div className="w-1/3 text-center">${product.price}</div>
    <div className="flex w-1/3 justify-center">
      <button
        onClick={remove}
        className="bg-blue-500 text-white font-bold py-2 px-auto rounded-lg hover:bg-blue-700 transition duration-300 ml-2 w-10 text-center"
      >
        X
      </button>
    </div>
  </div>
);

function ShoppingCart() {
  const { cartItems, removeFromCart, total } = useContext(CartContext);
  const router = useRouter();

  const handlePurchase = () => {
    if (cartItems.length > 0) {
      const items = JSON.stringify(cartItems);
      localStorage.setItem("purchasedItems", items);
      router.push(`/purchaseConfirmation?items=${encodeURIComponent(items)}`);
    }
  };

  return (
    <div className="bg-gray-200 w-3/4 mx-auto my-8 p-4 rounded-lg shadow-lg">
      <div className="mt-2">
        <div className="flex flex-row justify-between text-gray-600 text-2xl font-bold items-center p-4 border-b border-gray-300">
          <div className="w-1/3 ">Producto</div>
          <div className="w-1/3 text-center">Precio</div>
          <div className="w-1/3 text-center">Eliminar</div>
        </div>
        {cartItems.length > 0 ? (
          cartItems.map((product) => (
            <CartItem
              key={product.id}
              product={product}
              remove={() => removeFromCart(product.id)}
            />
          ))
        ) : (
          <div className="text-center text-3xl text-gray-600 py-6 flex flex-col">
            <IoAlertCircleOutline className="w-20 h-20 font-bold text-purple-500 mx-auto mt-4" />
            El carrito está vacío
          </div>
        )}
      </div>
      {total > 0 && (
        <div className="text-right p-4">
          <span className="text-3xl font-bold mr-4 text-gray-700">
            TOTAL: ${total}
          </span>
          <button
            onClick={handlePurchase}
            className="bg-purple-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-purple-600 transition duration-300"
          >
            COMPRAR
          </button>
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;
