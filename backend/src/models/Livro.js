const dbConfig = require('../dbConfig');
const pgPool = dbConfig.pgPool;


async function create(titulo) {
    const query = "INSERT INTO Livro (titulo) VALUES ($1)";
    const values = [titulo];
    try {
        await pgPool.query(query, values);
        return;
    } catch (error) {
        console.error('Erro no create de Livro:', error.message);
        throw error;
    }
}

async function list() {
    const query = "SELECT id_livro, titulo FROM Livro ORDER BY id_livro";
    try {
        const result = await pgPool.query(query);
        return result.rows;
    } catch (error) {
        console.error('Erro no list de Livro:', error.message);
        throw error;
    }
}

async function get(id_livro) {
    const query = "SELECT * FROM Livro WHERE id_livro = $1";
    try {
        const result = await pgPool.query(query, [id_livro]);
        return result.rows[0];
    } catch (error) {
        console.error('Erro no get de Livro:', error.message);
        throw error;
    }
}

async function update(id_livro, titulo) {
    const query = "UPDATE Livro SET titulo = $1 WHERE id_livro = $2";
    const values = [titulo, id_livro];
    try {
        const result = await pgPool.query(query, values);
        return result.rowCount;
    } catch (error) {
        console.error('Erro no update da Livro:', error.message);
        throw error;
    }
}

async function remove(id_livro) {
    const query = "DELETE FROM Livro WHERE id_livro = $1";
    try {
        await pgPool.query(query, [id_livro]);
    } catch (error) {
        console.error('Erro no remove da Livro:', error.message);
        throw error;
    }
}

module.exports = {
    create,
    list,
    get,
    update,
    remove
};
