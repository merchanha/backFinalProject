const router = require('express').Router()
const con = require('../database/db');
//importando la libreria de encriptacion
const bcrypt = require('bcrypt');//importando la libreria de encriptacion
require('dotenv').config()
const jwt = require('jsonwebtoken');
const eJwt = require('express-jwt');
const {findUser} = require('../models/User')

const hashearPassword = require('../helpers/hashear');
const { application } = require('express');


router.post('/user', async (req, res) => {
    const name = req.body.name;
    const user = req.body.user;
    const password = req.body.password



    if (!password.lenght > 8) {
        res.json({error: 'Password muy corto'})
    }
    const hashed_pass =  await hashearPassword(password)    
    const [result, cfieldds]  = await  con(`INSERT into users (name, user,password) values(?,?,?)`, [name, user, hashed_pass])



    res.json(result)           
});



router.post('/Login', async (req, res) => {

    const user = req.body.user;
    const password = req.body.password
    

    const [result, fields] = await findUser('user', user)
    
    user_password = result[0].password

    const match =  await bcrypt.compare(password, user_password)

    if (match) {

        const token = jwt.sign({data:result[0]}, process.env.SECRET_KEY )

        res.json({token, authorized:true})
    }else{
        res.json({authorized:false, error: "Invalid password or email"})
    }    
})    



module.exports = router;

