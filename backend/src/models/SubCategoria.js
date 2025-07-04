const dbConfig = require('../dbConfig');
const pgPool = dbConfig.pgPool;

// Cria subcategoria (sem ainda associar a uma categoria)
async function create(nome_subcategoria) {
    const query = "INSERT INTO Subcategoria (Nome_subcategoria) VALUES ($1) RETURNING id_subcategoria";
    const values = [nome_subcategoria];
    try {
        const result = await pgPool.query(query, values);
        return result.rows[0]; // retorna id da nova subcategoria
    } catch (error) {
        console.error('Erro ao criar subcategoria:', error.message);
        throw error;
    }
}

// Associa subcategoria a uma categoria
async function associarCategoria(id_categoria, id_subcategoria) {
    const query = `
        INSERT INTO Categoria_tem_subcategoria (id_categoria, id_subcategoria)
        VALUES ($1, $2)
    `;
    try {
        await pgPool.query(query, [id_categoria, id_subcategoria]);
    } catch (error) {
        console.error('Erro ao associar subcategoria à categoria:', error.message);
        throw error;
    }
}

// Lista todas as subcategorias com as respectivas categorias associadas
async function list() {
    const query = `
        SELECT 
            s.id_subcategoria, 
            s.Nome_subcategoria, 
            c.id_categoria, 
            c.Nome_categoria
        FROM 
            Subcategoria s
        JOIN 
            Categoria_tem_subcategoria cs ON s.id_subcategoria = cs.id_subcategoria
        JOIN 
            Categoria c ON cs.id_categoria = c.id_categoria
        ORDER BY 
            s.id_subcategoria
    `;
    try {
        const result = await pgPool.query(query);
        return result.rows;
    } catch (error) {
        console.error('Erro ao listar subcategorias com categorias:', error.message);
        throw error;
    }
}



// Atualiza o nome da subcategoria
async function update(id_subcategoria, nome_subcategoria) {
    const query = `
        UPDATE Subcategoria 
        SET Nome_subcategoria = $1 
        WHERE id_subcategoria = $2
    `;
    try {
        const result = await pgPool.query(query, [nome_subcategoria, id_subcategoria]);
        return result.rowCount;
    } catch (error) {
        console.error('Erro ao atualizar subcategoria:', error.message);
        throw error;
    }
}

// Remove uma subcategoria (e, com ON DELETE CASCADE, as ligações também são apagadas)
async function remove(id_subcategoria) {
    const query = "DELETE FROM Subcategoria WHERE id_subcategoria = $1";
    try {
        await pgPool.query(query, [id_subcategoria]);
    } catch (error) {
        console.error('Erro ao remover subcategoria:', error.message);
        throw error;
    }
}

module.exports = {create:create, list:list, update:update, remove:remove};
// tirei o get por enquanto