import React, { useState } from 'react';

function CadastroAutor() {
  const [nomeAutor, setNomeAutor] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const resposta = await fetch('http://localhost:3000/api/autor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome_autor: nomeAutor }),
      });

      if (resposta.ok) {
        setMensagem('Autor cadastrado com sucesso!');
        setNomeAutor('');
      } else {
        setMensagem('Erro ao cadastrar autor.');
      }
    } catch (error) {
      setMensagem('Erro ao conectar com o servidor.');
    }
  };

  return (
    <div>
      <h2>Cadastrar Autor</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome do autor"
          value={nomeAutor}
          onChange={(e) => setNomeAutor(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </form>
      {mensagem && <p>{mensagem}</p>}
    </div>
  );
}

export default CadastroAutor;
