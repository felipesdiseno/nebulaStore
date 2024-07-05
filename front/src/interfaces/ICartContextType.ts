import { IProduct } from "./IProduct";

interface ICartContextType {
  cartItems: IProduct[];
  addToCart: (productId: number) => void;
  removeFromCart: (productId: number) => void;
  total: number;
}

export default ICartContextType;
