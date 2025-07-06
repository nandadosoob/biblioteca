const modelEditora = require('../models/Editora');

async function create(req, res) {
  const { nome_editora } = req.body;

  if (!nome_editora || nome_editora.trim() === '') {
    return res.status(400).json({ error: 'Obrigatório: nome da editora (campo nome_editora)' });
  }

  try {
    await modelEditora.create(nome_editora);
    return res.status(201).json({ message: 'Editora criada com sucesso!' });
  } catch (error) {
    console.error('Erro na função create da editora:', error.message);
    return res.status(500).json({ error: 'Erro ao criar editora' });
  }
}

async function list(req, res) {
  try {
    const editoras = await modelEditora.list();
    return res.status(200).json({ editoras });
  } catch (error) {
    console.error('Erro na função list da editora:', error.message);
    return res.status(500).json({ error: 'Erro ao listar editoras' });
  }
}

async function get(req, res) {
  const { id_editora } = req.params;
  try {
    const editora = await modelEditora.get(id_editora);
    if (!editora) {
      return res.status(404).json({ error: 'Editora não encontrada' });
    }
    return res.status(200).json({ editora });
  } catch (error) {
    console.error('Erro na função get da editora:', error.message);
    return res.status(500).json({ error: 'Erro ao buscar editora' });
  }
}

async function update(req, res) {
  const { id_editora } = req.params;
  const { nome_editora } = req.body;

  if (!nome_editora || nome_editora.trim() === '') {
    return res.status(400).json({ error: 'Nome da editora obrigatório' });
  }

  try {
    const updatedCount = await modelEditora.update(id_editora, nome_editora);

    if (updatedCount === 1) {
      return res.status(200).json({ message: 'Editora atualizada com sucesso!' });
    } else {
      return res.status(404).json({ error: 'Editora não encontrada' });
    }
  } catch (error) {
    console.error('Erro na função update da editora:', error.message);
    return res.status(500).json({ error: 'Erro ao atualizar editora' });
  }
}

async function remove(req, res) {
  const { id_editora } = req.params;
  try {
    await modelEditora.remove(id_editora);
    return res.status(204).send();
  } catch (error) {
    console.error('Erro na função remove da editora:', error.message);
    return res.status(500).json({ error: 'Erro ao remover editora' });
  }
}

module.exports = { create, list, get, update, remove };