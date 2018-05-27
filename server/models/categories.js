'use strict'

const mongoose = require('mongoose')

let CategoriesSchema = mongoose.Schema({
  id: String,
  name: String,
})

let Categories = mongoose.model('categories', CategoriesSchema)

module.exports = Categories