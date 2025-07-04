
import React, { useState } from 'react';
import './CadastroUsuario.css'

export default function CadastroUsuario() {

    const [nome, setNome] = useState('');
    const [ra, setRa] = useState('');
    const [tipo, setTipo] = useState('Aluno');
    const [curso, setCurso] = useState('1');
    const [dataNascimento, setDataNascimento] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');

    async function handleCadastrar(e) {
        e.preventDefault();

        const dados = {
            nome_locatario: nome,
            ra: ra,
            tipo: tipo,
            curso: curso,
            data_nascimento: dataNascimento,
            email: email,
            telefone: telefone,
            login: tipo === "Bibliotecario" ? login : null,
            senha: tipo === "Bibliotecario" ? senha : null,

        };

        try {
            const resposta = await fetch('http://localhost:3000/api/locatario', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dados)
            });
            alert('Cadastrado com sucesso');
            setNome('');

            if (resposta.ok) {
                alert('Usuário cadastrado com sucesso!');
                setNome('');
                setRa('');
                setTipo('Aluno');
                setCurso(1);
                setDataNascimento('');
                setEmail('');
                setTelefone('');
                setLogin('');
                setSenha('');
            } else {
                const erro = await resposta.json();
                alert('Erro ao cadastrar: ' + (erro.error || 'Erro desconhecido'));
            }
        } catch (err) {
            alert('Erro ao conectar com o servidor.');
            console.error(err);
        }
    }


    return (
        <div id="main4">

            <div id="box" >


                <p id="nom">Nome</p>
                <input type="text" id="nome" value={nome} onChange={e => setNome(e.target.value)} required />

                <p>RA</p>
                <input type="number" id="ra" value={ra} onChange={e => setRa(e.target.value)} />


                <p>Tipo de Usuário</p>
                <select id="tipo" value={tipo} onChange={e => setTipo(e.target.value)} required>
                    <option value="Aluno">Aluno</option>
                    <option value="Professor">Professor</option>
                    <option value="Bibliotecario">Bibliotecario</option>
                </select>

                {tipo === "Bibliotecario" && (
                    <>
                        <p>Login</p>
                        <input type="text" value={login} onChange={e => setLogin(e.target.value)} required />

                        <p>Senha</p>
                        <input type="password" value={senha} onChange={e => setSenha(e.target.value)} required />
                    </>
                )}


                <p>Curso</p>
                <select id="curso" value={curso} onChange={e => setCurso(e.target.value)} required>
                    <option value="1">BCC</option>
                </select>

                <p id="dataNascimento">Data de Nascimento</p>
                <input type="date" id="dataNascimento" value={dataNascimento} onChange={e => setDataNascimento(e.target.value)} required
                />

                <p>E-Mail</p>
                <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} required />

                <p>Telefone</p>
                <input type="tel" id="telefone" value={telefone} onChange={e => setTelefone(e.target.value)} />

                <div id="divBotoes">
                    <button id="botaoCancela" type="reset" onClick={() => {
                        setNome('');
                        setRa('');
                        setTipo('Aluno');
                        setCurso('');
                        setDataNascimento('');
                        setEmail('');
                        setTelefone('');
                    }}>Cancelar</button>
                    <button type="submit" id="botaoCadastra" onClick={handleCadastrar}>Cadastrar</button>

                </div>


            </div>
        </div>
    )
}