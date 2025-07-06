const dbConfig = require('../dbConfig');
const pgPool = dbConfig.pgPool;

async function create(nome_editora) {
  const query = "INSERT INTO editora (nome_editora) VALUES ($1)";
  try {
    await pgPool.query(query, [nome_editora]);
  } catch (error) {
    console.error('Erro no create da editora:', error.message);
    throw error;
  }
}

async function list() {
  const query = "SELECT * FROM editora ORDER BY id_editora";
  try {
    const result = await pgPool.query(query);
    return result.rows;
  } catch (error) {
    console.error('Erro no list da editora:', error.message);
    throw error;
  }
}

async function get(id_editora) {
  const query = "SELECT * FROM editora WHERE id_editora = $1";
  try {
    const result = await pgPool.query(query, [id_editora]);
    return result.rows[0];
  } catch (error) {
    console.error('Erro no get da editora:', error.message);
    throw error;
  }
}

async function update(id_editora, nome_editora) {
  const query = "UPDATE editora SET nome_editora = $1 WHERE id_editora = $2";
  try {
    const result = await pgPool.query(query, [nome_editora, id_editora]);
    return result.rowCount;
  } catch (error) {
    console.error('Erro no update da editora:', error.message);
    throw error;
  }
}

async function remove(id_editora) {
  const query = "DELETE FROM editora WHERE id_editora = $1";
  try {
    await pgPool.query(query, [id_editora]);
  } catch (error) {
    console.error('Erro no remove da editora:', error.message);
    throw error;
  }
}

module.exports = { create, list, get, update, remove };
