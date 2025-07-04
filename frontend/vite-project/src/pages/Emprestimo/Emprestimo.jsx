import React, { useState } from "react";
import './Emprestimo.css';
import { IconCalendar, IconBook } from "@tabler/icons-react";

export default function Emprestimo() {
  const [abaAtiva, setAbaAtiva] = useState('status');

  return (
    <div className="pagina-emprestimo">
      <h2>Empréstimo</h2>
      <div className="abas">
        <button
          className={abaAtiva === 'status' ? 'aba ativa' : 'aba'}
          onClick={() => setAbaAtiva('status')}
        >
          STATUS
        </button>
        <button
          className={abaAtiva === 'historico' ? 'aba ativa' : 'aba'}
          onClick={() => setAbaAtiva('historico')}
        >
          HISTÓRICO DE EMPRÉSTIMOS
        </button>
      </div>

      <div className="box-marrom">
        {abaAtiva === 'status' && (
          <div className="box-status">
            <div className="forms">
              <label htmlFor="locatario">Locatário</label>
              <input type="text" name="locatario" id="locatario" />

              <label>Leitor (a) | Registro Acadêmico</label>
              <input type="text" />

              <label><IconCalendar /> Data</label>
              <input type="text" />

              <h3>Perfil</h3>
              <div className="perfil-check">
                <label><input id="professor" type="checkbox" /> Professor</label>
                <label><input id="bibliotecario" type="checkbox" /> Bibliotecário</label>
                <label><input id="aluno" type="checkbox" /> Aluno</label>
              </div>
            </div>

            <div className="imglivro">
              <img
                src="https://m.media-amazon.com/images/I/61JenSx3wKL._AC_UF1000,1000_QL80_.jpg"
                alt="Capa do Livro"
              />
              <div className="buttons">
                <button className="um">Salvar</button>
                <button className="dois">Cancelar</button>
              </div>
            </div>
          </div>
        )}

        {abaAtiva === 'historico' && (
          <div className="box-historico">
            <div className="barra-pesquisa-container">
              <input
                id="barrapesquisa"
                type="text"
                placeholder="Registro Acadêmico/Código Bibliotecário"
              />
              <button><IconBook /></button>
            </div>

            <table className="historico-table">
              <thead>
                <tr>
                  <th>RA</th>
                  <th>Empréstimo</th>
                  <th>Nome</th>
                  <th>Livro</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                /*conteúdo do histórico */
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
