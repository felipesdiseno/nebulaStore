import ShoppingCard from "@/components/ShoppingCard";

function ShoppingCart() {
  return (
    <div>
      <h1>Mi carrito de compras:</h1>
      <ShoppingCard />

      <button>Comprar</button>
    </div>
  );
}

//renderiza el carrito de compras
export default ShoppingCart;
