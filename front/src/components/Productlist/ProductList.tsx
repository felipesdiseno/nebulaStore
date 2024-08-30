"use client";

import Card from "../card";
import IProductsList from "@/interfaces/IProductsList";
import { IProduct } from "@/interfaces/IProduct";

const ProductList: React.FC<IProductsList> = ({ products, onAddToCart }) => {
  return (
    <div className="flex justify-center shadow-sm">
      <div className="grid grid-cols-3 grid-rows-2 gap-4">
        {products.map((product: IProduct) => (
          <Card key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
};
export default ProductList;
