const dbConfig = require('../dbConfig');
const pgPool = dbConfig.pgPool;

async function create(Nome_categoria) {
    const query = "INSERT INTO Categoria (Nome_categoria) VALUES ($1)";
    const values = [Nome_categoria];
    try {
        await pgPool.query(query, values);
        return;
    } catch (error) {
        console.error('Erro no create da categoria:', error.message);
        throw error;
    }
}

async function list() {
    const query = "SELECT id_categoria, Nome_categoria FROM Categoria ORDER BY id_categoria";
    try {
        const result = await pgPool.query(query);
        return result.rows;
    } catch (error) {
        console.error('Erro no list da categoria:', error.message);
        throw error;
    }
}

async function get(id_categoria) {
    const query = "SELECT * FROM Categoria WHERE id_categoria = $1";
    try {
        const result = await pgPool.query(query, [id_categoria]);
        return result.rows[0];
    } catch (error) {
        console.error('Erro no get da categoria:', error.message);
        throw error;
    }
}

async function update(id_categoria, Nome_categoria) {
    const query = "UPDATE Categoria SET Nome_categoria = $1 WHERE id_categoria = $2";
    const values = [Nome_categoria, id_categoria];
    try {
        const result = await pgPool.query(query, values);
        return result.rowCount;
    } catch (error) {
        console.error('Erro no update da categoria:', error.message);
        throw error;
    }
}

async function remove(id_categoria) {
    const query = "DELETE FROM Categoria WHERE id_categoria = $1";
    try {
        await pgPool.query(query, [id_categoria]);
    } catch (error) {
        console.error('Erro no remove da categoria:', error.message);
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
