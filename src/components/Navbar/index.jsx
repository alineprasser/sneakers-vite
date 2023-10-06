import "./styles.scss";
import CartControl from "../CartControl";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navigation">
        <h2 className="title">
          <Link to="/">Sneakers</Link>
        </h2>
        <ul>
          <li>Coleções</li>
          <li>Masculino</li>
          <li>Feminino</li>
          <li>Sobre</li>
        </ul>
      </div>
      <div className="action">
        <CartControl />
        <img
          src="/dog.jpg"
          alt="Cachorro muito feliz"
          className="profile"
        />
      </div>
    </header>
  );
}
