import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./productDetail.css";
import produtos from "../../data/products";

const ProductDetail = ({ addToCart }) => {
  const { slug } = useParams();

  const produto = produtos.find(p => p.slug === slug);

  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  const isTorcedor = produto?.categoria === "torcedor";

  const [cupom, setCupom] = useState("");
  const [precoFinal, setPrecoFinal] = useState(produto?.price || 0);
  const [cupomAplicado, setCupomAplicado] = useState(false);

  if (!produto) {
    return <h2>Produto não encontrado</h2>;
  }

  const total = precoFinal * quantity;

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

  function aplicarCupom() {
    if (cupom === "PRIMEIRA150" && isTorcedor) {
      setPrecoFinal(150);
      setCupomAplicado(true);
    } else {
      alert("Cupom inválido");
    }
  }

  function handleAddToCart() {
    if (!size) {
      alert("Selecione um tamanho");
      return;
    }

    addToCart({
      ...produto,
      price: precoFinal, 
      quantity,
      size
    });
  }

  return (
    <div className="product-detail">
      <div id="details">
        <img src={produto.img} alt={produto.name} width="320px" />
        <h1>{produto.name}</h1>

        <strong>
          {isTorcedor && precoFinal === 150 ? (
            <>
              <span style={{ textDecoration: "line-through", marginRight: "8px" }}>
                R$ {produto.price.toFixed(2)}
              </span>
              <span style={{ color: "black" }}>
                R$ {precoFinal.toFixed(2)}
              </span>
            </>
          ) : (
            <>R$ {produto.price.toFixed(2)}</>
          )}
        </strong>
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

        {/* 🔥 CUPOM (só torcedor) */}
        {isTorcedor && (
          <div style={{ margin: "15px 0" }}>
            <p>Tem cupom?</p>

            <input
              type="text"
              placeholder="Digite o cupom"
              value={cupom}
              onChange={(e) => setCupom(e.target.value)}
              disabled={cupomAplicado}
            />

            <button onClick={aplicarCupom} disabled={cupomAplicado}>
              Aplicar
            </button>

            {cupomAplicado && (
              <p style={{ color: "limegreen" }}>Cupom aplicado!</p>
            )}
          </div>
        )}

        <button id="add_cart" onClick={handleAddToCart}>
          <b>Adicionar ao Carrinho</b>
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;