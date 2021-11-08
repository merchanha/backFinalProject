const router = require('express').Router()


const connection = require('../database/db');

const bcrypt = require('bcrypt');

//importando la libreria de encriptacion
require('dotenv').config()
const jwt = require('jsonwebtoken');
const eJwt = require('express-jwt');

const hashearPassword = require('../helpers/hashear');
const { application } = require('express');


router.post('/user' ,  async (req, res) => {
    let name  = req.body.username;
    let email = req.body.email;
    let password = req.body.password

    if (!password.lenght > 8) {
        res.json({error: 'Password muy corto'})
    }

    const hashed_pass =  await hashearPassword(password)    

    const [result, cfieldds]  = await  connection(`INSERT into users (name, email, password) values(?,?,?)`, [name, email, hashed_pass])
    

    if (error){

        console.log(error)
       
    }
    res.json(result)
           
});

module.exports = router;