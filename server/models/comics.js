'use strict'

const mongoose = require('mongoose')

let ComicsSchema = mongoose.Schema({
    id: String,
    categoryId: String,
    tag: String,
    year: String,
    size: String,
    sheets: String,
    image: String,
    price: String,
    publish: String,
    name: String,
    description: String
})

let Comics = mongoose.model('comics', ComicsSchema)

module.exports = Comics