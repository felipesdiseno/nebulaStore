import { FaRegCheckCircle } from "react-icons/fa";

export default function ToastedALert() {
  return (
    <div className=" fixed bottom-10 left-1/2 transform -translate-x-1/2 flex items-center justify-center bg-blue-200  p-2 rounded-full w-1/4 shadow-lg z-50 transition-opacity duration-500">
      <FaRegCheckCircle className="w-6 h-6 text-gray-600" />
      <p className="ml-2 text-lg font-bold text-gray-600">
        Se ha enviado el producto al carrito de compras!
      </p>
    </div>
  );
}
