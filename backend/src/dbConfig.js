const pg = require("pg");

const pgPool = new pg.Pool({
    host: '127.0.0.1',
    database: 'livraria', //é case sensitive
    user: 'postgres', //muda dps plmDs

    password: '01062006',
//>>>>>>> c6da8ae6788c715be2d282e448f47ddcedc9cb81
    port: 5432,
    ssl: false
});
module.exports = { pgPool };