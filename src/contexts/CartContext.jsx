import { createContext, useContext, useState } from "react";

const CartContext = createContext({
  cartItems: [],
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([1,2,3]);

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
