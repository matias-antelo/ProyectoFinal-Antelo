import { createContext, useState, useContext } from "react";

export const CartContext = createContext();
export const useCart = () => useContext(CartContext);
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      setCart(
        cart.map((product) =>
          product.id === item.id
            ? { ...product, quantity: product.quantity + quantity }
            : product
        )
      );
    } else {
      setCart((prev) => [...prev, { ...item, quantity }]);
    }
  };
  const removeItem = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  };
  const clearCart = () => {
    setCart([]);
  };
  const isInCart = (id) => {
    return cart.some((product) => product.id === id);
  };
  const totalUnits = () => {
    return cart.reduce((acc, product) => acc + product.quantity, 0);
  };
  const totalPrice = () => {
    return cart.reduce((acc, product) => acc + product.quantity * product.price, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        isInCart,
        totalUnits,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};