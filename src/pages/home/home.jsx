import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <main>
      <h1>Seja bem-vindo à New Gen Store!</h1>
      <h2>Confira nossas camisas por um ótimo preço:</h2>

      <div id="cards">
        <div className="section_card">
          <h2>Camisas de Torcedor</h2>
          <img src="images/camisa_torcedor.webp" alt="" width="210px"/>
          <button onClick={() => navigate("/torcedor")}>
            Ver uniformes
          </button>
        </div>

        <div className="section_card">
          <h2>Camisas de Jogador</h2>
          <img src="images/camisa_jogador.webp" alt="" width="210px"/>
          <button onClick={() => navigate("/jogador")}>
            Ver uniformes
          </button>
        </div>

        <div className="section_card">
          <h2>Camisas Infantis</h2>
          <img src="images/camisa_infantil.webp" alt="" width="185px"/>
          <button onClick={() => navigate("/infantil")}>
            Ver uniformes
          </button>
        </div>

        <div className="section_card">
          <h2>Camisas Retrô</h2>
          <img src="images/camisa_retro.webp" alt="" width="210px"/>
          <button onClick={() => navigate("/retro")}>
            Ver uniformes
          </button>
        </div>
      </div>
    </main>
  );
};

export default Home;
