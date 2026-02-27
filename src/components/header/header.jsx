import React from "react";
import './header.css';

const Header = ({ toggleMenu, toggleCart, search, setSearch }) => {
  return (
    <header>
      <button onClick={toggleMenu}>
        <img src="/icons/hamburguer.png" width="40px"/>
      </button>
      <h1>NEW GEN STORE</h1>

      <input
        type="text"
        placeholder="Buscar camisa..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "5px", borderRadius: "5px" }}
      />

      <button onClick={toggleCart}>
        <img src="/icons/carrinho-de-compras.png" width="40px"/>
      </button>
    </header>
  );
};

export default Header;
