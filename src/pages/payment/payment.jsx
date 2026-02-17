import React from "react";
import "./payment.css";

const Payment = ({ cartItems, total }) => {
  return (
    <div className="payment-container">
      <h1>Realizando pagamento:</h1>

      <section className="payment-summary">
        <h2>Resumo do pedido</h2>

        {cartItems.map(item => (
          <div key={item.id} className="payment-item">
            <span>{item.name} ({item.quantity}x)</span>
            <strong>
              :  R$ {(item.preco * item.quantity).toFixed(2)}
            </strong>
          </div>
        ))}

        <h3>Total: R$ {total.toFixed(2)}</h3>
      </section>

      <section className="payment-section">
        <h2>Endereço de entrega</h2>

        <form className="payment-form">
          <input type="text" placeholder="Nome completo" required />
          <input type="text" placeholder="CEP" required />
          <input type="text" placeholder="Rua" required />
          <input type="text" placeholder="Número" required />
          <input type="text" placeholder="Bairro" required />
          <input type="text" placeholder="Cidade" required />
          <input type="text" placeholder="Estado" required />

          <h2>Dados de pagamento</h2>

          <input
            type="text"
            placeholder="Nome no cartão"
            required
          />

          <input
            type="text"
            placeholder="Número do cartão (0000 0000 0000 0000)"
            maxLength={19}
            required
          />

          <div className="payment-row">
            <input
              type="text"
              placeholder="Validade (MM/AA)"
              maxLength={5}
              required
            />
            <input
              type="text"
              placeholder="CVV"
              maxLength={3}
              required
            />
          </div>

          <button type="submit" className="payment-btn">
            Confirmar pagamento
          </button>
        </form>
      </section>
    </div>
  );
};

export default Payment;
