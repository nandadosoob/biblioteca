import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import './TelaEdicaoUsuario.css'

function formatarTelefone(valor) {
  const numeros = valor.replace(/\D/g, '').slice(0, 11);

  if (numeros.length <= 10) {
    return numeros.replace(/(\d{0,2})(\d{0,4})(\d{0,4})/, (_, ddd, parte1, parte2) =>
      `${ddd ? `(${ddd}` : ''}${ddd && parte1 ? `) ${parte1}` : parte1}${parte2 ? `-${parte2}` : ''}`
    ).trim();
  } else {
    return numeros.replace(/(\d{0,2})(\d{0,5})(\d{0,4})/, (_, ddd, parte1, parte2) =>
      `${ddd ? `(${ddd}` : ''}${ddd && parte1 ? `) ${parte1}` : parte1}${parte2 ? `-${parte2}` : ''}`
    ).trim();
  }
}

export default function TelaEdicaoUsuario() {
  const { id } = useParams();

  const [nome, setNome] = useState('');
  const [ra, setRa] = useState('');
  const [tipo, setTipo] = useState('Aluno');
  const [curso, setCurso] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  useEffect(() => {
    async function fetchUsuario() {
      try {
        const res = await fetch(`http://localhost:3000/api/locatario/${id}`);
        const data = await res.json();
        setNome(data.locatario.nome_locatario || '');
        setRa(data.locatario.ra || '');
        setTipo(data.locatario.tipo || 'Aluno');
        setCurso(data.locatario.curso || '');
        setDataNascimento(data.locatario.data_nascimento?.substring(0, 10) || '');
        setEmail(data.locatario.email || '');
        setTelefone(data.locatario.telefone?.replace(/\D/g, '') || '');
      } catch (err) {
        console.error("Erro ao buscar usuário:", err);
      }
    }

    fetchUsuario();
  }, [id]);

  async function handleSalvar() {
    const dadosAtualizados = {
      nome_locatario: nome,
      ra,
      tipo,
      curso,
      data_nascimento: dataNascimento,
      email,
      telefone, // aqui vai só o número sem máscara
    };

    try {
      const res = await fetch(`http://localhost:3000/api/locatario/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dadosAtualizados)
      });

      if (res.ok) {
        alert('Usuário atualizado com sucesso!');
      } else {
        const erro = await res.json();
        alert('Erro ao atualizar: ' + (erro.error || 'Erro desconhecido'));
      }
    } catch (err) {
      alert('Erro ao conectar com o servidor.');
      console.error(err);
    }
  }

  function handleTelefoneChange(e) {
    const numeros = e.target.value.replace(/\D/g, '');
    setTelefone(numeros);
  }

  return (
    <div id="main4">
      <div id="box">
        <p id="nom">Nome</p>
        <input type="text" value={nome} onChange={e => setNome(e.target.value)} />

        <p>RA</p>
        <input type="number" value={ra} onChange={e => setRa(e.target.value)} />

        <p>Tipo de usuário</p>
        <select value={tipo} onChange={e => setTipo(e.target.value)}>
          <option value="Aluno">Aluno</option>
          <option value="Professor">Professor</option>
          <option value="Bibliotecario">Bibliotecario</option>
        </select>

        <p>Curso</p>
        <select value={curso} onChange={e => setCurso(e.target.value)}>
          <option value="1">bcc</option>
        </select>

        <p>Data de Nascimento</p>
        <input type="date" value={dataNascimento} onChange={e => setDataNascimento(e.target.value)} />

        <p>E-mail</p>
        <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

        <p>Telefone</p>
        <input
          type="tel"
          value={formatarTelefone(telefone)}
          onChange={handleTelefoneChange}
        />

        <div id="divBotoes">
          <Link to="/EdicaoUsuario" id="link">
            <button id="botaoCadastra" onClick={handleSalvar}>Concluir</button>
          </Link>
          <Link to="/EdicaoUsuario" id="link">
            <button id="botaoCancela">Cancelar</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
