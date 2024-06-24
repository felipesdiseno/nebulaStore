import ProductList from "@/components/ProductList";
import { product } from "../../../public/data";

function Home() {
  return (
    <div className="max-w-6x1 mx-auto px-4">
      <h1>elegidos para ti</h1>
      <ProductList products={product} />
    </div>
  );
}
export default Home;
