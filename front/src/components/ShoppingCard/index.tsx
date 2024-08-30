"use client";

import CartItem from "../CartItem";
import { CartContext } from "../../context/cartContext";
import { useContext } from "react";

function ShoppingCart() {
  const cartContext = useContext(CartContext);
  if (!cartContext) {
    // Maneja el caso en que el contexto es undefined
    return <div>Error: No se puede acceder al carrito.</div>;
  }

  const { cartItems, removeFromCart, total } = cartContext;
  return (
    <div>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div key={item.id}>
            <CartItem product={item} remove={() => removeFromCart(item.id)} />
          </div>
        ))
      ) : (
        <div className="text-center text-3xl text-white">
          Tu carrito está vacio
        </div>
      )}
      {total < 0 && (
        <div>
          <p>TOTAL: {total}</p>
          <button>COMPRAR</button>
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;
