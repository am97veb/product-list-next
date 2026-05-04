"use client";

import { createContext, useContext, useState } from "react";

type CartContextType = {
  count: number;
  addToCart: () => Promise<void>;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0);

  const addToCart = async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    setCount((previousCount) => previousCount + 1);
  };

  return (
    <CartContext.Provider value={{ count, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}
