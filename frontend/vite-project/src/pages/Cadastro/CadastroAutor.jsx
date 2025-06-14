import React, { useState } from 'react';

function CadastroAutor() {
  const [id_autor, setId_autor] = useState('');
  const [nome, setNome] = useState('');
  const [autor, setAutor] = useState(null);

  const api = 'http://localhost:3000/api/autor';

  const cadastrar = async () => {
    try {
      await fetch(api, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome_autor: nome })
      });
      alert('Cadastrado com sucesso');
      setNome('');
    } catch (err) {
      console.error('Erro ao cadastrar:', err);
      alert('Erro ao cadastrar autor');
    }
  };

  const buscar = async () => {
    try {
      const res = await fetch(`${api}/${id_autor}`);
      if (!res.ok) throw new Error('Não encontrado');
      const data = await res.json();
      setAutor(data);
      setNome(data.nome_autor);
    } catch (err) {
      console.error('Erro ao buscar:', err);
      alert('Erro ao buscar autor');
    }
  };

  const atualizar = async () => {
    try {
      await fetch(`${api}/${id_autor}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome_autor: nome })
      });
      alert('Atualizado');
    } catch (err) {
      console.error('Erro ao atualizar:', err);
      alert('Erro ao atualizar autor');
    }
  };

  const remover = async () => {
    const id = parseInt(id_autor);
    if (!id) {
      alert('ID inválido');
      return;
    }

    try {
      const res = await fetch(`${api}/${id_autor}`, {
        method: 'DELETE'
      });

      if (res.status === 204) {
        alert('Removido com sucesso');
        setId_autor('');
        setNome('');
        setAutor(null);
      } else {
        alert('Erro ao remover');
      }
    } catch (err) {
      console.error('Erro ao remover:', err);
      alert('Erro ao remover autor');
    }
  };

  return (
    <div>
      <h3>Cadastro de Autor</h3>
      <input value={id_autor} onChange={e => setId_autor(e.target.value)} placeholder="ID" /><br />
      <input value={nome} onChange={e => setNome(e.target.value)} placeholder="Nome do Autor" /><br />

      <button onClick={cadastrar}>Cadastrar</button>
      <button onClick={buscar}>Buscar</button>
      <button onClick={atualizar}>Atualizar</button>
      <button onClick={remover}>Remover</button>

      {autor && (
        <div>
          <p><strong>Autor:</strong> {autor.nome_autor}</p>
        </div>
      )}
    </div>
  );
}

export default CadastroAutor;
