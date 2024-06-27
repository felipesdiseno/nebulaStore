"use client";
import ProductList from "@/components/ProductList";
import { product } from "../../../public/data";

function Home() {
  return (
    <div className="m-4 p-6 bg-gray-400 rounded-md max-w-4xl mx-auto">
      <h1 className="text-3xl text-white">Nuestra selección para ti</h1>
      <div className="gird grid-cols-2 gap-4 auto-rows-auto ">
        <ProductList products={product} />
      </div>
    </div>
  );
}
export default Home;
