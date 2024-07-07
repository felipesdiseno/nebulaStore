"use client";
import { useContext } from "react";
import { IProduct } from "../../interfaces/IProduct";
import { CartContext } from "../../context/cartContext";

const CartItem = ({
  product,
  remove,
}: {
  product: IProduct;
  remove: () => void;
}) => (
  <div className="flex justify-between items-center p-4">
    <div>{product.name}</div>

    <div>{product.price}</div>
    <button onClick={remove} className="bg-red-500 text-white p-2 rounded">
      X
    </button>
  </div>
);

function ShoppingCart() {
  const { cartItems, removeFromCart, total } = useContext(CartContext);
console.log(cartItems)
  return (
    <div className="bg-gray-200 w-3/4 mx-auto my-8 p-4 rounded-lg shadow-lg">
      <div className="mt-2">
        <div className="flex flex-row justify-between text-gray-600 space-x-48 text-4xl items-center p-4">
          <div>
            <span>Producto</span>
          </div>

          <div>
            <span>Precio</span>
          </div>
          <div>
            <span>Eliminar</span>
          </div>
        </div>
        {cartItems.length > 0 ? (
          cartItems.map((product, index) => {
            console.log(`Producto ${index + 1}:`, product);
            return (
              <CartItem
                key={product.id}
                product={product}
                remove={() => removeFromCart(product.id)}
              />
            );
          })
        ) : (
          <div>El carrito está vacío</div>
        )}
      </div>
      {total > 0 && (
        <div className="text-3xl text-right p-4">
          <span className="text-3xl" style={{ paddingLeft: "650px" }}>
            TOTAL: ${total}
          </span>
          <button className="bg-green-500 text-white p-4 rounded ml-4">
            COMPRAR
          </button>
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;
