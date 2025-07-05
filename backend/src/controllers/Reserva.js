// chmar função qtdEmprestimos ATivo, e armazenar variavel

// async function cadastrarReserva(params) {
//     livro,locatario, datas 
//     // locatario retorna o tipo .tipo if se a qtd de empresi+timos desse tipo é maior ou menor q o numero q ele pode reservar
//     // passando o id qm é o usuario, retornar qtd de mprestimo ativo, get do livro

    
// }

const modelReserva = require('../models/Reserva');

async function create(req, res) {
  const {id_livro, id_locatario, data_reserva, data_retorno} = req.body;

  if (!id_livro || !id_locatario || !data_reserva || !data_retorno) {
    return res.status(400).json({ error: 'Campos obrigatórios: id_livro, id_locatario, data_reserva, data_retorno' });
  }

  try {
    await modelReserva.create(id_livro, id_locatario, data_reserva, data_retorno);
    res.status(201).json({ message: 'Reserva criada com sucesso' });
  } catch (error) {
    console.error('Erro no create do controller Reserva:', error.message);
    res.status(500).json({ error: 'Erro ao criar reserva' });
  }
}

async function list(req, res) {
  try {
    const reservas = await modelReserva.list();
    res.status(200).json({reservas});
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar reservas' });
  }
}

async function get(req, res) {
  const { id_livro, id_locatario, data_reserva } = req.params;

  try {
    const reserva = await modelReserva.get(id_livro, id_locatario, data_reserva);
    if (!reserva) return res.status(404).json({ error: 'Reserva não encontrada' });
    res.status(200).json({ reserva });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar reserva' });
  }
}

async function update(req, res) {
  const {id_livro, id_locatario, data_reserva} = req.params;
  const {data_retorno} = req.body;

  if (!data_retorno) return res.status(400).json({ error: 'Data de retorno obrigatória para atualizar' });

  try {
    const updatedCount = await modelReserva.update(id_livro, id_locatario, data_reserva, data_retorno);
    if (updatedCount === 0) return res.status(404).json({ error: 'Reserva não encontrada' });
    res.status(200).json({message: 'Reserva atualizada com sucesso'});
  } catch (error) {
    res.status(500).json({error: 'Erro ao atualizar reserva'});
  }
}

async function remove(req, res) {
  const { id_livro, id_locatario, data_reserva } = req.params;

  try {
    await modelReserva.remove(id_livro, id_locatario, data_reserva);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao remover reserva' });
  }
}

module.exports = { create, list, get, update, remove };
