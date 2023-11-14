const mysql = require('mysql');

//Set database connection credentials
const config = {

    host: 'localhost',
    user: 'Meraz',
    password: 'AlaskaR123',
    database: 'api',
};

//Create a Mysql pool
const pool = mysql.createPool(config);

//Export the pool
module.exports = pool;