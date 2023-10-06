import Input from "../../components/Input";
import { useCartContext } from "../../contexts/CartContext";
import "./style.scss";

export default function Checkout() {
  const { cartItems, formatMoney } = useCartContext();

  const calculateTotal = (price, quantity) => {
    let total = price * quantity;
    return formatMoney(total);
  };

  const calculateFinalPrice = () => {
    let total = cartItems.reduce((acc, item) => {
      const { quantity, price } = item;
      return acc + quantity * price;
    }, 0);
    return formatMoney(total);
  };

  return (
    <div className="checkout">
      <div className="checkout-form">
        <Input label="Nome completo:" />
        <Input label="Telefone:" />
        <div className="double-column">
          <div>
            <Input label="CEP:" />
            <Input label="Cidade:" />
          </div>
          <div>
            <Input label="Número:" />
            <Input label="Estado:" />
          </div>
        </div>
        <Input label="Logradouro:" />
        <div>
          <button className="checkout-btn">Finalizar</button>
        </div>
      </div>
      <div className="checkout-total">
        <div className="card">
          {cartItems.map((item, index) => {
            return (
              <div
                className="card-content"
                key={index}>
                <h3>{item.name}</h3>
                <img
                  src={item.path}
                  width={290}
                  height={163}
                />
                <div className="highlight">
                  <span>Num.:</span>
                  <span>{item.size}</span>
                </div>
                <div>
                  <span>Unidades:</span>
                  <span>{item.quantity}</span>
                </div>
                <div>
                  <span>Preço:</span>
                  <span>{formatMoney(item.price)}</span>
                </div>
                <div>
                  <span>Total:</span>
                  <span>{calculateTotal(item.price, item.quantity)}</span>
                </div>
              </div>
            );
          })}
          <hr />
          <p>{calculateFinalPrice()}</p>
        </div>
      </div>
    </div>
  );
}
