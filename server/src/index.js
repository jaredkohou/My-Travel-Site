const express = require('express')
const cors = require('cors')

const app = express()


// init middlewares
app.use(express.json({limit: '5mb'})) //no huge files to server
app.use(cors())//communicate with server