import React from "react";
import CardProduto from "../../components/cardProduto/cardProduto";
import "./torcedor.css"

const Torcedor = () => {

  return (
    <>
      <div className="produtos">
      <h2>Camisas de Torcedor:</h2>

      <div className="lista-produtos">
        {camisas.map((camisa) => (
          <CardProduto key={camisa.id} produto={camisa}/>
        ))}
      </div>
      </div>
    </>
  );
}

export default Torcedor;
