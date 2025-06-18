// db/sql.js
const sql = require('mssql');

const config = {
    user: 'sa',
    password: '123456',
    server: 'PHUC\\MSSQLSERVER2022',
    database: 'psport',
    options: {
        encrypt: false,
        trustServerCertificate: true,
    },
};

const pool = new sql.ConnectionPool(config);
const poolConnect = pool.connect();

module.exports = {
    sql,
    pool,
    poolConnect,
};
