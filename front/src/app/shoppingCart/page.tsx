"use client";

function ShoppingCart() {
  const products: any = [];
  return (
    <div className="bg-gray-200 w-3/4 mx-auto my-8 p-4 rounded-lg shadow-lg">
      <div className=" mt-2 ">
        <div className="flex flex-row justify-between text-gray-600 space-x-48 text-4xl items-center p-4">
          <div>
            <span>Producto</span>
          </div>
          <div>
            <span>Cantidad</span>
          </div>
          <div>
            <span>Precio</span>
          </div>

          <div>
            <span>Eliminar</span>
          </div>
        </div>
        {!products.current ? (
          <div>No hay productos</div>
        ) : (
          <div>Aqui van los productos</div>
        )}
      </div>
      <span className="text-3xl " style={{ paddingLeft: "650px" }}>
        TOTAL:
      </span>
    </div>
  );
}

export default ShoppingCart;
