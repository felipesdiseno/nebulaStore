import Image from "next/image";
import Card from "@/components/card/Card";
import products from "@/data/products";
export default function Products() {
  return (
    <div>
      <h1>Productos</h1>
      {products.map((products, index) => (
        <Card key={index} {...products} />
      ))}
    </div>
  );
}
