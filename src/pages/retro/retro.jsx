import React from "react";
import CardProduto from "../../components/cardProduto/cardProduto";
import "./retro.css"
import produtos from "../../data/products";

const Retro = ({ search , setSearch}) => {

  const camisasRetro = produtos
    .filter(produto => produto.categoria === "retro")
    .filter(produto =>
      produto.name.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="produtos">

      <h2>Camisas do Futebol Retrô:</h2>

      <input
        className="busca"
        type="text"
        placeholder="Buscar camisa..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="lista-produtos">
        {camisasRetro.map(camisa => (
          <CardProduto key={camisa.slug} produto={camisa} />
        ))}
      </div>
    </div>
  );
};

export default Retro;
