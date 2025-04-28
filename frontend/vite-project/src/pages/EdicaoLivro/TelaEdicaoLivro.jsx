import React from "react";
import { Link } from 'react-router-dom'
import './TelaEdicaoLivro.css'

export default function TelaEdicaoLivro() {
    return (
        <div id="main3">

            <div id="questionario">
                <div id="box1">
                    <div id="box4">
                        <div id="campoImagem">
                            <div id="boxAddCapa">
                                <p id="textoAddCapa">Adicone a capa do livro aqui</p>
                            </div>
                        </div>

                    </div>
                    <div id="box3">

                        <p>Título</p>
                        <input type="text" />


                        <p>ISBN</p>
                        <input type="number" />

                        <p>Selecione a editora</p>
                        <select name="" id="">
                            <option value=""></option>
                        </select>

                        <p>Edição do livro</p>
                        <input type="text" />
                    </div>

                </div>

                <div id="box2">


                    <p>Quantidade de autores do livro</p>
                    <input type="number" />


                    <p>Selecione os autores</p>
                    <select name="" id="" multiple>
                        <option value=""></option>
                    </select>

                    <p>Quantidade disponível</p>

                    <p>Categoria</p>
                    <select name="" id="">
                        <option value=""></option>
                    </select>

                    <p>Subcategoria</p>
                    <select name="" id="">
                        <option value=""></option>
                    </select>

                </div>


                <div id="divBotoes">
                    <button id="botaoCadastra">
                        Concluir</button>

                    <button id="botaoCancela"><Link to="/EdicaoLivro" id="link">Cancelar</Link></button>

                </div>


            </div>
        </div>
    )
}