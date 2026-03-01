import React from "react";
import CardProduto from "../../components/cardProduto/cardProduto";
import "./jogador.css"
import produtos from "../../data/products";

const Jogador = ({search, setSearch}) => {

  const camisasJogador = produtos
    .filter(produto => produto.categoria === "jogador")
    .filter(produto =>
      produto.name.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="produtos">

      <h2>Camisas Versão Jogador:</h2>

      <input
        type="text"
        className="busca"
        placeholder="Buscar camisa..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />


      <div className="lista-produtos">
        {camisasJogador.map((camisa) => (
          <CardProduto key={camisa.slug} produto={camisa} />
        ))}
      </div>
    </div>
  );
};

export default Jogador;
