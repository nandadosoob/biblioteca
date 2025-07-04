const modelCategoria = require('../models/Categoria');

async function create(req, res) {
    const { Nome_categoria } = req.body;

    if (!Nome_categoria) {
        return res.status(400).json({ erro: 'Nome da categoria é obrigatório' });
    }

    try {
        await modelCategoria.create(Nome_categoria);
        res.status(201).json({ mensagem: 'Categoria criada com sucesso!' });
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao criar categoria' });
    }
}

async function list(req, res) {
    try {
        const categorias = await modelCategoria.list();
        res.status(200).json(categorias);
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao listar categorias' });
    }
}

async function get(req, res) {
    const { id_categoria } = req.params;

    try {
        const categoria = await modelCategoria.get(id_categoria);
        if (!categoria) {
            return res.status(404).json({ erro: 'Categoria não encontrada' });
        }
        res.status(200).json(categoria);
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao buscar categoria' });
    }
}

async function update(req, res) {
    const { id_categoria } = req.params;
    const { Nome_categoria } = req.body;

    if (!Nome_categoria) {
        return res.status(400).json({ erro: 'Nome da categoria é obrigatório' });
    }

    try {
        const result = await modelCategoria.update(id_categoria, Nome_categoria);
        if (result === 0) {
            res.status(404).json({ erro: 'Categoria não encontrada' });
        } else {
            res.status(200).json({ mensagem: 'Categoria atualizada com sucesso!' });
        }
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao atualizar categoria' });
    }
}

async function remove(req, res) {
    const { id_categoria } = req.params;

    try {
        const result = await modelCategoria.remove(id_categoria);
        if (result === 0) {
            res.status(404).json({ erro: 'Categoria não encontrada' });
        } else {
            res.status(200).json({ mensagem: 'Categoria removida com sucesso!' });
        }
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao remover categoria' });
    }
}

module.exports = {
    create,
    list,
    get,
    update,
    remove
};
