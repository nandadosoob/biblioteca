import React, { useState, useEffect } from 'react';
import './Dividas.css';

export default function Dividas() {
  const [dividas, setDividas] = useState([
    { id: 1, nome: 'João Silva', valor: 120.00, data: '2025-06-25', status: 'Pendente' },
    { id: 2, nome: 'Maria Oliveira', valor: 80.50, data: '2025-06-28', status: 'Pendente' },
    { id: 3, nome: 'Carlos Souza', valor: 0, data: '2025-06-30', status: 'Quitada' },
  ]);

  return (
    <div className="dividas-container">
      <h2>Dívidas Pendentes</h2>
      <table className="dividas-table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Data Retirada</th>
            <th>Data de Vencimento</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {dividas.map(divida => (
            <tr key={divida.id} className={divida.status === 'Quitada' ? 'quitada' : 'pendente'}>
              <td>{divida.nome}</td>
              <td>{new Date(divida.data).toLocaleDateString()}</td>
              <td>{new Date(divida.data).toLocaleDateString()}</td>
              <td>{divida.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
