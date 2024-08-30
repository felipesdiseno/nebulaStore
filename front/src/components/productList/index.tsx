"use client";

import Card from "../card";
import IProductsList from "@/interfaces/IProductsList";
import { IProduct } from "@/interfaces/IProduct";

export default function ProductList({ products, onAddToCart }: IProductsList) {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-3 grid-rows-2 gap-4">
        {products.map((product: IProduct) => (
          <Card key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
}
