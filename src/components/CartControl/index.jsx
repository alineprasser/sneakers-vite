import { useCartContext } from "../../contexts/CartContext";
import Cart from "../cart-icon"

import './styles.scss'


export default function CartControl() {
  const {cartItems} = useCartContext()

  return (
    <div className='control'>
      <Cart />
      {cartItems.length > 0 && <span className='signal'></span>}
    </div>
  );
}
