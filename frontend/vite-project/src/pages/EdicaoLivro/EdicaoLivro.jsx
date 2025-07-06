import React from "react";
import { Link } from 'react-router-dom';
import './EdicaoLivro.css';
import { IconBook, IconTrash, IconPencil } from '@tabler/icons-react';

const EdicaoLivro = () => {
  return (
    <div className="pagina-edicao">
      <div className="barra-pesquisa">
        <input
          type="text"
          placeholder="Pesquise o livro que deseja editar..."
        />
        <button className="btn-pesquisar">
          <IconBook size={20} />
        </button>
      </div>

      <div className="cabecalho-lista">
        <span className="cabecalho-livro">Livro</span>
        <span className="cabecalho-acao">Editar</span>
        <span className="cabecalho-acao">Excluir</span>
      </div>

      <div className="livro-item">
        <div className="livro-img">
          <img src="https://via.placeholder.com/120x180" alt="Capa do livro" />
        </div>
        <div className="livro-info">
          <h4>Título do Livro</h4>
          <p>Autor: Fulano da Silva</p>
          <p>Editora: Exemplo Editora</p>
        </div>
        <div className="livro-acoes">
          <Link to="/TelaEdicaoLivro">
            <button className="btn-editar">
              <IconPencil size={18} />
            </button>
          </Link>
          <button className="btn-excluir">
            <IconTrash size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EdicaoLivro;
