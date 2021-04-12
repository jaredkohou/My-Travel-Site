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
    password: {
        type: String,
        required: true,
    },
    verified: {
        type: Boolean,
        default: false,
    },
    verificationCode: {
        type: String,
        required: false,
    },
    resetPasswordToken: {
        type: String,
        required: false,
    },
    resetPasswordExpiresIn: {
        type: Date,
        required: false,
    },
    images: {
        type: Array,
        default: {
            url: 'hhtps://via.placeholder.com/468x400?text=User%20image',
            public_id: Date.now(),
        }
    },
    
    about: {
        type: String
    },
    banned: {
        type: Boolean,
        default: false
    }, 
    role: {
        type: String,
        default: 'subcriber'
    }
}, {timestamps: true})

UserSchema.pre('save', async function (next){
    let user = this
    // if password field is not change return
    if (!user.isModified('password')){
        return next()
    }
    // if password was changed
    user.password = await hash(user.password, 10)
})


const User = model('User', UserSchema)
module.exports = User