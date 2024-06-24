import IProductsList from "@/interfaces/IProductsProps";

import Card from "../card";
import { IProduct } from "@/interfaces/IProduct";
function ProductList({ products }: IProductsList) {
  return (
    <div>
      {/* <h1>Productos</h1> */}
      {products.map((product: IProduct) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
