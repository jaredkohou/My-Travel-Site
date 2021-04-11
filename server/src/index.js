const express = require('express')
const cors = require('cors')

const app = express()


// init middlewares
app.use(express.json({limit: '5mb'})) //no huge files to server
app.use(cors())//communicate with server

const PORT = 8000


//app start, function that'll run my app
const appStart = () => {
    try {
        app.listen(PORT, () => {
            console.log(`my app is running at https://localhost:${PORT}`)
        })

    }catch(error){
        console.log(`Error: ${error.message}`)
    }
}

