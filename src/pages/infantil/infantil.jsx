import React from "react";
import CardProduto from "../../components/cardProduto/cardProduto";
import "./infantil.css"

const Infantil = () => {
  return (
    <>
      <div className="produtos">
      <h2>Camisas Infantis:</h2>

      <div className="lista-produtos">
        {camisas.map((camisa) => (
          <CardProduto key={camisa.id} produto={camisa} />
        ))}
      </div>
      </div>
    </>
  );
}

export default Infantil;
