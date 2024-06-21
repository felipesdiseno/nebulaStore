import { IProducts } from "@/interfaces/IProducts";

export default function Card({
  name,
  price,
  description,
  image,
  stock,
  categoryId,
}: IProducts) {
  return (
    <div>
      <h1>{name}</h1>
      <img src={image} alt={name} />
      <p>Detalles: {description}</p>
      <h1> Stock: {stock} und.</h1>
      <h1>Precio: ${price}</h1>
    </div>
  );
}
