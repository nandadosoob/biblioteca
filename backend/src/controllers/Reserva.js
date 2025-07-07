const modelReserva = require('../models/Reserva');
const modelLocatario = require('../models/Locatario'); // Você precisa dessa função
const { calcularDataRetorno } = require('../utils/data');



// Criar nova reserva
async function create(req, res) {
  const { id_livro, id_locatario, data_reserva } = req.body;

  if (!id_livro || !id_locatario || !data_reserva) {
    return res.status(400).json({
      error: 'Campos obrigatórios: id_livro, id_locatario, data_reserva',
    });
  }

  try {
    // 1. Obter tipo do locatário (aluno ou professor)
    const locatario = await modelLocatario.getById(id_locatario);
    if (!locatario) {
      return res.status(404).json({ error: 'Locatário não encontrado' });
    }

    const tipo = locatario.tipo;

    // 2. Verificar quantidade de reservas ativas
    const qtdReservasAtivas = await modelReserva.quantidadeReservasAtivasPorUsuario(id_locatario);
    const limite = tipo === 'aluno' ? 3 : 5;

    if (qtdReservasAtivas >= limite) {
      return res.status(403).json({
        error: `Usuário do tipo ${tipo} já atingiu o limite de ${limite} reservas ativas.`,
      });
    }

    // 3. Calcular a data de retorno com base no tipo do usuário
    const data_retorno = calcularDataRetorno(tipo, data_reserva);

    // 4. Criar reserva com data_entrega como null (ainda não devolvido) e com data_retorno
    await modelReserva.create(id_livro, id_locatario, data_reserva, null, data_retorno);


    // 5. Retornar resposta com data_retorno
    res.status(201).json({
      message: 'Reserva criada com sucesso',
      data_retorno,
    });

  } catch (error) {
    console.error('Erro no create do controller Reserva:', error.message);
    res.status(500).json({ error: 'Erro ao criar reserva' });
  }
}


async function list(req, res) {
  try {
    const reservas = await modelReserva.list();
    res.status(200).json({ reservas });
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
  const { id_livro, id_locatario, data_reserva } = req.params;
  const { data_retorno } = req.body;

  if (!data_retorno) {
    return res.status(400).json({ error: 'Data de retorno obrigatória para atualizar' });
  }

  try {
    const updatedCount = await modelReserva.update(id_livro, id_locatario, data_reserva, data_retorno);
    if (updatedCount === 0) return res.status(404).json({ error: 'Reserva não encontrada' });

    res.status(200).json({ message: 'Reserva atualizada com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar reserva' });
  }
}

async function registrarEntrega(req, res) {
  const { id_livro, id_locatario, data_reserva } = req.params;
  const { data_entrega } = req.body;

  if (!data_entrega) {
    return res.status(400).json({ error: 'Data de entrega obrigatória para atualizar' });
  }

  try {
    const updatedCount = await modelReserva.registrarEntrega(id_livro, id_locatario, data_reserva, data_entrega);
    if (updatedCount === 0) {
      return res.status(404).json({ error: 'Reserva não encontrada' });
    }

    res.status(200).json({ message: 'Data de entrega registrada com sucesso' });
  } catch (error) {
    console.error('Erro ao registrar entrega:', error.message);
    res.status(500).json({ error: 'Erro interno ao registrar entrega' });
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

module.exports = { create, list, get, update, registrarEntrega , remove};
