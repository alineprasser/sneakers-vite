import { createContext, useContext, useState } from "react";

const CartContext = createContext({
  cartItems: [],
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
