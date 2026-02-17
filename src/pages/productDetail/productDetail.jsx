import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./productDetail.css";

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  const produto = produtos.find(p => p.id === id);

  if (!produto) {
    return <h2>Produto não encontrado</h2>;
  }

  const total = produto.preco * quantity;

  function increase() {
    setQuantity(q => q + 1);
  }

  function decrease() {
    setQuantity(q => (q > 1 ? q - 1 : 1));
  }

  function handleAddToCart() {
    addToCart({
      ...produto,
      quantity
    });
  }

  return (
    <div className="product-detail">
      <div id="details">
        <img src={produto.imagem} alt={produto.name} width="320px" />
        <h1>{produto.name}</h1>
        <p>{produto.descriçao}</p>
        <strong>R$ {produto.preco.toFixed(2)}</strong>
      </div>

      <div id="add_cart_section">
        <p>Selecione a quantidade a adicionar no carrinho:</p>

        <div id="add_buttons">
          <button className="btn_minus" onClick={decrease}>-</button>
          <h2>{quantity}</h2>
          <button className="btn_plus" onClick={increase}>+</button>
        </div>

        <p>
          Valor total: <b>R$ {total.toFixed(2)}</b>
        </p>

        <button id="add_cart" onClick={handleAddToCart}>
          <b>Adicionar ao Carrinho</b>
        </button>

        <div id="addictional_text">
          <p>✔ Produto oficial licenciado</p>
          <p>✔ Envio em até 72h</p>
          <p>✔ Troca grátis em 7 dias</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
