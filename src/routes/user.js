const router = require('express').Router()

const con = require('../database/db');



//importando la libreria de encriptacion
require('dotenv').config()
const jwt = require('jsonwebtoken');
const eJwt = require('express-jwt');

const hashearPassword = require('../helpers/hashear');
const { application } = require('express');


router.post('/user', async (req, res) => {
    const name = req.body.name;
    const user = req.body.user;
    const password = req.body.password



    if (!password.lenght < 8) {
        res.json({ error: 'Password muy corto' })
    }

    const hashed_pass = await hashearPassword(password)

    con.query(`INSERT into users (name, user, password) values(?,?,?)`, [name, user, hashed_pass], (err, result) => {
        console.log(err)
    })



});


router.post('/Login', async (req, res) => {

    const user = req.body.user;
    const password = req.body.password
    



    con.query(`SELECT * FROM users WHERE user = ? AND password = ?`,
        [user, password],
        (err, result) => {

            if (err) {
                res.send({ err: err })

            }


            if (result) {
                console.log(result);
            } else {
                res.send({ message: "No existe el usuario con esa combinacion Usuario/Contraseña" })
            }
        }

    )



});




module.exports = router;

