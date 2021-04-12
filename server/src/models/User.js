const {Schema, model} = require('monngoose')
const {hash, compare} = require('bcryptjs')
const {SECRET} = require('../constants')