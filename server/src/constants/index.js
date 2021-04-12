const {config} = require('dotenv')
config()



// export all the variables I get from dot env
module.exports = {
    MONGO_URL: process.env.MONGO_URL,
    PORT: process.env.PORT,
    SERVER_URL: process.env.SERVER_URL,
    CLIENT_URL: process.env.CLIENT_URL,
    SECRET: process.env.SECRET
}
