import { IProduct } from "@/interfaces/IProduct";

export default function DetailsCard({ product }: { product: IProduct }) {
  return (
    <div>
      <h1>detalles</h1>
      <p>Detalles: {product.description}</p>
    </div>
  );
}
