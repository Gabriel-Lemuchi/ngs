import React from "react";
import CardProduto from "../../components/cardProduto/cardProduto";
import "./infantil.css"
import produtos from "../../data/products";

const Infantil = ({search}) => {

  const camisasInfantis = produtos
    .filter(produto => produto.categoria === "infantil")
    .filter(produto =>
      produto.name.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="produtos">
      <h2>Camisas Infantis:</h2>

      <div className="lista-produtos">
        {camisasInfantis.map((camisa) => (
          <CardProduto key={camisa.slug} produto={camisa} />
        ))}
      </div>
    </div>
  );
};

export default Infantil;
