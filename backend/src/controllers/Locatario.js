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
        return res.status(400).json({ error: 'Obrigatório: Nome do locatario, campo nome_locatario' });
    }

    try {
        // email existe
        const emailExiste = await modelLocatario.existsEmail(email);
        if (emailExiste) {
            return res.status(400).json({ error: 'Este e-mail já está cadastrado.' });
        }

        await modelLocatario.create(ra, tipo, nome_locatario, curso, data_nascimento, email, telefone, login, senha);

        // envia e-mail de confirmação, ta errado
        const assunto = "Confirmação de Cadastro na Livraria";
        const mensagem = `Seu cadastro foi realizado com sucesso!\n\nSeja bem-vindo(a) à nossa livraria.`;

        enviarEmail(email, assunto, mensagem);

        return res.status(201).json({ message: 'Cadastro realizado com sucesso!' });
    } catch (error) {
        console.error('erro na função create do locatario', error.message);
        return res.status(500).json({ error: 'Erro ao criar locatario' });
    }
}

async function list(req, res) {
    try {
        let locatarios = await modelLocatario.list();
        return res.status(200).json({ locatarios });
    } catch (error) {
        console.error('Erro no list do locatario:', error.message);
        return res.status(500).json({ error: 'Erro no list do locatario' });
    }
}

async function get(req, res) {
    const id_locatario = req.params.id_locatario;
    try {
        const locatario = await modelLocatario.get(id_locatario);
        if (!locatario) {
            return res.status(404).json({ error: 'locatario não encontrado' });
        }
        return res.status(200).json({ locatario });
    } catch (error) {
        console.error('Erro no get do locatario:', error.message);
        return res.status(500).json({ error: 'Erro ao buscar locatario' });
    }
}

async function update(req, res) {
    const id_locatario = req.params.id_locatario;
    const { ra, tipo, nome_locatario, curso, data_nascimento, email, telefone, login, senha } = req.body;

    if (!nome_locatario || nome_locatario.trim() === '') {
        return res.status(400).json({ error: 'Nome do locatario obrigatório' });
    }

    try {
        const updatedCount = await modelLocatario.update(id_locatario, ra, tipo, nome_locatario, curso, data_nascimento, email, telefone, login, senha);

        if (updatedCount === 1) {
            return res.status(200).json({ message: 'locatario atualizado com sucesso' });
        } else {
            return res.status(404).json({ error: 'locatario não encontrado' });
        }
    } catch (error) {
        console.error('Erro no update do locatario:', error.message);
        return res.status(500).json({ error: 'Erro ao atualizar locatario' });
    }
}

async function remove(req, res) {
    const id_locatario = req.params.id_locatario;
    try {
        await modelLocatario.remove(id_locatario);
        return res.status(204).send();
    } catch (error) {
        console.error('Erro no remove do locatario:', error.message);
        return res.status(500).json({ error: 'Erro ao remover locatario' });
    }
}

module.exports = { create, list, get, update, remove };
