const express = require('express')
const router = express.Router()

const con = require('../database/db')

router.post('/Form', async (req, res) =>{

    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const telefono = req.body.telefono;
    const imagen = req.file;
    const comentarios = req.body.comentarios;

    const [result, cfieldds]  = await  con(`INSERT into consultas (nombre, apellido, telefono, comentarios) values(?,?,?,?)`, [nombre, apellido, telefono, comentarios])

    res.send(result)


    
})  


module.exports = router;