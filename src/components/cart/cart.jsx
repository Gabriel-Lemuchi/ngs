import React from "react";
import "./cart.css";
import { useNavigate } from "react-router-dom";

const Cart = ({ cartOpen, cartItems, increase, decrease, total }) => {

  const navigate = useNavigate();

  if (!cartOpen) return null;

  return (
    <aside className="cart">
      <h2>Carrinho</h2>

      {cartItems.length === 0 && (
        <p className="empty-cart">Seu carrinho está vazio</p>
      )}

      {cartItems.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.imagem} alt={item.name} width="80px"/>

          <div className="cart-info">
            <h4>{item.name}</h4>
            <p>
              <b>
                R$ {(item.preco * item.quantity).toFixed(2)}
              </b>
            </p>

            <div className="qty-control">
              <button onClick={() => decrease(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => increase(item.id)}>+</button>
            </div>
          </div>
        </div>
      ))}

      {cartItems.length > 0 && (
        <div className="cart-total">
          <h3>Total: R$ {total.toFixed(2)}</h3>
          <button className="checkout-btn" onClick={() => navigate(`/signup`)}>Finalizar compra</button>
        </div>
      )}
    </aside>
  );
};

export default Cart;
