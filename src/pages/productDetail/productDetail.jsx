import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./productDetail.css";
import produtos from "../../data/products";

const ProductDetail = ({ addToCart }) => {
  const { slug } = useParams();
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  const produto = produtos.find(p => p.slug === slug);

  if (!produto) {
    return <h2>Produto não encontrado</h2>;
  }

  const total = produto.price * quantity;

  const sizes = produto.variants
  ? produto.variants
      .split("\n")
      .map(s => s.trim())
      .filter(s => ["P","M","G","GG","2XL","3XL"].includes(s))
  : [];

  function increase() {
    setQuantity(q => q + 1);
  }

  function decrease() {
    setQuantity(q => (q > 1 ? q - 1 : 1));
  }

  function handleAddToCart() {
    if (!size) {
      alert("Selecione um tamanho");
      return;
    }

    addToCart({
      ...produto,
      quantity,
      size
    });
  }

  return (
    <div className="product-detail">
      <div id="details">
        <img src={produto.img} alt={produto.name} width="320px" />
        <h1>{produto.name}</h1>
        <strong>R$ {produto.price.toFixed(2)}</strong>

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


        <div style={{ margin: "15px 0" }}>
          <p>Escolha o tamanho:</p>

          <select value={size} onChange={(e) => setSize(e.target.value)}>
          <option value="">Selecione</option>
          {sizes.map(t => (
          <option key={t} value={t}>{t}</option>
          ))}
          </select>
        </div>

        <button id="add_cart" onClick={handleAddToCart}>
          <b>Adicionar ao Carrinho</b>
        </button>

      </div>
    </div>
  );
};

export default ProductDetail;
