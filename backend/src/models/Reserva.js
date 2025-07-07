const dbConfig = require('../dbConfig');
const pgPool = dbConfig.pgPool;

// Cria uma nova reserva
async function create(id_livro, id_locatario, data_reserva, data_entrega = null, data_retorno = null) {
    const query = `
        INSERT INTO reserva (id_livro, id_locatario, data_reserva, data_entrega, data_retorno)
        VALUES ($1, $2, $3, $4, $5)
    `;
    const values = [id_livro, id_locatario, data_reserva, data_entrega, data_retorno];
    try {
        await pgPool.query(query, values);
    } catch (error) {
        console.log('Erro no create no model de reserva:', error.message);
        throw error;
    }
}


// Retorna todas as reservas
async function list() {
    const query = "SELECT * FROM reserva";
    try {
        const reserva = await pgPool.query(query);
        return reserva.rows;
    } catch (error) {
        console.error('Erro no list do reserva:', error.message); 
        throw error;
    }
}

// Retorna uma reserva específica
async function get(id_livro, id_locatario, data_reserva) {
    const query = "SELECT * FROM reserva WHERE id_livro = $1 AND id_locatario = $2 AND data_reserva = $3";
    try {
        const resultado = await pgPool.query(query, [id_livro, id_locatario, data_reserva]);
        return resultado.rows[0];
    } catch (error) {
        console.error('Erro no get do reserva:', error.message); 
        throw error;
    }
}

// Atualiza apenas a data de retorno (se necessário)
async function update(id_livro, id_locatario, data_reserva, data_retorno) {
    const query = "UPDATE reserva SET data_retorno = $4 WHERE id_livro = $1 AND id_locatario = $2 AND data_reserva = $3";
    try {
        const result = await pgPool.query(query, [id_livro, id_locatario, data_reserva, data_retorno]);
        return result.rowCount;
    } catch (error) {
        console.error('Erro no update do reserva:', error.message);
        throw error;
    }
}

// Atualiza a data_entrega (quando o usuário devolve o livro)
async function registrarEntrega(id_livro, id_locatario, data_reserva, data_entrega) {
    const query = "UPDATE reserva SET data_entrega = $4 WHERE id_livro = $1 AND id_locatario = $2 AND data_reserva = $3";
    try {
        const result = await pgPool.query(query, [id_livro, id_locatario, data_reserva, data_entrega]);
        return result.rowCount;
    } catch (error) {
        console.error('Erro ao registrar entrega:', error.message);
        throw error;
    }
}

// Deleta uma reserva
async function remove(id_livro, id_locatario, data_reserva) {
    const query = "DELETE FROM reserva WHERE id_livro = $1 AND id_locatario = $2 AND data_reserva = $3";
    try {
        await pgPool.query(query, [id_livro, id_locatario, data_reserva]);
    } catch (error) {
        console.error('Erro no remove do reserva:', error.message);
        throw error;
    }
}

// Conta quantas reservas ativas (sem entrega) um locatário tem
async function quantidadeReservasAtivasPorUsuario(id_locatario) {
    const query = "SELECT COUNT(*) FROM reserva WHERE id_locatario = $1 AND data_entrega IS NULL";
    try {
        const result = await pgPool.query(query, [id_locatario]);
        return parseInt(result.rows[0].count);
    } catch (error) {
        console.error('Erro ao contar reservas ativas:', error.message);
        throw error;
    }
}

// Conta quantas vezes um livro está reservado no momento
// async function quantidadeReservasAtivasPorLivro(id_livro) {
//     const query = "SELECT COUNT(*) FROM reserva WHERE id_livro = $1 AND data_entrega IS NULL";
//     try {
//         const result = await pgPool.query(query, [id_livro]);
//         return parseInt(result.rows[0].count);
//     } catch (error) {
//         console.error('Erro ao contar reservas ativas do livro:', error.message);
//         throw error;
//     }
// }

module.exports = {
    create,
    list,
    get,
    update,
    registrarEntrega,
    remove,
    quantidadeReservasAtivasPorUsuario,
    // quantidadeReservasAtivasPorLivro
};
