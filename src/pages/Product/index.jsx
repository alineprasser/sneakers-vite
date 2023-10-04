import { useState } from "react";
import { useCartContext } from "../../contexts/CartContext";
import Cart from "../../components/cart-icon";

import "./style.scss"
import ImageCarousel from "../../components/ImageCarousel";

export default function Product() {
  const {setCartItems} = useCartContext()
  const [quantity, setQuantity] = useState(0)
  const [size, setSize] = useState(null)

  const sizeList = [32, 33, 34, 35, 36, 37]

  const removeItem = () => {
    if (quantity) {
      setQuantity(prev => prev - 1)
    } 
  }

  const addItem = () => {
    setQuantity(prev => prev + 1)
  }

  const addItemToCart = () => {
    if (quantity && size) {
      let item = {
        quantity,
        size,
      }
      setCartItems(prev => [...prev, item])
    }
  }

  return (
    <div className='product'>
      <div>
        <ImageCarousel />
      </div>
      <div className='description'>
        <span className='section'>SNEAKER COMPANY</span>
        <h1 className='product'>Fall Limited Edition Sneakers</h1>
        <p>
          These low-profile senakers are your perfect casual wear, companion.
          Featuring a durable rubber outer sole, they&apos;ll withstand everything
          the weather can offer
        </p>
        <div className='sizelist'>
          {sizeList.map((item) => {
            return <button key={item} className={size == item ? 'highlight_btn' : ''} onClick={() => setSize(item)}>{item}</button>
          })}
        </div>
        <span className='fullPrice'>R$ 520,00</span>
        <div className='newPrice'>
          <h3>R$ 260,00</h3> <span>50%</span>
        </div>
        <div className='cart_actions'>
          <div className='quantity'>
            <button onClick={removeItem}>-</button>
            {quantity}
            <button onClick={addItem}>+</button>
          </div>
          <button
            className='addToCart'
            onClick={addItemToCart}>
            <Cart fill="var(--btn-default)" />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}
