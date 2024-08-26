import { CartContext } from "@/context/cartContext";
import DetailsCard from "../DetailsCard";
import { IProduct } from "@/interfaces/IProduct";
import LazyLoad from "react-lazyload";
import { useState, useContext } from "react";

function Card({
  product,
  onAddToCart,
}: {
  product: IProduct;
  onAddToCart: () => void;
}) {
  const [showDetails, setShowDetails] = useState(false);

  const { addToCart } = useContext(CartContext);

  const showDetailsCard = () => {
    setShowDetails(!showDetails);
  };
  const handleAddToCart = () => {
    addToCart(product.id);
    onAddToCart();
  };

  return (
    <div className="bg-gray-100 shadow-lg rounded-lg overflow-hidden max-w-xs mx-auto  m-1 p-4 relative shadow-md">
      <LazyLoad height={200} once>
        <div className="mb-2 rounded-md h-56 w-56 shadow-md">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </LazyLoad>
      <div className="mb-2">
        <h2 className="text-xl font-semibold">{product.name}</h2>
        <h3 className="text-gray-600">Stock: {product.stock} und.</h3>
        <h3 className="text-gray-600">Precio: ${product.price}</h3>
      </div>
      <div className="flex justify-between">
        <button
          onClick={showDetailsCard}
          className={`bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300 ${
            showDetails ? "bg-red-500" : ""
          }`}
          style={{
            zIndex: 10,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {showDetails ? "Ocultar detalles" : "Ver detalles"}
        </button>

        <button
          onClick={handleAddToCart}
          className={`bg-purple-500 text-white font-bold py-2 px-4 rounded hover:bg-purple-600 transition duration-300`}
        >
          <img src="/icons/cart.svg" alt="carrito" className="h-6 w-6" />
        </button>
      </div>
      {showDetails && (
        <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-white opacity-95 flex items-center justify-center p-4">
          <DetailsCard product={product} />
        </div>
      )}
    </div>
  );
}

export default Card;
