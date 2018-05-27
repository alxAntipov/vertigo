'use strict'

// Imports
const express = require('express')
const config = require('./../config')
let categories = require('../models/categories')

// Common Routes
let categoriesRoutes = express.Router()

categoriesRoutes.get('/categories', (request, response) => {

  categories.find({}).exec(function (error, documents) {
    response.json(documents)
  })
})



// Export
module.exports = categoriesRoutes