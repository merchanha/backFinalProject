const express = require('express')

const user_router = require('./routes/user')
const app = express()
require('dotenv').config()
const bodyparser = require('body-parser'); 

const cors = require('cors')

require('dotenv').config()


app.use(cors())
app.use(user_router)
app.use(express.json())

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false}))





app.listen(3001, (req, res)=>{
    console.log('SERVER RUNNING')
})




