import React from "react";
import { useNavigate } from "react-router-dom";
import "./cardProduto.css"

const CardProduto = ({ produto }) => {

  const navigate = useNavigate();

  return (
    <>
      <div className="card_product" onClick={() => navigate(`/produto/${produto.id}`)}>
        <img src={produto.imagem} alt={produto.name} />
        <h3>{produto.name}</h3>
        <span>R$ {produto.preco}</span>
        <button>Adicionar ao carrinho</button>
      </div>
    </>
  )
}

export default CardProduto;
