import React from "react";
import {useState, useEffect} from 'react';
import { IconUser } from '@tabler/icons-react';
import './CadastroLivro.css'

export default function CadastroLivro() {
    const [nomeAutor, setNomeAutor] = useState('');    

    const cadastrar = async() => {
        let parametros = {
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({nome_autor:nomeAutor})
        }
        await fetch('http://localhost:3000/api/autores', parametros)
        
    }

    return (
        <div>
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

                        <p>Autor</p>
                        <input type="text" placeholder="Nome do autor" value={nomeAutor} onChange={(e) => setNomeAutor(e.target.value)}></input>
                        <button>Adicionar</button>

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
                        <button id="botaoCancela">Cancelar</button>
                        <button id="botaoCadastra">Cadastrar</button>

                    </div>



                </div>

            </div>
        </div>

    )
}