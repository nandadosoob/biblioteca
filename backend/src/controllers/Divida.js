const modelDivida = require('../models/Divida');
const db = require('../dbConfig').pgPool;


async function create(req, res) {
    const {id_locatario, id_livro, data_reserva, estado, valor, data_divida} = req.body;

    if (!id_locatario || !id_livro) {
        res.status(400).json({ error: 'Obrigatorio: Nome do locatario, campo nome_locatario' });
        return;
    }

    try {
        await modelDivida.create(id_locatario, id_livro, data_reserva, estado, valor, data_divida);
        res.status(201).json({ message: 'ok' });
    } catch (error) {
        console.error('erro na função create do locatario', error.message);
        res.status(500).json({ error: 'Erro ao criar locatario' });
    }
}

async function list(req, res){
    try{
        let dividas = await modelDivida.list();
        res.status(200).json({dividas:dividas});
        return;
    } catch( error ){
        res.status(500).json({error: 'Erro no list de dividas'});
        return;
    }
};

async function get(req, res) {
    const id_divida = req.params.id_divida;
    try {
        const divida = await modelDivida.get(id_divida);
        if (!divida) {
            res.status(404).json({ error: 'dividao não encontrada' });
            return;
        }
        res.status(200).json({ divida });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar divida' });
    }
}


async function atualizarEstado(req, res) {
  const { id_divida } = req.params;
  const { novo_estado } = req.body;

  if (!['quitada', 'perdoada'].includes(novo_estado)) {
    return res.status(400).json({ error: 'Estado inválido. Use "quitada" ou "perdoada".' });
  }

  try {
    const result = await db.query(
      'UPDATE divida SET estado = $1 WHERE id_divida = $2 RETURNING *',
      [novo_estado, id_divida]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Dívida não encontrada' });
    }

    res.status(200).json({ message: `Dívida ${novo_estado} com sucesso`, divida: result.rows[0] });
  } catch (error) {
    console.error('Erro ao atualizar estado da dívida:', error.message);
    res.status(500).json({ error: 'Erro interno ao atualizar dívida' });
  }
}
async function update(req, res) {
  const id_divida = req.params.id_divida;
  const { id_locatario, id_livro, data_reserva, estado, valor, data_divida} = req.body;

  if (!id_locatario || !id_livro) {
  return res.status(400).json({ error: 'Campos obrigatórios: id_locatario e id_livro' });
}

  try {
    const updatedCount = await modelDivida.update(id_divida, id_locatario, id_livro, data_reserva, estado, valor, data_divida);

    if (updatedCount === 1) {
      return res.status(200).json({ message: 'divida atualizada com sucesso' });
    } else {
      return res.status(404).json({ error: 'divida não encontrada' });
    }
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao atualizar divida' });
  }
}

async function remove(req, res) {
    const id_divida = req.params.id_divida; 
    try {
        await modelDivida.remove(id_divida);
        res.status(204).send(); 
    } catch (error) {
        console.error('Erro ao remover divida:', error.message);
        res.status(500).json({ error: 'Erro ao remover divida' });
    }
}



module.exports = { create, list, get, atualizarEstado, update, remove  };
