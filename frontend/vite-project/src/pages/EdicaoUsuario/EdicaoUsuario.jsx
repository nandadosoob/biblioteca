import React from "react";
import './EdicaoUsuario.css'
import { IconBook, IconTrash, IconPencil, IconUser } from '@tabler/icons-react';


export default function EdicaoUsuario() {
    return (
        <div>
            <div id="main">

                <div className="barra-pesquisa-container">
                    <input id="barrapesquisa" type="text" placeholder="Pesquise aqui o usuário que você deseja editar" />
                    <button><IconBook></IconBook></button>
                </div>

                <div id="classificacao">
                    <p id="Name">Usuario</p>
                    <p id="edit">Editar</p>
                    <p id="del">Excluir</p>

                </div>

                <div id="listaUsuarios">
                    <div className="item1">
                        <div id="user">
                            <IconUser id="iconeUser" />
                        </div>
                        <div id="informacoes">
                            <p>Nome</p>
                        </div>
                        <div id="botoes">
                            <button id="botaoEditar" ><IconPencil className="iconeEdit" /></button>
                            <button id="botaoExcluir"><IconTrash className="iconeEdit" /></button>

                        </div>
                    </div>
                </div>


            </div>
        </div>

    )
}