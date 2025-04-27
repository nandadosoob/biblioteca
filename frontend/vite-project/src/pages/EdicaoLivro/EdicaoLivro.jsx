import React from "react"
import './EdicaoLivro.css'
import { IconBook, IconTrash, IconPencil } from '@tabler/icons-react';



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
            <div id="imge">
              <img src="" alt="" />

            </div>
            <div id="informacoes">
              <h4>titulo</h4>
              <p>dados</p>
            </div>
            <div id="botoes">
              <button id="botaoEditar" ><IconPencil className="iconeEdit" /></button>
              <button id="botaoExcluir"><IconTrash className="iconeEdit"/></button>

            </div>
          </div>
        </div>


      </div>
    </div>
  );
}

export default EdicaoLivro;