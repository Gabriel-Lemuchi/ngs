import React from "react";
import './header.css';

const Header = ({ toggleMenu, toggleCart}) => {
  return (
    <>
    <header>
      <button id="hamburguer_button" onClick={ toggleMenu }><img src="/icons/hamburguer.png" width="40px"/></button>
      <h1>NEW GEN STORE</h1>
      <img src="/icons/newgenicon.png" width="140px"/>
      <button id="carrinho_button" onClick={ toggleCart }><img src="/icons/carrinho-de-compras.png" width="40px"/></button>
    </header>
    </>
  );
}

export default Header;
