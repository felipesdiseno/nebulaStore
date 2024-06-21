import ProductList from "@/components/productList";
import { product } from "../../../public/data";

function Home() {
  return (
    <div>
      <h1>Home*</h1>
      <ProductList products={product} />
    </div>
  );
}
export default Home;
