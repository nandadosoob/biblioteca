import React from "react"
import './EdicaoLivro.css'
import { IconBook } from '@tabler/icons-react';



const EdicaoLivro = () => {
  return (
    <div>
      <div id="main">

        <div className="barra-pesquisa-container">
          <input id="barrapesquisa" type="text" placeholder="Pesquise aqui o livro que você deseja editar" />
          <button><IconBook></IconBook></button>
        </div>

        <div id="classificacao">
          <p id="bk">Livro</p>
          <p id="edit">Editar</p>
          <p id="del">Excluir</p>

        </div>

        <div id="listaLivros">
          <div className="item1">
            <img src="" alt="" />
            <div id="informacoes">
              <h5>titulo</h5>
              <p>dados</p>
            </div>
            <div id="botoes">
              <button>Editar</button>
              <button>Excluir</button>

            </div>
          </div>
        </div>


      </div>
    </div>
  );
}

export default EdicaoLivro;