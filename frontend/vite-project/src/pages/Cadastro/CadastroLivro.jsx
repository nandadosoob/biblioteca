import React from "react";
import { useState, useEffect } from 'react';
import { IconUser } from '@tabler/icons-react';
import './CadastroLivro.css'

export default function CadastroLivro() {
    const [titulo, setTitulo] = useState('');
    const [isbn, setIsbn] = useState('');
    const [editora, setEditora] = useState('');
    const [edicao, setEdicao] = useState('');
    const [nomeAutor, setNomeAutor] = useState('');
    const [autores, setAutores] = useState([]);
    const [categoria, setCategoria] = useState('');
    const [subcategoria, setSubcategoria] = useState('');
    const [qntDisponivel, setQntDisponivel] = useState('');

    const [listaEditoras, setListaEditoras] = useState([]);
    const [listaCategorias, setListaCategorias] = useState([]);
    const [listaSubcategorias, setListaSubcategorias] = useState([]);

    useEffect(() => {
        async function fetchDados() {
            try {
                const editorasRes = await fetch('http://localhost:3000/api/editoras');
                const categoriasRes = await fetch('http://localhost:3000/api/categoria');
                const subcategoriasRes = await fetch('http://localhost:3000/api/subcategoria');

                setListaEditoras(await editorasRes.json());
                setListaCategorias(await categoriasRes.json());
                setListaSubcategorias(await subcategoriasRes.json());
            } catch (error) {
                console.error('Erro ao buscar dados do backend', error);
            }
        }
        fetchDados();
    }, []);

    async function cadastroLivro(e) {
        e.preventDefault();

        const dados = {
            titulo,
            qtd_disponivel: qntDisponivel,
            edicao,
            isbn,
            id_editora: Number(editora),
            nomes_autores: autores,
            ids_subcategorias: [Number(subcategoria)]
        };

        try {
            const resposta = await fetch('http://localhost:3000/api/livro', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dados)
            });

            if (resposta.ok) {
                alert('Livro cadastrado com sucesso!');
                setTitulo('');
                setIsbn('');
                setEditora('');
                setNomeAutor('');
                setAutores([]);
                setCategoria('');
                setSubcategoria('');
                setQntDisponivel('');
            } else {
                const erro = await resposta.json();
                alert('Erro ao cadastrar: ' + (erro.error || 'Erro desconhecido'));
            }
        } catch (err) {
            alert('Erro ao conectar com o servidor.');
            console.error(err);
        }
    }

    function adicionarAutor() {
        if (!nomeAutor.trim()) {
            alert("Digite o nome do autor");
            return;
        }

        setAutores(prev => [...prev, nomeAutor.trim()]);
        setNomeAutor('');
    }


    return (
        <div>
            <div id="main3">

                <div id="questionario" onSubmit={cadastroLivro}>
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
                            <input type="text" value={titulo} onChange={e => setTitulo(e.target.value)} />


                            <p>ISBN</p>
                            <input type="number" value={isbn} onChange={e => setIsbn(e.target.value)} />

                            <p>Selecione a editora</p>
                            <select name="" id="" value={editora} onChange={e => setEditora(e.target.value)}>
                                <option value="">Selecione</option>
                                {listaEditoras.map(editora => (
                                    <option key={editora.id_editora} value={editora.id_editora}>
                                        {editora.nome_editora}
                                    </option>
                                ))}

                            </select>

                            <p>Edição do livro</p>
                            <input type="text" value={edicao} onChange={e => setEdicao(e.target.value)} />
                        </div>

                    </div>

                    <div id="box2">

                        <p>Autor</p>
                        <input type="text" placeholder="Nome do autor" value={nomeAutor} onChange={(e) => setNomeAutor(e.target.value)}></input>
                        <button onClick={adicionarAutor}>Adicionar</button>

                        {/* <p>Quantidade de autores do livro</p>
                        <input type="number" /> */}

                        <p>Autores adicionados:</p>
                        <ul>
                            {autores.map((autor, index) => (
                                <li key={index}>{autor}</li>
                            ))}
                        </ul>

                        <p>Quantidade disponível</p>
                        <input
                            type="number"
                            value={qntDisponivel}
                            onChange={e => setQntDisponivel(e.target.value)}
                        />

                        <p>Categoria</p>
                        <select name="" id="" value={categoria} onChange={e => setCategoria(e.target.value)}>
                            <option value="">Selecione</option>
                            {listaCategorias.map(cat => (
                                <option key={cat.id_categoria} value={cat.id_categoria}>{cat.nome_categoria}</option>
                            ))}
                        </select>

                        <p>Subcategoria</p>
                        <select name="" id="" value={subcategoria} onChange={e => setSubcategoria(e.target.value)}>
                            <option value="">Selecione</option>
                            {listaSubcategorias.map(sub => (
                                <option key={sub.id_subcategoria} value={sub.id_subcategoria}>{sub.nome_subcategoria}</option>
                            ))}
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