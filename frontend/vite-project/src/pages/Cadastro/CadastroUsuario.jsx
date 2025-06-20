import React from "react";
import './CadastroUsuario.css'
import React, { useState } from 'react';

export default function CadastroUsuario() {
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
                    <button id="botaoCancela">Cancelar</button>
                    <button id="botaoCadastra">Cadastrar</button>

                </div>


            </div>
        </div>
    )
}