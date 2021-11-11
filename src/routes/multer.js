const express = require('express')
const router = express.Router()
const multer = require('multer')
const con = require('../database/db')

const storage = multer.diskStorage({
    destination: (req, file, cd) => {
        cd(null, "public")
    },
    filename: (req, file, cb) => {
        const extension = file.mimetype.split("/")[1] //  image/jpg, image/gif = ['image', 'jpg']
        const name = file.originalname.split(".")[0]
        cb(null, `images/${name}_${Date.now()}.${extension}` ) 

    }
})
const fileManager = multer({storage: storage})

router.post('/fotos',  fileManager.single('avatar'), async (req, res) =>{

    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const telefono = req.body.apellido;
    const imagen = req.file.filename;
    const comentarios = req.body.comentarios;
    
    const [result, cfieldds]  = await  con(`INSERT into consultas (nombre, apellido, telefono, imagen, comentarios) values(?,?,?,?,?)`, [nombre, apellido, telefono,imagen,comentarios], [req.file.filename])

    res.send('recibido')
})  
