// const modelLocatario = require('../models/Locatario');


// async function create(req, res) {
//     const {ra, tipo, nome_locatario, curso, data_nascimento, email, telefone, login, senha} = req.body;

//     if (!nome_locatario || nome_locatario.trim() === '') {
//         res.status(400).json({ error: 'Obrigatorio: Nome do locatario, campo nome_locatario' });
//         return;
//     }

//     try {
//         await modelLocatario.create(ra, tipo, nome_locatario, curso, data_nascimento, email, telefone, login, senha);
//         res.status(201).json({ message: 'ok' });
//     } catch (error) {
//         console.error('erro na função create do locatario', error.message);
//         res.status(500).json({ error: 'Erro ao criar locatario' });
//     }
// }

// async function list(req, res){
//     try{
//         let locatarios = await modelLocatario.list();
//         res.status(200).json({locatarios:locatarios});
//         return;
//     } catch( error ){
//         res.status(500).json({error: 'Erro no list do locatario'});
//         return;
//     }
// };

// async function get(req, res) {
//     const id_locatario = req.params.id_locatario;
//     try {
//         const locatario = await modelLocatario.get(id_locatario);
//         if (!locatario) {
//             res.status(404).json({ error: 'locatario não encontrado' });
//             return;
//         }
//         res.status(200).json({ locatario });
//     } catch (error) {
//         res.status(500).json({ error: 'Erro ao buscar locatario' });
//     }
// }

// async function update(req, res) {
//   const id_locatario = req.params.id_locatario;
//   const { ra, tipo, nome_locatario, curso, data_nascimento, email, telefone, login, senha } = req.body;

//   if (!nome_locatario || nome_locatario.trim() === '') {
//     return res.status(400).json({ error: 'Nome do locatario obrigatório' });
//   }

//   try {
//     const updatedCount = await modelLocatario.update(id_locatario,ra, tipo, nome_locatario, curso, data_nascimento, email, telefone, login, senha);

//     if (updatedCount === 1) {
//       return res.status(200).json({ message: 'locatario atualizado com sucesso' });
//     } else {
//       return res.status(404).json({ error: 'locatario não encontrado' });
//     }
//   } catch (error) {
//     return res.status(500).json({ error: 'Erro ao atualizar locatario' });
//   }
// }

// async function remove(req, res) {
//     const id_locatario = req.params.id_locatario; 
//     try {
//         await modelLocatario.remove(id_locatario);
//         res.status(204).send(); 
//     } catch (error) {
//         console.error('Erro ao remover locatario:', error.message);
//         res.status(500).json({ error: 'Erro ao remover locatario' });
//     }
// }


// module.exports = { create, list, get, update, remove };

const modelLocatario = require('../models/Locatario');
const enviarEmail = require('../utils/email');

async function create(req, res) {
  const { ra, tipo, nome_locatario, curso, data_nascimento, email, telefone, login, senha } = req.body;

  if (!nome_locatario || nome_locatario.trim() === '') {
    return res.status(400).json({ error: 'Obrigatório: Nome do locatário, campo nome_locatario' });
  }

  try {
    const emailExiste = await modelLocatario.existsEmail(email);
    if (emailExiste) {
      return res.status(400).json({ error: 'Este e-mail já está cadastrado.' });
    }

    await modelLocatario.create(ra, tipo, nome_locatario, curso, data_nascimento, email, telefone, login, senha);

    const assunto = "Confirmação de Cadastro na Livraria";
    const mensagem = `Olá ${nome_locatario},\n\nSeu cadastro foi realizado com sucesso!\n\nSeja bem-vindo(a) à nossa livraria.`;

    await enviarEmail(email, assunto, mensagem);

    return res.status(201).json({ message: 'Cadastro realizado com sucesso!' });
  } catch (error) {
    console.error('Erro na função create do locatário:', error.message);
    return res.status(500).json({ error: 'Erro ao criar locatário' });
  }
}

async function list(req, res) {
  try {
    const locatarios = await modelLocatario.list();
    return res.status(200).json({ locatarios });
  } catch (error) {
    console.error('Erro no list do locatário:', error.message);
    return res.status(500).json({ error: 'Erro ao listar locatários' });
  }
}

async function get(req, res) {
  const id_locatario = req.params.id_locatario;
  try {
    const locatario = await modelLocatario.get(id_locatario);
    if (!locatario) {
      return res.status(404).json({ error: 'Locatário não encontrado' });
    }
    return res.status(200).json({ locatario });
  } catch (error) {
    console.error('Erro no get do locatário:', error.message);
    return res.status(500).json({ error: 'Erro ao buscar locatário' });
  }
}

async function update(req, res) {
  const id_locatario = req.params.id_locatario;
  const { ra, tipo, nome_locatario, curso, data_nascimento, email, telefone, login, senha } = req.body;

  if (!nome_locatario || nome_locatario.trim() === '') {
    return res.status(400).json({ error: 'Nome do locatário obrigatório' });
  }

  try {
    const updatedCount = await modelLocatario.update(
      id_locatario,
      ra,
      tipo,
      nome_locatario,
      curso,
      data_nascimento,
      email,
      telefone,
      login,
      senha
    );

    if (updatedCount === 1) {
      return res.status(200).json({ message: 'Locatário atualizado com sucesso' });
    } else {
      return res.status(404).json({ error: 'Locatário não encontrado' });
    }
  } catch (error) {
    console.error('Erro no update do locatário:', error.message);
    return res.status(500).json({ error: 'Erro ao atualizar locatário' });
  }
}

async function remove(req, res) {
  const id_locatario = req.params.id_locatario;
  try {
    await modelLocatario.remove(id_locatario);
    return res.status(204).send();
  } catch (error) {
    console.error('Erro no remove do locatário:', error.message);
    return res.status(500).json({ error: 'Erro ao remover locatário' });
  }
}

// Se getById e existsEmail forem usados em outro lugar, e estiverem no model, importe do model normalmente.
// Se não, crie essas funções no model e exporte lá.

module.exports = {
  create,
  list,
  get,
  update,
  remove,
  // Aqui só exporte getById e existsEmail se realmente as funções estiverem implementadas no controller, 
  // ou então retire do export:
  // getById,
  // existsEmail
};
