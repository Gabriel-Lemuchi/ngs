import React from "react";
import CardProduto from "../../components/cardProduto/cardProduto";
import "./torcedor.css"
import produtos from "../../data/products";

const Torcedor = ({search, setSearch}) => {

  const camisasTorcedor = produtos
    .filter(produto => produto.categoria === "torcedor")
    .filter(produto =>
      produto.name.toLowerCase().includes(search.toLowerCase())
    );


  return (
    <div className="produtos">
      <h2>Camisas Versão Torcedor:</h2>


      <input
        type="text"
        placeholder="Buscar camisa..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="lista-produtos">
        {camisasTorcedor.map((camisa) => (
          <CardProduto key={camisa.slug} produto={camisa} />
        ))}
      </div>
    </div>
  );
};

export default Torcedor;
