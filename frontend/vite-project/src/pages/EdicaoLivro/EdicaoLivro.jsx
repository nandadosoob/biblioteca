import React from "react"
import { Link } from 'react-router-dom'
import './EdicaoLivro.css'
import { IconBook, IconTrash, IconPencil } from '@tabler/icons-react';



const EdicaoLivro = () => {
  return (
    <div>
      <div id="main1">

        <div className="barra-pesquisa-container">
          <input id="barrapesquisa" type="text" placeholder="Pesquise aqui o livro que você deseja editar" />
          <button><IconBook></IconBook></button>
        </div>

        <div id="classificacaoLivro">
          <p id="bk">Livro</p>
          <p id="edit">Editar</p>
          <p id="del">Excluir</p>

        </div>

        <div id="listaLivros">
          <div className="item1">
            <div id="imge">
              <img src="" alt="" />

            </div>
            <div id="informacoesLivro">
              <h4>titulo</h4>
              <p id="dadosLivro">dados</p>
            </div>
            <div id="botoes">
              <Link to="/TelaEdicaoLivro" id="link">
                <button id="botaoEditar" ><IconPencil className="iconeEdit" />
                </button>
              </Link>

              <button id="botaoExcluir"><IconTrash className="iconeEdit" /></button>

            </div>
          </div>
        </div>


      </div>
    </div>
  );
}

export default EdicaoLivro;