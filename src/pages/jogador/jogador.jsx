import React from "react";
import CardProduto from "../../components/cardProduto/cardProduto";
import "./jogador.css"

const Jogador = () => {
  return (
    <>
      <div className="produtos">
      <h2>Camisas de Jogador:</h2>

      <div className="lista-produtos">
        {camisas.map((camisa) => (
          <CardProduto key={camisa.id} produto={camisa} />
        ))}
      </div>
      </div>
    </>
  );
}

export default Jogador;
