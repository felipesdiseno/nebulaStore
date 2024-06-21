import { IProduct } from "@/interfaces/IProduct";
import Image from "next/image";

function Card({ product }: { product: IProduct }) {
  return (
    <div>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>Detalles: {product.description}</p>
      <h1> Stock: {product.stock} und.</h1>
      <h1>Precio: ${product.price}</h1>
      <button>Agregar a carrito</button>
    </div>
  );
}

export default Card;
