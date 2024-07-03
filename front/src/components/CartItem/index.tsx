import IProductCardItem from "@/interfaces/IProductCardItem";
function CartItem({ product, remove }: IProductCardItem) {
  return (
    <div>
      <div>
        <img src={product.image} alt={product.name} />
        <span>{product.name}</span>
      </div>
      <div>${product.price}</div>
      <div>
        <button onClick={remove}>X</button>
      </div>
    </div>
  );
}

export default CartItem;
