import React, { useEffect } from "react";
import "./payment.css";

const Payment = ({ cartItems, total }) => {

  useEffect(() => {

    if (cartItems.length === 0) return;

    const message = cartItems.map(item =>
      `🛍 ${item.name}
      Tamanho: ${item.size}
      Qtd: ${item.quantity}
      Valor: R$ ${(item.price * item.quantity).toFixed(2)}`
    ).join("\n\n");

    const finalMessage = `
📦 NOVO PEDIDO - NEW GEN STORE

${message}

💰 Total: R$ ${total.toFixed(2)}
`;

    const phoneNumber = "55SEUNUMEROAQUI";
    const url = `https://wa.me/${+554199184374}?text=${encodeURIComponent(finalMessage)}`;

    window.open(url, "_blank");

  }, [cartItems, total]);

  return (
    <div className="payment-container">
      <h1>Redirecionando para o WhatsApp...</h1>
    </div>
  );
};

export default Payment;
