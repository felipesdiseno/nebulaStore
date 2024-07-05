import { Request, Response } from "express";
import { catchedController } from "../utils/catchedController";
import { getProductsService } from "../services/products.service";
import { getProductByIdService } from "../services/products.service";
export const getProducts = catchedController(
  async (req: Request, res: Response) => {
    const products = await getProductsService();
    res.json(products);
  }
);

export const getProductById = async (req: Request, res: Response) => {
  const productId = parseInt(req.params.id);
  try {
    const product = await getProductByIdService(productId);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error fetching product" });
  }
};
