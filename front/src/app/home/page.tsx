"use client";

import ProductList from "@/components/Productlist/ProductList";
import { IProduct } from "@/interfaces/IProduct";
import { useState, useEffect } from "react";
import ToastedAlert from "@/components/ToastedALert";
import Swal from "sweetalert2";
import { useAuth } from "@/context/authContext";
import { useRouter } from "next/navigation";

function Home() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [showAlert, setShowAlert] = useState(false);
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch(
        "https://pm4fsdeploy-7.onrender.com/products"
      );
      const products = await response.json();
      setProducts(products);
    }

    fetchProducts();
  }, []);

  const handleAddToCart = () => {
    if (user) {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 2000);
    } else {
      Swal.fire({
        title: "Debes estar logueado",
        text: "Por favor, inicia sesión o regístrate para agregar productos al carrito.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Iniciar sesión",
        cancelButtonText: "Cancelar",
        customClass: {
          cancelButton: "swal2-cancel",
        },
      }).then((result) => {
        if (result.isConfirmed) {
          router.push("/authentication");
        }
      });
    }
  };

  return (
    <div className="p-4 m-2">
      <div className="m-4 p-6 bg-gray-200 rounded-xl max-w-4xl mx-auto shadow-xl ">
        <h1 className="text-3xl text-gray-500 font-bold mb-4">
          Nuestra selección para ti
        </h1>
        <div className="gird grid-cols-2 gap-4 auto-rows-auto ">
          <ProductList products={products} onAddToCart={handleAddToCart} />
        </div>
      </div>
      {showAlert && <ToastedAlert />}
    </div>
  );
}
export default Home;
