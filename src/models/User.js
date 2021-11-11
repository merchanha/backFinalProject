const db = require('../database/db')



const findUser = async (identificador, valor) => {
    const [result, fields] = await db(`SELECT * FROM users WHERE ${identificador} = ? ;`,[valor]);
    return [result, fields];
}



module.exports = {findUser}