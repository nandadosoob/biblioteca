// async function cadastrarReserva(params) {
    
// }

// async function quantidadeReservasAtiva(params) {
//     // SQL USANDO O COUNT, AQUI ELE RETORNA O TIPO OBJ RETORNAR QTD DE EMPRESTIMOS ATIVOS
//     // retornar valor
// }

// async function quantidadeReservaAtivasLivros(params) {
//     // passar o id do livro e quantas reservas tem ativa dele
//     // dos 5 de machado de assis quantos estão reservados?
// }

const dbConfig = require('../dbConfig');
const pgPool = dbConfig.pgPool;

//MUDAR OS ATRIBUTOS PRA LOCATARIO

// Função responsável por criar as reservas
async function create(id_livro, id_locatario, data_reserva, data_retorno){
    const query = "INSERT INTO reserva (id_livro, id_locatario, data_reserva, data_retorno) VALUES ($1, $2, $3, $4)"
    let values = [id_livro, id_locatario, data_reserva, data_retorno];
    try{
        await pgPool.query(query, values);
        return;
    }catch(error){
        console.log('Erro no create no model de reserva', error.message);
        throw error;
    }
}

// Função responsável por listar todas as reservas
async function list(){
    const query = "SELECT * FROM reserva";
    try {
        let reserva = await pgPool.query(query);
        return reserva.rows;
    } catch(error) {
        console.error('Erro no list do reserva:', error.message); 
        throw error;
    }
}

// Função responsável por listar reservas
async function get(id_livro, id_locatario, data_reserva){
    const query = "SELECT * FROM reserva WHERE id_livro = $1 AND id_locatario = $2 AND Data_reserva = $3";
    try {
        let resultado = await pgPool.query(query, [id_livro, id_locatario, data_reserva]);
        return resultado.rows[0]; // Retorna um único autor
    } catch(error) {
        console.error('Erro no get do divida:', error.message); 
        throw error;
    }
}

// Função responsável por atualizar uma reserva
async function update(id_livro, id_locatario, data_reserva, data_retorno) {
    const query = "UPDATE reserva SET data_retorno = $4 WHERE id_livro = $1 AND id_locatario = $2 AND Data_reserva = $3";
    try {
        const result = await pgPool.query(query, [id_livro, id_locatario, data_reserva, data_retorno]);
        return result.rowCount; 
    } catch (error) {
        console.error('Erro no update do divida:', error.message);
        throw error;
    }

}


// Função responsável por deletar todos os locatários
async function remove(id_livro, id_locatario, data_reserva) {
    const query = "DELETE FROM reserva WHERE id_livro = $1 AND id_locatario = $2 AND Data_reserva = $3";
    try {
        await pgPool.query(query, [id_livro, id_locatario, data_reserva]);
    } catch (error) {
        console.error('Erro no remove do divida:', error.message);
        throw error;
    }
}


module.exports = {create:create, list:list, get:get, update:update, remove:remove};
