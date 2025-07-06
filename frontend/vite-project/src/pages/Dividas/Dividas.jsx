import React, { useState, useEffect } from 'react';
import './Dividas.css';

export default function Dividas() {
  const [dividas, setDividas] = useState([]);

  useEffect(() => {
    async function fetchDividas() {
      try {
        const resposta = await fetch('http://localhost:3000/api/divida');
        const dados = await resposta.json();
        setDividas(dados.dividas || []);
      } catch (error) {
        console.error("Erro ao buscar dívidas:", error);
        alert("Erro ao buscar dívidas.");
      }
    }

    fetchDividas();
  }, []);

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
            <tr key={divida.id_divida} className={divida.estado === 'Quitada' ? 'quitada' : 'pendente'}>
              <td>{divida.nome_locatario}</td>
              <td>{new Date(divida.data_reserva).toLocaleDateString()}</td>
              <td>{new Date(divida.data_divida).toLocaleDateString()}</td>
              <td>{divida.estado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
