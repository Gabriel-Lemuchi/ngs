import React from "react";
import CardProduto from "../../components/cardProduto/cardProduto";
import "./infantil.css"
import produtos from "../../data/products";

const Infantil = ({search , setSearch}) => {

  const camisasInfantis = produtos
    .filter(produto => produto.categoria === "infantil")
    .filter(produto =>
      produto.name.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="produtos">

      <h2>Camisas Infantis:</h2>

      <input
        type="text"
        placeholder="Buscar camisa..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "5px", borderRadius: "5px", width: "500px", marginTop: "2vh", backgroundColor: "rgb(173, 173, 173)", color:"black", border:"solid 2px blue"}}
      />

      <div className="lista-produtos">
        {camisasInfantis.map((camisa) => (
          <CardProduto key={camisa.slug} produto={camisa} />
        ))}
      </div>
    </div>
  );
};

export default Infantil;
