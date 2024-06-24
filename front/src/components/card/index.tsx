"use client";
import { IProduct } from "@/interfaces/IProduct";
import Link from "next/link";
import DetailsCard from "../DetailsCard";
import { useState } from "react";

// import Image from "next/image";

function Card({ product }: { product: IProduct }) {
  const [showDetails, setShowDetails] = useState(false);

  const showDetailsCard = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-xs mx-auto my-4">
      <div>
        <img src={product.image} alt={product.name} className="" />
      </div>
      <h2>{product.name}</h2>

      <h1> Stock: {product.stock} und.</h1>
      <h1>Precio: ${product.price}</h1>

      <button
        onClick={showDetailsCard}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4 hover:bg-blue-700 transition duration-300"
      >
        {showDetails ? "Ocultar detalles" : "Ver detalles"}
      </button>

      {showDetails && <DetailsCard product={product} />}
    </div>
  );
}

export default Card;
