import React from "react";
import { useNavigate } from "react-router-dom";
import "./cardProduto.css"

const CardProduto = ({ produto }) => {

  const navigate = useNavigate();

  return (
    <>
      <div className="card_product" onClick={() => navigate(`/produto/${produto.slug}`)}>
        <img src={produto.img} alt={produto.name} />
        <h3>{produto.name}</h3>
        <span>R$ {produto.price}</span>
        <button>Adicionar ao carrinho</button>
      </div>
    </>
  )
}

export default CardProduto;
