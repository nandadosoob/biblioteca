import React, { useEffect, useState } from "react";
import './EdicaoUsuario.css'
import { Link } from "react-router-dom";
import { IconBook, IconTrash, IconPencil, IconUser } from '@tabler/icons-react';



export default function EdicaoUsuario() {
    const [usuarios, setUsuarios] = useState([]);
    const [pesquisa, setPesquisa] = useState('');

    useEffect(() => {
        async function fetchUsuarios() {
            try {
                const resposta = await fetch('http://localhost:3000/api/locatario');
                const dados = await resposta.json();
                // setUsuarios(dados);
                setUsuarios(dados.locatarios);
            } catch (err) {
                console.error("Erro ao buscar usuários:", err);
                alert("Erro ao buscar usuários.");
            }
        }

        fetchUsuarios();
    }, []);

    const usuariosFiltrados = usuarios.filter(usuario =>
        
        usuario.nome_locatario.toLowerCase().includes(pesquisa.toLowerCase())
    );

    async function excluirUsuario(id) {
    const confirmacao = window.confirm("Tem certeza que deseja excluir este usuário?");
    if (!confirmacao) return;

    try {
        const resposta = await fetch(`http://localhost:3000/api/locatario/${id}`, {
            method: 'DELETE'
        });

        if (resposta.status === 204) {
            alert('Usuário excluído com sucesso!');
            setUsuarios(prev => prev.filter(u => u.id_locatario !== id));
        } else {
            alert('Erro ao excluir usuário.');
           
        }
    } catch (error) {
        console.error("Erro ao excluir:", error);
        alert("Erro ao excluir usuário.");
    }
}

    return (
        <div>
            <div id="main2">

                <div className="barra-pesquisa-container">
                    <input id="barrapesquisa" type="text" placeholder="Pesquise aqui o usuário que você deseja editar" value={pesquisa} onChange={e => setPesquisa(e.target.value)} />
                    <button><IconBook></IconBook></button>
                </div>

                <div id="classificacao">
                    <p id="Name">Usuario</p>
                    <p id="edit">Editar</p>
                    <p id="del">Excluir</p>

                </div>

                <div id="listaUsuarios">
                    
                    {usuariosFiltrados.map((usuario) => (
                        <div key={usuario.id_locatario} className="item1User">
                            <div id="user">
                                <IconUser id="iconeUser" />
                            </div>
                            <div id="informacoes">
                                <p>{usuario.nome_locatario}</p>
                            </div>
                            <div id="botoes">
                                <Link to={`/TelaEdicaoUsuario/${usuario.id_locatario}`} id="link">
                                    <button id="botaoEditar">
                                        <IconPencil className="iconeEdit" />
                                    </button>
                                </Link>
                                <button id="botaoExcluir" onClick={() => excluirUsuario(usuario.id_locatario)}>
                                    <IconTrash className="iconeEdit" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </div >

    )
}