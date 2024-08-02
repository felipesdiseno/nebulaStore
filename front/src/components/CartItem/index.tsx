import IProductCardItem from "@/interfaces/IProductCardItem";

function CartItem({ product, remove }: IProductCardItem) {
  return (
    <div className="flex items-center p-4 border-b border-gray-200">
      <img
        src={product.image}
        alt={product.name}
        className="w-16 h-16 object-cover rounded-md"
      />
      <div className="ml-4 flex-1">
        <span className="block font-semibold text-lg">{product.name}</span>
        <span className="block text-gray-600">${product.price}</span>
      </div>
      <div>
        <button onClick={remove} className="text-red-500 hover:text-red-700">
          X
        </button>
      </div>
    </div>
  );
}

export default CartItem;
