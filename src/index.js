const express = require('express')

const user_router = require('./routes/user')
const home_router = require('./routes/home')
const app = express()
require('dotenv').config()
const bodyparser = require('body-parser');
const jsonParser = bodyparser.json()

const cors = require('cors')

require('dotenv').config()


app.use(jsonParser)
app.use(cors())
app.use(user_router)
app.use(home_router)


app.listen(3001, (req, res)=>{
    console.log('SERVER RUNNING')
})



