const pg = require("pg");

const pgPool = new pg.Pool({
    host: '127.0.0.1',
    database: 'livraria', //é case sensitive
    user: 'postgres', //muda dps plmDs
    password: 'postgres',
    port: 5432,
    ssl: false
});
module.exports = { pgPool };