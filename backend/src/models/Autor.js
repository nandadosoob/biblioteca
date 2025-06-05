const dbConfig = require('../dbConfig');
const pgPool = dbConfig.pgPool;

async function create(nome_autor){
    const query = "INSERT INTO AUTORES(nome_autor) VALUES ($1)"
    let values = [nome_autor];
    try{
        await pgPool.query(query, values);
        return;
    }catch(error){
        console.log('Erro no create do autor');
        throw error;
    }
}

async function list(){
    const query = "SELECT nome_autor FROM AUTORES";
    try{
        let autores = await pgPool.query(query);
        return autores.rows;
    }catch(error){
        console.log('Erro no list do autor');
        throw error;
    }
}

module.exports = {create:create, list:list};