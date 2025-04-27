import React from "react";
import { IconUser } from '@tabler/icons-react';
import './CadastroLivro.css'

export default function CadastroLivro() {
    return (
        <div>
            <div id="main">

                <div id="questionario">
                    <div id="box1">
                        <div id="campoImagem">
                            <div>
                                <p>Adicone a capa do livro aqui</p>
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
                        </div>

                    </div>

                    <div id="box2">

                        <p>Edição do livro</p>
                        <input type="text" />

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




                </div>

            </div>
        </div>

    )
}