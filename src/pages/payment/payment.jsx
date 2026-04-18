import React, { useEffect, useState } from "react";
import "./payment.css";

const Payment = ({ cartItems, total }) => {

  const [orderCode, setOrderCode] = useState("");

  const generateOrderCode = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let code = "";

    for (let i = 0; i < 8; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return code;
  };

  useEffect(() => {
    if (cartItems.length === 0) return;

    const code = generateOrderCode();
    setOrderCode(code);

    const message = cartItems.map(item =>
      `Item: ${item.name}
Tamanho: ${item.size}
Qtd: ${item.quantity}
Valor: R$ ${(item.price * item.quantity).toFixed(2)}`
    ).join("\n\n");

    const finalMessage = `
NOVO PEDIDO - NEW GEN STORE

Código do Pedido: ${code}

${message}

Total: R$ ${total.toFixed(2)}
`;

    const url = `https://wa.me/554199184374?text=${encodeURIComponent(finalMessage)}`;

    window.open(url, "_blank");

  }, [cartItems, total]);

  return (
    <h1>Redirecionando para o WhatsApp...</h1>
  );
};

export default Payment;
