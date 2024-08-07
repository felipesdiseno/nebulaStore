import { IProduct } from "./IProduct";
interface IProductsList {
  products: IProduct[];
  onAddToCart: () => void;
}

export default IProductsList;
