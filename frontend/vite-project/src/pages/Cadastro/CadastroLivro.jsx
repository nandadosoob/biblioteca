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

    const [listaAutores, setListaAutores] = useState([]);
    const [listaEditoras, setListaEditoras] = useState([]);
    const [listaCategorias, setListaCategorias] = useState([]);
    const [listaSubcategorias, setListaSubcategorias] = useState([]);

    useEffect(() => {
        async function fetchDados() {
            try {
                const autoresRes = await fetch('http://localhost:3000/api/autor');
                const editorasRes = await fetch('http://localhost:3000/api/editora');
                const categoriasRes = await fetch('http://localhost:3000/api/categoria');
                // const subcategoriasRes = await fetch('http://localhost:3000/api/subcategoria');

                const autoresJson = await autoresRes.json();
                setListaAutores(Array.isArray(autoresJson) ? autoresJson : []);
                setListaEditoras(await editorasRes.json());
                setListaCategorias(await categoriasRes.json());
                // setListaSubcategorias(await subcategoriasRes.json());
            } catch (error) {
                console.error('Erro ao buscar dados do backend', error);
            }
        }
        fetchDados();
    }, []);
    useEffect(() => {
        async function buscarSubcategorias() {
            if (!categoria) return;
            try {
                const res = await fetch(`http://localhost:3000/api/categoria/${categoria}/subcategorias`);
                const dados = await res.json();
                setListaSubcategorias(dados);
                setSubcategoriasSelecionadas([]); // limpa seleção anterior
            } catch (error) {
                console.error('Erro ao buscar subcategorias', error);
            }
        }
        buscarSubcategorias();
    }, [categoria]);

    async function adicionarAutor() {
        if (!nomeAutor.trim()) return alert('Digite o nome do autor');
        try {
            const resposta = await fetch('http://localhost:3000/api/autor', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nome_autor: nomeAutor })
            });

            if (resposta.ok) {
                const novoAutor = await resposta.json();
                setAutores([...autores, novoAutor.id_autor]);
                setNomeAutor('');
                const novaLista = await fetch('http://localhost:3000/api/autor');
                setListaAutores(await novaLista.json());
            } else {
                const erro = await resposta.json();
                alert('Erro ao adicionar autor: ' + (erro.error || 'Erro desconhecido'));
            }
        } catch (err) {
            alert('Erro ao conectar com o servidor.');
            console.error(err);
        }
    }

    async function cadastroLivro(e) {
        e.preventDefault();

        const dados = {
            titulo,
            qtd_disponivel: qntDisponivel,
            edicao,
            isbn,
            id_editora: Number(editora),
            ids_autores: autores,
            ids_subcategorias: subcategoriasSelecionadas
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
                setSubcategoriasSelecionadas([]);
                setQntDisponivel('');
                setListaSubcategorias([]);
            } else {
                const erro = await resposta.json();
                alert('Erro ao cadastrar: ' + (erro.error || 'Erro desconhecido'));
            }
        } catch (err) {
            alert('Erro ao conectar com o servidor.');
            console.error(err);
        }
    }

    function toggleSubcategoria(id) {
        setSubcategoriasSelecionadas(prev =>
            prev.includes(id)
                ? prev.filter(s => s !== id)
                : [...prev, id]
        );
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
                                <option value="1">Editora 34</option>
                                <option value="2">Editora Rocco</option>

                            </select>

                            <p>Edição do livro</p>
                            <input type="text" value={edicao} onChange={e => setEdicao(e.target.value)} />
                        </div>

                    </div>

                    <div id="box2">

                        <p>Autor</p>
                        <input type="text" placeholder="Nome do autor" value={nomeAutor} onChange={(e) => setNomeAutor(e.target.value)}></input>
                        <button onClick={adicionarAutor}>Adicionar</button>


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
                        <select value={categoria} onChange={e => setCategoria(e.target.value)}>
                            <option value="1">Ficção</option>
                            <option value="2">Não Ficção</option>
                            <option value="3">Infantil e Juvenil</option>
                            <option value="4">Poesia e Teatro</option>
                            <option value="5">Artes e Técnicas</option>
                            <option value="6">Técnico e Acadêmico</option>
                            <option value="7">Outros</option>
                            {/* outras categorias fixas */}
                        </select>


                        {listaSubcategorias.length > 0 && (
                            <>
                                <p>Subcategorias:</p>
                                {listaSubcategorias.map(sub => (
                                    <label key={sub.id_subcategoria}>
                                        <input
                                            type="checkbox"
                                            checked={subcategoriasSelecionadas.includes(sub.id_subcategoria)}
                                            onChange={() => toggleSubcategoria(sub.id_subcategoria)}
                                        />
                                        {sub.nome_subcategoria}
                                    </label>
                                ))}
                            </>
                        )}

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