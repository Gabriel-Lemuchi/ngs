import React from "react";
import { useNavigate } from "react-router-dom";
import "./sidebar.css";

const Sidebar = ({ menuOpen }) => {
  const navigate = useNavigate();

  if (!menuOpen) return null;

  return (
    <div id="menu">
      <button onClick={() => navigate("/torcedor")} className="menu-button">
        <img src="/icons/torcedor.png" alt="Torcedor" width="60px"/>
          Torcedor
      </button>

      <button onClick={() => navigate("/jogador")} className="menu-button">
        <img src="/icons/jogador.png" alt="Jogador" width="60px"/>
          Jogador
      </button>

      <button onClick={() => navigate("/infantil")} className="menu-button">
        <img src="/icons/infantil.png" alt="Infantil" width="60px"/>
          Infantil
      </button>

      <button onClick={() => navigate("/retro")} className="menu-button">
        <img src="/icons/i_retro.png" alt="Retrô" width="60px"/>
          Retrô
      </button>
    </div>
  );
};

export default Sidebar;
