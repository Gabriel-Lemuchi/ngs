import React from "react";
import CardProduto from "../../components/cardProduto/cardProduto";
import "./torcedor.css"
import produtos from "../../data/products";

const Torcedor = () => {

  const camisasTorcedor = produtos.filter(
    produto => produto.categoria === "torcedor"
  );

  return (
    <div className="produtos">
      <h2>Camisas Versão Torcedor:</h2>

      <div className="lista-produtos">
        {camisasTorcedor.map((camisa) => (
          <CardProduto key={camisa.slug} produto={camisa} />
        ))}
      </div>
    </div>
  );
};

export default Torcedor;
