'use strict'

const mongoose = require('mongoose')

// User Collection
let UserSchema = mongoose.Schema({
  login: String,
  username: String,
  email: String,
  password: String,
})

let User = mongoose.model('users', UserSchema)

module.exports = User