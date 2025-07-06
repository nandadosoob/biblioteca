const dbConfig = require('../dbConfig');
const pgPool = dbConfig.pgPool;

//MUDAR OS ATRIBUTOS PRA LOCATARIO

// Função responsável por criar todos os locatários
async function create(id_locatario, id_livro, data_reserva, estado, valor, data_divida){
    const query = "INSERT INTO divida (id_locatario, id_livro, data_reserva, estado, valor, data_divida) VALUES ($1, $2, $3, $4, $5, $6)"
    let values = [id_locatario, id_livro, data_reserva, estado, valor, data_divida];
    try{
        await pgPool.query(query, values);
        return;
    }catch(error){
        console.log('Erro no create no model da divida', error.message);
        throw error;
    }
}

// Função responsável por listar dividas
async function list(){
    const query = "SELECT d.id_divida, d.data_reserva, d.data_divida, d.estado, d.valor, l.nome_locatario FROM divida d JOIN locatario l ON l.id_locatario = d.id_locatario";
    try {
        let divida = await pgPool.query(query);
        return divida.rows;
    } catch(error) {
        console.error('Erro no list do divida:', error.message); 
        throw error;
    }
}

// Função responsável por listar dividas
async function get(id_divida){
    const query = "SELECT * FROM divida WHERE id_divida = $1";
    try {
        let resultado = await pgPool.query(query, [id_divida]);
        return resultado.rows[0]; // Retorna um único autor
    } catch(error) {
        console.error('Erro no get do divida:', error.message); 
        throw error;
    }
}

// Função responsável por atualizar uma divida
async function update(id_divida, id_locatario, id_livro, data_reserva, estado, valor, data_divida) {
    const query = "UPDATE divida SET id_locatario = $2, id_livro = $3, data_reserva = $4, estado = $5, valor = $6, data_divida = $7 WHERE id_divida = $1";
    try {
        const result = await pgPool.query(query, [id_divida, id_locatario, id_livro, data_reserva, estado, valor, data_divida]);
        return result.rowCount; 
    } catch (error) {
        console.error('Erro no update do divida:', error.message);
        throw error;
    }

}


// Função responsável por deletar todos os locatários
async function remove(id_divida) {
    const query = "DELETE FROM divida WHERE id_divida = $1";
    try {
        await pgPool.query(query, [id_divida]);
    } catch (error) {
        console.error('Erro no remove do divida:', error.message);
        throw error;
    }
}


module.exports = {create:create, list:list, get:get, update:update, remove:remove};
