"use client";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import CartItem from "../CartItem";

function ShoppingCart() {
  const { cartItems, removeFromCart, total } = useContext(CartContext);

  return (
    <div>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div key={item.id}>
            <CartItem product={item} remove={() => removeFromCart(item.id)} />
          </div>
        ))
      ) : (
        <div>Tu carrito está vacio</div>
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
