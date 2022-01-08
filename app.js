const express = require('express')
const morgan = require('morgan')

// config
require('dotenv').config()
const app = express()
const port = process.env.PORT || 8080

// router
const mailRouter = require('./routes/routes')

// log request
app.use(morgan('tiny'))

// parse request
app.use(express.urlencoded({ extended:true }))
app.use(express.json())

// api
app.use('/', mailRouter)

app.listen(port, (req, res) => {
    console.info(`http://127.0.0.1/${port}`);
})