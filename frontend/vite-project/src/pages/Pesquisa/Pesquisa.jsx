import React from "react";
import './Pesquisa.css';
import { NavLink } from "react-router-dom";
import {  IconBook } from '@tabler/icons-react';


export default function Pesquisa() {
  console.log("oi bea");
  return (
    <div className="pagina-pesquisa">
      <div className="barra-pesquisa-container">
        <input id="barrapesquisa" type="text" placeholder="Pesquise Aqui" />
        <button><IconBook></IconBook></button>
      </div>

      <div className="livros-grid">
        <div className="livro-card">
          <img src="https://m.media-amazon.com/images/I/61jgm6ooXzL._AC_UF1000,1000_QL80_.jpg" alt="Harry Potter 1" />
          <p className="livro-titulo">Harry Potter e a Pedra Filosofal</p>
          <p className="livro-autor">J.K ROWLING</p>
        </div>

       
        <div className="livro-card">
          <img src="https://m.media-amazon.com/images/I/91OINeHnJGL.jpg" alt="Harry Potter 2" />
          <p className="livro-titulo">Harry Potter e a Câmara Secreta</p>
          <p className="livro-autor">J.K ROWLING</p>
        </div>

        <div className="livro-card">
          <img src="https://cdn.awsli.com.br/600x450/1576/1576093/produto/58768868/260db594b7.jpg" alt="Harry Potter 2" />
          <p className="livro-titulo">A ciência de Harry Potter</p>
          <p className="livro-autor">Anônimo</p>
        </div>

        <div className="livro-card">
          <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ50KWOufU7UQCYDKTcCqFNQ-7IV_rE-cnxv2vYTQ8KT1modPCR" alt="Harry Potter 2" />
          <p className="livro-titulo">A ciência de Harry Potter</p>
          <p className="livro-autor">Anônimo</p>
        </div>

        <div className="livro-card">
          <img src="https://m.media-amazon.com/images/I/81lAPl9Fl0L.jpg" alt="Harry Potter 2" />
          <p className="livro-titulo">A ciência de Harry Potter</p>
          <p className="livro-autor">Anônimo</p>
        </div>

        <div className="livro-card">
          <img src="https://http2.mlstatic.com/D_NQ_NP_793479-MLB47856102579_102021-O-livro-harry-potter-e-a-cmara-secreta-capa-dura.webp" alt="Harry Potter 2" />
          <p className="livro-titulo">A ciência de Harry Potter</p>
          <p className="livro-autor">Anônimo</p>
        </div>

        <div className="livro-card">
          <img src="https://m.media-amazon.com/images/I/81iqZ2HHD-L.jpg" alt="Harry Potter 2" />
          <p className="livro-titulo">A ciência de Harry Potter</p>
          <p className="livro-autor">Anônimo</p>
        </div>

        <div className="livro-card">
          <img src="https://cdn.awsli.com.br/600x450/1576/1576093/produto/58768868/260db594b7.jpg" alt="Harry Potter 2" />
          <p className="livro-titulo">A ciência de Harry Potter</p>
          <p className="livro-autor">Anônimo</p>
        </div>
        <div className="livro-card">
          <img src="https://colorindonuvens.files.wordpress.com/2014/08/capa-harry-potter-2.jpg" alt="Harry Potter 2" />
          <p className="livro-titulo">A ciência de Harry Potter</p>
          <p className="livro-autor">Anônimo</p>
        </div>
        
        
        
      </div>
    </div>
  );
}
