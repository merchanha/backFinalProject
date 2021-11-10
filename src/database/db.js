

const mysql = require('mysql')

require('dotenv').config()





    const con = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        database: process.env.DB_DATABASE
    });

       




module.exports = con;  