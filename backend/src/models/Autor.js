const dbConfig = require('../dbConfig');
const pgPool = dbConfig.pgPool;

async function create(nome_autor){
    const query = "INSERT INTO autores (nome_autor) VALUES ($1)"
    let values = [nome_autor];
    try{
        await pgPool.query(query, values);
        return;
    }catch(error){
        console.log('Erro no create no model do autor', error.message);
        throw error;
    }
}

async function list(){
    const query = "SELECT nome_autor FROM autores";
    try {
        let autores = await pgPool.query(query);
        return autores.rows;
    } catch(error) {
        console.error('Erro no list do autor:', error.message); 
        throw error;
    }
}

async function get(id_autor){
     const query = "SELECT * FROM autores WHERE id_autor = $1";
    try {
        let resultado = await pgPool.query(query, [id_autor]);
        return resultado.rows[0]; // Retorna um único autor
    } catch(error) {
        console.error('Erro no get do autor:', error.message); 
        throw error;
    }
}

async function update(id_autor, nome_autor){
    const query = "UPDATE autores SET nome_autor = $1 WHERE id_autor = $2";
    try {
        await pgPool.query(query, [nome_autor, id_autor]);
        return;
    } catch(error) {
        console.error('Erro no update do autor:', error.message); 
        throw error;
    }
}

async function remove(id_autor) {
    const query = "DELETE FROM autores WHERE id_autor = $1";
    try {
        await pgPool.query(query, [id_autor]);
    } catch (error) {
        console.error('Erro no remove do autor:', error.message);
        throw error;
    }
}


module.exports = {create:create, list:list, get:get, update:update, remove:remove};