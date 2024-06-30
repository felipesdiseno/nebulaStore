import DetailsCard from "../DetailsCard";
import LazyLoad from "react-lazyload";
import { IProduct } from "@/interfaces/IProduct";
import { useState } from "react";

function Card({ product }: { product: IProduct }) {
  const [showDetails, setShowDetails] = useState(false);

  const showDetailsCard = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-xs mx-auto my-4 m-4 p-4 relative">
      <LazyLoad height={200} once>
        <div
          className="mb-6 rounded-sm"
          style={{ height: "200px", width: "230px" }}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
      </LazyLoad>
      <div className="mb-4">
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
