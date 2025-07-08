const dbConfig = require('../dbConfig');
const pgPool = dbConfig.pgPool;

async function create(titulo, qtd_disponivel, edicao, isbn) {
    const query = `
        INSERT INTO Livro (titulo, qtd_disponivel, edicao, isbn)
        VALUES ($1, $2, $3, $4)
    `;
    const values = [titulo, qtd_disponivel, edicao, isbn];
    try {
        await pgPool.query(query, values);
    } catch (error) {
        console.error('Erro no create de Livro:', error.message);
        throw error;
    }
}

// async function create(titulo, qtd_disponivel, edicao, isbn, id_editora, ids_autores, ids_subcategorias) {
//   const client = await pgPool.connect();
//    try {
//         await client.query('BEGIN');

//         // Inserir o livro
//         const insertLivro = await client.query(`
//             INSERT INTO Livro (titulo, qtd_disponivel, edicao, isbn)
//             VALUES ($1, $2, $3, $4)
//             RETURNING id_livro
//         `, [titulo, qtd_disponivel, edicao, isbn]);

//         const id_livro = insertLivro.rows[0].id_livro;

//         // Relacionar com editora
//         await client.query(`
//             INSERT INTO Editora_publica_livro (id_livro, id_editora)
//             VALUES ($1, $2)
//         `, [id_livro, id_editora]);

//         // Relacionar com autores
//         for (let id_autor of ids_autores) {
//             await client.query(`
//                 INSERT INTO Autor_escreve_livro (id_livro, id_autor)
//                 VALUES ($1, $2)
//             `, [id_livro, id_autor]);
//         }

//         // Relacionar com subcategorias
//         for (let id_subcategoria of ids_subcategorias) {
//             await client.query(`
//                 INSERT INTO Livro_tem_Categoria (id_livro, id_subcategoria)
//                 VALUES ($1, $2)
//             `, [id_livro, id_subcategoria]);
//         }

//         await client.query('COMMIT');
//         return id_livro;

//     } catch (err) {
//         await client.query('ROLLBACK');
//         console.error('Erro ao criar livro completo:', err.message);
//         throw err;
//     } finally {
//         client.release();
//     }
    // const query = `
    //     INSERT INTO Livro (titulo, qtd_disponivel, edicao, isbn)
    //     VALUES ($1, $2, $3, $4)
    // `;
    // const values = [titulo, qtd_disponivel, edicao, isbn];
    // try {
    //     await pgPool.query(query, values);
    // } catch (error) {
    //     console.error('Erro no create de Livro:', error.message);
    //     throw error; 
    // }
// }

async function list() {
    const query = "SELECT id_livro, Titulo FROM Livro ORDER BY id_livro";
    try {
        const result = await pgPool.query(query);
        return result.rows;
    } catch (error) {
        console.error('Erro no list de Livro:', error.message);
        throw error;
    }
}

async function get(id_livro) {
    const query = "SELECT * FROM Livro WHERE id_livro = $1";
    try {
        const result = await pgPool.query(query, [id_livro]);
        return result.rows[0];
    } catch (error) {
        console.error('Erro no get de Livro:', error.message);
        throw error;
    }
}

async function update(id_livro, titulo, qtd_disponivel, edicao, isbn) {
    const query = `
        UPDATE Livro
        SET titulo = $1,
            qtd_disponivel = $2,
            edicao = $3,
            isbn = $4
        WHERE id_livro = $5
    `;
    const values = [titulo, qtd_disponivel, edicao, isbn, id_livro];
    try {
        const result = await pgPool.query(query, values);
        return result.rowCount;
    } catch (error) {
        console.error('Erro no update da Livro:', error.message);
        throw error;
    }
}


async function remove(id_livro) {
  const query = `
    UPDATE Livro
    SET ativo = FALSE
    WHERE id_livro = $1
  `;
  try {
    const result = await pgPool.query(query, [id_livro]);
    return result.rowCount;
  } catch (error) {
    console.error('Erro ao marcar livro como indisponível:', error.message);
    throw error;
  }
}

async function reativar(id_livro) {
  const query = `
    UPDATE Livro
    SET ativo = TRUE
    WHERE id_livro = $1
  `;
  try {
    const result = await pgPool.query(query, [id_livro]);
    return result.rowCount;
  } catch (error) {
    console.error('Erro ao reativar livro:', error.message);
    throw error;
  }
}


async function getById(id_livro) {
  const query = "SELECT * FROM livro WHERE id_livro = $1";
  try {
    const result = await pgPool.query(query, [id_livro]);
    return result.rows[0];
  } catch (error) {
    console.error('Erro ao buscar livro:', error.message);
    throw error;
  }
}



module.exports = {
    create,
    list,
    get,
    update,
    remove,
    reativar,
    getById
};
