import { useState } from "react";
import { useCartContext } from "../../contexts/CartContext";
import Cart from "../cart-icon";
import Trash from "../trash";

import "./styles.scss";
import Popover from "../Popover";

export default function CartControl() {
  const { cartItems, setCartItems } = useCartContext();
  const [showPopover, setShowPopover] = useState(false);

  const handleRemoveItem = (index) => {
    let newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  return (
    <>
      <div className="control">
        <Cart
          className="cart-btn"
          onClick={() => setShowPopover((prev) => !prev)}
        />
        {cartItems.length > 0 && <span className="signal"></span>}
        {showPopover && (
          <Popover>
            <div className="cart-popover">
              {cartItems.map((item, index) => {
                return (
                  <div
                    className="cart-item"
                    key={index}>
                    <img src={item.path} />
                    <div className="cart-description">
                      <span>{item.name}</span>
                      <div className="cart-details">
                        <div>
                          Num.: <span>{item.size}</span>
                        </div>
                        <div>
                          Unidades: <span>{item.quantity}</span>
                        </div>
                      </div>
                    </div>
                    R$ {item.price}
                    <div>
                      <Trash
                        className="cart-btn"
                        onClick={() => handleRemoveItem(index)}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <button className="checkout-btn">Finalizar</button>
          </Popover>
        )}
      </div>
    </>
  );
}
