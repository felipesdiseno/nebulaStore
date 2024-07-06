import { IProduct } from "./IProduct";

interface IProductCardItem {
  product: IProduct;
  remove: () => void;
}

export default IProductCardItem;
