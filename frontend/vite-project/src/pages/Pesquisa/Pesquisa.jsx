import React from "react";
import './Pesquisa.css';
import { NavLink } from "react-router-dom";

export default function Pesquisa() {
    console.log("oi bea")
  return (
    <>
      <div className="pagina-pesquisa">
        <label htmlFor="barrapesquisa">Pesquisar Livro</label>
        <input id="barrapesquisa" type="text" placeholder="Digite o nome do livro..." />
      <div className="livros-grid">
        <div className="livro-card">
          <img src="https://m.media-amazon.com/images/I/61jgm6ooXzL._AC_UF1000,1000_QL80_.jpg" alt="Livro" />
        </div>
      </div>
      </div>
      
    </>
  );
}
