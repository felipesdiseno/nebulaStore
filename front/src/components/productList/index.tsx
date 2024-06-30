"use client";

import Card from "../card";
import IProductsList from "@/interfaces/IProductsProps";
import { IProduct } from "@/interfaces/IProduct";

function ProductList({ products }: IProductsList) {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-3 grid-rows-2 gap-4">
        {products.map((product: IProduct) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
