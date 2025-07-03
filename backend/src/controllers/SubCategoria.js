const subcategoriaModel = require('../models/SubCategoria');

// Cria subcategoria e associa à categoria
async function create(req, res) {
    const { nome_subcategoria, id_categoria } = req.body;

    if (!nome_subcategoria || !id_categoria) {
        return res.status(400).json({ erro: 'Campos obrigatórios: nome_subcategoria e id_categoria' });
    }

    try {
        const novaSub = await subcategoriaModel.create(nome_subcategoria);
        await subcategoriaModel.associarCategoria(id_categoria, novaSub.id_subcategoria);
        res.status(201).json({ mensagem: 'Subcategoria criada e associada com sucesso!' });
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao criar subcategoria' });
    }
}

// Lista subcategorias com categorias associadas
async function list(req, res) {
    try {
        const subcategorias = await subcategoriaModel.list();
        res.status(200).json(subcategorias);
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao listar subcategorias' });
    }
}

// Atualiza o nome da subcategoria
async function update(req, res) {
    const { id_subcategoria } = req.params;
    const { nome_subcategoria } = req.body;

    try {
        const result = await subcategoriaModel.update(id_subcategoria, nome_subcategoria);
        if (result === 0) {
            res.status(404).json({ erro: 'Subcategoria não encontrada' });
        } else {
            res.status(200).json({ mensagem: 'Subcategoria atualizada com sucesso' });
        }
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao atualizar subcategoria' });
    }
}

// Deleta subcategoria
async function remove(req, res) {
    const { id_subcategoria } = req.params;

    try {
        await subcategoriaModel.remove(id_subcategoria);
        res.status(200).json({ mensagem: 'Subcategoria removida com sucesso' });
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao remover subcategoria' });
    }
}

module.exports = {
    create,
    list,
    update,
    remove
};
