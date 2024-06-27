import { IProduct } from "@/interfaces/IProduct";

export default function DetailsCard({ product }: { product: IProduct }) {
  return (
    <div>
      <p>Detalles: {product.description}</p>
    </div>
  );
}
