import React from "react";
import CardProduto from "../../components/cardProduto/cardProduto";
import "./pronta-entrega.css"
import produtos from "../../data/products";

const Pronta = ({search , setSearch}) => {

  const camisasPronta = produtos
    .filter(produto => produto.categoria === "pronta-entrega")
    .filter(produto =>
      produto.name.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="produtos">

      <h2>Pronta Entrega:</h2>

      <input
        className="busca"
        type="text"
        placeholder="Buscar camisa..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="lista-produtos">
        {camisasPronta.map((camisa) => (
          <CardProduto key={camisa.slug} produto={camisa} />
        ))}
      </div>
    </div>
  );
};

export default Pronta;
