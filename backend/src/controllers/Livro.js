const modelLivro = require('../models/Livro'); // seu DAO

const create = async (req, res) => {
    const { Titulo, Qtd_disponivel, Edicao, ISBN } = req.body;
    try {
        await modelLivro.create(Titulo, Qtd_disponivel, Edicao, ISBN);
        res.status(201).json({ message: 'Livro criado com sucesso' });
    } catch (error) {
        console.error('Erro no create do livro:', error.message);
        res.status(500).json({ error: 'Erro ao criar o livro' });
    }
};

const list = async (req, res) => {
    try {
        const livros = await modelLivro.list();
        res.json(livros);
    } catch (error) {
        console.error('Erro no list do livro:', error.message);
        res.status(500).json({ error: 'Erro ao listar livros' });
    }
};

const get = async (req, res) => {
    const { id_livro } = req.params;
    try {
        const livro = await modelLivro.get(id_livro);
        res.json(livro);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar o livro' });
    }
};

const update = async (req, res) => {
    const { id_livro } = req.params;
    const { Titulo, Qtd_disponivel, Edicao, ISBN } = req.body;
    try {
        const count = await modelLivro.update(id_livro, Titulo, Qtd_disponivel, Edicao, ISBN);
        if (count === 0) {
            return res.status(404).json({ error: 'Livro não encontrado' });
        }
        res.json({ message: 'Livro atualizado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar o livro' });
    }
};

const remove = async (req, res) => {
    const { id_livro } = req.params;
    try {
        await modelLivro.remove(id_livro);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Erro ao remover o livro' });
    }}

module.exports = {
    create,
    list,
    get,
    update,
    remove
};