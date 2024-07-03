"use client";
import { IProduct } from "../interfaces/IProduct";
import { useEffect, createContext, useState, ReactNode } from "react";
import ICartContextType from "../interfaces/ICartContextType";

export const CartContext = createContext<ICartContextType>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  total: 0,
});

const addItemToCart = (
  cartItems: IProduct[],
  product: IProduct
): IProduct[] => {
  const existingProduct = cartItems.find((item) => item.id === product.id);
  if (existingProduct) {
    return cartItems.map((item) =>
      item.id === product.id
        ? { ...item, quantity: (item.quantity ?? 0) + 1 }
        : item
    );
  }
  return [...cartItems, { ...product, quantity: 1 }];
};

const removeItemFromCart = (
  cartItems: IProduct[],
  productId: number
): IProduct[] => {
  return cartItems
    .map((item) =>
      item.id === productId
        ? { ...item, quantity: (item.quantity ?? 0) - 1 }
        : item
    )
    .filter((item) => (item.quantity ?? 0) > 0);
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<IProduct[]>([]);
  const [total, setTotal] = useState(0);

  const addToCart = (product: IProduct) => {
    const updatedCart = addItemToCart(cartItems, product);
    setCartItems(updatedCart);
  };

  const removeFromCart = (productId: number) => {
    const updatedCart = removeItemFromCart(cartItems, productId);
    setCartItems(updatedCart);
  };

  useEffect(() => {
    const savedCartItems = JSON.parse(
      localStorage.getItem("cartItems") || "[]"
    );
    setCartItems(savedCartItems);
  }, []);

  useEffect(() => {
    const total = cartItems.reduce(
      (acc, item) => acc + item.price * (item.quantity ?? 1),
      0
    );
    setTotal(total);
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, total }}
    >
      {children}
    </CartContext.Provider>
  );
};
