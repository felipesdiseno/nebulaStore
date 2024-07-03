import { IProduct } from "./IProduct";

interface ICartContextType {
  cartItems: IProduct[];
  addToCart: (product: IProduct) => void;
  removeFromCart: (productId: number) => void;
  total: number;
}

export default ICartContextType;
