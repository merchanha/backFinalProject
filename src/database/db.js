const mysql = require('mysql');

require('dotenv').config()




const con = async (query, bindings = []) => {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        database: process.env.DB_NAME
    });

    const [rows , fields] = await connection.execute(query, bindings)

    connection.destroy()  

    return [rows, fields]     
}



module.exports = con;  