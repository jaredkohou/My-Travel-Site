const {Schema, model} = require('monngoose')
const {hash, compare} = require('bcryptjs')
const {SECRET} = require('../constants')
const {randomBytes} = require('crypto')

// schema
const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
})