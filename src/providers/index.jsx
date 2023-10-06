import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "../contexts/CartContext";

export default function Providers({ children }) {
  return (
    <BrowserRouter>
      <CartProvider>{children}</CartProvider>
    </BrowserRouter>
  );
}
