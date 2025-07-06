const modelCurso = require('../models/Curso');

async function create(req, res) {
  const { nome_curso } = req.body;

  if (!nome_curso || nome_curso.trim() === '') {
    return res.status(400).json({ error: 'Obrigatório: Nome do curso (nome_curso)' });
  }

  try {
    await modelCurso.create(nome_curso);
    return res.status(201).json({ message: 'Curso criado com sucesso' });
  } catch (error) {
    console.error('Erro ao criar curso:', error.message);
    return res.status(500).json({ error: 'Erro ao criar curso' });
  }
}

async function list(req, res) {
  try {
    const cursos = await modelCurso.list();
    return res.status(200).json({ cursos });
  } catch (error) {
    console.error('Erro no list de curso:', error.message);
    return res.status(500).json({ error: 'Erro ao listar cursos' });
  }
}

async function get(req, res) {
  const id_curso = req.params.id_curso;
  try {
    const curso = await modelCurso.get(id_curso);
    if (!curso) return res.status(404).json({ error: 'Curso não encontrado' });
    return res.status(200).json({ curso });
  } catch (error) {
    console.error('Erro ao buscar curso:', error.message);
    return res.status(500).json({ error: 'Erro ao buscar curso' });
  }
}

async function update(req, res) {
  const id_curso = req.params.id_curso;
  const { nome_curso } = req.body;

  if (!nome_curso || nome_curso.trim() === '') {
    return res.status(400).json({ error: 'Nome do curso obrigatório' });
  }

  try {
    const updated = await modelCurso.update(id_curso, nome_curso);
    if (updated === 1) return res.status(200).json({ message: 'Curso atualizado com sucesso' });
    return res.status(404).json({ error: 'Curso não encontrado' });
  } catch (error) {
    console.error('Erro ao atualizar curso:', error.message);
    return res.status(500).json({ error: 'Erro ao atualizar curso' });
  }
}

async function remove(req, res) {
  const id_curso = req.params.id_curso;
  try {
    await modelCurso.remove(id_curso);
    return res.status(204).send();
  } catch (error) {
    console.error('Erro ao remover curso:', error.message);
    return res.status(500).json({ error: 'Erro ao remover curso' });
  }
}

module.exports = { create, list, get, update, remove };
