"use client";
import { IProduct } from "../interfaces/IProduct";
import ICartContextType from "../interfaces/ICartContextType";
import { useEffect, createContext, useState, ReactNode } from "react";

export const CartContext = createContext<ICartContextType>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  total: 0,
});

const fetchProductById = async (
  productId: number
): Promise<IProduct | null> => {
  try {
    const response = await fetch(`http://localhost:5000/products/${productId}`);
    if (!response.ok) {
      throw new Error("Failed to fetch product");
    }
    const product: IProduct = await response.json();
    return product;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
};

const addItemToCart = (
  cartItems: IProduct[],
  product: IProduct
): IProduct[] => {
  const existingProduct = cartItems.find((item) => item.id === product.id);
  if (existingProduct) {
    return cartItems;
  }
  return [...cartItems, product];
};

const removeItemFromCart = (
  cartItems: IProduct[],
  productId: number
): IProduct[] => {
  return cartItems.filter((item) => item.id !== productId);
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<IProduct[]>([]);
  const [total, setTotal] = useState(0);

  const addToCart = async (productId: number) => {
    const product = await fetchProductById(productId);
    if (!product) return;

    const updatedCart = addItemToCart(cartItems, product);
    setCartItems(updatedCart);

    const newTotal = updatedCart.reduce(
      (acc: number, item: IProduct) => acc + item.price,
      0
    );
    setTotal(newTotal);

    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  const removeFromCart = (productId: number) => {
    const updatedCart = removeItemFromCart(cartItems, productId);
    setCartItems(updatedCart);

    const newTotal = updatedCart.reduce((acc, item) => acc + item.price, 0);
    setTotal(newTotal);

    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  useEffect(() => {
    const savedCartItems = JSON.parse(
      localStorage.getItem("cartItems") || "[]"
    );
    setCartItems(savedCartItems);

    const savedTotal = savedCartItems.reduce(
      (acc: number, item: IProduct) => acc + item.price,
      0
    );
    setTotal(savedTotal);
  }, []);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, total }}
    >
      {children}
    </CartContext.Provider>
  );
};
