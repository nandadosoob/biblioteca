const dbConfig = require('../dbConfig');
const pgPool = dbConfig.pgPool;

//MUDAR OS ATRIBUTOS PRA LOCATARIO

// Função responsável por criar todos os locatários
async function create(ra, tipo, nome_locatario, curso, data_nascimento, email, telefone, login, senha){
    const query = "INSERT INTO locatario (ra, tipo, nome_locatario, curso, data_nascimento, email, telefone, login, senha) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)"
    let values = [ra, tipo, nome_locatario, curso, data_nascimento, email, telefone, login, senha];
    try{
        await pgPool.query(query, values);
        return;
    }catch(error){
        console.log('Erro no create no model do locatario', error.message);
        throw error;
    }
}

// Função responsável por listar todos os locatários
async function list(){
    const query = "SELECT id_locatario, nome_locatario FROM locatario";
    try {
        let locatario = await pgPool.query(query);
        return locatario.rows;
    } catch(error) {
        console.error('Erro no list do locatario:', error.message); 
        throw error;
    }
}

// Função responsável por listar todos os locatários
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

// Função responsável por atualizar todos os locatários
async function update(id_locatario, ra, tipo, nome_locatario, curso, data_nascimento, email, telefone, login, senha) {
    const query = "UPDATE locatario SET ra = $2, tipo = $3, nome_locatario = $4, curso = $5, data_nascimento = $6, email = $7, telefone = $8, login = $9, senha = $10 WHERE id_locatario = $1";
    try {
        const result = await pgPool.query(query, [id_locatario,ra, tipo, nome_locatario, curso, data_nascimento, email, telefone, login, senha]);
        return result.rowCount; 
    } catch (error) {
        console.error('Erro no update do locatario:', error.message);
        throw error;
    }

}


// Função responsável por deletar todos os locatários
async function remove(id_locatario) {
    const query = "DELETE FROM locatario WHERE id_locatario = $1";
    try {
        await pgPool.query(query, [id_locatario]);
    } catch (error) {
        console.error('Erro no remove do locatario:', error.message);
        throw error;
    }
}

async function getById(id_locatario) {
  const query = "SELECT * FROM locatario WHERE id_locatario = $1";
  try {
    const result = await pgPool.query(query, [id_locatario]);
    return result.rows[0];
  } catch (error) {
    console.error('Erro no getById do locatario:', error.message);
    throw error;
  }
}



module.exports = {create:create, list:list, get:get, update:update, remove:remove, getById};
