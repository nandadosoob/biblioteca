import React from "react";
import { Link } from 'react-router-dom'
import './TelaEdicaoUsuario.css'
// import EdicaoUsuario from "./EdicaoUsuario";

export default function TelaEdicaoUsuario() {
    return (
        <div id="main4">

            <div id="box">


                <p id="nom">Nome</p>
                <input type="text" />

                <p>RA</p>
                <input type="number" name="" id="" />


                <p>Tipo de usuário</p>
                <select name="" id="">
                    <option value="">Aluno</option>
                    <option value="">Professor</option>
                    <option value="">Bibliotecario</option>
                </select>

                <p>Curso</p>
                <select name="" id="" multiple>
                    <option value=""></option>
                </select>

                <p>Data de Nascimento</p>
                <input type="date" />

                <p>email</p>
                <input type="text" name="" id="" />

                <p>Telefone</p>
                <input type="number" />

                <div id="divBotoes">
                    <button id="botaoCadastra">Concluir</button>
                    <Link to="/EdicaoUsuario" id="link">
                    <button id="botaoCancela">Cancelar</button>
                    </Link>

                </div>


            </div>
        </div>
    )
}