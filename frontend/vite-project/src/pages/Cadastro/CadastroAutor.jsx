import React, { useState } from 'react';

function CadastroAutor() {
  const [id_autor, setId_autor] = useState('');
  const [nome, setNome] = useState('');
  const [autor, setAutor] = useState(null);

  const api = 'http://localhost:3000/api/autor';

  const cadastrar = async () => {
    await fetch(api, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome_autor: nome })
    });
    alert('Cadastrado com sucesso');
    setNome('');
  };

  const buscar = async () => {
    const res = await fetch(`${api}/${id_autor}`);
    const data = await res.json();
    setAutor(data);
    setNome(data.nome_autor);
  };

  const atualizar = async () => {
    await fetch(`${api}/${id_autor}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome_autor: nome })
    });
    alert('Atualizado');
  };

  const remover = async () => {
  const id = parseInt(id_autor);
  console.log(id_autor);
  
  if (!id) {
    alert('ID inválido');
    return;
  }

console.log(`${api}/${id_autor}`)

  const res = await fetch(`${api}/${id_autor}`, {
    method: 'DELETE'
  });

  if (res.status === 204) {
    alert('Removido com sucesso');
    setId_autor('');
    setNome('');
    setAutor(null);
  } else {
    alert('Erro ao remover',res.status);
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
