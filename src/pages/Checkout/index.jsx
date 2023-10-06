import { useState } from "react";
import Input from "../../components/Input";
import { useCartContext } from "../../contexts/CartContext";
import "./styles.scss";

export default function Checkout() {
  const [nome, setNome] = useState("");
  const [phone, setPhone] = useState("");
  const [cep, setCep] = useState("");
  const [cidade, setCidade] = useState("");
  const [numero, setNumero] = useState("");
  const [estado, setEstado] = useState("");
  const [logradouro, setLogradouro] = useState("");

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

  const handleCEP = async () => {
    //
  };

  return (
    <div className="checkout">
      <div className="checkout-form">
        <Input
          label="Nome completo:"
          value={nome}
          onChange={(e) => {
            setNome(e.target.value);
          }}
        />
        <Input
          label="Telefone:"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
        <div className="double-column">
          <div>
            <Input
              label="CEP:"
              value={cep}
              onChange={(e) => {
                setCep(e.target.value);
              }}
              onBlur={handleCEP}
            />
            <Input
              label="Cidade:"
              value={cidade}
              onChange={(e) => {
                setCidade(e.target.value);
              }}
            />
          </div>
          <div>
            <Input
              label="Número:"
              value={numero}
              onChange={(e) => {
                setNumero(e.target.value);
              }}
            />
            <Input
              label="Estado:"
              value={estado}
              onChange={(e) => {
                setEstado(e.target.value);
              }}
            />
          </div>
        </div>
        <Input
          label="Logradouro:"
          value={logradouro}
          onChange={(e) => {
            setLogradouro(e.target.value);
          }}
        />
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
          {cartItems.length > 1 && (
            <>
              <hr />
              <p>{calculateFinalPrice()}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
