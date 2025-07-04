import React from 'react';
import './Historico.css';

const historicoData = [
  {
    id: 1,
    capa: 'https://m.media-amazon.com/images/I/61jgm6ooXzL._AC_UF1000,1000_QL80_.jpg',
    titulo: 'Harry Potter e a Pedra Filosofal',
    autor: 'J.K. Rowling',
    emprestimo: '01/04/2024',
    devolucao: '15/04/2024',
    status: 'Devolvido',
    solicitante: '000000000'
  }
];

function Historico() {
  return (
    <div className="historico">
      <h1>Histórico</h1>
      <table>
        <thead>
          <tr>
            <th>Livro</th>
            <th>Empréstimo</th>
            <th>Devolução Prevista</th>
            <th>Status</th>
            <th>Solicitante</th>
          </tr>
        </thead>
        <tbody>
          {historicoData.map(item => (
            <tr key={item.id}>
              <td className="livro">
                <img src={item.capa} alt={item.titulo} />
                <div>
                  <strong>{item.titulo}</strong><br />
                  <small>{item.autor}</small>
                </div>
              </td>
              <td>{item.emprestimo}</td>
              <td>{item.devolucao}</td>
              <td>{item.status}</td>
              <td>{item.solicitante}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Historico;
