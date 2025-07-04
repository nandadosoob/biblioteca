const dbConfig = require('../dbConfig');
const pgPool = dbConfig.pgPool;

async function create(nome_curso) {
  const query = "INSERT INTO cursos (nome_curso) VALUES ($1)";
  const values = [nome_curso];
  try {
    await pgPool.query(query, values);
    return;
  } catch (error) {
    console.error('Erro no create do curso:', error.message);
    throw error;
  }
}

async function list() {
  const query = "SELECT * FROM cursos ORDER BY id_curso";
  try {
    const result = await pgPool.query(query);
    return result.rows;
  } catch (error) {
    console.error('Erro no list do curso:', error.message);
    throw error;
  }
}

async function get(id_curso) {
  const query = "SELECT * FROM cursos WHERE id_curso = $1";
  try {
    const result = await pgPool.query(query, [id_curso]);
    return result.rows[0];
  } catch (error) {
    console.error('Erro no get do curso:', error.message);
    throw error;
  }
}

async function update(id_curso, nome_curso) {
  const query = "UPDATE cursos SET nome_curso = $1 WHERE id_curso = $2";
  try {
    const result = await pgPool.query(query, [nome_curso, id_curso]);
    return result.rowCount;
  } catch (error) {
    console.error('Erro no update do curso:', error.message);
    throw error;
  }
}

async function remove(id_curso) {
  const query = "DELETE FROM cursos WHERE id_curso = $1";
  try {
    await pgPool.query(query, [id_curso]);
  } catch (error) {
    console.error('Erro no remove do curso:', error.message);
    throw error;
  }
}

module.exports = { create, list, get, update, remove };
