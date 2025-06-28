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
};

async function list(req, res) {
    try {
        const Categoria = await modelCategoria.list();
        res.status(200).json(Categoria);
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao listar categorias' });
    }
;}

// async function update(req, res) {
//     const { id_categoria } = req.params;
//     const { Nome_categoria } = req.body;

//     try {
//         const result = await modelCategoria.update(id_categoria, Nome_categoria);
//         if (result === 0) {
//             res.status(404).json({ erro: 'Categoria não encontrada' });
//         } else {
//             res.status(200).json({ mensagem: 'Categoria atualizada com sucesso!' });
//         }
//     } catch (error) {
//         res.status(500).json({ erro: 'Erro ao atualizar categoria' });
//     }
// }

module.exports = {
    create,
    list
    // update,
    // remove
};