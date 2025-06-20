const dbConfig = require('../dbConfig');
const pgPool = dbConfig.pgPool;

//MUDAR OS ATRIBUTOS PRA LOCATARIO

// Função responsável por listar todos os locatários
async function create(nome_locatario){
    const query = "INSERT INTO locatario (nome_locatario) VALUES ($1)"
    let values = [nome_locatario];
    try{
        await pgPool.query(query, values);
        return;
    }catch(error){
        console.log('Erro no create no model do locatario', error.message);
        throw error;
    }
}

async function list(){
    const query = "SELECT nome_locatario FROM locatario";
    try {
        let locatario = await pgPool.query(query);
        return locatario.rows;
    } catch(error) {
        console.error('Erro no list do locatario:', error.message); 
        throw error;
    }
}

async function get(id_locatario){
     const query = "SELECT * FROM locatario WHERE id_locatario = $1";
    try {
        let resultado = await pgPool.query(query, [id_locatario]);
        return resultado.rows[0]; // Retorna um único autor
    } catch(error) {
        console.error('Erro no get do locatario:', error.message); 
        throw error;
    }
}

async function update(id_locatario, nome_locatario) {
  const query = "UPDATE locatario SET nome_locatario = $1 WHERE id_locatario = $2";
  try {
    const result = await pgPool.query(query, [nome_locatario, id_locatario]);
    return result.rowCount; 
  } catch (error) {
    console.error('Erro no update do locatario:', error.message);
    throw error;
  }
}


async function remove(id_locatario) {
    const query = "DELETE FROM locatario WHERE id_locatario = $1";
    try {
        await pgPool.query(query, [id_locatario]);
    } catch (error) {
        console.error('Erro no remove do locatario:', error.message);
        throw error;
    }
}


module.exports = {create:create, list:list, get:get, update:update, remove:remove};
