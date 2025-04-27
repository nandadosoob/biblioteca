import React from "react";
import './Pesquisa.css';
import { NavLink } from "react-router-dom";
import {  IconBook } from '@tabler/icons-react';


export default function Pesquisa() {
  console.log("oi bea");
  return (
    <div className="pagina-pesquisa">
      <div className="barra-pesquisa-container">
        <input id="barrapesquisa" type="text" placeholder="Harry Potter" />
        
      </div>

      <div className="livros-grid">
        {/* Cada livro é um card */}
        <div className="livro-card">
          <img src="https://m.media-amazon.com/images/I/61jgm6ooXzL._AC_UF1000,1000_QL80_.jpg" alt="Harry Potter 1" />
          <p className="livro-titulo">Harry Potter e a Pedra Filosofal</p>
          <p className="livro-autor">J.K ROWLING</p>
        </div>

        {/* Exemplo de outro livro */}
        <div className="livro-card">
          <img src="https://m.media-amazon.com/images/I/91OINeHnJGL.jpg" alt="Harry Potter 2" />
          <p className="livro-titulo">Harry Potter e a Câmara Secreta</p>
          <p className="livro-autor">J.K ROWLING</p>
        </div>

        {/* Adicione mais livros assim */}
      </div>
    </div>
  );
}
