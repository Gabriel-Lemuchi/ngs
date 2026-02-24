import React from "react";
import CardProduto from "../../components/cardProduto/cardProduto";
import "./jogador.css"
import produtos from "../../data/products";

const Jogador = () => {

  const camisasJogador = produtos.filter(
    produto => produto.categoria === "jogador"
  );

  return (
    <div className="produtos">
      <h2>Camisas Versão Jogador:</h2>

      <div className="lista-produtos">
        {camisasJogador.map((camisa) => (
          <CardProduto key={camisa.slug} produto={camisa} />
        ))}
      </div>
    </div>
  );
};

export default Jogador;
