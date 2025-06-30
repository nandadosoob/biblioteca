import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import './TelaEdicaoUsuario.css'
// import EdicaoUsuario from "./EdicaoUsuario";

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

        // preencher estados com os dados do backend
        setNome(data.locatario.nome_locatario || '');
        setRa(data.locatario.ra || '');
        setTipo(data.locatario.tipo || 'Aluno');
        setCurso(data.locatario.curso || '');
        setDataNascimento(data.locatario.data_nascimento ? data.locatario.data_nascimento.substring(0,10) : '');
        setEmail(data.locatario.email || '');
        setTelefone(data.locatario.telefone || '');
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
      telefone,
      // login e senha, se quiser incluir
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


    return (
        <div id="main4">

            <div id="box">


                <p id="nom">Nome</p>
                <input type="text" value={nome} onChange={e => setNome(e.target.value)} />

                <p>RA</p>
                <input type="number" value={ra} onChange={e => setRa(e.target.value)} />


                <p>Tipo de usuário</p>
                <select value={tipo} onChange={e => setTipo(e.target.value)}>
                    <option value="">Aluno</option>
                    <option value="">Professor</option>
                    <option value="">Bibliotecario</option>
                </select>

                <p>Curso</p>
                <select value={curso} onChange={e => setCurso(e.target.value)}>
                    <option value="1">bcc</option>
                </select>

                <p>Data de Nascimento</p>
                <input type="date" value={dataNascimento} onChange={e => setDataNascimento(e.target.value)}/>

                <p>email</p>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

                <p>Telefone</p>
                <input type="number"value={telefone} onChange={e => setTelefone(e.target.value)} />

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
    )
}