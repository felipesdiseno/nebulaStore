import IProductsList from "@/interfaces/IProductsProps";

import Card from "../card";
import { IProduct } from "@/interfaces/IProduct";
function ProductList({ products }: IProductsList) {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-3 grid-rows-2 gap-4">
        {/* <h1>Productos</h1> */}
        {products.map((product: IProduct) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
