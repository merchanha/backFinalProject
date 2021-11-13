const con = require('../db')

const query = `CREATE table if not exists consultas(
  
    nombre varchar(150), 
    apellido varchar(150),
    telefono varchar(50),
    imagen varchar(250),
    comentarios text(250)



)`;

const result = con(query, [])

if (result !=null){
    console.log(result[0])
}
    
    
    